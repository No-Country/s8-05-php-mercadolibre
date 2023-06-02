<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    private $client;
    private $clientId;
    private $secret;

    public function __construct()
    {
        $this->client = new Client([
            // 'base_uri' => 'https://api-m.paypal.com'
            'base_uri' => 'https://api-m.sandbox.paypal.com'
        ]);

        $this->clientId = 'AZW69n2rOXAD_5m2TB_tFf5Vp2WXdmJ4LFQGgiFYYreeWRYSBF1zHwOYEQXu9rnVBwa85S9McUpriEJi';
        $this->secret = 'EKRlb-AchJNlKj9ugZkS2eN17LsNFdB-1kFEG-C8Le_V_96m_GSmDQ3wz4o2eT4mjj0vQ9WNXP1u9eTA';
    }

    private function getAccessToken()
    {
        $response = $this->client->request(
            'POST',
            '/v1/oauth2/token',
            [
                'headers' => [
                    'Accept' => 'application/json',
                    'Content-Type' => 'application/x-www-form-urlencoded',
                ],
                'body' => 'grant_type=client_credentials',
                'auth' => [
                    $this->clientId, $this->secret, 'basic'
                ]
            ]
        );

        $data = json_decode($response->getBody(), true);
        return $data['access_token'];
    }

    public function process($orderId)
    {   
        $user = auth()->user();

        $accessToken = $this->getAccessToken();

        $requestUrl = "/v2/checkout/orders/$orderId/capture";

        $response = $this->client->request('POST', $requestUrl, [
            'headers' => [
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
                'Authorization' => "Bearer $accessToken"
            ]
        ]);

        $data = json_decode($response->getBody(), true);
        
        if ($data['status'] === 'APPROVED') {
            // Ubicar los productos en el carrito del usuario
            $cartItem = Cart::where('user_id', $user->id);

            // Obtener el paymentId y el monto pagado, de $data
            $payPalPaymentId = $data['purchase_units'][0]['payments']['captures'][0]['id'];
            $amount = $data['purchase_units'][0]['payments']['captures'][0]['amount']['value'];
        
            // Registrar un pago exitoso en la BD
            $payment = $this->registerSuccessfulPayment($cartItem, $amount, $payPalPaymentId);
        
            // Dar una respuesta de error si el pago no se pudo registrar
            if (!$payment) {
                return $this->responseFailure();
            }
        
            // Dar una respuesta de éxito si todo salió bien
            return [
                'success' => true,
                'url' => $solution->getResultsLink(),
                'payment_id' => $payment->id,
                'amount' => $amount
            ];
        }   

        
        
        // Dar una respuesta de error si el status no es COMPLETED
        return $this->responseFailure();
        dd($data);
        // ...
    }

    private function registerSuccessfulPayment($cartItem, $amount, $payPalPaymentId)
    {
        Order::create([
            ''
        ]);

    }
}

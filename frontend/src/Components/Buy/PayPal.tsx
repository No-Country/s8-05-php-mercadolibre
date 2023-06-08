import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default function PayPal() {
  return (
    <PayPalScriptProvider options={{ 'client-id': 'test' }}>
      <PayPalButtons
        style={{
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        }}
        createOrder={(data: any, actions: any) => {
          return actions.order.create({
            application_context: {
              shipping_preference: 'NO_SHIPPING',
            },
            // payer: {
            //     email_address: '',
            //     name: {
            //         given_name: '',
            //         surname: ''
            //     },
            //     address: {
            //         country_code: ""
            //     }
            // },
            purchase_units: [
              {
                amount: {
                  value: 400,
                },
              },
            ],
          });
        }}
        onApprove={(data: any, actions: any) => {
          return fetch('/api/paypal/process/' + data.orderID)
            .then((res) => res.json())
            .then(function (response) {
              if (!response.success) {
                const failureMessage = 'Sorry, your transaction could not be processed.';
                alert(failureMessage);
                return;
              }
              location.href = '/';
            });
        }}
      />
    </PayPalScriptProvider>
  );
}

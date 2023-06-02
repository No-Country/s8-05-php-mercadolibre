<?php

namespace App\Http\Controllers;

use App\Models\State;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Address\StateCollection;

class StateController extends Controller
{
    public function index()
    {
        try {
            $states = State::select('id', 'name')
                ->with(['cities'])
                ->get();

            return new StateCollection($states);
        } catch (\Exception $e) {
            return $this->response->catch($e->getMessage());
        }
    }
}

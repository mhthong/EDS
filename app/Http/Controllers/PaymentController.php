<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payment;
use Illuminate\Support\Facades\Auth;


class PaymentController extends Controller
{
/*     public function updatePaymentStatus(Request $request, Payment $payment)
    {


        $check = $this->CheckAuth();

        if ($check == true) {
        
        $isChecked = $request->input('isChecked');

        // Update the corresponding checkbox based on its name
        switch ($request->input('checkboxName')) {
            case '1stcheck':
                $payment->update(['1stcheck' => $isChecked]);
                break;

            case '2ndcheck':
                $payment->update(['2ndcheck' => $isChecked]);
                break;

            // Add more cases if needed for other checkboxes

            default:
                // Handle default case if necessary
                break;
        }
    }

        // You can also log the activity here if needed

        return response()->json(['message' => 'Payment status updated successfully']);
    } */


    public function updatePaymentStatus(Request $request)
        {
                // Retrieve the payment by ID or any other method based on your requirement
                $payment = Payment::find($request->input('paymentId'));


                if (!$payment) {
                    return response()->json(['message' => 'Payment not found'], 404);
                }

                // Update the corresponding checkbox based on its name
                switch ($request->input('checkboxName')) {
                    case '1stcheck':
                        $payment->update(['1stcheck' => $request->input('isChecked')]);
                        break;

                    case '2ndcheck':
                        $payment->update(['2ndcheck' => $request->input('isChecked')]);
                        break;

                    // Add more cases if needed for other checkboxes

                    default:
                        // Handle default case if necessary
                        break;
                }

                return response()->json(['message' => $payment]);

        }

    public function CheckAuth()
    {
        $userData = Auth::user();

        if ($userData instanceof \App\Models\Admin) {
            // Lấy thông tin người dùng hiện tại

            // So sánh kiểu dữ liệu chính xác và kiểm tra quyền manage_supers
            if ($userData->manage_supers == 1  || $userData->manage_supers == 0  || $userData->manage_supers == 5 ) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

}

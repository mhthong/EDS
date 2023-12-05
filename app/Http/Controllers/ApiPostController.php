<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Showroom;
use App\Models\GroupService;
use App\Models\ServiceShowroom;
use App\Models\Service;
use App\Models\ArtistLevel;
use App\Models\ShowroomSchedule;
use App\Models\Artists;
use App\Models\Booking;
use App\Models\Employee;
use App\Models\Get;
use App\Models\Admin;
use App\Models\WorkingHour;
use App\Models\Kpi;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;



class ApiPostController extends Controller
{
    //

    public function saveDataActiveDate(Request $request)
    {


        // Validate request data if needed
        $request->validate([
            'showroomId' => 'required|exists:showrooms,id',
            'activeStatus' => 'required|in:0,1,none',
            'inputData' => 'required|date_format:Y-m-d',
        ]);


        $check = $this->CheckAuth();


        if ($check == true) {
            // Kiểm tra xem có dữ liệu nào tương ứng với showroomId và inputData không
            $workingHour = WorkingHour::where('showroom_schedule_id', $request->input('showroomId'))
                ->where('date', $request->input('inputData'))
                ->first();

            // Nếu có, cập nhật activeStatus
            if ($workingHour) {
                $workingHour->active = ($request->input('activeStatus') == '1');
                $workingHour->save();

                return response()->json(['message' => 'Data updated successfully']);
            }

            // Nếu không có, tạo mới dữ liệu
            WorkingHour::create([
                'showroom_schedule_id' => $request->input('showroomId'),
                'date' => $request->input('inputData'),
                'active' => ($request->input('activeStatus') == '1'),
            ]);

            return response()->json(['message' => 'Data created successfully']);
        } else {
            return redirect()->back()->with("failed", "You do not have access !");
        }
    }


    public function saveDataKPI(Request $request)
    {

        $request->validate([
            'date' => 'required|date_format:Y-m-d',
            'number_of_kpi' => 'required|numeric',
            'kpi_showroom' => 'required|numeric',
            'kpi_employee' => 'required|numeric',
        ]);


        $check = $this->CheckAuthLeader();


        if ($check == true) {
            // Kiểm tra xem có dữ liệu nào tương ứng với showroomId và inputData khôn
            $kpi = Kpi::updateOrCreate(
                [
                    'date' => $request->input('date'),
                    'kpi_showroom' => $request->input('kpi_showroom'),
                    'kpi_employee' => $request->input('kpi_employee'),
                ],
                [
                    'number_of_kpi' => $request->input('number_of_kpi'),
                ]
            );

            return response()->json(['message' => 'Data created successfully']);
        } else {
            return redirect()->back()->with("failed", "You do not have access !");
        }
    }


    public function updateDataKPI(Request $request)
    {
        $request->validate([
            'id' => 'required|numeric',
            'date' => 'required|date_format:Y-m-d',
            'number_of_kpi' => 'required|numeric',
            'kpi_showroom' => 'required|numeric',
            'kpi_employee' => 'required|numeric',
        ]);

        $check = $this->CheckAuthLeader();

        if ($check) {

            if (Kpi::where([
                'date' => $request->input('date'),
                'kpi_showroom' => $request->input('kpi_showroom'),
                'kpi_employee' => $request->input('kpi_employee'),
            ])->exists()) {
                $affectedRows = Kpi::where([
                    'id' => $request->input('id'),

                ])->update([
                    'date' => $request->input('date'),
                    'kpi_showroom' => $request->input('kpi_showroom'),
                    'kpi_employee' => $request->input('kpi_employee'),
                    'number_of_kpi' => $request->input('number_of_kpi'),
                ]);

                return response()->json(['message' => "Data is exists"]);
            } else {

                $affectedRows = Kpi::where([
                    'id' => $request->input('id'),

                ])->update([
                    'date' => $request->input('date'),
                    'kpi_showroom' => $request->input('kpi_showroom'),
                    'kpi_employee' => $request->input('kpi_employee'),
                    'number_of_kpi' => $request->input('number_of_kpi'),
                ]);

                return response()->json(['message' => "Data updated for $affectedRows records"]);
            }
        } else {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }


    public function CheckAuth()
    {
        $userData = Auth::user();

        if ($userData instanceof \App\Models\Admin) {
            // Lấy thông tin người dùng hiện tại

            // So sánh kiểu dữ liệu chính xác và kiểm tra quyền manage_supers
            if ($userData->manage_supers == 1  || $userData->manage_supers == 0 || $userData->manage_supers == 4) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }


    public function CheckAuthLeader()
    {
        $userData = Auth::user();

        if ($userData instanceof \App\Models\Admin) {
            // Lấy thông tin người dùng hiện tại

            // So sánh kiểu dữ liệu chính xác và kiểm tra quyền manage_supers
            if ($userData->manage_supers == 1  || $userData->manage_supers == 0 || $userData->manage_supers == 3) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    // app/Http/Controllers/KpiController.php
    public function deleteKpi($id)
    {
        $check = $this->CheckAuthLeader();

        if (!$check) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        try {
            $kpi = Kpi::find($id);

            if (!$kpi) {
                return response()->json(['message' => 'KPI not found'], 404);
            }

            $kpi->delete();

            return response()->json(['message' => 'Data deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting data', 'error' => $e->getMessage()], 500);
        }
    }
}

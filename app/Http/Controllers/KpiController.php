<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Kpi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;

class KpiController extends Controller
{

    public function view()
    {
        $kpis = Kpi::all();
        return view('admin.Kpis.index' , compact('kpis'));

    }


    public function index()
    {
        $kpis = Kpi::all();
        return response()->json($kpis, 200);
    }

    public function getKpis()
    {
        $kpis = Kpi::all();
        return response()->json(['kpis' => $kpis]);
    }


    public function store(Request $request)
    {

        $request->validate([
            'date' => 'required',
            'number_of_kpi' => 'required|integer',
            'kpi_showroom' => 'required|integer',
            'kpi_employee' => 'required|integer',
        ]);

        $kpi = Kpi::create($request->all());

        return response()->json($kpi, 201);
    }

    public function update(Request $request, Kpi $kpi)
    {
        $request->validate([
            'date' => 'required|date',
            'number_of_kpi' => 'required|integer',
            'kpi_showroom' => 'required|integer',
            'kpi_employee' => 'required|integer',
        ]);

        $kpi->update($request->all());

        return response()->json($kpi, 200);
    }

    public function destroy(Kpi $kpi)
    {
        $kpi->delete();

        return response()->json(null, 204);
    }

    public function getKpisData($showroom, $employee, $date)
    {

        if($showroom === "null"){
            $showroomQuery = 0;
        }else{
            $showroomQuery = $showroom;
        }

        if($employee === "null"){
            $employeeQuery = 0;
        }else{
            $employeeQuery = $employee;
        }


        if ($date !== "null") {
            $startDate = Carbon::parse($date)->startOfMonth()->format('Y-m-d');
            $endDate = Carbon::parse($date)->endOfMonth()->format('Y-m-d');
           
        } else {
            // Default to the current month
            $startDate = now()->startOfMonth()->format('Y-m-d');
            $endDate = now()->endOfMonth()->format('Y-m-d');    
        }
        
        $kpis = Kpi::where('kpi_showroom', $showroomQuery)
        ->where('kpi_employee', $employeeQuery)
        ->whereBetween('date', [$startDate, $endDate])->first();

        return response()->json($kpis, 200);
    }
    

    
}

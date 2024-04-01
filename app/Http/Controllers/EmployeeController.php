<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Employee;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employee = Employee::all();
        $stt = 1 ;
        return view('admin.employee.index', compact('employee' , 'stt'));
    }

    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

   
        $request->validate([
            'name' => 'required|string|max:255',
            'fullname' => 'required|string|max:255',
            'password' => 'required|string|min:6',
            'phone' => 'required|string|max:20',
            'email' => 'required|string|email|max:255|unique:artists',
            'avatar' => 'nullable|string',
            'description' => 'nullable|string',
            'status' => 'required|in:published,pending,draft',
        ]);
    
        // Prepare the data for creating the artist
        $data = $request->all();
        $data['password'] = Hash::make($request->input('password'));
        
        // Assuming avatar contains the full URL, extract the path from the URL
        $avatarPath = parse_url($request->input('avatar'), PHP_URL_PATH);
        $data['avatar'] = $avatarPath;
    
        // Create the artist using the validated and processed data
        $createdEmployee = Employee::create($data);
    
        if ($createdEmployee) {
            // If the artist was successfully created, redirect with success message

            if ($request->input('submit') == 'apply') {

                return redirect()->route('employee.index')->with('success', 'Employee created successfully!');
            } else {
                return redirect()->back()->with('success', 'Employee created successfully!');
            }
        } else {
            // If the artist creation failed, redirect back with an error message
            return redirect()->back()->with('failed', 'Failed to create employee.');
        }
    }


    public function create()
    {
      // Fetch all artist levels from the database

      return view('admin.employee.create');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $artists
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
      
        return view('admin.employee.show', compact('employee'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employee  $artists
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
      // Fetch all artist levels from the database

      return view('admin.employee.edit', compact('employee'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\employee  $artists
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {

        if($employee->name == "N/A")
        {
            return redirect()->route('employee.index')->with('failed', 'Failed to update employee.');
        }
        else{

            $request->validate([
                'name' => 'required|string|max:255',
                'fullname' => 'required|string|max:255',
                'phone' => 'required|string|max:20',
                'email' => 'required|string|email|max:255|unique:artists,email,' . $employee->id,
                'avatar' => 'nullable|string',
                'description' => 'nullable|string',
                'status' => 'required|in:published,pending,draft',
            ]);
    
            $data = $request->all();
                     
            if( $employee->password == $request->input('password'))
            {
                $data['password'] = $request->input('password');

            }
            else{

                $data['password'] = Hash::make($request->input('password'));
            }
            
            // Assuming avatar contains the full URL, extract the path from the URL
            $avatarPath = parse_url($request->input('avatar'), PHP_URL_PATH);
            $data['avatar'] = $avatarPath;
    
          
            // Create the artist using the validated and processed data
            $updateEmployee =   $employee->update($data);
    
        
            if ($updateEmployee) {
                // If the artist was successfully update, redirect with success message

                if ($request->input('submit') == 'apply') {

                    return redirect()->route('employee.index')->with('success', 'Employee updated successfully!');
                } else {
                    return redirect()->back()->with('success', 'Employee updated successfully!');
                }
            } else {
                // If the artist creation failed, redirect back with an error message
                return redirect()->back()->with('failed', 'Failed to update employee.');
            }
        }


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Artists  $artists
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();

        return redirect()->route('employee.index')->with('success', 'Employee deleted successfully.');
    }
}

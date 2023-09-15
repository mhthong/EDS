<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Get;
use App\Models\Booking;


class GetController extends Controller
{

    // Display a list of all get
    public function index()
    {
        $gets = Get::all();

        return view('admin.get.index', compact('gets'));
    }

    // Show the form for creating a new service
    public function create()
    {
      
        return view('admin.get.create', compact('get'));
    }

    // Store a newly created service in the database
    public function store(Request $request)
    {

        $validatedData = $request->validate([
                    'Name' => 'required|string|max:255',
                    'Price' => 'required|numeric|min:0',
                    'Description' => 'nullable|string|max:1000',
                    'Sale_Price' => 'nullable|numeric|min:0',
                    'Time' => 'nullable|string|max:255',
                    'status'=> 'nullable|string|max:60',
                    'group_service_id' => 'required|exists:group_service,id', // Ensure the selected group_service_id exists in the group_service table
                    // Add more validation rules as needed
                ]);      

                try {
                    // Create a new service record using the validated data
                    $get = Get::create($validatedData);
                    
                    // Assign the group_service_id separately
                    $get->save();
        
                    // Redirect to the index page or wherever you wish after creating the service
                    return redirect()->route('get.index')->with('success', 'Service created successfully!');
                } catch (\Exception $e) {
                    // Handle the exception if any error occurs during the creation process
                    // You can log the error or display an error message to the user
                    return redirect()->route('get.create')->with('failed', 'Failed to create service. Please try again.');
                }
    }

    // Show the form for editing an existing service
    public function edit(Get $get)
    {
        // Fetch all group get for the dropdown
        if ($get) {
            $booking = $get->bookings; // Retrieve associated bookings

            return view('admin.get.edit', compact('get' , 'booking'));
        } else {
            // Get record not found
            return view('admin.get.edit', compact('get'));
        }
        
    }

    // Update the specified service in the database
    public function update(Request $request, Get $service)
    {
        $validatedData = $request->validate([
                    'Name' => 'required|string|max:255',
                    'Price' => 'required|numeric|min:0',
                    'Description' => 'nullable|string|max:1000',
                    'Sale_Price' => 'nullable|numeric|min:0',
                    'Time' => 'nullable|string|max:255',
                    'status'=> 'nullable|string|max:60',
                    'group_service_id' => 'required|exists:group_service,id', // Ensure the selected group_service_id exists in the group_service table
                    // Add more validation rules as needed
                ]);

        // Update the service record using the validated data

        try {
            // Update the service record using the validated data
            $service->update($validatedData);

            // Assign the group_service_id separately
            $groupServiceId = $request->input('group_service_id');
            $service->groupService()->associate($groupServiceId);
            $service->save();

            // Redirect to the index page or wherever you wish after updating the service
            return redirect()->route('get.index')->with('success', 'Service updated successfully!');
        } catch (\Exception $e) {
            // Handle the exception if any error occurs during the update process
            // You can log the error or display an error message to the user
            return redirect()->route('get.edit', ['service' => $service->id])->with('failed', 'Failed to update service. Please try again.');
        }
    }

    // Remove the specified service from the database
    public function destroy(Get $get)
    {
        try {
            // Delete the service record
            $get->delete();

            // Redirect to the index page or wherever you wish after deleting the service
            return redirect()->route('get.index')->with('success', 'Service deleted successfully!');
        } catch (\Exception $e) {
            // Handle the exception if any error occurs during the delete process
            // You can log the error or display an error message to the user
            return redirect()->route('get.index')->with('failed', 'Failed to delete service. Please try again.');
        }
    }


}

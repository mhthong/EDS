<?php
namespace App\Http\Controllers;

use App\Models\Showroom;
use Illuminate\Http\Request;

class ShowroomController extends Controller
{
    public function index()
    {
        $showrooms = Showroom::all();
        return view('admin.showrooms.index', compact('showrooms'));
    }

    public function create()
    {
        return view('admin.showrooms.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'Name' => 'required|string|max:255',
            'Address' => 'required|string|max:255',
            'Phone' => 'required|string|max:255',
            'Description' => 'required|string|max:255',
            'maps' =>  'nullable|string|max:255',
            'status'=> 'nullable|string|max:60',
        ]);


        try {
            // Create a new service record using the validated data
            $Showroom = Showroom::create($validatedData);
    
            $Showroom->save();

            // Redirect to the index page or wherever you wish after creating the service
            return redirect()->route('showrooms.index')->with('success', 'Showrooms created successfully!');
        } catch (\Exception $e) {
            // Handle the exception if any error occurs during the creation process
            // You can log the error or display an error message to the user
            return redirect()->route('showrooms.create')->with('failed', 'Failed to create showrooms. Please try again.');
        }
        

    
    }

    public function edit(Showroom $showroom)
    {
        return view('admin.showrooms.edit', compact('showroom'));
    }

    public function update(Request $request, Showroom $showroom)
    {
        $validatedData = $request->validate([
            'Name' => 'required|string|max:255',
            'Address' => 'required|string|max:255',
            'Phone' => 'required|string|max:255',
            'Description' => 'required|string|max:255',
            'maps' =>  'nullable|string|max:255',
            'status'=> 'nullable|string|max:60',
        ]);

        $showroom->update($validatedData);


        // Update the service record using the validated data

        try {
            // Update the service record using the validated data
            $showroom->update($validatedData);

            $showroom->save();

            // Redirect to the index page or wherever you wish after updating the service
            return redirect()->route('showrooms.index')->with('success', 'Showroom updated successfully!');
        } catch (\Exception $e) {
            // Handle the exception if any error occurs during the update process
            // You can log the error or display an error message to the user
            return redirect()->route('showrooms.edit', ['showroom' => $showroom->id])->with('failed', 'Failed to update showroom. Please try again.');
        }

    }

    public function destroy(Showroom $showroom)
    {
        $showroom->delete();

        return redirect()->route('showrooms.index')->with('success', 'Showroom deleted successfully!');
    }
}

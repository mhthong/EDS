<?php

namespace App\Http\Controllers;

use App\Models\GroupService;
use Illuminate\Http\Request;

class GroupServiceController extends Controller
{
    // ... (other CRUD methods)
    public function index()
    {
        $GroupService = GroupService::paginate(10);
        $stt = 1 ;
        return view('admin.group.index', compact('GroupService' , 'stt'));
    }



    // Show the form for creating a new resource.
    public function create()
    {
        return view('admin.group.create');
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {


        $request->validate([
            'name' => 'required|string|max:255',
            'Value' => 'required|string|max:255',
            'Description' => 'required|string|max:255',
            
        ]);


        GroupService::create([
            'Name' => $request->name,
            'Value' => $request->Value,
            'Description' => $request->Description,
            
            
        ]);

        return redirect()->route('groups.index')->with('success', 'Service Group created successfully.');
    }

    // Show the form for editing the specified resource.
    public function edit(GroupService $group)
    {
        return view('admin.group.edit', compact('group'));
    }

    // Update the specified resource in storage.
    public function update(Request $request, GroupService $group)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'Value' => 'required|string|max:255',
            'Description' => 'required|string|max:255',
            
        ]);


        $group->update([
            'Name' => $request->name,
            'Value' => $request->Value,
            'Description' => $request->Description,    
        ]);

        return redirect()->route('groups.index')->with('success', 'Service Group  updated successfully.');
    }


    public function destroy(GroupService $group)
    {

                // Use try-catch to catch any exceptions during deletion
            try {
                // Delete the Service Group  record
                $group->delete();

                // Return a success message
                return redirect()->route('groups.index')->with('success', 'Service Group  deleted successfully');
            } catch (\Exception $e) {
                // Return an error message in case of failure
                return redirect()->route('groups.index')->with('failed', 'Failed to delete Service Group ');
            }
    }
    // ... (other CRUD methods)
}

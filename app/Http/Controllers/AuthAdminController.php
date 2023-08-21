<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\PasswordConfirmation;


class AuthAdminController extends Controller
{
    // ... (other CRUD methods)
    public function index()
    {
        $admins = Admin::where('id', '!=', Auth::id())
            ->where('manage_supers', '!=', 0)
            ->where('super_user', '!=', 0)
            ->get();

        $stt = 1;
        return view('admin.auth-admin.index', compact('admins', 'stt'));
    }



    // Show the form for creating a new resource.
    public function create(PasswordConfirmation $request)
    {
        return view('admin.auth-admin.create');
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {

        // Validate the input
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:admins,email',
            'password' => 'required|min:6|confirmed',
            // Add more validation rules as needed
        ]);

        // Create a new admin
        $admin = new Admin;
        $admin->name = $request->input('name');
        $admin->email = $request->input('email');
        $admin->password = Hash::make($request->input('password'));
        $admin->manage_supers = 1 ;
        $admin->super_user = 1 ;

        // Set other properties

        $admin->save();

        return redirect()->route('admins.index')->with('success', 'Admin created successfully.');

    }

    // Show the form for editing the specified resource.
    public function edit(Admin $auth_admin)
    {
        return view('admin.auth-admin.edit', compact('auth_admin'));
    }

    // Update the specified resource in storage.
    public function update(Request $request, Admin $auth_admin)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'level_price' => 'required|numeric',
        ]);


        $auth_admin->update([
            'Name' => $request->name,
            'Level_price' => $request->level_price,
        ]);

        return redirect()->route('auth-admin.index')->with('success', 'Artist Level updated successfully.');
    }


    public function destroy(Admin $auth_admin)
    {

        // Use try-catch to catch any exceptions during deletion
        try {
            // Delete the artist level record
            $auth_admin->delete();

            // Return a success message
            return redirect()->route('auth-admin.index')->with('success', 'Artist level deleted successfully');
        } catch (\Exception $e) {
            // Return an error message in case of failure
            return redirect()->route('auth-admin.index')->with('failed', 'Failed to delete artist level');
        }
    }
    // ... (other CRUD methods)
}
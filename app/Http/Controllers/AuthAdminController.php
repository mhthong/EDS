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

        $loggedInUser = Auth::user();

        if ($loggedInUser->manage_supers == 0 && $loggedInUser->super_user == 0) {
            // User does not have permission
            $admins = Admin::where('id', '!=', Auth::id())
            ->where('manage_supers', '!=', 0)
            ->where('super_user', '!=', 0)
            ->get();

        $stt = 1;

        return view('admin.auth-admin.index', compact('admins', 'stt'));
        }
        else {
            return view('admin.auth-admin.index', compact('none', 'stt'));
        }

    
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
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:admins,email',
            'status' => 'required|in:published,pending,draft',
            // Add more validation rules as needed
        ]);


        $data =  $request->all();

        $data['password'] = Hash::make($request->input('password'));
        $data['manage_supers'] = 1;
        $data['super_user'] = 1;

        // Create a new admin

        $createdAdmin = Admin::create($data);
        if ($createdAdmin) {
            // If the artist was successfully created, redirect with success message
            return redirect()->route('auth-admin.index')->with('success', 'User created successfully.');
        } else {
            // If the artist creation failed, redirect back with an error message
            return redirect()->back()->with('failed', 'Failed to create user.');
        }

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
            'name' => 'required',
            'email' => 'required|string|email|max:255|unique:admins,email,' . $auth_admin->id,
            'status' => 'required|in:published,pending,draft',
            // Add more validation rules as needed
        ]);

        $data = $request->all();


        if( $auth_admin->password == $request->input('password'))
        {
            $data['password'] = $request->input('password');

        }
        else{

            $data['password'] = Hash::make($request->input('password'));
        }

            // Validate the inpu
            $updateAuth_admin =   $auth_admin->update($data);

             
            if ($updateAuth_admin) {
                // If the artist was successfully update, redirect with success message
                return redirect()->route('auth-admin.index')->with('success', 'User update successfully.');
            } else {
                // If the artist creation failed, redirect back with an error message
                return redirect()->back()->with('failed', 'Failed to update user.');
            }
   
        

       
    }


    public function destroy(Admin $auth_admin)
    {

        // Use try-catch to catch any exceptions during deletion
        try {
            // Delete the artist level record
            $auth_admin->delete();

            // Return a success message
            return redirect()->route('auth-admin.index')->with('success', 'User deleted successfully');
        } catch (\Exception $e) {
            // Return an error message in case of failure
            return redirect()->route('auth-admin.index')->with('failed', 'Failed to delete user');
        }
    }
    // ... (other CRUD methods)
}
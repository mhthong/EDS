<?php

namespace App\Http\Controllers;

use App\Models\ArtistLevel;
use Illuminate\Http\Request;

class ArtistLevelController extends Controller
{
    // ... (other CRUD methods)
    public function index()
    {
        $ArtistLevel = ArtistLevel::paginate(10);
        $stt = 1 ;
        return view('admin.artist-levels.index', compact('ArtistLevel' , 'stt'));
    }



    // Show the form for creating a new resource.
    public function create()
    {
        return view('admin.artist-levels.create');
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {


        $request->validate([
            'name' => 'required|string|max:255',
            'level_price' => 'required|numeric',
        ]);


        ArtistLevel::create([
            'Name' => $request->name,
            'Level_price' => $request->level_price, 
        ]);

        return redirect()->route('artist-levels.index')->with('success', 'Artist Level created successfully.');
    }

    // Show the form for editing the specified resource.
    public function edit(ArtistLevel $artist_level)
    {
        return view('admin.artist-levels.edit', compact('artist_level'));
    }

    // Update the specified resource in storage.
    public function update(Request $request, ArtistLevel $artist_level)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'level_price' => 'required|numeric',
        ]);


        $artist_level->update([
            'Name' => $request->name,
            'Level_price' => $request->level_price, 
        ]);

        return redirect()->route('artist-levels.index')->with('success', 'Artist Level updated successfully.');
    }


    public function destroy(ArtistLevel $artist_level)
    {

                // Use try-catch to catch any exceptions during deletion
            try {
                // Delete the artist level record
                $artist_level->delete();

                // Return a success message
                return redirect()->route('artist-levels.index')->with('success', 'Artist level deleted successfully');
            } catch (\Exception $e) {
                // Return an error message in case of failure
                return redirect()->route('artist-levels.index')->with('failed', 'Failed to delete artist level');
            }
    }
    // ... (other CRUD methods)
}

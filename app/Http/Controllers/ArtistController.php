<?php

namespace App\Http\Controllers;

use App\Models\Artists;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\ArtistLevel;

class ArtistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $artists = Artists::where('name', '!=','N/A' )->get();
        $stt = 1 ;
        return view('admin.artists.index', compact('artists' , 'stt'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      // Fetch all artist levels from the database
      $artistLevels = ArtistLevel::all();

      return view('admin.artists.create', compact('artistLevels'));

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
            'artist_levelID' => 'required|exists:artists_levels,id',
        ]);
    
        // Prepare the data for creating the artist
        $data = $request->all();
        $data['password'] = Hash::make($request->input('password'));
        
        // Assuming avatar contains the full URL, extract the path from the URL
        $avatarPath = parse_url($request->input('avatar'), PHP_URL_PATH);
        $data['avatar'] = $avatarPath;
    
        // Create the artist using the validated and processed data
        $createdArtist = Artists::create($data);
    
        if ($createdArtist) {
            // If the artist was successfully created, redirect with success message
            return redirect()->route('artist.index')->with('success', 'Artist created successfully.');
        } else {
            // If the artist creation failed, redirect back with an error message
            return redirect()->back()->with('failed', 'Failed to create artist.');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Artists  $artists
     * @return \Illuminate\Http\Response
     */
    public function show(Artists $artist)
    {
        $artistLevels = ArtistLevel::where('name', '!=','N/A' )->get();
        return view('admin.artists.show', compact('artist', 'artistLevels'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Artists  $artists
     * @return \Illuminate\Http\Response
     */
    public function edit(Artists $artist)
    {
      // Fetch all artist levels from the database
      $artistLevels = ArtistLevel::where('name', '!=','N/A' )->get();

      return view('admin.artists.edit', compact('artist', 'artistLevels'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Artists  $artists
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Artists $artist)
    {

        if($artist->name == "N/A")
        {
            return redirect()->route('artist.index')->with('failed', 'Failed to update artist.');
        }
        else{

            $request->validate([
                'name' => 'required|string|max:255',
                'fullname' => 'required|string|max:255',
                'phone' => 'required|string|max:20',
                'email' => 'required|string|email|max:255|unique:artists,email,' . $artist->id,
                'avatar' => 'nullable|string',
                'description' => 'nullable|string',
                'status' => 'required|in:published,pending,draft',
                'artist_levelID' => 'required|exists:artists_levels,id',
            ]);
    
       
            $data = $request->all();
           
            if( $artist->password == $request->input('password'))
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
            $updateArtist =   $artist->update($data);
    
        
            if ($updateArtist) {
                // If the artist was successfully update, redirect with success message
                return redirect()->route('artist.index')->with('success', 'Artist update successfully.');
            } else {
                // If the artist creation failed, redirect back with an error message
                return redirect()->back()->with('failed', 'Failed to update artist.');
            }
        }


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Artists  $artists
     * @return \Illuminate\Http\Response
     */
    public function destroy(Artists $artist)
    {
        $artist->delete();

        return redirect()->route('artist.index')->with('success', 'Artist deleted successfully.');
    }
}

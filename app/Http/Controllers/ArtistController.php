<?php

namespace App\Http\Controllers;

use App\Models\Artists;
use App\Models\ArtistShowroom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\ArtistLevel;
use App\Models\Showroom;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;


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



    public function APIindex()
    {
        $artists = Artists::where('name', '!=','N/A' )->get();

        return response()->json($artists);
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
      $showrooms = Showroom::Where('status', 'published')->get();

      return view('admin.artists.create', compact('artistLevels', 'showrooms'));

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
            'artist_pay' => 'required|integer',
            'wage' => 'required|numeric|min:0',
        ]);
    
        // Prepare the data for creating the artist
        $data = $request->all();
        $data['password'] = Hash::make($request->input('password'));
        
        // Assuming avatar contains the full URL, extract the path from the URL
        $avatarPath = parse_url($request->input('avatar'), PHP_URL_PATH);
        $data['avatar'] = $avatarPath;
    
        // Create the artist using the validated and processed data
        $createdArtist = Artists::create($data);


        $groupshowroom = $request->input('groupshowroom', []);
        foreach ($groupshowroom as $showroomId) {
            // Create entry in ArtistShowroom pivot table
            ArtistShowroom::create([
                'artist_id' => $createdArtist->id,
                'showroom_id' => $showroomId,
            ]);
        }

        if($request->input('submit') == 'apply'){

            if ($createdArtist) {
                // If the artist was successfully update, redirect with success message
                return redirect()->route('artist.index')->with('success', 'Artist created successfully.');
            } else {
                // If the artist creation failed, redirect back with an error message
                return redirect()->back()->with('failed', 'Failed to created artist.');
            }

        } else {
            if ($createdArtist) {
                // If the artist was successfully update, redirect with success message
                return redirect()->back()->with('success', 'Artist created successfully.');
            } else { 
                // If the artist creation failed, redirect back with an error message
                return redirect()->back()->with('failed', 'Failed to created artist.');
            }
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

      $artistShowroom = ArtistShowroom::with('showroom')
      ->where('artist_id', $artist->id)->get();

      $showrooms = Showroom::Where('status', 'published')->get();
      $showroomIds = $artistShowroom->pluck('showroom_id')->toArray();


      return view('admin.artists.edit', compact('artist', 'artistLevels','showroomIds','showrooms'));
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
                'artist_pay' => 'required|integer',
                'wage' => 'required|numeric|min:0',     
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

            DB::beginTransaction();



            try {
                // Xóa tất cả các ArtistShowroom có artist_id tương ứng
                ArtistShowroom::where('artist_id', $artist->id)->delete();

                // Tạo lại các ArtistShowroom dựa trên vòng lặp
                $groupshowroom = $request->input('groupshowroom', []);
                foreach ($groupshowroom as $showroomId) {
                    // Tạo mới một ArtistShowroom
                    ArtistShowroom::create([
                        'artist_id' => $artist->id,
                        'showroom_id' => $showroomId,
                    ]);
                }

                // Commit transaction nếu mọi thứ thành công
                DB::commit();
            } catch (\Exception $e) {
                // Nếu có bất kỳ lỗi nào xảy ra, rollback transaction và xử lý lỗi
                DB::rollback();
                // Xử lý lỗi ở đây (ví dụ: logging, thông báo lỗi cho người dùng, v.v.)
                // Ví dụ: Log::error($e->getMessage());
            }
    
        
            
            if($request->input('submit') == 'apply'){

                if ($updateArtist) {
                    // If the artist was successfully update, redirect with success message
                    return redirect()->route('artist.index')->with('success', 'Artist update successfully.');
                } else {
                    // If the artist creation failed, redirect back with an error message
                    return redirect()->back()->with('failed', 'Failed to update artist.');
                }

            } else {
                if ($updateArtist) {
                    // If the artist was successfully update, redirect with success message
                    return redirect()->back()->with('success', 'Artist update successfully.');
                } else {
                    // If the artist creation failed, redirect back with an error message
                    return redirect()->back()->with('failed', 'Failed to update artist.');
                }
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
        try {
            $artist->delete();
            // Nếu xóa thành công, bạn có thể chuyển hướng và hiển thị thông báo thành công.
            return redirect()->route('artist.index')->with('success', 'Artist deleted successfully.');
        } catch (QueryException $e) {
            // Xử lý ngoại lệ và hiển thị thông báo lỗi.
            return redirect()->route('artist.index')->with('failed', 'Failed to delete artist.');
        }
    }
       
}

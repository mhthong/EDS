<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Source;
use App\Http\Controllers\ApiPostController;
class SourceController extends Controller
{
    //

    public function view()
    {
        return view('admin.Source.index');

    }


    public function index()
    {
        $Source = Source::all();
        return response()->json($Source, 200);
    }

        public function getSource()
    {
        $Source = Source::all();
        return response()->json(['Source' => $Source]);
    }


}

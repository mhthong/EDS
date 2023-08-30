<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\APIBookingController;
use App\Http\Controllers\BookingController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('find', 'SearchController@find');




Route::get('/showrooms', [APIBookingController::class, 'getShowrooms']);
Route::get('/group-services/{showroomId}', [APIBookingController::class, 'getGroupServices']);
Route::get('/services', [APIBookingController::class, 'getServices']);
Route::get('/artist-levels', [APIBookingController::class, 'ArtistLevel']);


Route::get('all-data', [BookingController::class, 'getAllData']);


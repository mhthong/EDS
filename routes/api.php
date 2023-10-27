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
Route::get('/showroomschedule/{showroomId}', [APIBookingController::class, 'ShowroomSchedule']);
Route::get('/services', [APIBookingController::class, 'getServices']);
Route::get('/artist-levels', [APIBookingController::class, 'ArtistLevel']);
Route::get('/artist', [APIBookingController::class, 'Artist']);
Route::get('/get', [APIBookingController::class, 'Get']);


Route::get('all-data', [APIBookingController::class, 'getAllData']);

Route::get('data/{start}/{end}', [APIBookingController::class, 'getData']);


Route::get('data-bookings/{id}', [APIBookingController::class, 'bookingsData']);

Route::get('data-bookings-artists/{id}', [APIBookingController::class, 'bookingsDataArtists']);

Route::get('data-bookings-employee/{id}', [APIBookingController::class, 'bookingsDataEmployee']);

Route::get('/bookings/showroom/{showroomId}', [APIBookingController::class, 'getBookShowroomData']);

Route::get('/employee', [APIBookingController::class, 'getemployeeData']);

Route::post('/bookings-store', [APIBookingController::class, 'store']);

Route::middleware(['userid'])->group(function () {
    Route::get('/bookingsDataEmployee/{id}', [APIBookingController::class, 'bookingsDataEmployee']);
    Route::get('/bookingsDataArtists/{id}', [APIBookingController::class, 'bookingsDataArtists']);
});


/* bookingsDataEmployee */


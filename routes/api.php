<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\APIBookingController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ApiPostController;
use App\Http\Controllers\KpiController;
use App\Http\Controllers\SourceController;
use App\Http\Controllers\PaymentController;



/*
|------------------------PaymentController--------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| HeApp\Http\Controllers\ApiPostControllerAPI routes for your application. These
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
Route::get('/workingHours/{showroomId}', [APIBookingController::class, 'workingHours']);
Route::get('/services', [APIBookingController::class, 'getServices']);
Route::get('/artist-levels', [APIBookingController::class, 'ArtistLevel']);
Route::get('/artist', [APIBookingController::class, 'Artist']);
Route::get('/get', [APIBookingController::class, 'Get']);


Route::get('all-data', [APIBookingController::class, 'getAllData']);
Route::get('getAllDataTable/{start}/{end}/{type}', [APIBookingController::class, 'getAllDataTable']);



Route::get('fullcalendar/{start}/{end}/{showroom}', [APIBookingController::class, 'getAllfullcalendar']);

Route::get('getDataSourceLocation/{start}/{end}/{showroom}', [APIBookingController::class, 'getDataSourceLocation']);
Route::get('getDataServiceLocation/{start}/{end}/{showroom}/{employee}', [APIBookingController::class, 'getDataServiceLocation']);
Route::get('getDataArtistLocation/{start}/{end}/{showroom}', [APIBookingController::class, 'getDataArtistLocation']);
Route::get('getDataEmployeeLocation/{start}/{end}/{showroom}', [APIBookingController::class, 'getDataEmployeeLocation']);


Route::get('date-active/{date}/{showroom}', [APIBookingController::class, 'DateActive']);

Route::get('getDataShowroom/{start}/{end}', [APIBookingController::class, 'getDataShowroom']);

Route::get('getDataSource/{start}/{end}', [APIBookingController::class, 'getDataSource']);


Route::get('getDataService/{start}/{end}', [APIBookingController::class, 'getDataService']);



Route::get('getDataArtist/{start}/{end}', [APIBookingController::class, 'getDataArtist']);


Route::get('getDataEmployee/{start}/{end}/', [APIBookingController::class, 'getDataEmployee']);



Route::get('data-bookings/{id}', [APIBookingController::class, 'bookingsData']);

Route::get('data-bookings-artists/{id}', [APIBookingController::class, 'bookingsDataArtists']);

Route::get('data-bookings-employee/{id}', [APIBookingController::class, 'bookingsDataEmployee']);

Route::get('/bookings/showroom/{showroomId}', [APIBookingController::class, 'getBookShowroomData']);

Route::get('/employee', [APIBookingController::class, 'getemployeeData']);

Route::post('/bookings-store', [APIBookingController::class, 'postData']);

Route::middleware(['userid'])->group(function () {
    Route::get('/bookingsDataEmployee/{id}', [APIBookingController::class, 'bookingsDataEmployee']);
    Route::get('/bookingsDataArtists/{id}', [APIBookingController::class, 'bookingsDataArtists']);
});

/* bookingsDataEmployee */


Route::get('getDataShowroomEmployee/{start}/{end}/{employee}/{title}', [APIBookingController::class, 'getDataShowroomEmployee']);

Route::get('Dashboard/{start}/{end}/{employee}/{title}', [APIBookingController::class, 'Dashboard']);


Route::post('/save-data', [ApiPostController::class, 'saveDataActiveDate']);


Route::post('/kpi-store', [ApiPostController::class, 'saveDataKPI']);

Route::put('/kpi-update', [ApiPostController::class, 'updateDataKPI']);


Route::delete('/kpis/{id}', [ApiPostController::class, 'deleteKpi']);

Route::delete('/deleteBooking/{id}', [ApiPostController::class, 'deleteBooking']);



Route::get('/kpis', [KpiController::class, 'getKpis']);

Route::get('/kpis-data/{showroom}/{employee}/{date}', [KpiController::class, 'getKpisData']);




Route::post('/source-store', [ApiPostController::class, 'saveDataSource']);

Route::put('/source-update', [ApiPostController::class, 'updateDataSource']);


Route::delete('/Source/{id}', [ApiPostController::class, 'deleteSource']);



Route::get('/Sources', [SourceController::class, 'getSource']);

Route::post('/update-payment-status', [PaymentController::class,'updatePaymentStatus']);

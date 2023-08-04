<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeCreateServiceBookingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_booking', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('service_id'); // Change the data type to unsigned big integer
            $table->unsignedBigInteger('booking_id');
            $table->unsignedBigInteger('artist_levelID');

            // Add other fields related to the service_booking table if needed
            
            // Define foreign keys
            $table->foreign('artist_levelID')->references('id')->on('artists_levels')->onDelete('cascade');
            $table->foreign('service_id')->references('id')->on('services')->onDelete('cascade');
            $table->foreign('booking_id')->references('id')->on('bookings')->onDelete('cascade');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_booking');
         //
    }
}

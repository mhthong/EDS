<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('ArtistID');
            $table->unsignedBigInteger('ShowroomID');
            $table->unsignedBigInteger('GetID');
            $table->string('time'); // Time column (e.g., '9:00', '9:30')
            $table->date('date'); // Date column
            $table->text('content');
            $table->timestamps();

            // Define foreign key constraints
            $table->foreign('ArtistID')->references('id')->on('artists');
            $table->foreign('ShowroomID')->references('id')->on('showrooms');
            $table->foreign('GetID')->references('id')->on('gets');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookings');
    }
}

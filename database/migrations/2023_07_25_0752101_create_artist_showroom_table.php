<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArtistShowroomTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artist_showroom', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('artist_id');
            $table->unsignedBigInteger('showroom_id');
            // Add other fields related to the artist_showroom table if needed
            
            // Define foreign keys
            $table->foreign('artist_id')->references('id')->on('artists')->onDelete('cascade');
            $table->foreign('showroom_id')->references('id')->on('showrooms')->onDelete('cascade');

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
        Schema::dropIfExists('artist_showroom');
    }
}

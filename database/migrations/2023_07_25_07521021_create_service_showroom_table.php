<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceShowroomTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_showroom', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('groupservice_id');
            $table->unsignedBigInteger('showroom_id');
            // Add other fields related to the service_showroom table if needed
            
            // Define foreign keys
            $table->foreign('groupservice_id')->references('id')->on('group_service')->onDelete('cascade');
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
        Schema::dropIfExists('service_showroom');
    }
}

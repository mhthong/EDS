<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShowroomSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('showroom_schedules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('showroom_id');
            $table->foreign('showroom_id')->references('id')->on('showrooms')->onDelete('cascade');
            $table->enum('day', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'])->onDelete('cascade');
            $table->boolean('active')->default(true);
            $table->unsignedTinyInteger('workingvalue')->default(4); // Default to 4 working hours per day
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
        Schema::dropIfExists('showroom_schedules');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prices', function (Blueprint $table) {
            $table->id();
            $table->decimal('Total_price', 10, 2);
            $table->decimal('Deposit_price', 10, 2);
            $table->decimal('Remaining_price', 10, 2);
            $table->decimal('Level_price', 10, 2);
            $table->unsignedBigInteger('Artist_levelID');

            // Define foreign key constraint
            $table->foreign('Artist_levelID')->references('id')->on('artists_levels');

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
        Schema::dropIfExists('prices');
    }
}

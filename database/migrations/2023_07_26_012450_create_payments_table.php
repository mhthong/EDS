<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('PricelD');
            $table->unsignedBigInteger('BookingID');
            $table->timestamp('date');
            $table->string('payment_type');
            $table->string('payment_deposit');
            $table->string('payment_type_remainding');
            $table->string('payment_remainding');
            // Define foreign key constraint
            $table->foreign('PricelD')->references('id')->on('prices');
            $table->foreign('BookingID')->references('id')->on('bookings');

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
        Schema::dropIfExists('payments');
    }
}

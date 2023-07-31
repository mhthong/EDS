<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gets', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
            $table->string('Name'); // Name column
            $table->string('Gmail'); // Gmail column
            $table->string('Address'); // Address column
            $table->string('Phone'); // Phone column
            
            $table->timestamps(); // Created_at and updated_at timestamps
  
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gets');
    }
}

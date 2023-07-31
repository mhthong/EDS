<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
            $table->string('Name'); // Name column
            $table->decimal('Price', 10, 2); // Price column (decimal with 10 digits and 2 decimal places)
            $table->string('Description'); // Description column
            $table->decimal('Sale_Price', 10, 2)->nullable(); // Sale Price column (nullable decimal with 10 digits and 2 decimal places)
            $table->string('Time'); // Group column
            $table->string('status',60); // Group column
            
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
        Schema::dropIfExists('services');
    }
}

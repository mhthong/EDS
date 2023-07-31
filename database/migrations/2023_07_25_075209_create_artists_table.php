<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArtistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artists', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
            $table->string('name');
            $table->string('fullname');
            $table->string('password');
            $table->string('phone');
            $table->string('email');
            $table->string('avatar');
            $table->string('status', 60)->default('published');
            $table->text('description')->nullable(); // Nullable field
            $table->unsignedBigInteger('artist_levelID'); // Foreign key field

            // Define foreign key constraint
            $table->foreign('artist_levelID')->references('id')->on('artists_levels');

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
        Schema::dropIfExists('artists');
    }
}

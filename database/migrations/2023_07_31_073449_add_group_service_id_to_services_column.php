<?php

// database/migrations/xxxx_xx_xx_add_group_service_id_to_services_column.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddGroupServiceIdToServicesColumn extends Migration
{
    public function up()
    {
        Schema::table('services', function (Blueprint $table) {
            $table->unsignedBigInteger('group_service_id');
            $table->foreign('group_service_id')->references('id')->on('group_service')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropForeign(['group_service_id']);
            $table->dropColumn('group_service_id');
        });
    }
}

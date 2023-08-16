<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects_detailed', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('project_id');
            $table->string('role_title');
            $table->longText('experience_description');
            $table->string('squad_structure')->nullable();
            $table->string('region')->nullable();
            $table->string('modality')->nullable();
            $table->json('tech_and_tools')->nullable();
            $table->longText('project_highlights')->nullable();
            $table->longText('other_teams_collab')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects_detailed');
    }
};

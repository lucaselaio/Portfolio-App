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
        Schema::create('spends', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('payment_cycle')->default(1);
            $table->foreignId('user_id')->constrained('users');
            $table->float('price');
            $table->foreignId('spend_category_id')->constrained('spend_categories');
            $table->dateTime('due_date')->nullable();
            $table->boolean('is_paid')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spends');
    }
};

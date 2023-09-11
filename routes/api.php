<?php

use App\Http\Controllers\SpendCategoryController;
use App\Http\Controllers\SpendController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('/spend/save', [SpendController::class, 'save'])->name('spend.save');

// Route::get('/get_categories', [SpendCategoryController::class, 'getAll'])->name('category.get');
// Route::post('/spend-category/save', [SpendCategoryController::class, 'store'])->name('category.store');
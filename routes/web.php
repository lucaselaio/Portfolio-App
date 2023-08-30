<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectDetailedController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


// Route::get('/', function () {
//     return view('home');
// });

//Login
Route::post('/authenticate', [LoginController::class, 'authenticate'])->name('login.authenticate');
Route::get('/check-user', [LoginController::class, 'checkUser'])->name('check_user');
Route::get('/create-user', [LoginController::class, 'create'])->name('login.create');
Route::post('/login-store', [LoginController::class, 'store'])->name('login.store');

//Project
Route::get('/projects', [ProjectController::class, 'list'])->name('projects.list');
Route::post('/projects/store', [ProjectController::class, 'store'])->name('projects.store');

//Project Detailed
Route::get('/project_detailed/{id}', [ProjectDetailedController::class, 'show'])->name('projects.show');
Route::get('/get_details/{id}', [ProjectDetailedController::class, 'getDetails'])->name('get_details.show');
Route::post('/project_detailed', [ProjectDetailedController::class, 'store'])->name('project_detailed.store');

Route::get('/{any}', function () {
    return view('home');
})->where('any', '.*');

//Admin
// Route::get('/admin', [AdminController::class, 'index'])->name('admin');

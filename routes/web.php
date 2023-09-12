<?php

use App\Http\Controllers\IncomeController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectDetailedController;
use App\Http\Controllers\SpendCategoryController;
use App\Http\Controllers\SpendController;

// Rotas de Autenticação
Route::post('/authenticate', [LoginController::class, 'authenticate'])->name('login.authenticate');
Route::get('/check-user', [LoginController::class, 'checkUser'])->name('login.checkUser');
Route::get('/create-user', [LoginController::class, 'create'])->name('login.create');
Route::post('/login-store', [LoginController::class, 'store'])->name('login.store');

// Rotas de Projetos
Route::prefix('projects')->group(function () {
    Route::get('/', [ProjectController::class, 'list'])->name('projects.list');
    Route::post('/store', [ProjectController::class, 'store'])->name('projects.store');
});

// Rotas de Detalhes do Projeto
Route::prefix('project-details')->group(function () {
    Route::get('/{id}', [ProjectDetailedController::class, 'show'])->name('project-details.show');
    Route::get('/get-details/{id}', [ProjectDetailedController::class, 'getDetails'])->name('project-details.getDetails');
    Route::post('/store', [ProjectDetailedController::class, 'store'])->name('project-details.store');
});

// Rotas de Categorias de Gastos
Route::prefix('spend-category')->group(function () {
    Route::get('/get-categories', [SpendCategoryController::class, 'getAll'])->name('spend-categories.getAll');
    Route::post('/save', [SpendCategoryController::class, 'save'])->name('spend-categories.save');
});

// Rota de Gastos
Route::prefix('spends')->group(function () {
    Route::get('/get', [SpendController::class, 'getSpends'])->name('spends.get');
    Route::post('/save', [SpendController::class, 'save'])->name('spends.saveSpend');
    Route::post('/set-id-paid', [SpendController::class, 'setIsPaid'])->name('spends.setIsPaid');
    Route::put('/update', [SpendController::class, 'updateSpend'])->name('spends.updateSpend');
    Route::delete('/delete/{id}', [SpendController::class, 'deteleSpend'])->name('spends.deleteSpend');
});

Route::prefix('income')->group(function () {
    Route::post('/save', [IncomeController::class, 'save']);
    Route::get('/get', [IncomeController::class, 'getByFilter']);
});

// Rota Padrão (caso nenhuma rota corresponda)
Route::fallback(function () {
    return view('home');
})->name('fallback');
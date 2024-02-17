<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\LandingController;
use Illuminate\Support\Facades\Route;

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

// 

// Home
Route::get('/', [LandingController::class, "index"])->name('home');

// Authentications Views
Route::get('auth/sign-in', [AuthController::class, "signIn"])->name('auth.login');
Route::get('auth/sign-up', [AuthController::class, "signUp"])->name('auth.register');

// Book Views
Route::get('book/list/', [BookController::class, "books"])->name('book.books');
Route::get('book/details/', [BookController::class, "bookDetails"])->name('book.details');

// Admin Views
Route::get('admin/books', [AdminController::class, "books"])->name('admin.books');
Route::get('admin/book/details', [AdminController::class, "bookDetails"])->name('admin.bookDetails');
Route::get('admin/users', [AdminController::class, "users"])->name('admin.users');
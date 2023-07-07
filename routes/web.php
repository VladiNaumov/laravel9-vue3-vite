<?php

use App\Http\Controllers\Api\DeskController;
use App\Http\Controllers\AppController;
use App\Http\Controllers\ExamplesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/examples', [ExamplesController::class, 'index'])->name('examples.index');

Route::get('/{any}', [AppController::class, 'index'])->where('any', '.*');







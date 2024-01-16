<?php

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

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [App\Http\Controllers\AuthController::class, 'login']);
    Route::post('registration', [App\Http\Controllers\AuthController::class, 'registration']);
    Route::post('logout', [App\Http\Controllers\AuthController::class, 'logout']);
    Route::post('refresh', [App\Http\Controllers\AuthController::class, 'refresh']);



});

Route::post('auth/me', [App\Http\Controllers\AuthController::class, 'me'])->middleware('jwt.auth');

    Route::group([

        'middleware' => 'jwt.auth',

    ], function ($router) {
    
        
        Route::get('/test', function(){
            return response()->json([ 'ass' => 'hole']);
        });
    });
    Route::post('/test2', function(){
        return response()->json([ 'ass' => 'hole']);
    });    
<?php

use App\Http\Controllers\Api\IndicacaoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('indicacoes', [IndicacaoController::class, 'getIndicacoes']);
Route::post('indicacao', [IndicacaoController::class, 'createIndicacao']);
Route::get('indicacao/{indicacao_id}', [IndicacaoController::class, 'getIndicacao']);
Route::put('indicacao/{indicacao_id}', [IndicacaoController::class, 'updateIndicacao']);
Route::delete('indicacao/{indicacao_id}', [IndicacaoController::class, 'deleteIndicacao']);
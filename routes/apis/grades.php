grade<?php

use App\Http\Controllers\GradeController;

Route::get('/grades', [GradeController::class, 'index']);
Route::post('/grades', [GradeController::class, 'store']);
Route::get('/grades/{grade}', [GradeController::class, 'show']);
Route::put('/grades/{grade}', [GradeController::class, 'update']);
Route::delete('/grades/{grade}', [GradeController::class, 'destroy']);

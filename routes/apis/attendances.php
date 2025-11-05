<?php

use App\Http\Controllers\AttendanceController;

Route::get('/attendances', [AttendanceController::class, 'index']);
Route::post('/attendances', [AttendanceController::class, 'store']);
Route::get('/attendances/{id}', [AttendanceController::class, 'show']);
Route::put('/attendances/{id}', [AttendanceController::class, 'update']);
Route::get('/attendances/{id}', [AttendanceController::class, 'destroy']);

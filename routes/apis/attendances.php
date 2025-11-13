<?php

use App\Http\Controllers\AttendanceController;

Route::get('/attendances', [AttendanceController::class, 'index']);
Route::post('/attendances', [AttendanceController::class, 'store']);
Route::get('/attendances/{attendance}', [AttendanceController::class, 'show']);
Route::put('/attendances/{attendance}', [AttendanceController::class, 'update']);
Route::get('/attendances/{attendance}', [AttendanceController::class, 'destroy']);

<?php

use App\Http\Controllers\TeacherController;

Route::get('/teachers', [TeacherController::class, 'index']);
Route::get('/teachers/filter', [TeacherController::class, 'filterBySearchWord']);
Route::post('/teachers', [TeacherController::class, 'store']);
Route::get('/teachers/{teacher}', [TeacherController::class, 'show']);
Route::put('/teachers/{teacher}', [TeacherController::class, 'update']);
Route::delete('/teachers/{teacher}', [TeacherController::class, 'destroy']);

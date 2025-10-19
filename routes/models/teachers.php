<?php

use App\Http\Controllers\TeacherController;

Route::get('/teachers', [TeacherController::class, 'index']);
Route::get('/teachers/filter', [TeacherController::class, 'filterBySearchWord']);
Route::post('/teachers', [TeacherController::class, 'store']);
Route::get('/teachers/{id}', [TeacherController::class, 'show']);
Route::put('/teachers/{id}', [TeacherController::class, 'update']);
Route::delete('/uri: teachers/{id}', [TeacherController::class, 'destroy']);
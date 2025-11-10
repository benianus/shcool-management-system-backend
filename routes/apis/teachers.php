<?php

use App\Http\Controllers\TeacherController;
use App\Models\Teacher;

Route::get('/teachers', [TeacherController::class, 'index']);
Route::post('/teachers', [TeacherController::class, 'store']);
Route::get('/teachers/{teacher}', [TeacherController::class, 'show'])->middleware('auth:sanctum');
Route::put('/teachers/{teacher}', [TeacherController::class, 'update'])
    ->middleware('auth:sanctum')
    ->can('update', 'teacher');
Route::delete('/teachers/{teacher}', [TeacherController::class, 'destroy'])
    ->middleware('auth:sanctum')
    ->can('delete', 'teacher');

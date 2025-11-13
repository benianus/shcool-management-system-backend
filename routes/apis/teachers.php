<?php

use App\Http\Controllers\TeacherController;
use App\Models\Teacher;

Route::get('/teachers', [TeacherController::class, 'index']);
Route::post('/teachers', [TeacherController::class, 'store'])
    ->middleware('auth:sanctum')
    ->can('create', Teacher::class);
Route::get('/teachers/{teacher}', [TeacherController::class, 'show']);
Route::put('/teachers/{teacher}', [TeacherController::class, 'update'])
    ->middleware('auth:sanctum')
    ->can('update', 'teacher');
Route::delete('/teachers/{teacher}', [TeacherController::class, 'destroy'])
    ->middleware('auth:sanctum')
    ->can('delete', 'teacher');

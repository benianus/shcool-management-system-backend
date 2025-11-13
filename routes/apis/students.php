<?php

use App\Http\Controllers\StudentController;
use App\Models\Student;

Route::get('/students', [StudentController::class, 'index']);
Route::post('/students', [StudentController::class, 'store']);
Route::get('/students/{student}', [StudentController::class, 'show'])
    ->middleware('auth:sanctum')
    ->can('create', Student::class);
Route::put('/students/{student}', [StudentController::class, 'update'])
    ->middleware('auth:sanctum')
    ->can('update', 'student');
Route::delete('/students/{student}', [StudentController::class, 'destroy'])
    ->middleware('auth:sanctum')
    ->can('delete', 'student');

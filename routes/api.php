<?php

use App\Http\Controllers\TeacherController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', function () {
    return response()->json([
        'Laravel' => app()->version(),
    ]);
});

require __DIR__ . '/models/teachers.php';
require __DIR__ . '/models/students.php';
require __DIR__ . '/models/courses.php';
require __DIR__ . '/models/grades.php';
require __DIR__ . '/models/attendances.php';
require __DIR__ . '/models/events.php';

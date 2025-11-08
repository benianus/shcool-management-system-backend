<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/', function () {
    return response()->json([
        'Laravel' => app()->version(),
    ]);
});

require __DIR__.'/apis/teachers.php';
require __DIR__.'/apis/students.php';
require __DIR__.'/apis/courses.php';
require __DIR__.'/apis/grades.php';
require __DIR__.'/apis/attendances.php';
require __DIR__.'/apis/events.php';
require __DIR__.'/auth.php';

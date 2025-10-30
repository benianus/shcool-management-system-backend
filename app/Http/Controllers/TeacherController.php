<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTeacherRequest;
use App\Http\Requests\UpdateTeacherRequest;
use App\Models\Course;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    use AuthorizesRequests;
    public function index()
    {
        //
        $page = request()->query('page') ;
        $pageSize = request()->query('limit') ;
        $teachers = DB::select('CALL `GetTeachers`(?, ?);', [$page, $pageSize]);

        return response()->json($teachers);
    }
    /**
     * Display a listing of the resource.
     */
    public function filterBySearchWord()
    {
        //
        $filter = request()->query('name') ?? '';
        $page = request()->query('page');
        $limit = request()->query('limit');
        $teachers = DB::select('CALL `FilterTeachersBySearchWord`(?, ?, ?)', [
            $filter,
            $page,
            $limit
        ]);

        return response()->json($teachers);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTeacherRequest $request)
    {
        $attributes = $request->validated();
        $user = User::where('email', $request->user)->first('id');
        $course = Course::where('name', '=', $request->input('course'))
            ->first('id');

        $teacher = Teacher::create([
            'name' => $attributes['name'],
            'email' => $attributes['email'],
            'status' => false,
            'user_id' => $user->id,
            'course_id' => $course->id
        ]);

        return response()->json($teacher, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Teacher $teacher)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTeacherRequest $request, Teacher $teacher)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Teacher $teacher)
    {
        //
    }
}

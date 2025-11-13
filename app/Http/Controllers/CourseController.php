<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Models\Course;
use DB;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $search = request()->query('search') ?? '';
        $perPage = request()->query('per_page') ?? 9;

        $courses = DB::table('courses')
            ->select([
                'courses.id',
                'courses.name',
                DB::raw('group_concat(distinct teachers.name SEPARATOR " - ") as teacher_name'),
                DB::raw(value: 'count(course_student.student_id) as students_enrolled'),
            ])
            ->join('course_student', 'courses.id', '=', 'course_student.course_id')
            ->join('teachers', 'teachers.course_id', '=', 'courses.id')
            ->groupBy([
                'courses.id',
                'courses.name',
            ])
            ->having('courses.name', 'like', '%'.$search.'%')
            ->paginate($perPage);

        return response()->json($courses);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        //
    }
}

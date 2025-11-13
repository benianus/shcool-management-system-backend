<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Models\Student;
use DB;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $search = request()->query('search') ?? '';
        $perPage = request()->query('per_page') ?? 9;

        $students = DB::table('grades')
            ->join('students', 'grades.student_id', '=', 'students.id')
            ->join('courses', 'grades.course_id', '=', 'courses.id')
            ->select([
                'students.id as student_id',
                'students.name as student_name',
                'students.status',
                DB::raw('ROUND(avg(grades.grade), 2) as grade'),
                'students.deleted_at',
            ])
            ->whereNull('students.deleted_at')
            ->groupBy('students.id')
            ->having('students.name', 'like', '%'.$search.'%')
            ->orderBy('grade', 'desc')
            ->paginate($perPage);

        return response()->json($students);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentRequest $request)
    {
        $attributes = $request->validated();

        $students = Student::create([
            'name' => $attributes['name'],
            'email' => $attributes['email'],
            'birthdate' => $attributes['birthdate'],
            'status' => false,
            'user_id' => $request->user_id,
        ]);

        return response()->json($students, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
        return response()->json([
            'id' => $student->id,
            'name' => $student->name,
            'email' => $student->email,
            'birthdate' => $student->birthdate,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentRequest $request, Student $student)
    {
        //
        $attributes = $request->validated();

        $student->update([
            'name' => $attributes['name'],
            'email' => $attributes['email'],
            'birthdate' => $student->birthdate,
        ]);

        return response()->noContent();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        //
        $student->delete();

        return response()->noContent();
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTeacherRequest;
use App\Http\Requests\UpdateTeacherRequest;
use App\Models\Teacher;
use Illuminate\Support\Facades\DB;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $page = request()->query('page');
        $pageSize = request()->query('limit');
        $teachers = DB::select('CALL `GetTeachers`(?, ?);', [$page, $pageSize]);

        return response()->json($teachers);
    }
    /**
     * Display a listing of the resource.
     */
    public function filterBySearchWord()
    {
        //
        $filter = request()->query('name');
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
        //
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

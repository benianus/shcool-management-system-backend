<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Grade;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Database\Seeder;

class GradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Grade::factory(20)->create();
        $teachers = Teacher::all()->pluck(['course_id'])->toArray();
        $students = Student::all()->pluck('id')->toArray();
        $courses = Course::all()->pluck('id')->toArray();

        foreach ($students as $student) {
            foreach ($teachers as $key => $course) {
                Grade::create([
                    'grade' => random_int(1, 20),
                    'teacher_id' => $key + 1,
                    'student_id' => $student,
                    'course_id' => $courses[$course - 1],
                ]);
            }
        }

    }
}

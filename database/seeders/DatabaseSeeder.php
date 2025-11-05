<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Student;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Teacher;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // $this->call(UserSeeder::class);
        $this->call(TeacherSeeder::class);
        $this->call(StudentSeeder::class);
        // $this->call(CourseSeeder::class);
        $this->call(GradeSeeder::class);

        $students = Student::all();
        $ids = Teacher::all('id');

        $students->each(fn ($student) => $student->teachers()->attach($ids));

        $ids = Course::all('id');
        $students->each(function ($student) use ($ids) {
            $student->courses()->attach($ids);
        });
    }
}

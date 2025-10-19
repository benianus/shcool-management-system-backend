<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $courses = [
            'Science',
            'Physics',
            'Chemistry',
            'Islamic',
            'Math',
            'IT',
            'Arabic',
            'English',
            'French',
            'History',
        ];

        foreach ($courses as $course) {
            Course::factory()->create([
                'name' => $course,
            ]);
        }
    }
}

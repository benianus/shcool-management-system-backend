<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Grade>
 */
class GradeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'grade' => random_int(0, 20),
            'teacher_id' => random_int(1, 10),
            'student_id' => random_int(1, 10),
            'course_id' => random_int(1, 10),
        ];
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Student extends Model
{
    /** @use HasFactory<\Database\Factories\StudentFactory> */
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'name',
        'email',
        'birthdate',
        'status',
        'user_id'
    ];
    public function teachers()
    {
        return $this->belongsToMany(Teacher::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function grades()
    {
        return $this->hasMany(Grade::class);
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class);
    }

    public function attendances()
    {
        return $this->hasMany(Attendance::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Position extends Model
{
    use SoftDeletes, HasFactory;

    protected $fillable = [
        "name",
        "description",
        "level"
    ];

    public function teams()
    {
        return $this->hasMany(Team::class);
    }
}

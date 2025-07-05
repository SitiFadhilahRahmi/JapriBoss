<?php

namespace App\Models;

use Awcodes\Curator\Models\Media;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Testimonial extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'thumbnail_id',
        "messages",
        "client_name",
        "client_occupation",
        "avatar"
    ];

    public function thumbnail()
    {
        return $this->belongsTo(Media::class, 'thumbnail_id', 'id');
    }

    public function avatar()
    {
        return $this->belongsTo(Media::class, 'avatar_id', 'id');
    }
}

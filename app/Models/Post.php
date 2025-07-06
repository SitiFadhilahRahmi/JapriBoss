<?php

namespace App\Models;

use Awcodes\Curator\Models\Media;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Tags\HasTags;

class Post extends Model
{
    use HasFactory, SoftDeletes, HasTags;

    protected $fillable = [
        'slug',
        "title",
        "excerpt",
        "thumbnail_id",
        "content",
        "category_id",
        "user_id",
        "language",
        "published_at",
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class, "user_id");
    }

    public function thumbnail()
    {
        return $this->belongsTo(Media::class, "thumbnail_id", 'id');
    }
}

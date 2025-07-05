<?php

namespace App\Models;

use Awcodes\Curator\Models\Media;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

use function PHPSTORM_META\map;

class Team extends Model
{
    use SoftDeletes, HasFactory;

    protected $fillable = [
        "avatar_id",
        "name",
        "origin",
        "position_id",
        "occupation"
    ];

    public function position()
    {
        return $this->belongsTo(Position::class);
    }

    public function avatar(): BelongsTo
    {
        return $this->belongsTo(Media::class, 'avatar_id', 'id');
    }
}

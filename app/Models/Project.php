<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'project_id';

    /**
     * 
     * @var array<int, string>
     */
    protected $fillable = [
        'project_name',
        'date_from',
        'date_to',
        'about',
        'technologies'
    ];

    protected $dates = [
        'date_from',
        'date_to',
    ];

    protected $casts = [
        'technologies' => 'array',
        'about' => 'json'
    ];
}

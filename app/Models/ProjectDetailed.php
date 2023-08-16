<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectDetailed extends Model
{
    use HasFactory;

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    protected $table = 'projects_detailed';

    /**
     * 
     * @var array<int, string>
     */
    protected $fillable = [
        'project_id',
        'role_title',
        'experience_description',
        'squad_structure',
        'region',
        'modality',
        'tech_and_tools',
        'project_highlights',
        'other_teams_collab'
    ];

    protected $casts = [
        'tech_and_tools' => 'array',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}

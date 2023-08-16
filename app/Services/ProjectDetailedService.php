<?php

namespace App\Services;

use App\Interfaces\ProjectDetailedServiceInterface;
use App\Models\ProjectDetailed;

class ProjectDetailedService implements ProjectDetailedServiceInterface
{
    public function fetchProjects()
    {
        return ProjectDetailed::all();
    }

    public function preparePostData($request)
    {
        return [
            'project_id' => (string) $request->project_id,
            'role_title' => $request->role_title ?? null,
            'experience_description' => $request->experience_description ?? null,
            'squad_structure' => $request->squad_structure ? json_encode($request->squad_structure) : null,
            'region' => $request->region ?? null,
            'modality' => $request->modality ?? null,
            'tech_and_tools' => $request->tech_and_tools ? json_encode($request->tech_and_tools) : null,
            'project_highlights' => $request->project_highlights ?? null,
            'other_teams_collab' => $request->project_highlights ?? null,
        ] ?? [];
    }

    public function saveData($request)
    {
        return ProjectDetailed::create($this->preparePostData($request));
    }
}
<?php

namespace App\Services;

use App\Interfaces\ProjectsServiceInterface;
use App\Models\Project;
use Carbon\Carbon;

class ProjectsService implements ProjectsServiceInterface
{
    public function fetchProjects()
    {
        return Project::orderBy('date_from', 'desc')->get();
    }

    public function preparePostData($request)
    {
        return [
            'project_name' => (string) $request->project_name,
            'date_from' => $request->date_from ? Carbon::parse($request->date_from) : null,
            'date_to' => $request->date_to ? Carbon::parse($request->date_to) : null,
            'about' => $request->about ? json_encode(['about' => $request->about]) : null,
            'technologies' => $this->handleTechnologiesArray($request->technologies ?? []),
            'project_url'=> $request->project_url ?? null
        ] ?? [];
    }

    public function getProjectById($id)
    {
        return Project::find($id);
    }

    private function handleTechnologiesArray($technologies)
    {
        foreach($technologies as $tech){
            $techArr[$tech['code']] = $tech['name'];
        }
        return $techArr ?? [];
    }
}
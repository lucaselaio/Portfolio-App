<?php

namespace App\Services;

use App\Interfaces\ProjectsServiceInterface;
use App\Models\Project;
use Carbon\Carbon;

class ProjectsService implements ProjectsServiceInterface
{
    public function fetchProjects()
    {
        return Project::all();
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

    private function handleTechnologiesArray($technologies)
    {
        $techName = [
            'git' => 'Git',
            'javascript' => 'Javascript',
            'vue' => 'Vue.js',
            'jquery' => 'JQuery',
            'php' => 'PHP',
            'laravel' => 'Laravel',
            'zendframework' => 'ZendFramework',
            'cakephp' => 'CakePHP',
            'redis' => 'Redis',
            'mysql' => 'MySQL',
            'html5' => 'HTML',
            'css' => 'CSS',
            'phpunit' => 'PHPUnit',
            'jest' => 'Jest',
            'jira' => 'Jira',
            'docker' => 'Docker',
            'bitbucket' => 'Bitbucket',
            'gitlab' => 'GitLab',
        ];

        foreach($technologies as $tech){
            $techArr[$tech] = $techName[$tech];
        }

        return $techArr ?? [];
    }
}
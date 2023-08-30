<?php

namespace App\Http\Controllers;

use App\Interfaces\ProjectDetailedServiceInterface;
use App\Interfaces\ProjectsServiceInterface;
use App\Models\ProjectDetailed;
use Illuminate\Http\Request;

class ProjectDetailedController extends Controller
{
    protected $projectDetailedService;
    protected $projectsService;

    public function __construct(ProjectDetailedServiceInterface $projectDetailedService, ProjectsServiceInterface $projectsService)
    {
        $this->projectDetailedService = $projectDetailedService;
        $this->projectsService = $projectsService;
    }

    public function show($id)
    {

        try {
            $projectDetailed = $this->projectDetailedService->getProjectDetailsByProjectId($id);
            if(! $projectDetailed){
                return view('not_found', ['error' => 'Project Datails were not found']);
            }
            return view('project_detailed.show', compact('projectDetailed'));

        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function getDetails($id)
    {
        return response()->json(['success' => $this->projectDetailedService->getProjectDetailsByProjectId($id)], 200);
    }

    public function list()
    {
        // return $this->projectsService->fetchProjects();
    }

    // public function create()
    // {
    //     return view('project_detailed.create');
    // }

    public function store(Request $request)
    {
        try {
            $this->projectDetailedService->saveData($request);
            return redirect()->route('project_detailed.create');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function edit($id)
    {
        // $project = Project::find($id);
        // return view('projects.edit', compact('project'));
    }

    public function update(Request $request, $id)
    {
        // // Valide os dados do formulário
        // $request->validate([
        //     'title' => 'required',
        //     'description' => 'required',
        // ]);

        // // Atualize o projeto
        // $project = Project::find($id);
        // $project->update([
        //     'title' => $request->title,
        //     'description' => $request->description,
        // ]);

        // return redirect()->route('projects.index')->with('success', 'Projeto atualizado com sucesso.');
    }

    public function destroy($id)
    {
        // // Encontre e delete o projeto
        // $project = Project::find($id);
        // $project->delete();

        // return redirect()->route('projects.index')->with('success', 'Projeto deletado com sucesso.');
    }
}

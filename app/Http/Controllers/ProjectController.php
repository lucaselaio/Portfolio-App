<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use App\Interfaces\ProjectsServiceInterface;

class ProjectController extends Controller
{
    protected $projectsService;

    public function __construct(ProjectsServiceInterface $projectsService)
    {
        $this->projectsService = $projectsService;
    }

    public function show($id)
    {
        try {
            return $this->projectsService->getProjectById($id);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function list()
    {
        return $this->projectsService->fetchProjects();
    }

    public function create()
    {
        return view('projects.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'project_name' => 'required',
            'date_from' => 'required',
            'about' => 'required',
            'technologies' => 'required'
        ]);

        try {
            Project::create($this->projectsService->preparePostData($request));
            return redirect()->route('projects.create')->with('success', 'Projeto criado com sucesso.');
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

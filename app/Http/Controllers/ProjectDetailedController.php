<?php

namespace App\Http\Controllers;

use App\Interfaces\ProjectDetailedServiceInterface;
use App\Models\ProjectDetailed;
use Illuminate\Http\Request;

class ProjectDetailedController extends Controller
{
    protected $projectDetailedService;

    public function __construct(ProjectDetailedServiceInterface $projectDetailedService)
    {
        $this->projectDetailedService = $projectDetailedService;
    }

    public function show($id)
    {
        $projectDetailed = ProjectDetailed::where('project_id', $id)->first();;

        return view('project_detailed.show', compact('projectDetailed'));
    }

    public function list()
    {
        // return $this->projectsService->fetchProjects();
    }

    public function create()
    {
        return view('project_detailed.create');
    }

    public function store(Request $request)
    {
        try {
            $this->projectDetailedService->saveData($request);
            return redirect()->route('project_detailed.create')->with('success', 'Saved successfully');
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

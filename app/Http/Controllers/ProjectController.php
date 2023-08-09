<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function show($id)
    {
        // $project = Project::find($id);
        // return view('projects.show', compact('project'));
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

        Project::create([
            'project_name' => (string) $request->project_name,
            'date_from' => $request->date_from ? (string)Carbon::parse($request->date_from) : null,
            'date_to' => $request->date_to ? (string)Carbon::parse($request->date_to) : null,
            'about' => $request->about ? json_encode(['about' => $request->about]) : null,
            'technologies' => $request->technologies ? json_encode($request->technologies) : []
        ]);
        return redirect()->route('projects.create')->with('success', 'Projeto criado com sucesso.');
        
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

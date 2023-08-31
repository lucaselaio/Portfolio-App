<?php

namespace App\Http\Controllers;

use App\Interfaces\UserServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    protected $userService;

    public function __construct(UserServiceInterface $userService)
    {
        $this->userService = $userService;
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(['success'], 200);
    }

    public function checkUser()
    {
        $user = Auth::user();
        if ($user) {
            return true;
        }
        return false;
    }

    public function show($id)
    {

        // try {
        //     $projectDetailed = $this->projectDetailedService->getProjectDetailsByProjectId($id);
        //     if(! $projectDetailed){
        //         return view('not_found', ['error' => 'Project Datails were not found']);
        //     }
        //     return view('project_detailed.show', compact('projectDetailed'));

        // } catch (\Throwable $th) {
        //     throw $th;
        // }
    }

    public function list()
    {
        // return $this->projectsService->fetchProjects();
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $user = $this->userService->findByEmail($request->only('email'));
            return response()->json(['success' => $user], 200);
        }

        return response()->json(['error' => 'Invalid credentials'], 401);
    }

    public function create()
    {
        return view('login.create');
    }

    public function store(Request $request)
    {
        try {
            $this->userService->createUser($request);
            return response()->json(['success'], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 401);
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

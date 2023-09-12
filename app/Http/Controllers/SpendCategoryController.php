<?php

namespace App\Http\Controllers;

use App\Interfaces\SpendCategoriesServiceInterface;
use Illuminate\Http\Request;

class SpendCategoryController extends Controller
{
    protected $spendCategoriesService;

    public function __construct(SpendCategoriesServiceInterface $spendCategoriesService)
    {
        $this->spendCategoriesService = $spendCategoriesService;
    }

    public function getAll()
    {
        try {
            $categories = $this->spendCategoriesService->getAllCategories();
            return response()->json(['success' => $categories], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function show($id)
    {
        //
    }

    public function save(Request $request)
    {
        try {
            $savedCategory = $this->spendCategoriesService->saveData($request->toArray());
            return response()->json(['success' => $savedCategory], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function edit($id)
    {
        // $project = Project::find($id);
        // return view('projects.edit', compact('project'));
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}

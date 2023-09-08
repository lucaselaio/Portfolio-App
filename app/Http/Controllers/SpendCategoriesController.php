<?php

namespace App\Http\Controllers;

use App\Services\SpendCategoriesService;
use Illuminate\Http\Request;

class SpendCategoriesController extends Controller
{
    protected $spendCategoriesService;

    public function __construct(SpendCategoriesService $spendCategoriesService)
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

    public function store(Request $request)
    {
        try {
            $savedCategory = $this->spendCategoriesService->saveData($request);
            return response()->json(['success' => $savedCategory], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpendController extends Controller
{
    // protected $spendCategoriesService;

    // public function __construct(SpendCategoriesService $spendCategoriesService)
    // {
    //     $this->spendCategoriesService = $spendCategoriesService;
    // }

    public function getAll()
    {
        try {
            // $categories = $this->spendCategoriesService->getAllCategories();
            // return response()->json(['success' => $categories], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function getSpendByMonthAndCycle($month, $cycle)
    {
        try {
            // $categories = $this->spendCategoriesService->getAllCategories();
            // return response()->json(['success' => $categories], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function getSpendByMonth($month)
    {
        try {
            // $categories = $this->spendCategoriesService->getAllCategories();
            // return response()->json(['success' => $categories], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function store(Request $request)
    {
        try {
            // $savedCategory = $this->spendCategoriesService->saveData($request);
            // return response()->json(['success' => $savedCategory], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Interfaces\SpendServiceInterface;
use Illuminate\Http\Request;

class SpendController extends Controller
{
    protected $spendService;

    public function __construct(SpendServiceInterface $spendService)
    {
        $this->spendService = $spendService;
    }

    public function save(Request $request)
    {
        try {
            $spend = $this->spendService->saveData($request->toArray());
            return response()->json(['success' => $spend], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function getAll()
    {
        try {
            // $categories = $this->spendCategoriesService->getAllCategories();
            // return response()->json(['success' => $categories], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function setIsPaid(Request $request)
    {
        return $this->spendService->setIsPaid($request->input('id'), $request->input('is_paid'));
    }

    public function getSpends(Request $request)
    {
        try {
            $year = $request->input('year');
            $month = $request->input('month');
            $cycles = $request->input('cycles');
            $user = $request->input('user');
            
            $spends = $this->spendService->getSpendsByFilter($year, $month, $cycles, $user);
            return response()->json(['success' => $spends->toArray()], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function deteleSpend($id){
        
        try {
            $result = $this->spendService->deleteSpend($id);
            return response()->json(['success' => $result], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function updateSpend(Request $request)
    {
        $this->spendService->updateSpend($request);
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

    
}

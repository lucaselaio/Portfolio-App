<?php

namespace App\Http\Controllers;

use App\Interfaces\IncomeServiceInterface;
use Illuminate\Http\Request;

class IncomeController extends Controller
{
    protected $incomeService;

    public function __construct(IncomeServiceInterface $incomeService)
    {
        $this->incomeService = $incomeService;
    }

    public function save(Request $request)
    {
        try {
            $spend = $this->incomeService->saveData($request->toArray());
            return response()->json(['success' => $spend], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function getByFilter(Request $request)
    {
        try {
            $year = $request->input('year');
            $month = $request->input('month');
            $cycles = $request->input('cycles');
            $user = $request->input('user');

            return $this->incomeService->getIncomeByFilter($year, $month, $cycles, $user);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }
}

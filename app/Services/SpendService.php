<?php

namespace App\Services;

use App\Interfaces\SpendServiceInterface;
use App\Models\Spend;

class SpendService implements SpendServiceInterface
{

    protected $spendService;

    public function __construct(SpendServiceInterface $spendService = null) {
        $this->spendService = $spendService;
    }

    public function getAll()
    {
        try {
            $spends = Spend::all();
            return $spends;
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function getSpendsByMonth($year, $month)
    {
        try {
            $startDate = "$year-$month-01";
            $endDate = date('Y-m-t', strtotime($startDate));
            $spends = Spend::whereBetween('due_date', [$startDate, $endDate])->get();

            return $spends;
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 400);
        }
    }

    public function saveData($request)
    {
        return Spend::create($request);
    }
}
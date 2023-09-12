<?php

namespace App\Services;

use App\Interfaces\IncomeServiceInterface;
use App\Models\Income;

class IncomeService implements IncomeServiceInterface
{

    public function saveData($request)
    {
        $request['payment_date'] = date('Y-m-d H:i:s', strtotime($request['payment_date']));

        return Income::create($request);
    }

    public function getIncomeByFilter($year, $month, $cycles, $userId = null)
    {
        try {
            $query = Income::query()
                ->whereYear('payment_date', $year)
                ->whereMonth('payment_date', $month)
                ->whereIn('payment_cycle', $cycles);

            if ($userId !== null) {
                $query->where('user_id', $userId);
            }

            return $query->get();
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}

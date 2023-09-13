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
                ->whereIn('payment_cycle', $cycles)
                ->where('user_id', $userId);

            return $query->get();
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function updateIncome($income)
    {
        try {
            if (empty($income->id*1)) {
                throw new \InvalidArgumentException('ID is required');
            }
            $edit = Income::find($income->id);

            if (!$edit) {
                throw new \InvalidArgumentException('Income not found');
            }

            $edit->update([
                'type' => $income->type,
                'value' => $income->value,
                'user_id' => $income->user_id,
                'payment_date' => $income->payment_date,
                'payment_cycle' => $income->cycle
            ]);

            return response()->json(['message' => 'Income successfully updated!']);
        } catch (\InvalidArgumentException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occured trying to update Income.'], 500);
        }
    }

    public function deleteIncome($id)
    {
        try {
            if (empty($id*1)) {
                throw new \InvalidArgumentException('ID is required');
            }
            $income = Income::find($id);

            if (!$income) {
                throw new \InvalidArgumentException('Income not found');
            }

            $income->delete();

            return response()->json(['message' => 'Income successfully deleted!']);
        } catch (\InvalidArgumentException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occured trying to delete income.'], 500);
        }
    }
}

<?php

namespace App\Services;

use App\Interfaces\SpendServiceInterface;
use App\Models\Spend;

class SpendService implements SpendServiceInterface
{
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

    public function getSpendsByFilter($year, $month, $cycles, $userId = null)
    {
        try {
            $query = Spend::query()
                ->selectRaw('*, (SELECT MAX(payment_cycle) FROM spends WHERE user_id = ?) AS max_cycle', [$userId])
                ->whereYear('due_date', $year)
                ->whereMonth('due_date', $month)
                ->whereIn('payment_cycle', $cycles)
                ->where('user_id', $userId)
                ->with('category');

            return $query->get();
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function setIsPaid($id, $paid)
    {
        try {
            if (empty($id)) {
                throw new \InvalidArgumentException('ID is required');
            }

            $spend = Spend::find($id);

            if (!$spend) {
                throw new \InvalidArgumentException('Spend not found');
            }

            $spend->update(['is_paid' => $paid]);

            return response()->json(['message' => 'Paid status successfully updated!']);
        } catch (\InvalidArgumentException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occured trying to update is_paid.'], 500);
        }
    }

    public function updateSpend($spend)
    {
        try {
            if (empty($spend->id*1)) {
                throw new \InvalidArgumentException('ID is required');
            }
            $edit = Spend::find($spend->id);

            if (!$edit) {
                throw new \InvalidArgumentException('Spend not found');
            }

            $edit->update([
                'name' => $spend->name,
                'price' => $spend->price,
                'user_id' => $spend->user_id,
                'spend_category_id' => $spend->spend_category_id,
                'due_date' => $spend->due_date,
                'payment_cycle' => $spend->payment_cycle
            ]);

            return response()->json(['message' => 'Spend successfully updated!']);
        } catch (\InvalidArgumentException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occured trying to update spend.'], 500);
        }
    }

    public function deleteSpend($id)
    {
        try {
            if (empty($id*1)) {
                throw new \InvalidArgumentException('ID is required');
            }
            $spend = Spend::find($id);

            if (!$spend) {
                throw new \InvalidArgumentException('Spend not found');
            }

            $spend->delete();

            return response()->json(['message' => 'Spend successfully deleted!']);
        } catch (\InvalidArgumentException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occured trying to delete spend.'], 500);
        }
    }

    public function saveData($request)
    {
        $due_date = new \DateTime($request['due_date']);
        $request['due_date'] = $due_date->format('Y-m-d H:i:s');
        return Spend::create($request);
    }
}

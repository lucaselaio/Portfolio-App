<?php

namespace App\Interfaces;

interface IncomeServiceInterface
{
    public function saveData($request);

    public function getIncomeByFilter($year, $month, $cycles, $userId = null);

    public function deleteIncome($id);

    public function updateIncome($income);
}
<?php

namespace App\Interfaces;

interface IncomeServiceInterface
{
    public function saveData($request);

    public function getIncomeByFilter($year, $month, $cycles, $userId = null);
}
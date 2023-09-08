<?php

namespace App\Interfaces;

interface SpendServiceInterface
{
    public function getSpendsByMonth($year, $month);

    public function saveData($request);
}
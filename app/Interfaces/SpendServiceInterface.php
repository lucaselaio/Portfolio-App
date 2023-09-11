<?php

namespace App\Interfaces;

interface SpendServiceInterface
{
    public function getAll();

    public function getSpendsByMonth($year, $month);

    public function getSpendsByFilter($year, $month, $cycles, $userId = null);

    public function setIsPaid($id, $paid);

    public function updateSpend($spend);

    public function deleteSpend($id);

    public function saveData($request);
}
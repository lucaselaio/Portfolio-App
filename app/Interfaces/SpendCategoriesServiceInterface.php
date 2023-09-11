<?php

namespace App\Interfaces;

interface SpendCategoriesServiceInterface
{
    public function getAllCategories();

    public function saveData($request);
}
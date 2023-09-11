<?php

namespace App\Services;

use App\Interfaces\SpendCategoriesServiceInterface;
use App\Models\SpendCategory;

class SpendCategoriesService implements SpendCategoriesServiceInterface
{
    public function getAllCategories()
    {
        return SpendCategory::all();
    }

    public function saveData($request)
    {
        return SpendCategory::create($request);
    }
}
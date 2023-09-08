<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spend extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'user_id', 'paymen_cycle', 'price', 'spend_category_id', 'due_date', 'is_paid',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(SpendCategory::class);
    }
}

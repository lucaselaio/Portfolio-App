<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spend extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'user_id', 'payment_cycle', 'price', 'spend_category_id', 'due_date', 'is_paid',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(SpendCategory::class, 'spend_category_id', 'id');
    }

    public static function setIsPaid($id, $paid)
    {
        self::where('id', $id)->update(['is_paid' => $paid]);
    }
}

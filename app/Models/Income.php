<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    use HasFactory;

    protected $table = 'income';

    protected $fillable = [
        'user_id', 'payment_cycle', 'value', 'payment_date', 'type'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

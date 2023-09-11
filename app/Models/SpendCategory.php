<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpendCategory extends Model
{
    use HasFactory;
    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    protected $table = 'spend_categories';

    /**
     * 
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'name',
        'label',
        'color'
    ];
}

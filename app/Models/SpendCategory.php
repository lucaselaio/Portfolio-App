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
    protected $primaryKey = 'spend_category_id';

    protected $table = 'spend_categories';

    /**
     * 
     * @var array<int, string>
     */
    protected $fillable = [
        'spend_category_id',
        'name',
        'label',
        'color'
    ];
}

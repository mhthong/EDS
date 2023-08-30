<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use HasFactory;

        /**
     * The database table used by the model.
     *
    * @var string
    */
   protected $table = 'categories';

   /**
    * @var array
    */
    protected $fillable = ['posts_id', 'menu_id'];

    public function post()
    {
        return $this->belongsTo(Post::class, 'posts_id');
    }

    public function menu()
    {
        return $this->belongsTo(Menu::class, 'menu_id');
    }
}

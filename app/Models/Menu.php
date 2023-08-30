<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{

    use HasFactory;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'menus';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'slug',
        'status',
    ];


            // Add a property to store menu nodes data
            protected $menuNodesData = [];

            // Method to set menu nodes data
            public function setMenuNodesData($menuNodesData)
            {
                $this->menuNodesData = $menuNodesData;
            }

            // Method to get menu nodes data
            public function getMenuNodesData()
            {
                return $this->menuNodesData;
            }

    /**
     * @return HasMany
     */
    public function menuNodes()
    {
        return $this->hasMany(MenuNode::class, 'menu_id');
    }

    /**
     * @return HasMany
     */
    public function locations()
    {
        return $this->hasMany(MenuLocation::class, 'menu_id');
    }

    protected static function boot()
    {
        parent::boot();

        static::deleting(function (Menu $menu) {
            MenuNode::where('menu_id', $menu->id)->delete();
        });
    }

    public function categories()
    {
        return $this->hasMany(Categories::class, 'menu_id');
    }
}

<?php

namespace App\Http\ViewComposers;

use Illuminate\View\View;
use App\Models\Menu;
use App\Models\MenuNode;
 use App\Models\MenuLocation;
 use App\Models\Slug;
 use App\Models\MetaBoxes;
 use Faker\Guesser\Name;
 use Illuminate\Support\Facades\DB;
 use Illuminate\Support\Str;
class MovieComposer
{
    public $movieList = [];
     /**
      * Create a movie composer.
      *
      * @return void
      */
     public function __construct()
    {
        $Menusexists = Menu::select('*')->exists();
        if($Menusexists)
        {

            $Menus = Menu::select('*')->get();

            $MenuNode_parent = MenuNode::select('*')->where('parent_id', 0)->get();


            $MenuNodes_type = MenuNode::select('*')->get();

            $Menus_parent= [];
            $Menu_child_name = [];
            $parent_id = [];
            $Menu_child_slug = [];



            foreach ($MenuNode_parent as $Menu_parent) {

                $Menu_parent_id = $Menu_parent->menu_id;

                /*   dd(  $Menu_parent_id); */

                $Menus_parent[] = Menu::select('*')->where('id', $Menu_parent_id)->get();

             /*    dd($Menus_parent); */

                $count = MenuNode::select('*')->where('parent_id', $Menu_parent_id)->count();

               /*   dd( $count); */

                if($count==0)
                {
                    $Menu_child_name[]="";
                    $Menu_child_slug[]="";
                    $parent_id[]="";
                }
                else{
                    $MenuNode_child = MenuNode::select('*')->where('parent_id', $Menu_parent_id)->get();
                    /*  dd( $MenuNode_child); */
                     for ($i = 0; $i <  $count; $i++) {
                         $parent_id[$Menu_parent_id][] = $MenuNode_child[$i]->menu_id;

                         foreach ($MenuNode_child as $MenuNode_child_par) {

                             $Menu_child_id = $MenuNode_child_par->menu_id;

                             $Menu_child = Menu::select('*')->where('id', $MenuNode_child_par->menu_id)->get();

                             foreach ($Menu_child as $Menu_child) {
                                 $Menu_child_name[$Menu_child_id] =  $Menu_child->name;

                                 $Menu_child_slug[$Menu_child_id] =  $Menu_child->slug;
                             }
                         }
                     }
    }

            }
            foreach ($Menus as $rows) {
                $MenuNodes[$rows->id] = MenuNode::select('*')->where('menu_id', $rows->id)->get();
                }

            foreach ($MenuNodes_type as $rows_1) {
                    $MetaBoxes[$rows_1->reference_id] = MetaBoxes::select('*')
                        ->where('reference_type','App\Http\Controllers\MenuController')
                        ->where('reference_id', $rows_1->reference_id)->get();
                }


                $Menu_show = [];

                $Menus_menu_show = Menu::where('slug','dich-vu')->first();


                                // Check if $Menus_menu_show is not null before using it
                if ($Menus_menu_show !== null) {
                    $Menunode_menunode_show = MenuNode::where('parent_id', $Menus_menu_show->id)
                        ->orderBy('position', 'asc')
                        ->get();

                    // Continue with further processing or use the $Menunode_menunode_show variable as needed
                } else {
                    // Handle the case when $Menus_menu_show is null
                    // You can throw an exception, show an error message, or perform any other necessary actions
                }

                // Check if $Menus_menu_show is not null before using it
            if ($Menus_menu_show !== null) {
                $exists = MenuNode::where('parent_id', $Menus_menu_show->id)->exists();

                // Continue with further processing or use the $exists variable as needed
                if($exists){
                    foreach ( $Menunode_menunode_show as $key) {
                        $Menu_show[] = Menu::where('id',$key->menu_id)->get();
                    }
                }
            } else {
                // Handle the case when $Menus_menu_show is null
                // You can throw an exception, show an error message, or perform any other necessary actions
            }
               

                $this->movieList = [
                    "MetaBoxes" => $MetaBoxes,
                    "Menus" => $Menus,
                    "MenuNodes"=>$MenuNodes,
                    "Menus_parent"=>$Menus_parent,
                    "MenuNode_parent"=>$MenuNode_parent,
                    "Menu_child_name"=>$Menu_child_name,
                    "parent_id"=>$parent_id,
                    "Menu_child_slug"=>$Menu_child_slug,
                    "Menu_show" => $Menu_show ,
                ];
        }

     }

     /**
      * Bind data to the view.
      *
      * @param  View  $view
      * @return void
      */
     public function compose(View $view)
     {

         $view->with('data', $this->movieList);
    }


}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Tags;
use App\Models\Categories;
use Illuminate\Routing\RouteGroup;
use PHPUnit\TextUI\XmlConfiguration\Group;
use Illuminate\Support\Facades\View;
use App\Models\Menu;
use App\Models\Slug;
use App\Models\MetaBoxes;
use Illuminate\Support\Str;



class PostController extends Controller
{
    public function index()
    {
        $Posts = Post::all();
       // Lấy tất cả các bản ghi Post
        $stt = 1;
        $pageNames = 'Posts';
        return view('admin.Posts.index', compact('Posts' , 'pageNames', 'stt'));
    }

    public function create_index()
    {
        return view('admin.Posts.create');
    }

    public function update(Request $request, $id)
    {
         $reference_type = __CLASS__;
         $img = $request->image;
         $eror_img = explode(env('APP_ENV'), $img);
         $image = end($eror_img);
    
        $originalSlug = Str::slug($request->slug, '-');
        $slug = $this->generateUniqueSlug($originalSlug);
    
         $exists = Post::where('slug', $slug)
             ->where('id', '!=', $id)
             ->exists();
    
         if ($exists) {
             // Exist, need to add random numbers to slug
             do {
                 $randomNumber = rand(1000, 9999); // Random number between 1000 and 9999
                 $newSlug = $slug . '-' . $randomNumber;
                 $exists = Post::where('slug', $newSlug)->exists();
             } while ($exists);
    
             $slug = $newSlug;
         }
    
         $postData = [
             "name" => $request->name,
             "slug" => $slug,
             "status" => $request->status,
             "title" => $request->title,
             "content" => $request->content,
             "description" => $request->description,
             "image" => $image,
             "target" => $request->is_featured,
             "reference_type" => $reference_type,
             "tag" => $request->tag,
         ];
    
         $updatePost = Post::where('id', $id)->update($postData);
    


         $metaData = [
             "meta_key" => "seo_meta",
             "meta_value" => json_encode($request->seo_meta),
         ];
    
         $updateMetaBoxes = MetaBoxes::where('reference_id', $id)
             ->where('reference_type', $reference_type)
             ->update($metaData);

         $updateSlug = Slug::where('reference_id', $id)
             ->where('reference_type', $reference_type)
             ->update(["key" => $slug]);
    
         $newCategories = $request->categories;
    
                    // Lấy danh sách các menu_id hiện tại trong bài viết
                $currentMenuIds = Categories::where('posts_id', $id)->pluck('menu_id')->toArray();

                // Lặp qua các menu_id mới từ $newCategories
                foreach ($newCategories as $menuId) {
                    // Kiểm tra xem menu_id đã tồn tại trong danh sách hiện tại hay chưa
                    if (!in_array($menuId, $currentMenuIds)) {
                        // Nếu chưa tồn tại, thêm mới bản ghi
                        Categories::create([
                            "posts_id" => $id,
                            "menu_id" => $menuId,
                        ]);
                    }
                }

                // Xóa các bản ghi có menu_id không tồn tại trong danh sách mới
                Categories::where('posts_id', $id)
                    ->whereNotIn('menu_id', $newCategories)
                    ->delete();

    
         if (!is_null($updatePost) && !is_null($updateMetaBoxes) && !is_null($updateSlug)) {
             return back()->with("success", "Update successful.");
         } else {
             return back()->with("failed", "Unable to update. Please check the information.");
         }
    }
    


    public function edit($id)
    {
    
    $back = back();
    $Posts = Post::findOrFail($id);
    
    $categories = Categories::where('posts_id', $id)->get();

    $metaBox = MetaBoxes::where('reference_id', $id)
    ->where('reference_type', __CLASS__)
    ->first();

    $menu_check = [];

    foreach ($categories as $category) {
        $menu_id = $category->menu_id;
        $menu = Menu::where('id', $menu_id)->first();
        if ($menu) {
            $menu_check[$menu_id] = $menu;
        }
    }

    $pageName = 'Posts - Update';
    return view('admin.Posts.edit', compact('Posts',  'metaBox' , 'back', 'pageName', 'menu_check'));
    }


    public function upload(Request $request)
    {
    }

    public function store(Request $request)
    {
        $reference_type = __CLASS__;
        $img = $request->image;
        $eror_img = explode(env('APP_ENV'), $img);
        $image = end($eror_img);
        $tag = $request->tag ?? '';
    
        $originalSlug = Str::slug($request->slug, '-');
        $slug = $this->generateUniqueSlug($originalSlug);
    
        $postData = [
            "name" => $request->name,
            "slug" => $slug,
            "status" => $request->status,
            "title" => $request->title,
            "content" => $request->content,
            "description" => $request->description,
            "image" => $image,
            "target" => $request->is_featured,
            "reference_type" => $reference_type,
            "tag" =>   $tag ,
        ];
    
        $Post = Post::create($postData);

       

        $metaData = [
            "reference_id" => $Post->id,
            "meta_key" => "seo_meta",
            "meta_value" => json_encode($request->seo_meta),
            "reference_type" => $reference_type,
        ];
    
        $MetaBoxes = MetaBoxes::create($metaData);
    
        $slugData = [
            "key" => $slug,
            "reference_id" => $Post->id,
            "reference_type" => $reference_type,
            "prefix" => "posts",
        ];
    
        $Slug = Slug::create($slugData);
    
        $categories = $request->categories;
    
        if (!empty($categories)) {
        foreach ($categories as $menuId) {
            Categories::create([
                "posts_id" => $Post->id,
                "menu_id" => $menuId,
            ]);
        }
    }
    
        if (!is_null($Post) && !is_null($MetaBoxes) && !is_null($Slug)) {
            return back()->with("success", "Thêm bài viết thành công.");
        } else {
            return back()->with("failed", "Không thể thêm bài viết. Vui lòng kiểm tra thông tin.");
        }
    }
    
    private function generateUniqueSlug($originalSlug)
    {
        $slug = $originalSlug;
        $count = 1;
        
        while (Post::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }
    
        return $slug;
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Post = Post::find($id);
        
        if (!$Post) {
            return back()->with("failed", "Không tìm thấy bài viết.");
        }
    
        // Xóa các bản ghi Categories có cùng posts_id
        Categories::where('posts_id', $id)->delete();
    
        $MetaBoxes = MetaBoxes::where('reference_id', $id)
            ->where('reference_type', __CLASS__)
            ->first();
    
        $Slug = Slug::where('reference_id', $id)
            ->where('reference_type', __CLASS__)
            ->first();
    
        if ($MetaBoxes) {
            $MetaBoxes->delete();
        }
    
        if ($Slug) {
            $Slug->delete();
        }
    
        $Post->delete();
    
        return back()->with("success", "Xóa bài viết và liên quan thành công.");
    }
    
}
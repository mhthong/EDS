<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Block;
use App\Models\MetaBoxes;
use App\Models\Slug;
use Illuminate\Support\Str;
use Auth;


class BlockController extends Controller
{
    //

    public function page($slug){

        $page = Block::select("*")->where('slug', $slug)->get();
        return response()->view('layouts.page', [
            'page' => $page,
        ])->header('Content-Type', 'text/html');
    }


    public function index()
    {

        
        $Block = Block::paginate(10);
        $stt = 1;
        $pageNames = 'Tên Trang - Block';
        return view('admin.Block.index', compact('Block', 'pageNames', 'stt'));
    }

    public function create_index()
    {
        return view('admin.Block.create');
    }
    public function update(Request $request, $id)
    {
         // Define reference type for MetaBoxes
         $reference_type = __CLASS__;
    
         // Create slug from post name
         
        $originalSlug = Str::slug($request->slug, '-');
        $slug = $this->generateUniqueSlug($originalSlug);
    
    
         // Check if the slug already exists (not counting the post itself being edited)
         $exists_slug = Block::where('slug', $slug)
             ->where('id', '!=', $id)
             ->exists();
    
         // If slug already exists, show error message
         if ($exists_slug) {
             return back()->with("failed", "Your post name already exists. Please check again !");
         }
         // Prepare the data array to be updated for the "blocks" table
         $dataToUpdate = [
             "name" => $request->name,
             "slug" => $slug,
             "status" => $request->status,
             "description" => $request->description,
             "content" => $request->content,
             "target" => $request->is_featured,
             "user_id" => Auth::id(),
         ];
    
         // Update information in the "blocks" table
         $Block = Block::where('id', $id)->update($dataToUpdate);
    
         // Prepare the data array to update for the table "MetaBoxes"
         $metaDataToUpdate = [
             "meta_key" => "seo_meta",
             "meta_value" => json_encode($request->seo_meta),
         ];
    
         // Update information in table "MetaBoxes"
         MetaBoxes::where('reference_id', $id)
             ->where('reference_type', $reference_type)
             ->update($metaDataToUpdate);
    
         // Update information in "Slug" table
         Slug::where('reference_id', $id)
             ->where('reference_type', $reference_type)
             ->update(["key" => $slug]);
    
         // Check if the update was successful or not
         if (!is_null($Block)) {
             return back()->with("success", "Update successful.");
         } else {
             return back()->with("failed", "Unable to update. Please check the information and try again.");
         }
    }


    public function edit($id)
    {
        $Blocks = Block::findOrFail($id);
        $MetaBoxes = MetaBoxes::where("reference_id",$id)
        ->where("reference_type",__CLASS__)
        ->get();

        return view('admin.Block.edit', compact('Blocks','MetaBoxes'));
    }


    public function upload(Request $request)
    {

    }


    public function store(Request $request)
    {
        $reference_type = __CLASS__;
    
        if (empty($request->image)) {
            // ... (image handling logic)
            $image = ""; // Set image to an empty string
        } else {
            $image = $request->image;
        }
    
        
        $originalSlug = Str::slug($request->slug, '-');
        $slug = $this->generateUniqueSlug($originalSlug);
    
    
        $Block = Block::create([
            "name" => $request->name,
            "slug" => $slug,
            "status" => $request->status,
            "description" => $request->description,
            "content" => $request->content,
            "target" => $request->is_featured,
            "user_id" => Auth::id(),
        ]);
    
        $MetaBoxes = MetaBoxes::create([
            "reference_id" => $Block->id,
            "meta_key" => "seo_meta",
            "meta_value" => json_encode($request->seo_meta),
            "reference_type" => $reference_type,
        ]);
    
        $seo_meta = $request->seo_meta;
    
        $Slug = Slug::create([
            "key" => $slug,
            "reference_id" => $Block->id,
            "reference_type" => $reference_type,
            "prefix" => "page",
        ]);
    
        if (!is_null($Block) && !is_null($MetaBoxes) && !is_null($Slug)) {
            return back()->with("success", "Cập nhật thông tin thành công.");
        } else {
            return back()->with("failed", "Không Thể cập nhật. Vui lòng kiểm tra thông tin thành công.");
        }
    }
    


    private function generateUniqueSlug($originalSlug)
    {
        $slug = $originalSlug;
        $count = 1;
        
        while (Block::where('slug', $slug)->exists()) {
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




        $Block = Block::where('id',$id)->first();

        $MetaBoxes  =   MetaBoxes::where('reference_id', $id)
        ->where('reference_type',  __CLASS__)
        ->first();

        $Slug  =   Slug::where('reference_id', $id)
        ->where('reference_type', __CLASS__)
        ->first();

        $Block->delete();
        $Slug->delete();
        $MetaBoxes->delete();

        if (!is_null($Slug) && !is_null($Block) && !is_null($MetaBoxes)) {

            return back()->with("success", "Cập nhật thông tin thành công.");
        } else {
            return back()->with("failed", "Không Thể cập nhật . Vui lòng kiểm tra thông tin thành công.");
        }

        //
    }

}

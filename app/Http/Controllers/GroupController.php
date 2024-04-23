<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Group;
use App\Models\GroupShowroom;
 use Illuminate\Support\Collection;

class GroupController extends Controller
{
    //

    public function view()
    {
 
        return view('admin.showrooms.groups');

    }



    public function index()
    {

           // Lấy tất cả các group showrooms cùng với thông tin của group và showroom
    $groupShowrooms = GroupShowroom::with('group:id,name,description', 'showroom:id,Name')->get();

    // Tạo một collection để tổ chức dữ liệu
    $formattedData = collect([]);

    // Lặp qua tất cả các group showrooms
    foreach ($groupShowrooms as $groupShowroom) {
        // Lấy id của nhóm
        $groupId = $groupShowroom->group->id;

        // Kiểm tra xem nhóm đã tồn tại trong collection chưa dựa trên id
        $group = $formattedData->where('id', $groupId)->first();

        // Nếu nhóm chưa tồn tại trong collection, thêm mới
        if (!$group) {
            $group = [
                'id' => $groupId,
                'name' => $groupShowroom->group->name,
                'description' => $groupShowroom->group->description,
                'showrooms' => [],
            ];

            // Thêm nhóm vào collection
            $formattedData->push($group);
        }

        // Thêm showroom vào nhóm
        $formattedData->transform(function ($item) use ($groupShowroom) {
            if ($item['id'] == $groupShowroom->group->id) {
                $item['showrooms'][] = [
                    'id' => $groupShowroom->showroom->id,
                    'Name' => $groupShowroom->showroom->Name,
                ];
            }
            return $item;
        });
    }

    $formattedData = $formattedData->sortByDesc('name')->values()->all();
    
        return response()->json($formattedData, 200);
    }
    
    

    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required',
        ]);

        $Group = Group::create($request->all());

        return response()->json($Group, 201);
    }

    public function update(Request $request, Group $Group)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $Group->update($request->all());

        return response()->json($Group, 200);
    }

    public function destroy(Group $Group)
    {
        $Group->delete();

        return response()->json(null, 204);
    }

}

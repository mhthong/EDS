<?php
namespace App\Http\Controllers;

use App\Models\Showroom;
use Illuminate\Http\Request;
use App\Models\ShowroomSchedule;
use App\Models\WorkingHour;

class ShowroomController extends Controller
{
    public function index()
    {
        $showrooms = Showroom::all();
        return view('admin.showrooms.index', compact('showrooms'));
    }

    public function create()
    {

        $daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        return view('admin.showrooms.create', compact('daysOfWeek'));
    }

    public function store(Request $request)
    {


        $validatedData = $request->validate([
            'Name' => 'required|string|max:255',
            'Address' => 'required|string|max:255',
            'Phone' => 'required|string|max:255',
            'Description' => 'required|string|max:255',
            'maps' => 'nullable|string|max:255',
            'status' => 'nullable|string|max:60',
        ]);

        // Create a new service record using the validated data
        $Showroom = Showroom::create($validatedData);


        $daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        foreach ($daysOfWeek as $day) {
            $activeKey = "active_{$day}";
            $workingValueKey = "workingvalue_{$day}";
            $workingHoursKey = $day;
    
            if ($request->has($activeKey)) {
                $showroomSchedule = ShowroomSchedule::create([
                    'showroom_id' => $Showroom->id,
                    'day' => $day,
                    'active' => true,
                    'workingvalue' => $request->input($workingValueKey)
                ]);
    
                $workingHoursData = $request->input($workingHoursKey);
                foreach ($workingHoursData as $workingHourData) {
                    if ($workingHourData !== null) {
                        WorkingHour::create([
                            'showroom_schedule_id' => $showroomSchedule->id,
                            'start_time' => $workingHourData['start_time'],
                            'end_time' => $workingHourData['end_time']
                        ]);
                    }
                }
            } else {
                ShowroomSchedule::create([
                    'showroom_id' => $Showroom->id,
                    'day' => $day,
                    'active' => false
                ]);
            }
        }

        try {

            $Showroom->save();

            // Redirect to the index page or wherever you wish after creating the service
            return redirect()->route('showrooms.index')->with('success', 'Showrooms created successfully!');
        } catch (\Exception $e) {
            // Handle the exception if any error occurs during the creation process
            // You can log the error or display an error message to the user
            return redirect()->route('showrooms.create')->with('failed', 'Failed to create showrooms. Please try again.');
        }



    }

    public function edit(Showroom $showroom)
    {
        $showroom_schedules = $showroom->showroomSchedules()->with('workingHours')->get();
        $daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return view('admin.showrooms.edit', compact('showroom', 'showroom_schedules', 'daysOfWeek'));
    }
    

    public function update(Request $request, Showroom $showroom)
    {

   
        $validatedData = $request->validate([
            'Name' => 'required|string|max:255',
            'Address' => 'required|string|max:255',
            'Phone' => 'required|string|max:255',
            'Description' => 'required|string|max:255',
            'maps' => 'nullable|string|max:255',
            'status' => 'nullable|string|max:60',
        ]);

  
        $showroom->update($validatedData);

        $daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
        foreach ($daysOfWeek as $day) {
            $activeKey = "active_{$day}";
            $workingValueKey = "workingvalue_{$day}";
            $workingHoursKey = $day;
    
            $showroomSchedule = $showroom->showroomSchedules->where('day', $day)->first();

            
    
            if ($request->has($activeKey)) {
                if (!$showroomSchedule) {
                    $showroomSchedule = new ShowroomSchedule([
                        'day' => $day,
                        'active' => true,
                        'workingvalue' => $request->input($workingValueKey)
                    ]);
                    $showroom->showroomSchedules()->save($showroomSchedule);
                } else {
                    $showroomSchedule->update([
                        'active' => true,
                        'workingvalue' => $request->input($workingValueKey)
                    ]);
                    $showroomSchedule->workingHours()->delete();
                   
                }
    
                $workingHoursData = $request->input($workingHoursKey);

    
                foreach ($workingHoursData as $workingHourData) {
                    if ($workingHourData !== null) {
                        $showroomSchedule->workingHours()->create([
                            'start_time' => $workingHourData['start_time'],
                            'end_time' => $workingHourData['end_time']
                        ]);
                    }
                }
            } else {
                if ($showroomSchedule) {
                    $showroomSchedule->update([
                        'active' => false
                    ]);
                    $showroomSchedule->workingHours()->delete();
                }
            }
        }
    
        // Update the service record using the validated data

        try {
            // Update the service record using the validated data
          

            $showroom->save();

            // Redirect to the index page or wherever you wish after updating the service
            return redirect()->route('showrooms.index')->with('success', 'Showroom updated successfully!');
        } catch (\Exception $e) {
            // Handle the exception if any error occurs during the update process
            // You can log the error or display an error message to the user
            return redirect()->route('showrooms.edit', ['showroom' => $showroom->id])->with('failed', 'Failed to update showroom. Please try again.');
        }

    }

    public function destroy(Showroom $showroom)
    {
        $showroom->delete();

        return redirect()->route('showrooms.index')->with('success', 'Showroom deleted successfully!');
    }
}

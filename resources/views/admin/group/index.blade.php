@extends('layouts.app')

@section('header')
    @include('layouts.headerad')
@endsection
@section('content')
    <main>
        @include('layouts.nav-admin')
        @include('admin.Notifications')

        <!-- start: MAIN -->
        <section id="main">

            <!-- start: MAIN TOP -->
            <div class="main__top">
                @include('admin.main__top')
            </div>
            <!-- end: MAIN TOP -->

            <!-- start: MAIN BODY -->
            <div class="main__body">

                <div class="main__body__data">

                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 flexb-c">
                        <div class="bg-ad">

                            <!-- Add button to trigger Create popup modal -->
                            <button type="button" class="btn-sub btn btn-info" data-bs-toggle="modal"
                                data-bs-target="#createModal">
                                Add New
                            </button>

                            <!-- Add table to display GroupServices data -->
                            <table class="table table-striped table-reponsive">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Value</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($GroupService as $GroupService)
                                        <tr>
                                            <td> <input type="checkbox" name="check[]" value="{{ $GroupService->id }}"
                                                    id=""> {{ $loop->index + 1 }}</td>
                                            <td>{{ $GroupService->Name }}</td>
                                            <td>{{ $GroupService->Value }}</td>
                                            <td>{{ $GroupService->Description }}</td>

                                            <td>
                                                <!-- Add button to trigger Edit popup modal -->
                                                <button type="button" class="bg-none" data-bs-toggle="modal"
                                                    data-bs-target="#editModal{{ $GroupService->id }}">
                                                    <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                                                </button>

                                                <form method="POST"
                                                    action=" {{ route('groups.destroy', ['group' => $GroupService->id]) }} "
                                                    onsubmit="return ConfirmDelete(this)" class="p-0"
                                                    style="display: inline;">
                                                    @method('DELETE')
                                                    @csrf
                                                    <button class="bg-none" type="submit"><i
                                                            class="fa-solid fa-trash"></i></button>
                                                </form>
                                            </td>
                                        </tr>

                                        <div class="modal fade" id="editModal{{ $GroupService->id }}" tabindex="-1"
                                            aria-labelledby="editModalLabel{{ $GroupService->id }}" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <!-- Add form for Edit action -->
                                                    <form method="POST"
                                                        action="{{ route('groups.update', ['group' => $GroupService->id]) }}">
                                                        @csrf
                                                        @method('PUT')
                                                        <div class="modal-header">
                                                            <h5 class="modal-title"
                                                                id="editModalLabel{{ $GroupService->id }}">Edit
                                                                Service Group {{ $GroupService->id }}</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <!-- Add form fields with pre-filled data from $GroupService -->
                                                            <div class="form-group">
                                                                <label for="name">Name</label>
                                                                <input type="text" class="form-control" id="name"
                                                                    name="name" value="{{ $GroupService->Name }}"
                                                                    required>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="Value">Value</label>
                                                                <textarea class="form-control" id="Value" name="Value">{{ $GroupService->Value }}</textarea>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="Description">Description</label>
                                                                <textarea class="form-control" id="Description" name="Description">{{ $GroupService->Description }}</textarea>
                                                            </div>
                                                            <!-- Add more fields as needed -->
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn-sub btn btn-secondary"
                                                                data-bs-dismiss="modal">Close</button>
                                                            <button type="submit" class="btn-sub btn btn-info">Save
                                                                Changes</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                </tbody>
                            </table>

                            <!-- Create popup modal -->
                            <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <!-- Add form for Create action -->
                                        <form method="POST" action="{{ route('groups.store') }}">
                                            @csrf
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="createModalLabel">Create Service Group Level
                                                </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <!-- Add form fields here -->
                                                <div class="form-group">
                                                    <label for="name">Name</label>
                                                    <input type="text" class="form-control" id="name" name="name"
                                                        required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="Value">Value</label>
                                                    <textarea class="form-control" id="Value" name="Value"></textarea>
                                                </div>
                                                <div class="form-group">
                                                    <label for="Description">Description</label>
                                                    <textarea class="form-control" id="Description" name="Description"></textarea>
                                                </div>
                                                <!-- Add more fields as needed -->
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-sub btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="submit" class="btn-sub btn btn-info">Create</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <!-- Edit popup modals (one for each GroupService) -->

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
@endsection


@section('footer')
    @include('layouts.footerad')
@endsection

@section('script')
@endsection

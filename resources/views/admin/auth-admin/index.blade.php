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

                    @isset($admins)
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 flexb-c">
                            <div class="bg-ad">

                                <!-- Add button to trigger Create popup modal -->
                                <button type="button" class="btn-sub btn btn-info" data-bs-toggle="modal"
                                    data-bs-target="#createModal">
                                    Add New
                                </button>

                                <!-- Add table to display admins data -->
                                <table id="table" class="table table-reponsive ">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Role</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($admins as $admin)
                                            <tr>
                                                <td> <input type="checkbox" name="check[]" value="{{ $admin->id }}"
                                                        id=""> {{ $loop->index + 1 }}</td>
                                                <td>{{ $admin->name }}</td>
                                                <td>{{ $admin->email }}</td>
                                                <td>{{ $admin->status }}</td>
                                                <td>{{ $admin->super_user }}</td>

                                                <td>
                                                    <!-- Add button to trigger Edit popup modal -->
                                                    <button type="button" class="bg-none" data-bs-toggle="modal"
                                                        data-bs-target="#editModal{{ $admin->id }}">
                                                        <i class="fa-solid fa-user-pen" style="color: #005eff;"></i>
                                                    </button>

                                                    <form method="POST"
                                                        action=" {{ route('auth-admin.destroy', ['auth_admin' => $admin->id]) }} "
                                                        onsubmit="return ConfirmDelete(this)" class="p-0"
                                                        style="display: inline;">
                                                        @method('DELETE')
                                                        @csrf
                                                        <button class="bg-none" type="submit"><i class="fa-solid fa-trash"
                                                            style="color: #ff0000;"></i>
                                                    </form>
                                                </td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>

                                <!-- Create popup modal -->
                                <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <!-- Add form for Create action -->
                                            <form method="POST" action="{{ route('auth-admin.store') }}">
                                                @csrf
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="createModalLabel">Create User</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <!-- Add form fields here -->
                                                    <div class="form-group">
                                                        <label for="name">User name</label>
                                                        <input type="text" class="form-control"  name="name"
                                                            required>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="Level Price">Email</label>
                                                        <input type="email" class="form-control"  name="email"
                                                            required>
                                                    </div>


                                                    <div class="form-group" style="position: relative;">

                                                        <small></small>
                                                        <a class="eyes" onclick="passwordshow()"><i
                                                                class="fa-solid fa-eye"></i></a>
                                                        <label for="pass">Password (8 characters minimum):</label>
                                                        <input id="password-new" minlength="8" name="password" type="password"
                                                            required
                                                            class=" form-control appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                            placeholder="password">

                                                    </div>

                                                    <div class="form-group">
                                                        <label for="status" class="" aria-required="true">Status</label>
                                                        <select class="form-control ui-select ui-select" 
                                                            name="status">
                                                            <option value="published" selected="selected">Published
                                                            </option>
                                                            <option value="draft">Draft</option>
                                                            <option value="pending">Pending</option>
                                                        </select>

                                                    </div>

                                                    <div class="form-group">
                                                        <label for="role" class="" aria-required="true">Role</label>
                                                        <select class="form-control ui-select ui-select" 
                                                            name="role">
                                                            <option value="Administrator" selected="selected">Administrator
                                                            </option>
                                                            <option value="Acoutant">Acoutant</option>
                                                            <option value="Saleleader">Sale leader</option>
                                                            <option value="Marketing">Marketing</option>
                                                            <option value="Operation">Operation</option>
                                                        </select>

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

                                @foreach ($admins as $admin)
                                    <div class="modal fade" id="editModal{{ $admin->id }}" tabindex="-1"
                                        aria-labelledby="editModalLabel{{ $admin->id }}" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <!-- Add form for Edit action -->
                                                <form method="POST"
                                                    action="{{ route('auth-admin.update', ['auth_admin' => $admin->id]) }}">
                                                    @csrf
                                                    @method('PUT')
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="editModalLabel{{ $admin->id }}">Update
                                                            User {{ $admin->id }}</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <!-- Add form fields here -->
                                                        <div class="form-group">
                                                            <label for="name">User name</label>
                                                            <input type="text" class="form-control" 
                                                                name="name" value="{{ $admin->name }}" required>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="Level Price">Email</label>
                                                            <input type="email" class="form-control" 
                                                                name="email" value="{{ $admin->email }}" required>
                                                        </div>


        

                                                        <div class="form-group" style="position: relative;">

                                                            <small></small>
                                                            <a class="eyes" onclick="repasswordshow()"><i
                                                                    class="fa-solid fa-eye"></i></a>
                                                            <label for="pass">Password (8 characters minimum):</label>
                                                            <input minlength="8" name="password" value="{{ $admin->password }}" type="password"
                                                                required
                                                                class="password-renew form-control appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                placeholder="password">

                                                        </div>


                                                        <div class="form-group">
                                                            <label for="status" class=""
                                                                aria-required="true">Status</label>
                                                            <select class="form-control ui-select ui-select" 
                                                                name="status">
                                                                <option value="published"
                                                                    {{ $admin->status === 'published' ? 'selected' : '' }}>
                                                                    Published</option>
                                                                <option value="pending"
                                                                    {{ $admin->status === 'pending' ? 'selected' : '' }}>
                                                                    Pending</option>
                                                                <option value="draft"
                                                                    {{ $admin->status === 'draft' ? 'selected' : '' }}>Draft
                                                                </option>
                                                            </select>
                                                        </div>


                                                        <div class="form-group">
                                                            <label for="role" class="" aria-required="true">Role</label>
                                                            <select class="form-control ui-select ui-select" 
                                                                name="role">
                                                                <option value="Administrator"  {{ $admin->super_user === 'Administrator' ? 'selected' : '' }}>Administrator
                                                                </option>
                                                                <option value="Acoutant"  {{ $admin->super_user === 'Acoutant' ? 'selected' : '' }}>Acoutant</option>
                                                                <option value="Saleleader"  {{ $admin->super_user === 'Saleleader' ? 'selected' : '' }}>Sale leader</option>
                                                                <option value="Marketing"  {{ $admin->super_user === 'Marketing' ? 'selected' : '' }}>Marketing</option>
                                                                <option value="Operation"  {{ $admin->super_user === 'Operation' ? 'selected' : '' }}>Operation</option>
                                                            </select>
    
                                                        </div>



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

                            </div>
                        </div>
                    @endisset

                    @isset($none)
                        <h2>You do not have access</h2>
                    @endisset

                </div>
            </div>
        </section>
    </main>
@endsection


@section('footer')
    @include('layouts.footerad')
@endsection

@section('script')
    <script type="text/javascript">
        function passwordshow() {
            if (document.getElementById('password-new').type == 'text') {
                document.getElementById('password-new').type = 'password';
            } else {
                document.getElementById('password-new').type = 'text';
            }
        }

        function repasswordshow() {

            if (document.getElementByclassName('password-renew').type == 'text') {
                document.getElementByclassName('password-renew').type = 'password';
            } else {
                document.getElementByclassName('password-renew').type = 'text';
            }
        }
    </script>
        <script>
            $(document).ready(function() {
                const table = $('#table').DataTable({
                    scrollX: true,
                    order: [
                        [0, 'desc']
                    ],
                });
            });
        </script>
@endsection

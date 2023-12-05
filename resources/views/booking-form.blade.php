@extends('layouts.app')

@section('content')
    <main>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="container">

{{-- 
                            <button type="button" class="bg-none" data-bs-toggle="modal" data-bs-target="#createModal">
                                BOOK NOW
                            </button>
                            <!-- Create popup modal -->
                            <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <!-- Add form for Create action -->

                                        <div class="modal-header">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <!-- Add form fields here -->
                                            <div id="app">
                                                <booking-form></booking-form>

                                            </div>
                                            <!-- Add more fields as needed -->
                                        </div>


                                    </div>
                                </div>
                            </div> --}}


                            <div id="app">
                                <form @submit.prevent="submitForm">
                                  <label for="name">Name:</label>
                                  <input v-model="formData.name" type="text" id="name" required>
                                  <button type="submit">Submit</button>
                                </form>
                              </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection

@section('footer')
@endsection

@section('script')
<!-- index.html or your Vue component file -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<!-- index.html or your Vue component file -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      formData: {
        name: '',
      },
    },
    methods: {
      submitForm() {
        // Send data to the API using an HTTP library like axios
        axios.post('api/bookings-store', this.formData)
          .then(response => {
            console.log('Data posted successfully:', response.data);
            // Handle the response as needed
          })
          .catch(error => {
            console.error('Error posting data:', error);
            // Handle the error
          });
      },
    },
  });
</script>


@endsection

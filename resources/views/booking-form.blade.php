
@extends('layouts.app')

@section('header')
@endsection

@section('content')
<main>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="container">
                        <div id="app">
                            <booking-form></booking-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<script> 
import Vue from 'vue';
import BookingForm from './components/BookingForm.vue'; // Update the path

new Vue({
    el: '#app',
    components: {
        BookingForm
    }
});
</script>

@endsection


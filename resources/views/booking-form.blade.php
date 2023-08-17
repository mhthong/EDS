@extends('layouts.app')

@section('content')

<div class="container">
    <div id="booking-form"></div>
</div>
<style>
    /* Define styles for the modal */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .modal-content {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
    }
  </style>
  
{{-- <script>
    var showrooms = @json($showrooms);
    var groupServices = @json($groupServices);
    var services = @json($services);
</script>
 --}}
<script src="{{ mix('js/app.js') }}"></script>

<script>
    import React from 'react';
    import ReactDOM from 'react-dom';
    import BookingForm from './components/BookingForm';

    ReactDOM.render(<BookingForm showrooms={showrooms} groupServices={groupServices} services={services} />, document.getElementById('booking-form'));
</script>
           
@endsection

@section('footer')
@endsection

@section('script')
<script src="/js/showrooms.js" defer></script>
@endsection

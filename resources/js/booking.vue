<template>
    <div>
      <button @click="openPopup">Open Booking Form</button>
      <Popup v-if="showPopup" @close="closePopup">
        <BookingForm />
      </Popup>
    </div>
  </template>
  
  <script>
  import BookingForm from './components/BookingForm.vue'; // Đường dẫn đến BookingForm.vue
  import Popup from './components/Popup.vue'; // Đường dẫn đến Popup.vue
  
  export default {
    components: {
      BookingForm,
      Popup,
    },
    data() {
      return {
        showPopup: false,
      };
    },
    methods: {
      openPopup() {
        this.showPopup = true;
      },
      closePopup() {
        this.showPopup = false;
      },
    },
  };
  </script>
  
  <style>
  /* Thêm kiểu CSS cho popup-overlay, popup-content và close-btn */
  </style>
  
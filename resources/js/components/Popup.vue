<template>
    <div class="popup-overlay" v-if="show">
      <div class="popup-content">
        <button @click="closePopup" class="close-btn">Close</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closePopup() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style>
  /* Thêm kiểu CSS cho popup-overlay, popup-content và close-btn */
  </style>
  
<template>
    <div>
  

          <FullCalendar :options="calendarOptions" />
  
  
      <!--      -->
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { Calendar } from "@fullcalendar/core";
  import FullCalendar from "@fullcalendar/vue";
  import dayGridPlugin from "@fullcalendar/daygrid";
  
  export default {
    components: {
      FullCalendar, // make the <FullCalendar> tag available
    },
    data() {
      return {
   
        calendarOptions: {
          plugins: [dayGridPlugin],
          initialView: "dayGridMonth",
          weekends: true,
          events: [], // Sự kiện sẽ được thêm vào đây
          eventTimeFormat: {
          hour: 'numeric',
          minute: '2-digit',
          separator: ' - ',
          meridiem: 'short',
        },
        },
        /*   selectedOption: "option1", */
      };
    },
  
    watch: {
    
    },
  
    computed: {

      /*     totalSelectedServicesPrice() {
      return this.calculateTotalPrice(); // Tính tổng giá trị dịch vụ đã chọn
    }, */
    },
    methods: {
  loadEvents() {
    axios.get("/api/all-data").then((response) => {
      this.calendarOptions.events = response.data.map((event) => {
        const startTime = new Date(event.date + 'T' + event.time);
        const endTime = new Date(event.date + 'T' + event.time_end);

        console.log("Start Time:", startTime);
        console.log("End Time:", endTime);

        return {
          title: event.status,
          start: startTime,
          end: endTime
        };
      });
    });
  },
},



  mounted() {
    // Gọi phương thức loadEvents khi component được tạo ra
    this.loadEvents();
    this.calendar = new FullCalendar.Calendar(this.$refs.calendar, {
      plugins: [dayGridPlugin],
      // Cấu hình khác của FullCalendar
    });

    // Render lịch
    this.calendar.render();


  },


  };
  </script>
  

  
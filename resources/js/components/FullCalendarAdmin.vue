<template>
  <div style="
    height: 100%;
">
    <div class="col-3 m-2 ">
      <select class="form-control "  id="showroomSelect" v-model="selectedShowroom" @change="loadEvents">
        <option :value="0" selected > Showroom</option>
        <option v-for="showroom in showrooms" :key="showroom.id" :value="showroom.id" >{{ showroom.Name }}</option>
      </select>
    </div>

    <div class="col-3 m-2" >
      <select class="form-control "  id="showroomSelect" v-model="selectedArtist" @change="loadEvents" :disabled="artistId !== null">
        <option :value="0" selected > Artists</option>
        <option v-for="artist in artists" :key="artist.id" :value="artist.id" >{{ artist.name }}</option>
      </select>
    </div>

    <div class="col-3 m-2 ">
      <select class="form-control " v-model="selectedStatus" @change="loadEvents">
            <option value="None">Status</option>
            <option value="Waiting" >Waiting</option>
            <option value="Done" >Done</option>
            <option value="Cancel">Cancel</option>
            <option value="Refund">Refund</option>
        </select>
    </div>

    <div class="col-12" v-if="step === 'FullCalendar'">
      <FullCalendar :options="calendarOptions" />




    </div>

    <div class="col-12" v-if="step === 'none'">
      <div class="mb-4"><i >Please select Showroom and Artists to display the Calendar</i></div>
      <div class="FullCalendarNone">
        <FullCalendar :options="calendarOptionsNone" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Calendar } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      artists: [],
      artistId: null,
      selectedArtist: 0,
      showrooms: [], // Thêm showrooms và selectedShowroom vào phần data chính
      selectedShowroom: 0,
      step: "none",
      selectedStatus:"None",
  
      data:[],
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        weekends: true,
        events: [],
        eventTimeFormat: {
          hour: "numeric",
          minute: "2-digit",
          separator: " - ",
          meridiem: "short",
        },
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        selectable: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventContent: this.customEventContent,
      },
      calendarOptionsNone: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        weekends: true,
        events: [],
        eventTimeFormat: {
          hour: "numeric",
          minute: "2-digit",
          separator: " - ",
          meridiem: "short",
        },
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        selectable: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventContent: this.customEventContent,
      },
    };
  },

  methods: {
    fetchShowrooms() {
      axios
        .get("/api/showrooms")
        .then((response) => {
          this.showrooms = response.data;

        })
        .catch((error) => {
          console.error("Error fetching showrooms:", error);
        });
    },

    fetchArtists() {
      // Gọi API và cập nhật biến apiData với dữ liệu từ API
      axios
        .get(`/api/artist`)
        .then((response) => {
          this.artists = response.data;

        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    loadEvents() {
  let filteredEvents = []; // Đặt biến ở đầu hàm

  if (this.artistId !== null) {
    this.selectedArtist = this.$root.artistId;
  }

  if (
    this.selectedArtist == 0 &&
    this.selectedShowroom == 0 &&
    this.selectedStatus == "None"
  ) {
    this.step = "none";
    return;
  } else {
    this.step = "FullCalendar";
  }

  axios.get("/api/all-data").then((response) => {
    this.data = response.data;
    console.log(this.selectedArtist);

    filteredEvents = response.data.filter((event) => {
      // Kiểm tra nếu selectedShowroom và selectedArtist là 0 (tức là không có lựa chọn cụ thể) hoặc trùng với giá trị của sự kiện
      const showroomMatch =
        this.selectedShowroom === 0 || event.ShowroomID === this.selectedShowroom;
      const artistMatch =
        this.selectedArtist === 0 || event.ArtistID == this.selectedArtist;
      const StatusMatch =
        this.selectedStatus === "None" || event.status === this.selectedStatus;
      let ActionMatch = true;

      // Kiểm tra ActionMatch chỉ khi artistId khác null
      if (this.artistId !== null) {
        ActionMatch = event.action === "approved";
      }

      // Sự kiện sẽ được bao gồm nếu cả showroomMatch, artistMatch, StatusMatch và ActionMatch đều là true
      return showroomMatch && artistMatch && StatusMatch && ActionMatch;
    });

    console.log("filteredEvents", filteredEvents);

    this.calendarOptions.events = filteredEvents.map((event) => {
      const startTime = new Date(event.date + "T" + event.time);
      const endTime = new Date(event.date + "T" + event.time_end);
      const serviceNames = event.services.map((service) => service.Name).join(", ");

      return {
        id: event.id,
        title: event.status,
        start: startTime,
        end: endTime,
        extendedProps: { // Thêm thông tin mở rộng
          artist: event.artist.name, // Tên nghệ sĩ
          showroom: event.showroom.Name, // Tên showroom
          services: event.services.map((service) => service.Name).join(", "), // Dịch vụ
          price: event.price.Total_price, // Giá
          paymentType: event.payment.payment_type, // Loại thanh toán
        },
      };
    });

  });
},


    customEventContent(arg) {
      const startTime = arg.event.start.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      });
      const endTime = arg.event.end.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      });

      const currentUrl = window.location.href;

      return {
        html: `
      
          <div class="fc-content ${arg.event.title}">
            <a href="${currentUrl}/books/${arg.event.id}/edit" class="text-white">
            <div class="fc-content-main">
              <span class="fc-status">${arg.event.extendedProps.showroom} </span><br>
            <span class="fc-status">${arg.event.extendedProps.services} </span><br>
            <span class="fc-status"> ${arg.event.title}</span><br>
            <span class="fc-time">${startTime} - ${endTime}</span>
            </div>
          </a>
          </div>
   
        `,
      };
    },




  },

  mounted() {
    this.artistId = this.$root.artistId;
    if(this.artistId !== null) {
      this.selectedArtist = this.artistId
    }
    this.loadEvents();
    this.fetchShowrooms();
    this.fetchArtists();
    console.log("Status",this.selectedStatus);
  },
};
</script>

<style scoped>
.event-info {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 999;
}
</style>
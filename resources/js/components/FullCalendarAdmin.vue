<template>
  <div style="height: 100%">
    <div class="col-3 m-2">
      <select
        class="form-control"
        id="showroomSelect"
        v-model="selectedShowroom"
        @change="runFullcalendar"
      >
        <option :value="0" selected>Showroom</option>
        <option
          v-for="showroom in showrooms"
          :key="showroom.id"
          :value="showroom.id"
        >
          {{ showroom.Name }}
        </option>
      </select>
    </div>

    <div class="col-3 m-2">
      <select
        class="form-control"
        id="showroomSelect"
        v-model="selectedArtist"
        @change="runFullcalendar"
        :disabled="artistId !== null || this.selectedShowroom === 0"
      >
        <option :value="0" selected>Artists</option>
        <option v-for="artist in artists" :key="artist.id" :value="artist.id">
          {{ artist.name }}
        </option>
      </select>
    </div>

    <div class="col-3 m-2">
      <select
        class="form-control"
        v-model="selectedStatus"
        @change="runFullcalendar"
        :disabled="this.selectedShowroom === 0"
      >
        <option value="None">Status</option>
        <option value="Waiting">Waiting</option>
        <option value="Partial Done">Partial Done</option>
        <option value="Done">Done</option>
        <option value="Cancel">Cancel</option>
        <option value="Refund">Refund</option>
      </select>
    </div>

    <div class="col-12" v-if="step === 'FullCalendar'">
      <FullCalendar
        :options="calendarOptions"
        @viewRender="handleViewRender"
        @datesSet="handleDatesSet"
      />

      <div v-if="popupVisible" class="popup">
        <div class="popup-content col-8 col-md-6">
          <div class="header text-center pb-4">
            <h5>Customize daily activity status</h5>
          </div>
          <select
            class="form-control mb-3"
            id="showroomSelect"
            v-model="selectedShowroom"
            @change="runFullcalendar"
          >
            <option
              v-for="showroom in showrooms"
              :key="showroom.id"
              :value="showroom.id"
            >
              {{ showroom.Name }}
            </option>
          </select>

          <select
        class="form-control mb-3"
        id="activeSelect"
        v-model="selectedActive"
      >
        <option value="none">Select active status</option>
        <option value="1">Active</option>
        <option value="0">None Active</option>
      </select>


          <input
            class="form-control mb-3"
            type="date"
            v-model="popupInputData"
            placeholder="Enter data"
          />
          <button class="custom-btn bnt-16" type="submit" @click="saveData" :disabled="this.selectedActive == 'none' || this.selectedShowroom == 0 || this.adminId === null ">
            Save
          </button>
          <button class="custom-btn bnt-16" @click="closePopup">Cancel</button>
        </div>
      </div>
    </div>

    <div class="col-12" v-if="step === 'none'">
      <div class="mb-4">
        <i>Please select Showroom and Artists to display the Calendar</i>
      </div>
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
      adminId: null,
      artistId: null,
      employeeId: null,
      manage_supers:null,
      selectedArtist: 0,
      showroomschedule: [],
      showrooms: [],
      selectedShowroom: 0,
      selectedActive: "none",
      step: "none",
      selectedStatus: "None",
      data: [],
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
        displayEventTime: false, // Optionally hide event times
        dateClick: (info) => {
          // Kiểm tra nếu adminId là null
          if (this.adminId !== null && (this.manage_supers == 0 || this.manage_supers == 1 || this.manage_supers == 4)) {
                  this.popupInputData = info.dateStr;
                  this.openPopup();
              } else {
                  // Nếu adminId là null, có thể hiển thị một thông báo hoặc không làm gì cả
                
              }
        },
        datesSet: (info) => {
          const newViewStart = moment(info.view.currentStart)
            .subtract(10, "days")
            .format("YYYY-MM-DD");
          const newViewEnd = moment(info.view.currentEnd)
            .add(10, "days")
            .format("YYYY-MM-DD");

          // Kiểm tra xem thời gian đã thay đổi đủ nhiều hay không
          if (
            newViewStart !== this.currentViewStart ||
            newViewEnd !== this.currentViewEnd
          ) {
            this.currentViewStart = newViewStart;
            this.currentViewEnd = newViewEnd;

            // Gọi API chỉ khi thời gian thay đổi đáng kể
            this.runFullcalendar();
          }
        },

        eventContent: this.customEventContent,
      },

      selectedDate: null,
      inputData: "",
      popupVisible: false,
      popupInputData: "",
      currentViewStart: null,
      currentViewEnd: null,
      activeDays: [],
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
        dayRender: this.handleDayRender,
      },
    };
  },

  methods: {
    openPopup() {
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    },

    handleViewRender(view) {
      const start = view.start.format(); // Ngày bắt đầu
      const end = view.end.format(); // Ngày kết thúc

      // Đoạn mã xử lý khi view được render
    },

    handleDatesSet(info) {
      const currentMonth = info.view.currentStart.getMonth() + 1; // Tháng bắt đầu từ 0
      const currentYear = info.view.currentStart.getFullYear();
    },

    saveData() {
      // Tạo một đối tượng dữ liệu để gửi lên server
      const postData = {
        showroomId: this.selectedShowroom,
        activeStatus: this.selectedActive,
        inputData: this.popupInputData,
      };

      // Gửi yêu cầu POST đến API để lưu dữ liệu
      axios.post('/api/save-data', postData)
        .then(response => {
  
          // Thực hiện các bước cần thiết sau khi lưu dữ liệu thành công
         
          this.selectedActive = "none";
          this.runFullcalendar(); // Sử dụng arrow function để bảo đảm this
          this.closePopup(); // Đóng popup sau khi lưu thành công
        })
        .catch(error => {
     
          console.error('Error saving data:', error);
          // Xử lý lỗi nếu có
        });
    },

    async fetchData() {
      try {
        const response = await axios.get(
          `/api/fullcalendar/${this.currentViewStart}/${this.currentViewEnd}/${this.selectedShowroom}`
        );
        this.data = response.data;
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    },

    async runFullcalendar() {
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

      if (this.currentViewStart && this.currentViewEnd) {
        Promise.all([await this.fetchData()]).then(() => {
          this.loadEvents();
        });
      }
    },

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
      axios
        .get(`/api/artist`)
        .then((response) => {
          this.artists = response.data;
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    fetchShowroomschedule() {
      axios
        .get(`/api/showroomschedule/${this.selectedShowroom}`)
        .then((response) => {
          this.showroomschedule = response.data;
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    handleDateSelect(info) {
      this.selectedDate = info.start;
    },

    getActiveDays() {
      return this.showroomschedule
        .filter((item) => item.active === 1)
        .map((item) => item.day.toLowerCase());
    },

    loadEvents() {
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

      if (this.selectedShowroom !== 0) {
        this.fetchShowroomschedule();
      }

      // Flatten the nested structure into a flat array of events
      const flatEvents = Object.keys(this.data).flatMap((date) =>
        Object.keys(this.data[date]).flatMap((showroomId) =>
          this.data[date][showroomId].bookingData.map((booking) => ({
            ...booking,
            date: date, // Add the date property to each booking
            showroomId: showroomId, // Add the showroomId property to each booking
          }))
        )
      );

      const flatEventsActive = Object.keys(this.data).flatMap((date) =>
        Object.keys(this.data[date]).flatMap((showroomId) => {
          const dailyData = this.data[date][showroomId].dailyData;

          // Check if dailyData i
          return [
            {
              ...dailyData,
              date: date, // Add the date property to each boo
            },
          ];
        })
      );

      // Filter the flattened events
      const filteredEvents = flatEvents.filter((event) => {
        const artistMatch =
          this.selectedArtist === 0 ||
          parseInt(event.ArtistID) === this.selectedArtist;
        const statusMatch =
          this.selectedStatus === "None" ||
          event.status === this.selectedStatus;
        let actionMatch = true;

        if (this.artistId !== null) {
          actionMatch = event.action === "approved";
        }

        return artistMatch && statusMatch && actionMatch;
      });

      // Map the filtered events to FullCalendar format
      const filteredEventsRef = filteredEvents.map((event) => {
        const startTime = new Date(event.date + "T" + event.time);
        const endTime = new Date(event.date + "T" + event.time_end);
        const serviceNames = event.services
          .map((service) => service.Name)
          .join(", ");

        return {
          id: event.id,
          title: event.status,
          start: startTime,
          end: endTime,
          extendedProps: {
            title: event.status,
            artist: event.artist.name,
            source: event.source_name,
            get: event.get.name,
            showroom: event.showroom.Name,
            services: serviceNames,
            startTime: moment(startTime).format("hh:mm A"),
            endTime: moment(endTime).format("hh:mm A"),
          },
        };
      });

      /*       this.calendarOptions.events */
      // Map the background events to FullCalendar format
      // Assuming this.data is your data structure
      const backgroundEvents = Object.keys(this.data).flatMap((date) => {
        const dailyData = this.data[date];
        const isDayActive = Object.values(dailyData).some((showroomData) => {
          return parseInt(showroomData.dailyData.active) === 0;
        });

        if (!isDayActive) {
          return []; // No background event for this day
        }

        const startTime = new Date(date + "T00:01:00");
        const endTime = new Date(date + "T23:59:00");

        return [
          {
            id: "background_" + date,
            title: "active_none",
            start: startTime,
            end: endTime,
            extendedProps: {
              title: "active_none",
              artist: "none",
              source: "none",
              get: "none",
              showroom: "none",
              services: "none",
              startTime: "none",
              endTime: "none",
            },
          },
        ];
      });

      // Combine background events with other events
      /* this.calendarOptions.events = backgroundEvents; */
      this.calendarOptions.events = filteredEventsRef.concat(backgroundEvents);

      // ... rest of your code
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
            <a href="${currentUrl}/books/${arg.event.id}/edit" style="color: white">
            <div class="fc-content-main">
            <span class="fc-status">Booking person : ${arg.event.extendedProps.source} </span><br>
            <span class="fc-status">Client : ${arg.event.extendedProps.get} </span><br>
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

  created() {
    this.activeDays = this.getActiveDays();
  },

  mounted() {
    this.adminId = this.$root.adminId;

    this.artistId = this.$root.artistId;

    this.employeeId = this.$root.employeeId;

    this.manage_supers = this.$root.manage_supers;


    if (this.artistId !== null) {
      this.selectedArtist = this.artistId;
    }
    this.fetchShowrooms();
    this.fetchArtists();
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

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}


.custom-btn {
  width: 130px;
  height: 40px;
  color: #000000;
  border-radius: 5px;
  padding: 10px 25px;
  margin-top: 1rem;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

/* 16 */
.btn-16 {
  border: none;
  color: #000;
}
.btn-16:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  direction: rtl;
  z-index: -1;
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}
.btn-16:hover {
  color: #000;
}
.btn-16:hover:after {
  left: auto;
  right: 0;
  width: 100%;
}
.btn-16:active {
  top: 2px;
}



</style>

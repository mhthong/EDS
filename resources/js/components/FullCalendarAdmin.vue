<template>
  <div style="height: 100%">
    <div class="col-3 m-2">
      <select
        class="form-control"
        id="showroomSelect"
        v-model="selectedShowroom"
        @change="onChange(selectedShowroom, selectedArtist)"
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
        @change="onChange(selectedShowroom, selectedArtist)"
        :disabled="artistId !== null"
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
      >
        <option value="None">Status</option>
        <option value="Waiting">Waiting</option>
        <option value="Partial Done">Partial Done</option>
        <option value="Reschedule">Reschedule</option>
        <option value="Done">Done</option>
        <option value="Cancel">Cancel</option>
        <option value="Refund">Refund</option>
        <option value="Unidentified">Unidentified</option>
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
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1rem;
            "
          >
            <button
              class="custom-btn bnt-16"
              type="button"
              @click="toggleStatus"
              :class="{ active: popupnone === 'active' }"
            >
              Status
            </button>
            <button
              class="custom-btn bnt-16"
              type="button"
              @click="toggleApproval"
              :class="{ approved: popupnone === 'Approved' }"
            >
              Approved
            </button>
          </div>

          <template v-if="popupnone === 'active'">
            <div class="header text-center pb-4">
              <h5>Customize daily activity status</h5>
            </div>

            <select
              class="form-control mb-3"
              id="showroomSelect"
              v-model="selectedShowroomPopup"
              @change="updateArtistshowroom(selectedShowroomPopup, 0)"
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

            <div
              class="mb-3"
              style="display: flex; flex-wrap: wrap; gap: 1rem"
              v-if="selectedShowroomPopup !== 0"
            >
              <div
                style="width: 100%"
                v-for="artist in artists"
                :key="artist.id"
              >
                <label class="label01 m-0" :for="'artist_' + artist.id">
                  <div style="width: 100%">{{ artist.name }}</div>
                  <select
                    class="form-control"
                    v-model="selectedActive[artist.id]"
                  >
                    <option value="undefined" selected>Unidentified</option>
                    <option value="1">Active</option>
                    <option value="0">None Active</option>
                  </select>
                  <input
                    type="text"
                    class="form-control"
                    v-model="note[artist.id]"
                    placeholder="Note"
                  />
                </label>
              </div>
            </div>

            <input
              class="form-control mb-3"
              type="date"
              v-model="popupInputData"
              placeholder="Enter data"
            />
            <button
              class="custom-btn bnt-16"
              type="submit"
              @click="saveData"
              :disabled="
                this.selectedActive == 'none' ||
                this.selectedShowroomPopup == 0 ||
                this.adminId === null
              "
            >
              Save
            </button>
            <button class="custom-btn bnt-16" @click="closePopup">
              Cancel
            </button>
          </template>

          <template v-if="popupnone === 'Approved'">
            <div class="header text-center pb-4">
              <h5>Approved daily</h5>
            </div>
            <select
              class="form-control mb-3"
              id="showroomSelect"
              v-model="selectedShowroomPopup"
              @change="
                updateArtistshowroom(
                  selectedShowroomPopup,
                  selectedApprovedArtist
                )
              "
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

            <select
              class="form-control mb-3"
              id="showroomSelect"
              v-model="selectedApprovedArtist"
              @change="runFullcalendar"
              :disabled="artistId !== null || this.selectedShowroomPopup == 0"
            >
              <option :value="0" selected>Artists</option>
              <option
                v-for="artist in artists"
                :key="artist.id"
                :value="artist.id"
              >
                {{ artist.name }}
              </option>
            </select>

            <select
              class="form-control mb-3"
              id="activeSelect"
              v-model="selectedApproved"
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
            </select>

            <input
              class="form-control mb-3"
              type="date"
              v-model="popupInputData"
              placeholder="Enter data"
            />
            <button
              class="custom-btn bnt-16"
              type="submit"
              @click="saveDataApproved"
              :disabled="
                this.selectedShowroomPopup == 0 || this.adminId === null
              "
            >
              Save
            </button>
            <button class="custom-btn bnt-16" @click="closePopup">
              Cancel
            </button>
          </template>
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
import moment from "moment";

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      artists: [],
      artistsnone: [],
      adminId: null,
      artistId: null,
      employeeId: null,
      manage_supers: null,
      selectedArtist: 0,
      showroomschedule: [],
      showrooms: [],
      showroomsnone: [],
      selectedStatusArtist: [],
      selectedShowroom: 0,
      selectedShowroomPopup: 0,
      // Mảng selectedActive để lưu trạng thái selectedActive của từng artist
      selectedActive: {},
      // Mảng note để lưu ghi chú của từng artist
      note: {},
      step: "FullCalendar",
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
          if (
            this.adminId !== null &&
            (this.manage_supers == 0 ||
              this.manage_supers == 1 ||
              this.manage_supers == 4)
          ) {
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
        dayCellContent: this.customDayHeaderContent,
        eventContent: this.customEventContent,
      },

      selectedDate: null,
      inputData: "",
      popupVisible: false,
      popupInputData: "",
      currentViewStart: null,
      currentViewEnd: null,
      activeDays: [],
      popupnone: "active",
      selectedApproved: "pending",
      selectedApprovedArtist: 0,
      artistshowroom: [],
    };
  },

  methods: {
    onChange(showroom, artist) {
      this.runFullcalendar();
      this.updateArtistshowroom(showroom, artist);
    },

    updateArtistshowroom(showroom, artist) {
      if (parseInt(showroom) !== 0) {
        this.artists = this.artistshowroom
          .filter(
            (item) =>
              parseInt(item.showroom_id) === parseInt(showroom) &&
              item.artist.status == "published"
          ) // Lọc ra các dữ liệu có showroom_id là 21
          .map((item) => item.artist); // Chỉ trích xuất thông tin của artist
      } else {
        this.artists = this.artistsnone;
      }

      if (parseInt(artist) !== 0) {
        this.showrooms = this.artistshowroom
          .filter(
            (item) =>
              parseInt(item.artist_id) === parseInt(artist) &&
              item.showroom.status == "published"
          ) // Lọc ra các dữ liệu có artist_id là 21
          .map((item) => item.showroom); // Chỉ trích xuất thông tin của showroom
      } else {
        this.showrooms = this.showroomsnone;
      }
    },

    toggleAllSelection() {
      // Khi checkbox "All" được nhấp, cập nhật tất cả các checkbox nghệ sĩ
      this.allSelected = !this.allSelected;
    },

    customDayHeaderContent(arg) {
      const date = moment(arg.date).format("YYYY-MM-DD");
      const day = arg.date.getDate();

      if (
        this.artistId !== null ||
        (this.adminId !== null && parseInt(this.manage_supers) === 3) ||
        this.employeeId !== null
      ) {
        return {
          html: `<div class="custom-day-header">
          <div>${day}</div>
          </div>`,
        };
      }

      // Lọc dữ liệu của bạn để chỉ lấy các sự kiện xảy ra trong ngày hiện tại
      const eventsForCurrentDate = Object.keys(this.data[date] || {}).flatMap(
        (showroomId) =>
          this.data[date][showroomId].bookingData.map((booking) => ({
            ...booking,
            showroomId: showroomId,
          }))
      );

      const totalPriceByArtistsId = {};
      const Action = {};

      eventsForCurrentDate.forEach((event) => {
        const key = `${event.ArtistID}_${event.showroomId}`; // Generate a unique key based on showroomId and ArtistID

        // Kiểm tra xem showroomId và ArtistID của sự kiện có khớp với showroom và artist được chọn không
        if (
          (parseInt(this.selectedShowroom) === parseInt(event.showroomId) ||
            parseInt(this.selectedShowroom) === 0) &&
          (parseInt(this.selectedArtist) === parseInt(event.ArtistID) ||
            parseInt(this.selectedArtist) === 0)
        ) {
          // Thêm giá của sự kiện vào tổng giá của showroom tương ứng
          if (event.status == "Waiting" || event.status == "Done") {
            totalPriceByArtistsId[key] =
              (totalPriceByArtistsId[key] || 0) +
              parseInt(event.price.servies_price);
          } else if (event.status == "Cancel") {
            totalPriceByArtistsId[key] =
              (totalPriceByArtistsId[key] || 0) +
              parseInt(event.price.Deposit_price);
          } else if (
            event.status == "Partial Done" ||
            event.status == "Refund"
          ) {
            totalPriceByArtistsId[key] =
              (totalPriceByArtistsId[key] || 0) +
              parseInt(event.price.Total_price);
          }

          // Xác định trường 'action' dựa trên giá trị của event.action
          Action[key] = event.action === "pending" ? "pending" : "approved";
        }
      });

      // Tạo một chuỗi HTML từ các tổng giá của showroom
      let eventsHtml = "";

      Object.keys(totalPriceByArtistsId).forEach((Id) => {
        const artistName = this.getArtistNameById(Id); // Thay thế getArtistNameById bằng hàm thích hợp trong ứng dụng của bạn

        const artist_pay = this.getArtistPayById(Id); // Thay thế getArtistNameById bằng hàm thích hợp trong ứng dụng của bạn

        const showroomName = this.getshowroomNameById(Id);

        // Kiểm tra giá trị của Action[Id]
        const action = Action[Id] || ""; // Tránh lỗi nếu không có giá trị action

        // Tạo chuỗi HTML dựa trên giá trị của Action[Id]
        let iconHtml = "";
        if (action === "approved") {
          iconHtml = `<i class="fa-solid fa-circle-check approved_icon" style="color: #0400eb;"></i>`;
        } else {
          iconHtml = `<i class="fa-solid fa-circle-xmark pending_icon" style="color: #ff0000;"></i>`;
        }

        if (parseInt(totalPriceByArtistsId[Id]) >= 1200) {
          eventsHtml += `<div class="date-revenue-price-info revenue-true" style="background: #c4ebfa;   padding: 1rem; border-radius: 10px; margin-bottom: 5px; position: relative;">
           <div class="icon-revenue" style="  position: absolute;  right: 0.15rem; top: 0.1rem;">${iconHtml}</div>
             <p> Artist : <b class="none_text artist_pay_${artist_pay}">${artistName}</b>
            </br> 
            Location : <b class="none_text">${showroomName}</b>
            </br> 
            Revenue : <b class="none_text">${totalPriceByArtistsId[Id]}</b></p></div>`;
        } else if (parseInt(totalPriceByArtistsId[Id]) >= 1000) {
          eventsHtml += `<div class="date-revenue-price-info revenue-true" style="background: #c4fad7;   padding: 1rem; border-radius: 10px; margin-bottom: 5px; position: relative;">
            <div class="icon-revenue" style="  position: absolute;  right: 0.15rem; top: 0.1rem;">${iconHtml}</div>
   
            <p> Artist : <b class="none_text artist_pay_${artist_pay}">${artistName}</b>
            </br> 
            Location : <b class="none_text">${showroomName}</b>
            </br> 
            Revenue : <b class="none_text">${totalPriceByArtistsId[Id]}</b></p></div>`;
        } else {
          eventsHtml += `<div class="date-revenue-price-info revenue-false" style="background: #fac4c4;   padding: 1rem; border-radius: 10px; margin-bottom: 5px; position: relative;">
            <div class="icon-revenue" style="  position: absolute;  right: 0.15rem; top: 0.1rem;">${iconHtml}</div>
            <p> Artist : <b class="none_text artist_pay_${artist_pay}">${artistName}</b>
            </br> 
            Location : <b class="none_text">${showroomName}</b>
            </br> 
            Revenue : <b class="none_text">${totalPriceByArtistsId[Id]}</b></p></div>`;
        }
      });

      // Trả về nội dung đã được tạo ra
      return {
        html: `<div class="custom-day-header">
          <div>${day}</div>
          <div class="date-revenue-price" ${eventsHtml}<div>
          </div>`,
      };
    },

    getshowroomNameById(showroom) {
      const showroomid = showroom.split("_")[1];
      // Get the part after the underscore
      // Lấy thông tin về nghệ sĩ từ nguồn dữ liệu của bạn
      // Đây chỉ là một ví dụ, bạn cần điều chỉnh mã này để phù hợp với cách bạn lưu trữ dữ liệu
      const showroomName = this.showrooms.find(
        (artist) => parseInt(artist.id) === parseInt(showroomid)
      );

      // Kiểm tra xem nghệ sĩ có tồn tại hay không
      if (showroomName) {
        return showroomName.Name; // Trả về tên của nghệ sĩ
      } else {
        return "Unknown"; // Trả về "Unknown" nếu không tìm thấy nghệ sĩ
      }
    },

    getArtistNameById(artistId) {
      const numberPart = artistId.split("_")[1];
      // Get the part after the underscore
      // Lấy thông tin về nghệ sĩ từ nguồn dữ liệu của bạn
      // Đây chỉ là một ví dụ, bạn cần điều chỉnh mã này để phù hợp với cách bạn lưu trữ dữ liệu
      const artist = this.artists.find(
        (artist) => parseInt(artist.id) === parseInt(artistId)
      );

      // Kiểm tra xem nghệ sĩ có tồn tại hay không
      if (artist) {
        return artist.name; // Trả về tên của nghệ sĩ
      } else {
        return "Unknown"; // Trả về "Unknown" nếu không tìm thấy nghệ sĩ
      }
    },

    getArtistPayById(artistId) {
      const numberPart = artistId.split("_")[1];
      // Get the part after the underscore
      // Lấy thông tin về nghệ sĩ từ nguồn dữ liệu của bạn
      // Đây chỉ là một ví dụ, bạn cần điều chỉnh mã này để phù hợp với cách bạn lưu trữ dữ liệu
      const artist = this.artists.find(
        (artist) => parseInt(artist.id) === parseInt(artistId)
      );

      // Kiểm tra xem nghệ sĩ có tồn tại hay không
      if (artist) {
        return artist.artist_pay; // Trả về tên của nghệ sĩ
      } else {
        return "Unknown"; // Trả về "Unknown" nếu không tìm thấy nghệ sĩ
      }
    },

    openPopup() {
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    },

    toggleStatus() {
      if (this.popupnone !== "active") {
        this.popupnone = "active"; // Use assignment operator to update the variable
      }
    },
    toggleApproval() {
      if (this.popupnone !== "Approved") {
        this.popupnone = "Approved"; // Use assignment operator to update the variable
        this.selectedApprovedArtist = 0;
      }
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

      if (
        this.adminId !== null &&
        (this.manage_supers == 0 ||
          this.manage_supers == 1 ||
          this.manage_supers == 4)
      ) {
        // Tạo một đối tượng dữ liệu để gửi lên server
        const artistData = this.artists.map((artist) => {
          return {
            id: artist.id,
            selectedActive: this.selectedActive[artist.id],
            note: this.note[artist.id],
          };
        });

        // Hiển thị mảng artistData trong console

        const postData = {
          showroomId: this.selectedShowroomPopup,
          inputData: this.popupInputData,
          artistId: artistData,
        };

        // Gửi yêu cầu POST đến API để lưu dữ liệu
        axios
          .post("/api/save-data", postData)
          .then((response) => {
            // Thực hiện các bước cần thiết sau khi lưu dữ liệu thành công

            this.selectedActive = "none";
            this.selectedStatusArtist = [];
            this.runFullcalendar(); // Sử dụng arrow function để bảo đảm this
            this.closePopup(); // Đóng popup sau khi lưu thành công
          })
          .catch((error) => {
            console.error("Error saving data:", error);
            // Xử lý lỗi nếu có
          });
      } else {
        this.closePopup(); // Đóng popup sau khi lưu thành công
      }
    },
    saveDataApproved() {
      // Tạo một đối tượng dữ liệu để gửi lên server
      const postData = {
        showroomId: this.selectedShowroomPopup,
        Approved: this.selectedApproved,
        inputData: this.popupInputData,
        artistId: this.selectedApprovedArtist,
      };

      // Gửi yêu cầu POST đến API để lưu dữ liệu
      axios
        .post("/api/save-data-approved", postData)
        .then((response) => {
          // Thực hiện các bước cần thiết sau khi lưu dữ liệu thành công

          this.selectedApproved = "pending";
          this.selectedApprovedArtist = [];
          this.runFullcalendar(); // Sử dụng arrow function để bảo đảm this
          this.closePopup(); // Đóng popup sau khi lưu thành công
        })
        .catch((error) => {
          console.error("Error saving data:", error);
          // Xử lý lỗi nếu có
        });
    },

    async fetchData() {
      try {
        const response = await axios.get(
          `/api/fullcalendar/${this.currentViewStart}/${this.currentViewEnd}/${this.selectedShowroom}/${this.selectedArtist}`
        );
        this.data = response.data;
      } catch (error) {}
    },

    async runFullcalendar() {
      if (
        this.selectedArtist == 0 &&
        this.selectedShowroom == 0 &&
        this.selectedStatus == "None"
      ) {
        this.step = "FullCalendar";
      } else {
        this.step = "FullCalendar";
      }

      if (this.currentViewStart && this.currentViewEnd) {
        Promise.all([await this.fetchData()]).then(() => {
          this.loadEvents();
        });
      }
    },

    async fetchShowrooms() {
      await axios
        .get("/api/showrooms")
        .then((response) => {
          this.showrooms = response.data;
          this.showroomsnone = response.data;
        })
        .catch((error) => {
          console.error("Error fetching showrooms:", error);
        });
    },

    async fetchArtists() {
      await axios
        .get(`/api/artist`)
        .then((response) => {
          this.artists = response.data;
          this.artistsnone = response.data;
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    async fetchArtistsShowrooms() {
      await axios
        .get(`/api/artistshowroom`)
        .then((response) => {
          this.artistshowroom = response.data;
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    async fetchShowroomschedule() {
      await axios
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
      this.fetchShowroomschedule();

      console.log(this.data);
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
          parseInt(event.ArtistID) === parseInt(this.selectedArtist);
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

          console.log(event);
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
            price: event.price.servies_price,
            action: event.action,
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
              price: 0,
              action: "none",
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
      if (
        parseInt(this.selectedShowroom) === 0 &&
        parseInt(this.selectedArtist) === 0 &&
        this.adminId !== null &&
        parseInt(this.manage_supers) === 4
      ) {
        return;
      }

      const startTime = arg.event.start
        ? arg.event.start.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          })
        : "";
      const endTime = arg.event.end
        ? arg.event.end.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          })
        : "";

      const currentUrl = window.location.href;



      return {
        html: `
          <div class="fc-content ${arg.event.title}">
            <a href="${currentUrl}/books/${arg.event.id}/edit" style="color: white" target="_blank">
            <div class="fc-content-main">
            <span class="fc-status">Booking person : ${arg.event.extendedProps.source} </span><br>
            <span class="fc-status">Client : ${arg.event.extendedProps.get} </span><br>
            <span class="fc-status">${arg.event.extendedProps.showroom} </span><br>
            <span class="fc-status">${arg.event.extendedProps.services} </span><br>
            <span class="fc-status">${arg.event.extendedProps.price} </span><br>
            <span class="fc-status">${arg.event.extendedProps.action} </span><br>
            <span class="fc-status"> ${arg.event.title}</span><br>
            <span class="fc-time">${startTime} - ${endTime}</span>
            </div>
            </a>
          </div>
        `,
      };
    },
  },

  computed: {
    allSelected: {
      get() {
        // Kiểm tra xem tất cả các nghệ sĩ đã được chọn hay không
      },
      set(value) {
        // Khi checkbox "All" được thay đổi, cập nhật tất cả các checkbox nghệ sĩ
        if (value) {
          const allArtistIds = [...this.artists.map((artist) => artist.id), 0];
          this.selectedStatusArtist = allArtistIds;
        } else {
          this.selectedStatusArtist = [];
        }
      },
    },
  },

  created() {
    this.activeDays = this.getActiveDays();
  },
  watch: {
    popupnone(newValue, oldValue) {
      // Log when the value of popupnone changes
    },
  },

  mounted() {
    // Chuyển đổi chuỗi sang số nguyên
    this.adminId = this.$root.adminId;

    this.artistId = this.$root.artistId;

    this.employeeId = this.$root.employeeId;

    this.manage_supers = this.$root.manage_supers;

    if (this.artistId !== null) {
      this.selectedArtist = this.artistId;
    }

    this.fetchArtists();

    this.fetchShowrooms();

    this.fetchArtistsShowrooms();

    this.runFullcalendar();
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

.Unidentified {
  background-color: #9f9fa7 !important;
  color: #ffffff;
}

.date-revenue-price {
  padding: 0.5rem;
  color: black;
}

.revenue-false {
  background: #fac4c4;
}
.fc-daygrid-day-top a {
  width: 100%;
  padding: 0.5rem;
}

.fc-daygrid-day-number {
  width: 100% !important;
  padding: 0.5rem;
}

.approved {
  background-color: green;
  color: white;
}

.active {
  background-color: green;
  color: white;
}
.icon-revenue {
  position: absolute;
  right: 0.15rem;
  top: 0.1rem;
}

.label01 {
  width: 100% !important;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23) !important;
  border-radius: 10px !important;
  padding: 10px 10px !important;
  margin: 0.5rem 0px !important;
  background-color: #fff !important;
  transition: 0.1s !important;
  position: relative !important;
  text-align: left !important;
  box-sizing: border-box !important;
  display: flex !important;
  gap: 1rem !important;
  align-items: center;
}
</style>

<template>
  <div id="app">
    <div id="container" v-if="resourceData.length > 0">
      <button
        class="custom-btn bnt-16 mb-3"
        style="background-color: aliceblue"
        type="button"
        @click="openPopup"
        :disabled="
          this.adminId == null &&
          (this.manage_supers !== 0 ||
            this.manage_supers !== 1 ||
            this.manage_supers !== 4)
        "
      >
        Status
      </button>

      <ejs-schedule
        ref="ScheduleObj"
        width="100%"
        height="900px"
        :selectedDate="selectedDate"
        readonly="true"
        :views="views"
        :eventRendered="onEventRendered"
        :eventSettings="eventSettings"
        :group="group"
        @eventClick="onEventClick"
        @eventDelete="onEventDelete"
      >
        <e-views>
          <e-view
            option="TimelineMonth"
            :enableLazyLoading="enableLazyLoad"
            isSelected="true"
          ></e-view>
        </e-views>
        <e-resources>
          <e-resource
            field="CombinedId"
            title="Combined Resource"
            name="Combined Resources"
            :dataSource="resourceData"
            textField="Text"
            idField="Id"
          >
          </e-resource>
        </e-resources>
      </ejs-schedule>

      <div v-if="popupVisible" class="popup">
        <div class="popup-content col-8 col-md-6">
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
              style="display: flex; flex-wrap: wrap; gap: 1rem;"
              v-if="selectedShowroomPopup !== 0"
            >
              <div
                style="width: 100%"
                v-for="artist in artists"
                :key="artist.id"
              >
                <label class="label01 m-0" :for="'artist_' + artist.id">
                  <div class="radio-header radio-text" style="width: 100%">
                    {{ artist.name }}
                  </div>
                  <select
                    class="form-control"
                    v-model="selectedActive[artist.id]"
                  >
                    <option value="undefined" selected>No object selection</option>
                    <option value="None">Unidentified</option>
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

            <div class="mb-3" style="display: flex; flex-wrap: wrap; gap: 1rem">
              <div style="width: 100%">
                <label :for="dateRange" style="width: 100%">
                  <date-range-picker
                    v-model="dateRange"
                    :id="dateRange"
                    :locale-data="{
                      firstDay: 1,
                      format: 'dd-mm-yyyy',
                    }"
                    label="Date range"
                    locale="en-AU"
                    :value="dateRange"
                    :timePicker="true"
                    style="width: 100%"
                  ></date-range-picker>
                </label>


              </div>
            </div>

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
        </div>
      </div>
    </div>
    <div v-else>
      Loading...
      <!-- Hiển thị thông báo cho người dùng khi dữ liệu đang được tải -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import axios from "axios";
import { generateResourceData } from "./datasource.js";
import { SchedulePlugin, TimelineMonth } from "@syncfusion/ej2-vue-schedule";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css"; // Import the CSS
import moment from "moment";

Vue.use(SchedulePlugin);

export default {
  components: {
    DateRangePicker,
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
      step: "FullCalendar",
      selectedStatus: "None",
      selectedDate: null,
      inputData: "",
      popupVisible: false,
      popupInputData: "",
      dateRange: {
        type: Object,
        required: true, // Nếu cần
      },
      currentViewStart: null,
      currentViewEnd: null,
      activeDays: [],
      popupnone: "active",
      // Mảng selectedActive để lưu trạng thái selectedActive của từng artist
      selectedActive: {},
      // Mảng note để lưu ghi chú của từng artist
      note: {},
      selectedApproved: "pending",
      selectedApprovedArtist: 0,
      artistshowroom: [],
      selectedDate: new Date(),
      enableLazyLoad: true,
      group: {
        byGroupID: true,
        resources: ["Combined Resources"],
      },
      resourceData: [],
      dataManager: [],
      views: ["TimelineDay", "Day", "Week", "Month", "Agenda"],

      eventSettings: {
        dataSource: [],
        fields: {
          subject: { name: "Subject" }, // Tên trường chứa tiêu đề sự kiện
          startTime: { name: "StartTime" }, // Tên trường chứa thời gian bắt đầu sự kiện
          endTime: { name: "EndTime" }, // Tên trường chứa thời gian kết thúc sự kiện
          color: { name: "Color" }, // Tên trường chứa màu của sự kiện
        },
      },
    };
  },
  provide: {
    schedule: [TimelineMonth],
  },
  methods: {

    onEventClick(args) {
      // Xử lý logic click sự kiện ở đây
      console.log("Click sự kiện:", args);
    },


    onEventRendered(args) {
      const categoryColor = args.data.CategoryColor;
      const element = args.element;

      console.log(args);
      if (!element || !categoryColor) {
        return;
      }
      element.style.backgroundColor = categoryColor;
      element.ariaDisabled = false;
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

    async fetchDataArtistsShowrooms() {
      try {
        const response = await axios.get(`/api/artistshowroomRoster`);
        const data = response.data;
        this.eventSettings.dataSource = data;

        // Tạo một đối tượng để lưu trữ dữ liệu tài nguyên
        const resources = {};

        // Lặp qua dữ liệu và nhóm theo cả ShowroomId và ArtistId
        data.forEach((item) => {
          const showroomIdBinary = parseInt(item.ShowroomId).toString(2);
          const artistIdBinary = parseInt(item.ArtistId).toString(2);

          // Thêm "00" vào giữa hai chuỗi nhị phân
          const combinedBinary = showroomIdBinary + "00" + artistIdBinary;

          // Chuyển đổi lại thành số nguyên
          const combinedId = parseInt(combinedBinary, 2);

          if (!resources[combinedId]) {
            resources[combinedId] = {
              Id: combinedId,
              Text: `${item.Showroom} ${item.Artist}`,
              Color: item.Color,
            };
          }
        });

        const sortedResourceData = Object.values(resources).sort((a, b) => {
          const textA = a.Text.toUpperCase();
          const textB = b.Text.toUpperCase();
          if (textA < textB) {
            return -1;
          }
          if (textA > textB) {
            return 1;
          }
          return 0;
        });

        // Gán lại giá trị cho this.resourceData
        this.resourceData = sortedResourceData;
      } catch (error) {
        console.error("Error fetching API data:", error);
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

    openPopup() {
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    },

    // Event handler for cellClick
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
          endDate: moment(this.dateRange.endDate).format('yyyy-MM-DD'),
          startDate: moment(this.dateRange.startDate).format('yyyy-MM-DD'),
          artistId: artistData,
        };

        console.log(postData);

        // Gửi yêu cầu POST đến API để lưu dữ liệu
        axios
          .post("/api/save-data", postData)
          .then((response) => {
            // Thực hiện các bước cần thiết sau khi lưu dữ liệu thành công

            for (let artistId in this.selectedActive) {
              this.selectedActive[artistId] = "undefined";
            }

            this.selectedStatusArtist = [];
            this.resourceData = [];
            this.fetchDataArtistsShowrooms();
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

    this.fetchDataArtistsShowrooms(); // Gọi phương thức để tải dữ liệu khi component được mounted
  },
};
</script>

<style>
@import "~@syncfusion/ej2-base/styles/material.css";
@import "~@syncfusion/ej2-buttons/styles/material.css";
@import "~@syncfusion/ej2-calendars/styles/material.css";
@import "~@syncfusion/ej2-dropdowns/styles/material.css";
@import "~@syncfusion/ej2-inputs/styles/material.css";
@import "~@syncfusion/ej2-navigations/styles/material.css";
@import "~@syncfusion/ej2-popups/styles/material.css";
@import "~@syncfusion/ej2-schedule/styles/material.css";
</style>

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

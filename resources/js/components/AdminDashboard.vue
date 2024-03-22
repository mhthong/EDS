<template>
  <div>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap">
      <label :for="dateRange">
        <date-range-picker
          v-model="dateRange"
          :id="dateRange"
          :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy HH:mm:ss' }"
          label="Date range"
          locale="en-AU"
          :value="dateRange"
          :timePicker="true"
        ></date-range-picker>
      </label>
      <label>
        <select
          class="form-control"
          id="showroomSelect"
          v-model="selectedShowroom"
          @change="selectedShowroomPrice()"
          style="padding: 5px; min-width: 250px; margin-bottom: 1rem"
        >
          <option :value="null" selected>Showroom</option>
          <option
            v-for="showroom in showrooms"
            :key="showroom.id"
            :value="showroom.id"
          >
            {{ showroom.Name }}
          </option>
        </select>
      </label>

      <label v-if="this.artistId === null && this.employeeId === null">
        <select
          class="form-control"
          id="showroomSelect"
          v-model="title"
          @change="selectedEmployeeAPi()"
          style="padding: 5px; min-width: 250px; margin-bottom: 1rem"
        >
          <option :value="null" selected>Position</option>
          <option value="Saler" selected>Saler</option>
          <option value="Artist" selected>Artist</option>
          <option value="Parner" selected>Parner / Operation</option>
        </select>
      </label>

      <label v-if="this.title === 'Saler' && this.employeeId === null">
        <select
          class="form-control"
          id="showroomSelect"
          v-model="selectedEmployee"
          @change="selectedShowroomPrice()"
          :disabled="this.title == null"
          style="padding: 5px; min-width: 250px; margin-bottom: 1rem"
        >
          <option :value="null" selected>Name</option>

          <option
            v-for="employee in apiDataEmployee"
            :key="employee.id"
            :value="employee.id"
          >
            {{ employee.name }}
          </option>
        </select>
      </label>

      <label v-if="this.title === 'Artist' && this.artistId === null">
        <select
          class="form-control"
          id="showroomSelect"
          v-model="selectedEmployee"
          @change="selectedShowroomPrice()"
          :disabled="this.title == null"
          style="padding: 5px; min-width: 250px; margin-bottom: 1rem"
        >
          <option :value="null" selected>Name</option>

          <option
            v-for="Aritst in apiDataAritst"
            :key="Aritst.id"
            :value="Aritst.id"
          >
            {{ Aritst.name }}
          </option>
        </select>
      </label>

      <label v-if="this.title === 'Parner' && this.employeeId === null && this.artistId === null">
        <select
          class="form-control"
          id="showroomSelect"
          v-model="selectedParner"
          @change="selectedShowroomPrice()"
          :disabled="this.title == null"
          style="padding: 5px; min-width: 250px; margin-bottom: 1rem"
        >
          <option :value="null" selected>Name</option>

          <option
            v-for="parner in apiDataParner"
            :key="parner.id"
            :value="parner.id"
          >
            {{ parner.name }}
          </option>
        </select>
      </label>
    </div>

    <div>
      <!-- Hiển thị các thông tin và nút để xem các tháng -->

      <ul
        class="main__body__box-info admin_dashboard"
        :class="{ fade: isTransitioning }"
      >
        <li class="Price Total_Booking_Price">
          <h6>Booking Value</h6>
          <h4>${{ parseFloat(this.Booking_Value) }}</h4>
        </li>
        <li class="Price Total_Booking_Price">
          <h6>Actual B.Value</h6>
          <h4>${{ parseFloat(this.Actual_B_Value) }}</h4>
        </li>
        <li class="Price Revenue_price">
          <h6>Total Revenue(est)</h6>
          <h4>${{ this.Initial_P_Revenue + this.Initial_Revenue }}</h4>
        </li>
        <li class="Price Revenue_price">
          <h6>Initial P. Revenue</h6>
          <h4>${{ this.Initial_P_Revenue }}</h4>
        </li>
        <li class="Price Revenue_price">
          <h6>Initial Revenue</h6>
          <h4>${{ this.Initial_Revenue }}</h4>
        </li>

        <li class="Price Refund_price">
          <h6>Refund</h6>
          <h4>${{ parseFloat(this.Refund) }}</h4>
        </li>

        <li class="Price Refund_price">
          <h6>Booking Refund Value</h6>
          <h4>${{ parseFloat(this.B_Refund_Value) }}</h4>
        </li>

        <li class="Price Deposit_price">
          <h6>Deposit</h6>
          <h4>${{ parseFloat(this.Deposit) }}</h4>
        </li>
        <li class="Price Remaining_price">
          <h6>Remaining</h6>
          <h4>${{ parseFloat(this.Remaining) }}</h4>
        </li>
        <li class="Price Refund_price">
          <h6>Upsell ( Artist )</h6>
          <h4>${{ parseFloat(this.Upsell) }}</h4>
        </li>

        <li class="Price Cancel_price">
          <h6>Cancel Booking Value</h6>
          <h4>${{ parseFloat(this.Cancel_Booking_Value) }}</h4>
        </li>

        <li class="Price Cancel_price">
          <h6>Total Booking</h6>
          <h4>{{ parseFloat(this.Total_Booking) }}</h4>
        </li>

        <li class="Price">
          <h6>%Done</h6>
          <h4>
            {{ calculatePercentage(this.percent_done, this.Total_Booking) }} %
          </h4>
        </li>
        <li class="Price">
          <h6>%Pratial Done</h6>
          <h4>
            {{ calculatePercentage(this.percent_Pratial_Done, this.Total_Booking) }} %
          </h4>
        </li>
        <li class="Price">
          <h6>%Waiting</h6>
          <h4>
            {{ calculatePercentage(this.percent_waiting, this.Total_Booking) }}
            %
          </h4>
        </li>
        <li class="Price">
          <h6>%Reschedule</h6>
          <h4>
            {{ calculatePercentage(this.percent_Reschedule, this.Total_Booking) }} %
          </h4>
        </li>

        <li class="Price">
          <h6>%Cancel</h6>
          <h4>
            {{ calculatePercentage(this.percent_cancel, this.Total_Booking) }} %
          </h4>
        </li>
        <li class="Price">
          <h6>%Refund</h6>
          <h4>
            {{ calculatePercentage(this.percent_refund, this.Total_Booking) }} %
          </h4>
        </li>
        <li class="Price">
          <h6>%Unidentified</h6>
          <h4>
            {{ calculatePercentage(this.percent_Unidentified, this.Total_Booking) }} %
          </h4>
        </li>

        <li
          class="Price"
          v-if="
            this.title !== 'Artist' &&
            this.employeeId === null &&
            this.kpi != undefined
          "
        >
          <h6>Total KPI | % Completed</h6>
          <h4>
            ${{ this.Booking_Value }} / ${{ parseFloat(this.kpi) }} Completed
            {{ calculatePercentage(this.Booking_Value, parseFloat(this.kpi)) }}
            %
          </h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css"; // Import the CSS
import axios from "axios";
import moment, { locale } from "moment";

export default {
  components: {
    DateRangePicker,
  },
  data() {
    // Lấy ngày hiện tại
    const currentDate = new Date();

    return {
      dateRange: {
        type: Object,
        required: true, // Nếu cần
      },

      dateCompare: {
        start: null, // Ngày bắt đầu
        end: null, // Ngày kết thúc
      },
      showrooms: [],
      selectedShowroom: null,
      id: "",
      currentURL: "",
      apiData: [],
      apiData_id: [],
      kpi: "",
      /*       upsale: "", */
      adminId: null,
      manage_supers:null,
      employeeId: null,
      artistId: null,
      isTransitioning: false,
      disableNextButton: false,
      numberOfBooks: 0,
      filteredData: [],
      filteredDataWaiting: null,
      filteredDataCancel: null,
      filteredDataDone: null,
      filteredDataRefund: null,
      selectedEmployee: null,
      selectedParner: null,
      title: null,
      apiDataAritst: null,
      apiDataEmployee: null,
      apiDatakpi: [],
      kpi: 0,
      resuft: [],
      Booking_Value: 0,
      Actual_B_Value: 0,
      Total_Revenue: 0,
      Initial_P_Revenue: 0,
      Initial_Revenue: 0,
      Refund: 0,
      B_Refund_Value: 0,
      Deposit: 0,
      Remaining: 0,
      Upsell: 0,
      Cancel_Booking_Value: 0,
      Total_Booking: 0,
      percent_done: 0,
      percent_waiting: 0,
      percent_refund: 0,
      percent_cancel: 0,
      percent_Pratial_Done: 0,
      percent_Reschedule: 0,
      percent_Unidentified: 0,
      Operation_KPI: 0,
    };
  },

  watch: {
    dateRange: {
      handler(newDateRange, oldDateRange) {
        // Log khi dateRange thay đổi
        this.dateRange.end = moment(newDateRange.endDate).format("YYYY-MM-DD");
        this.dateRange.start = moment(newDateRange.startDate).format(
          "YYYY-MM-DD"
        );

        this.fetchapiData_id(
          this.dateRange.start,
          this.dateRange.end,
          this.selectedShowroom,
          this.selectedEmployee,
          this.title
        );
      },
      deep: true, // Theo dõi các sự thay đổi sâu trong object
    },
  },

  computed: {
    totalBookings() {
      // Trả về tổng số booking bằng cách sử dụng thuộc tính length của mảng filteredData
      return this.filteredData.length;
    },
  },

  methods: {
    fetchapiData_id(start, end, selectedShowroom, employee, title) {
      if (this.artistId !== null) {
        axios
          .get(`/api/Dashboard/${start}/${end}/${this.artistId}/${this.title}`)
          .then((response) => {
            this.apiData_id = response.data;
            this.fetchKpis(
              this.selectedShowroom,
              this.selectedEmployee,
              this.dateRange.start
            );
            this.Price();
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      } else if (this.employeeId !== null) {
        axios
          .get(
            `/api/Dashboard/${start}/${end}/${this.employeeId}/${this.title}`
          )
          .then((response) => {
            this.apiData_id = response.data;
            this.fetchKpis(
              this.selectedShowroom,
              this.selectedEmployee,
              this.dateRange.start
            );
            this.Price();
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      } else {
        axios
          .get(`/api/Dashboard/${start}/${end}/${employee}/${title}`)
          .then((response) => {
            this.apiData_id = response.data;
            this.fetchKpis(
              this.selectedShowroom,
              this.selectedEmployee,
              this.dateRange.start
            );
            this.Price();
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      }
    },

    fetchArtist() {
      axios
        .get("/api/artist")
        .then((response) => {
          this.apiDataAritst = response.data;
        })
        .catch((error) => {
          console.error("Error fetching artist::", error);
        });
    },


    fetchapiDataParner() {
      axios
        .get("/api/parner")
        .then((response) => {
          this.apiDataParner = response.data;
        })
        .catch((error) => {
          console.error("Error fetching artist::", error);
        });
    },

    fetchapiDataEmployee() {
      axios
        .get(`/api/employee`)
        .then((response) => {
          this.apiDataEmployee = response.data;
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
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

    fetchKpis(showroom, employee, date) {
      axios
        .get(`/api/kpis-data/${showroom}/${employee}/${date}`)
        .then((response) => {
          this.apiDatakpi = response.data;
          this.kpi = this.apiDatakpi.number_of_kpi;

          if (this.kpi == undefined) {
            this.kpi = 0;
          }
        })
        .catch((error) => {
          console.error("Error fetching showrooms:", error);
        });
    },

    calculatePercentage(revenueTotal, kpiValue) {
      // Check if both values are valid numbers and kpiValue is not zero
      if (!isNaN(revenueTotal) && !isNaN(kpiValue) && kpiValue !== 0) {
        const percentage = (revenueTotal / kpiValue) * 100;
        return percentage.toFixed(2); // Adjust the number of decimal places as needed
      } else if (isNaN(revenueTotal) || isNaN(kpiValue)) {
        // Handle the case where one or both values are not valid numbers

        return "N/A";
      } else {
        // Handle the case where kpiValue is zero

        return "Infinity";
      }
    },

    totalByName(data) {
      // Tạo một đối tượng để lưu trữ tổng số tiền cho từng tên dịch vụ
      const totals = {};
      console.log("Data in totalByName:", data);

      // Your existing code...

      // Lặp qua các ngày trong dữ liệu của bạn
      for (const date in data) {
        const fillerDatas = data[date];
        for (const Id in fillerDatas) {
          const fillerData = fillerDatas[Id];
          const Name = fillerData.Name;
          // Nếu tên dịch vụ chưa tồn tại trong totals, thì khởi tạo nó với giá trị ban đầu
          if (!totals[Name]) {
            totals[Name] = {
              Booking_Value: 0,
              Actual_B_Value: 0,
              Initial_P_Revenue: 0,
              Initial_Revenue: 0,
              Refund: 0,
              B_Refund_Value: 0,
              Deposit: 0,
              Remaining: 0,
              Upsell: 0,
              Cancel_Booking_Value: 0,
              Total_Booking: 0,
              percent_done: 0,
              percent_waiting: 0,
              percent_refund: 0,
              percent_cancel: 0,
              percent_Pratial_Done: 0,
              percent_Reschedule: 0,
              percent_Unidentified: 0,
              Operation_KPI: 0,
            };
          }
          // Thêm giá trị của Total_price vào tổng số tiền cho tên dịch vụ
          totals[Name].Booking_Value += fillerData.Booking_Value;
          totals[Name].Actual_B_Value += fillerData.Actual_B_Value;
          totals[Name].Initial_P_Revenue += fillerData.Initial_P_Revenue;
          totals[Name].Initial_Revenue += fillerData.Initial_Revenue;
          totals[Name].Refund += fillerData.Refund;
          totals[Name].B_Refund_Value += fillerData.B_Refund_Value;
          totals[Name].Deposit += fillerData.Deposit;
          totals[Name].Remaining += fillerData.Remaining;
          totals[Name].Upsell += fillerData.Upsell;
          totals[Name].Cancel_Booking_Value += fillerData.Cancel_Booking_Value;
          totals[Name].Total_Booking += fillerData.Total_Booking;
          totals[Name].percent_done += fillerData.percent_done;
          totals[Name].percent_waiting += fillerData.percent_waiting;
          totals[Name].percent_refund += fillerData.percent_refund;
          totals[Name].percent_cancel += fillerData.percent_cancel;
          totals[Name].percent_Pratial_Done += fillerData.percent_Pratial_Done;
          totals[Name].percent_Reschedule += fillerData.percent_Reschedule;
          totals[Name].percent_Unidentified += fillerData.percent_Unidentified;
          totals[Name].Operation_KPI += fillerData.Operation_KPI;
        }
      }

      // Chuyển đối tượng totals thành một mảng nếu cần
      const totalsArray = Object.values(totals);

      return totalsArray;
    },

    filterDataById(data, targetId) {
      const filteredData = {};
      Object.keys(data).forEach((date) => {
        const dateData = data[date];
        const filteredDateData = {};

        Object.keys(dateData).forEach((id) => {
          if (dateData[id].id === targetId) {
            this.$set(filteredDateData, id, dateData[id]);
          }
        });

        if (Object.keys(filteredDateData).length > 0) {
          this.$set(filteredData, date, filteredDateData);
        }
      });

      return filteredData;
    },

    selectedShowroomPrice() {
      // Gọi hàm fetchapiData_id để cập nhật dữ liệu từ API
      this.fetchapiData_id(
        this.dateRange.start,
        this.dateRange.end,
        this.selectedShowroom,
        this.selectedEmployee,
        this.title
      );
    },

    Price() {
      this.Booking_Value = 0;
      this.Actual_B_Value = 0;
      this.Initial_P_Revenue = 0;
      this.Initial_Revenue = 0;
      this.Refund = 0;
      this.B_Refund_Value = 0;
      this.Deposit = 0;
      this.Remaining = 0;
      this.Upsell = 0;
      this.Cancel_Booking_Value = 0;
      this.Total_Booking = 0;
      this.percent_done = 0;
      this.percent_waiting = 0;
      this.percent_refund = 0;
      this.percent_cancel = 0;
      this.percent_Pratial_Done = 0;
      this.percent_Reschedule = 0;
      this.percent_Unidentified = 0;
      this.Operation_KPI = 0;

      if (this.selectedShowroom !== null) {
        this.resuft = this.filterDataById(
          this.apiData_id,
          this.selectedShowroom
        );
      } else {
        this.resuft = this.apiData_id;
      }

      const data = this.totalByName(this.resuft);

      data.forEach((item) => {
        this.Booking_Value += parseFloat(item.Booking_Value);
        this.Actual_B_Value += parseFloat(item.Actual_B_Value);
        this.Initial_P_Revenue += parseFloat(item.Initial_P_Revenue);
        this.Initial_Revenue += parseFloat(item.Initial_Revenue);
        this.Refund += parseFloat(item.Refund);
        this.B_Refund_Value += parseFloat(item.B_Refund_Value);
        this.Deposit += parseFloat(item.Deposit);
        this.Remaining += parseFloat(item.Remaining);
        this.Upsell += parseFloat(item.Upsell);
        this.Cancel_Booking_Value += parseFloat(item.Cancel_Booking_Value);
        this.Total_Booking += parseFloat(item.Total_Booking);
        this.percent_done += parseFloat(item.percent_done);
        this.percent_waiting += parseFloat(item.percent_waiting);
        this.percent_refund += parseFloat(item.percent_refund);
        this.percent_cancel += parseFloat(item.percent_cancel);
        this.percent_Pratial_Done  += parseFloat(item.percent_Pratial_Done);
        this.percent_Reschedule  += parseFloat(item.percent_Reschedule);
        this.percent_Unidentified  += parseFloat(item.percent_Unidentified);
        this.Operation_KPI  += parseFloat(item.Operation_KPI);
      });

      // Lặp qua danh sách dữ liệu và tính tổng
    },

    selectedEmployeeAPi() {
      this.selectedEmployee = null;
    },
  },

  mounted() {
    this.adminId = this.$root.adminId;

    this.artistId = this.$root.artistId;

    this.employeeId = this.$root.employeeId;

    this.manage_supers =this.$root.manage_supers;

    if (this.employeeId !== null) {
      this.selectedEmployee = this.employeeId;
      this.title = "Saler";
    }

    if (this.artistId !== null) {
      this.selectedEmployee = this.artistId;
      this.title = "Artist";
    }

    if (this.adminId !== null && parseInt(this.manage_supers) === 4) {
      
      this.selectedParner = this.adminId;
      this.title = "Parner"
    }


    const currentDate = new Date();
    this.currentMonth = currentDate.getMonth() + 1;
    this.currentYear = currentDate.getFullYear();

    // Kiểm tra nếu dateRange không có giá trị, đặt mặc định là ngày bắt đầu và ngày hiện tại
    if (!this.dateRange.start || !this.dateRange.end) {
      const currentDate = new Date();
      this.dateRange.start = moment(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
      ).format("YYYY-MM-DD");
      this.dateRange.end = moment(currentDate).format("YYYY-MM-DD");
    }

    this.fetchShowrooms();
    this.fetchapiDataEmployee();
    this.fetchArtist();
    this.fetchapiDataParner();
    this.fetchapiData_id(
      this.dateRange.start,
      this.dateRange.end,
      this.selectedShowroom,
      this.selectedEmployee,
      this.title
    );
    this.fetchKpis(
      this.selectedShowroom,
      this.selectedEmployee,
      this.dateRange.start
    );
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.label {
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  padding: 18px 16px;
  margin: 1rem 0px;
  background-color: #fff;
  transition: 0.1s;
  position: relative;
  text-align: left;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
}

.label:hover {
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgb(255 118 118 / 23%);
}

.label-checked {
  border: 2px solid #36b666;
  background-color: hsl(95, 60%, 90%) !important;
}

.radio-header {
  font-weight: 600;
}

.radio-text {
  color: #777;
}

.radio-check {
  display: none;
}

.check-icon {
  color: #36b666;
  position: absolute;
  top: 12px;
  right: 8px;
}

.radio-body {
  font-size: 24px;
  font-weight: bold;
  margin-top: 8px;
}

.book_detail {
  padding: 1rem;
}

.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
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

.groupService {
  flex-direction: column;
}
.groupService ul li {
  margin: 1rem 0;
}
.flex-groupService {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.book-title {
  font-size: 0.9em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
  transition: color 0.3s;
}

.deposit {
  display: block;
  width: 260px;
  height: 30px;
  padding-left: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin: 7px;
  font-size: 17px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  transition: background 0.5s;
}

.error-message {
  color: #ff6666;
}

.vue-daterange-picker[data-v-1ebd09d2] {
  min-width: 250px;
}

@media (max-width: 768px) {
  .daterangepicker.openscenter[data-v-1ebd09d2] {
    right: auto;
    left: 50% !important;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
  }

  .fc-header-toolbar {
    gap: 7px;
    align-items: baseline;
    flex-direction: column-reverse;
  }
}

@media (min-width: 768px) {
  .daterangepicker.openscenter[data-v-1ebd09d2] {
    right: auto;
    left: 100% !important;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
  }
}

#main .main__body .main__body__box-info li {
  flex: 1 0 160px;
  background: var(--white);
  padding: 0.75rem 0.75rem;
  border-radius: 5px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.05);
}

#main .main__body .main__body__box-info li h6,
h4 {
  font-size: 14px;
}
.persen {
  flex: 1 0 25%;
  padding: 0.75rem 0.75rem;
  border-radius: 5px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.05);
}
.Persen {
  flex: 1 0 260px;
  display: flex;
  grid-gap: 1.25rem;
  flex-wrap: wrap;
}
</style>

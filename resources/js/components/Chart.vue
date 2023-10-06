<template>
  <div>
    <div>
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
    </div>
    <div>
      <!-- Hiển thị các thông tin và nút để xem các tháng -->
      <ul class="main__body__box-info" :class="{ fade: isTransitioning }">
        <li>
          <i class="fa-solid fa-money-bill-trend-up" style="color: #ff6666"></i>
          <h5>${{ parseFloat(this.Total_price) }}</h5>
          <p>Total Booking Price</p>
        </li>
        <li>
          <i class="ph-wallet-fill"></i>
          <h5>${{ this.RevenueTatol }}</h5>
          <p>Revenue</p>
        </li>
      </ul>
    </div>

    <div class="main__body__data">
      <div class="members">
        <div class="members__top">
          <h4>Top Saler</h4>
          <div class="members__menu">
            <i class="ph-dots-three-outline-vertical-fill"></i>
            <ul class="menu">
              <li>
                <a href="#">Edit</a>
              </li>
              <li>
                <a href="#">Remove</a>
              </li>
            </ul>
          </div>
        </div>
        <ul class="members__user">
          <li>
            <img
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="profile">
              <h5>John Doe</h5>
              <p>Web Developer</p>
            </div>
            <span>20 sales</span>
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="profile">
              <h5>John Doe</h5>
              <p>Web Developer</p>
            </div>
            <span>20 sales</span>
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="profile">
              <h5>John Doe</h5>
              <p>Web Developer</p>
            </div>
            <span>20 sales</span>
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="profile">
              <h5>John Doe</h5>
              <p>Web Developer</p>
            </div>
            <span>20 sales</span>
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="profile">
              <h5>John Doe</h5>
              <p>Web Developer</p>
            </div>
            <span>20 sales</span>
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="profile">
              <h5>John Doe</h5>
              <p>Web Developer</p>
            </div>
            <span>20 sales</span>
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="profile">
              <h5>John Doe</h5>
              <p>Web Developer</p>
            </div>
            <span>20 sales</span>
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="profile">
              <h5>John Doe</h5>
              <p>Web Developer</p>
            </div>
            <span>20 sales</span>
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="profile">
              <h5>John Doe</h5>
              <p>Web Developer</p>
            </div>
            <span>20 sales</span>
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="profile">
              <h5>John Doe</h5>
              <p>Web Developer</p>
            </div>
            <span>20 sales</span>
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="profile">
              <h5>John Doe</h5>
              <p>Web Developer</p>
            </div>
            <span>20 sales</span>
          </li>
        </ul>
        <div>
        </div>
        <div>
       <!--  <canvas ref="lineChartShowroom"></canvas> -->
        </div>
      </div>
      <div class="sales-summary">
        <div class="sales-summary__top">
          <h4>Sales Summary</h4>
          <div class="sales-summary__menu">
            <i class="ph-dots-three-outline-vertical-fill"></i>
            <ul class="menu">
              <li>
                <a href="#">Edit</a>
              </li>
              <li>
                <a href="#">Remove</a>
              </li>
            </ul>
          </div>
        </div>
        <ul class="sales-summary__info">
          <li>
            <p>Avg. Sales</p>
            <h5>$76</h5>
          </li>
          <li>
            <p>Avg. Sales</p>
            <h5>$76</h5>
          </li>
          <li>
            <p>Avg. Sales</p>
            <h5>$76</h5>
          </li>
          <li>
            <p>Avg. Sales</p>
            <h5>$76</h5>
          </li>
        </ul>

        <div>
          <canvas ref="myChart"></canvas>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css"; // Import the CSS
import axios from "axios";
import moment from "moment";
import { Line } from 'vue-chartjs';


export default {
  components: {
    DateRangePicker,
  },

  extends: Line,

  data() {
    // Lấy ngày hiện tại
    const currentDate = new Date();

    return {
      dateRange: [
        moment().startOf("day").add(1, "second"),
        moment().endOf("day").subtract(1, "second"),
      ],

      id: "",
      currentURL: "",
      apiData: [],
      apiData_id: [],
      Total_price: "",
      Deposit_price: "",
      Remaining_price: "",
      servies_price: "",
      Revenue: "",
      RevenueDone: "",
      RevenueRefund: "",
      RevenueTatol: "",
      Done_price: "",
      Cancel_price: "",
      Refund_price: "",
      adminId: null,
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
      lineChartEmployeeData: null,
      isDataLoaded: false,

      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'My First Dataset',
            borderColor: 'rgba(75, 192, 192, 1)',
            data: [65, 59, 80, 81, 56],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },

     /*  lineChartShowroomData: null, */
    };
  },

  watch: {
    dateRange: {
      handler(newDateRange, oldDateRange) {
        // Log khi dateRange thay đổi
        this.dateRange.end = newDateRange.endDate;
        this.dateRange.start = newDateRange.startDate;
        this.calculate();
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
    fetchapiData_id() {
      if (this.artistId !== null) {
        axios
          .get(`/api/all-data`)
          .then((response) => {
            // Lọc dữ liệu dựa trên ArtistID
            this.apiData_id = response.data.filter(
              (item) =>
                item.ArtistID == this.artistId && item.action === "approved"
            );
   
            this.calculate();
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      } else if (this.employeeId !== null) {
        axios
          .get(`/api/all-data`)
          .then((response) => {
            // Lọc dữ liệu dựa trên source_id
            this.apiData_id = response.data.filter(
              (item) => item.source_id == this.employeeId
            );
            this.calculate();
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      } else {
        axios
          .get(`/api/all-data`)
          .then((response) => {
            this.apiData_id = response.data;
            this.calculate();
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      }
    },

    filteredData_con() {
      this.filteredDataWaiting = this.filteredData.filter((booking) => {
        const WaitingStatus = booking.status;
        return WaitingStatus == "Waiting";
      });

      this.filteredDataDone = this.filteredData.filter((booking) => {
        const DoneStatus = booking.status;

        return DoneStatus == "Done";
      });

      this.filteredDataRefund = this.filteredData.filter((booking) => {
        const RefundStatus = booking.status;

        return RefundStatus == "Refund";
      });

      this.filteredDataCancel = this.filteredData.filter((booking) => {
        const CancelStatus = booking.status;

        return CancelStatus == "Cancel";
      });
    },

    Price(){

        const revenueCancel = this.filteredDataCancel.reduce((total, booking) => {
        const deposit = parseFloat(booking.price.Deposit_price);

        if (!isNaN(deposit)) {
          total += deposit;
        }

        return total;
      }, 0);

      // Tính tổng các giá trị từ dữ liệu đã lọc
      this.Total_price = this.filteredData
        .reduce((total, booking) => {
          return total + parseFloat(booking.price.servies_price);
        }, 0)
        .toFixed(2);

      this.Remaining_price = this.filteredData
        .reduce((total, booking) => {
          return total + parseFloat(booking.price.Remaining_price);
        }, 0)
        .toFixed(2);

      this.Deposit_price = this.filteredData
        .reduce((total, booking) => {
          return total + parseFloat(booking.price.Deposit_price);
        }, 0)
        .toFixed(2);

      this.Done_price = this.filteredDataDone
        .reduce((total, booking) => {
          return total + parseFloat(booking.price.servies_price);
        }, 0)
        .toFixed(2);

      this.Cancel_price = this.filteredDataCancel
        .reduce((total, booking) => {
          return total + parseFloat(booking.price.servies_price);
        }, 0)
        .toFixed(2);

      this.Refund_price = this.filteredDataRefund
        .reduce((total, booking) => {
          return total + parseFloat(booking.price.servies_price);
        }, 0)
        .toFixed(2);

      this.Revenue = this.filteredData
        .reduce((total, booking) => {
          return total + parseFloat(booking.price.Deposit_price);
        }, 0)
        .toFixed(2);

      this.RevenueDone = this.filteredDataDone
        .reduce((total, booking) => {
          return (
            total +
            parseFloat(booking.price.Total_price) -
            parseFloat(booking.price.Deposit_price)
          );
        }, 0)
        .toFixed(2);

      this.RevenueRefund = this.filteredDataRefund
        .reduce((total, booking) => {
          return (
            total +
            parseFloat(booking.price.Total_price) -
            parseFloat(booking.price.Deposit_price)
          );
        }, 0)
        .toFixed(2);

      this.RevenueTatol =
        parseFloat(this.RevenueRefund) +
        parseFloat(this.RevenueDone) +
        parseFloat(this.Revenue);

      this.numberOfBooks = this.filteredData.length;
    },

    calculate() {
      // Kiểm tra nếu this.dateRange.end không có dữ liệu thì sử dụng ngày cuối của tháng hiện tại
      if (!this.dateRange.end) {
        const currentDate = new Date();
        const lastDayOfMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0
        );
        this.dateRange.end = lastDayOfMonth;
      }

      // Kiểm tra nếu this.dateRange.start không có dữ liệu thì sử dụng ngày đầu của tháng hiện tại
      if (!this.dateRange.start) {
        const currentDate = new Date();
        this.dateRange.start = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          1
        );
      }
      // Lọc các bản ghi thuộc tháng và năm hiện tại
      this.filteredData = this.apiData_id.filter((booking) => {
        const updatedAtDate = new Date(booking.price.updated_at);
        /*   console.log("updatedAtDate", updatedAtDate , this.dateRange.end ,this.dateRange.start, updatedAtDate <= this.dateRange.end ,updatedAtDate >= this.dateRange.start); */
        return (
          updatedAtDate <= this.dateRange.end &&
          updatedAtDate >= this.dateRange.start
        );
      });

      this.filteredData_con();
      this.Price();

        
    },

    renderChart() {
      // Sử dụng this.$refs để lấy tham chiếu đến canvas
      this.renderChart(this.chartData, this.options);
    },

  
  },

  mounted() {
    this.adminId = this.$root.adminId;

    this.artistId = this.$root.artistId;

    this.employeeId = this.$root.employeeId;

    const currentDate = new Date();
    this.currentMonth = currentDate.getMonth() + 1;
    this.currentYear = currentDate.getFullYear();

    // Kiểm tra nếu dateRange không có giá trị, đặt mặc định là ngày bắt đầu và kết thúc của tháng hiện tại
    if (!this.dateRange.start || !this.dateRange.end) {
      this.dateRange.start = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      this.dateRange.end = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );
    }

    this.fetchapiData_id(); // Kiểm tra nút "Xem các tháng sau" khi ban đầu tải trang

   this.renderChart();
   
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
  min-width: 300px;
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
</style>

<template>
  <div>
    <label :for="dateRange">
      <date-range-picker
        v-model="dateRange"
        :id="dateRange"
        label="Date range"
        locale="en-US"
        class="form-control"
      ></date-range-picker>
    </label>
    <label :for="dateCompare">
      <date-range-picker
        v-model="dateCompare"
        :id="dateCompare"
        label="Date range"
        locale="en-US"
        class="form-control"
      ></date-range-picker>
    </label>
    <div>
      <!-- Hiển thị các thông tin và nút để xem các tháng -->

      <ul class="main__body__box-info" :class="{ fade: isTransitioning }">
        <li>
          <i class="fa-solid fa-money-bill-trend-up" style="color: #ff6666"></i>
          <h5>${{ Total_price }}</h5>
          <p>Total Price</p>
        </li>
        <li>
          <i class="ph-wallet-fill"></i>
          <h5>${{ Remaining_price }}</h5>
          <p>Remaining Price</p>
        </li>
        <li>
          <i class="ph-shopping-bag-fill"></i>
          <h5>${{ Deposit_price }}</h5>
          <p>Deposit Price</p>
        </li>

        <li>
          <i class="ph-shopping-bag-fill"></i>
          <h5>${{ Deposit_price }}</h5>
          <p>Cancel</p>
        </li>

        <li>
          <i class="ph-shopping-bag-fill"></i>
          <h5>${{ Deposit_price }}</h5>
          <p>Refund</p>
        </li>

        <li>
          <i class="ph-shopping-bag-fill"></i>
          <h5>${{ Deposit_price }}</h5>
          <p>Waiting</p>
        </li>

        <li>
          <i class="ph-shopping-bag-fill"></i>
          <h5>${{ Deposit_price }}</h5>
          <p>Done</p>
        </li>

        <li>
          <i class="fa-regular fa-calendar" style="color: #3498db"></i>
          <h5>{{ numberOfBooks }}</h5>
          <p>Number of Booked</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css"; // Import the CSS
import axios from "axios";

export default {
  components: {
    DateRangePicker,
  },
  data() {
    // Lấy ngày hiện tại
    const currentDate = new Date();

    // Lấy ngày đầu tháng hiện tại
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );

    // Lấy ngày cuối tháng hiện tại
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    return {
      dateRange: {
        start: startOfMonth, // Ngày bắt đầu
        end: endOfMonth, // Ngày kết thúc
      },

      dateCompare: {
        start: null, // Ngày bắt đầu
        end: null, // Ngày kết thúc
      },

      id: "",
      currentURL: "",
      apiData_id: [],
      Total_price: "",
      Deposit_price: "",
      Remaining_price: "",
      servies_price: "",
      userId: null,
      isTransitioning: false,
      disableNextButton: false,
      numberOfBooks: 0,
      filteredDataWaiting: null,
      filteredDataCancel: null,
      filteredDataDone: null,
      filteredDataRefund: null,
    };
  },

  watch: {
    dateRange: {
      handler(newDateRange, oldDateRange) {
        // Log khi dateRange thay đổi
        console.log(
          "dateRange đã thay đổi:",
          newDateRange.endDate,
          newDateRange.startDate
        );
        this.dateRange.end = newDateRange.endDate;
        this.dateRange.start = newDateRange.startDate;
        this.calculateTotal();
      },
      deep: true, // Theo dõi các sự thay đổi sâu trong object
    },
    dateCompare: {
      handler(newDateCompare, oldDateCompare) {
        // Log khi dateCompare thay đổi
        console.log("dateCompare đã thay đổi:", newDateCompare);
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
      axios
        .get(`/api/all-data`)
        .then((response) => {
          this.apiData_id = response.data;
          this.filteredData();
          this.calculateTotal(); // Gọi hàm tính tổng sau khi lấy dữ liệu API
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    filteredData() {
      this.filteredDataWaiting = this.apiData_id.filter((booking) => {
        const WaitingStatus = booking.status;
        return WaitingStatus == "Waiting";
      });

      this.filteredDataDone = this.apiData_id.filter((booking) => {
        const DoneStatus = booking.status;

        return DoneStatus == "Done";
      });

      this.filteredDataRefund = this.apiData_id.filter((booking) => {
        const RefundStatus = booking.status;

        return RefundStatus == "Refund";
      });

      this.filteredDataCancel = this.apiData_id.filter((booking) => {
        const CancelStatus = booking.status;

        return CancelStatus == "Cancel";
      });
    },

    calculateTotal() {
      console.log("filteredDataWaiting:", this.filteredDataWaiting);
      console.log("filteredDataDone:", this.filteredDataDone);
      console.log("filteredDataRefund:", this.filteredDataRefund);
      console.log("filteredDataCancel:", this.filteredDataCancel);
      console.log("dateRange:", this.dateRange.end, this.dateRange.start);

      // Lọc các bản ghi thuộc tháng và năm hiện tại
      const filteredData = this.apiData_id.filter((booking) => {
        const updatedAtDate = new Date(booking.price.updated_at);
        return (
          updatedAtDate <= this.dateRange.end &&
          updatedAtDate >= this.dateRange.start
        );
      });

      const filteredDataWaiting = this.filteredDataWaiting.filter((booking) => {
        const updatedAtDate = new Date(booking.price.updated_at);

        return (
          updatedAtDate <= this.dateRange.end &&
          updatedAtDate >= this.dateRange.start
        );
      });

      const filteredDataDone = this.filteredDataDone.filter((booking) => {
        const updatedAtDate = new Date(booking.price.updated_at);

        return (
          updatedAtDate <= this.dateRange.end &&
          updatedAtDate >= this.dateRange.start
        );
      });

      const filteredDataRefund = this.filteredDataRefund.filter((booking) => {
        const updatedAtDate = new Date(booking.price.updated_at);

        return (
          updatedAtDate <= this.dateRange.end &&
          updatedAtDate >= this.dateRange.start
        );
      });

      const filteredDataCancel = this.filteredDataCancel.filter((booking) => {
        const updatedAtDate = new Date(booking.price.updated_at);

        return (
          updatedAtDate <= this.dateRange.end &&
          updatedAtDate >= this.dateRange.start
        );
      });

      console.log(filteredData);
      console.log(filteredDataDone);
      console.log(filteredDataWaiting);
      console.log(filteredDataRefund);
      console.log(filteredDataCancel);

      // Tính tổng các giá trị từ dữ liệu đã lọc
      this.Total_price = filteredData
        .reduce((total, booking) => {
          return total + parseFloat(booking.price.Total_price);
        }, 0)
        .toFixed(2);

      this.Deposit_price = filteredData
        .reduce((total, booking) => {
          return total + parseFloat(booking.price.Deposit_price);
        }, 0)
        .toFixed(2);

      this.Remaining_price = filteredData
        .reduce((total, booking) => {
          return total + parseFloat(booking.price.Remaining_price);
        }, 0)
        .toFixed(2);

      this.servies_price = filteredData
        .reduce((total, booking) => {
          return total + parseFloat(booking.price.servies_price);
        }, 0)
        .toFixed(2);

      this.numberOfBooks = filteredData.length;
    },

    showPreviousMonths() {
      this.isTransitioning = true; // Bắt đầu hiệu ứng
      setTimeout(() => {
        this.isTransitioning = false; // Kết thúc hiệu ứng sau 0.5s (thời gian transition)
        // Trừ đi 1 để lấy tháng trước đó và cập nhật dữ liệu
        this.currentMonth = this.currentMonth - 1;

        console.log(this.currentMonth);

        // Nếu tháng hiện tại là tháng 1, thì tháng trước đó là tháng 12 của năm trước
        if (this.currentMonth === 0) {
          this.currentMonth = 12;
          this.currentYear = this.currentYear - 1;
        }

        this.calculateTotal();
        this.checkDisableNextButton(); // Kiểm tra nút "Xem các tháng sau"
      }, 500); // Chờ 0.5s trước khi kết thúc hiệu ứng
    },

    showNextMonths() {
      if (this.currentMonth < 12) {
        this.isTransitioning = true; // Bắt đầu hiệu ứng
        setTimeout(() => {
          this.isTransitioning = false; // Kết thúc hiệu ứng sau 0.5s (thời gian transition)
          // Kiểm tra nếu tháng tiếp theo nhỏ hơn hoặc bằng tháng hiện tại
          this.currentMonth = this.currentMonth + 1;
          console.log(this.currentMonth);

          // Nếu tháng hiện tại là tháng 12, thì khi bạn nhấp vào "Xem các tháng tiếp theo", nó sẽ thay đổi thành tháng 1 của năm sau
          if (this.currentMonth === 12) {
            this.currentMonth = 1;
            this.currentYear = this.currentYear + 1;
          }

          this.calculateTotal();
          this.checkDisableNextButton(); // Kiểm tra nút "Xem các tháng sau"
        }, 500); // Chờ 0.5s trước khi kết thúc hiệu ứng
      }
    },

    checkDisableNextButton() {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();
      // Nút "Xem các tháng sau" sẽ bị vô hiệu hóa nếu tháng hiện tại là tháng cuối cùng trong danh sách
      if (
        this.currentMonth >= currentMonth &&
        this.currentYear >= currentYear
      ) {
        this.disableNextButton = true;
      } else {
        this.disableNextButton = false;
      }
    },
  },

  mounted() {
    this.userId = this.$root.userId;
    const currentDate = new Date();
    this.currentMonth = currentDate.getMonth() + 1;
    this.currentYear = currentDate.getFullYear();
    this.fetchapiData_id();
    this.checkDisableNextButton(); // Kiểm tra nút "Xem các tháng sau" khi ban đầu tải trang
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
</style>

<template>
  <div>
    <!-- Hiển thị các thông tin và nút để xem các tháng -->

    <ul class="main__body__box-info" :class="{ 'fade': isTransitioning }">
      <li>
        <i class="fa-solid fa-money-bill-trend-up" style="color: #ff6666;"></i>
        <h5>${{ Total_price }}</h5>
        <p>Total Price for the month</p>
      </li>
      <li>
        <i class="ph-wallet-fill"></i>
        <h5>${{ Remaining_price }}</h5>
        <p>Remaining Price for the month</p>
      </li>
      <li>
        <i class="ph-shopping-bag-fill"></i>
        <h5>${{ Deposit_price }}</h5>
        <p>Deposit Price for the month</p>
      </li>
      <li>
        <i class="fa-brands fa-servicestack" style="color: #eab3e0;"></i>
        <h5>${{ servies_price }}</h5>
        <p>Booking Price for the month</p>
      </li>
      <li>
        <i class="fa-regular fa-calendar" style="color: #3498db;"></i>
        <h5>{{ numberOfBooks }}</h5>
        <p>Number of Booked for the month</p>
      </li>
    </ul>
    <div class="show_data_month">
      <button class="custom-btn btn-16 " @click="showPreviousMonths">Previous</button>
      <span class="radio-header radio-text ms-3 me-3">{{ this.currentMonth }} / {{ this.currentYear  }}</span>
      <button class="custom-btn btn-16" @click="showNextMonths" :disabled="disableNextButton">Next</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: "",
      currentURL: "",
      apiData_id: [],
      Total_price: "",
      Deposit_price: "",
      Remaining_price: "",
      servies_price: "",
      userId: null,
      currentMonth: null,
      currentYear: null,
      isTransitioning: false,
      disableNextButton: false,
      numberOfBooks: 0, 
      // Không vô hiệu hóa nút "Xem các tháng sau" ban đầu
    };
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
          this.calculateTotal(); // Gọi hàm tính tổng sau khi lấy dữ liệu API
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    calculateTotal() {
      // Lọc các bản ghi thuộc tháng và năm hiện tại
        const filteredData = this.apiData_id.filter((booking) => {
        const updatedAtDate = new Date(booking.price.updated_at);
        const updatedMonth = updatedAtDate.getMonth() + 1;
        const updatedYear = updatedAtDate.getFullYear();
        return updatedMonth === this.currentMonth && updatedYear === this.currentYear;
      });

      // Tính tổng các giá trị từ dữ liệu đã lọc
      this.Total_price = filteredData.reduce((total, booking) => {
        return total + parseFloat(booking.price.Total_price);
      }, 0).toFixed(2);

      this.Deposit_price = filteredData.reduce((total, booking) => {
        return total + parseFloat(booking.price.Deposit_price);
      }, 0).toFixed(2);

      this.Remaining_price = filteredData.reduce((total, booking) => {
        return total + parseFloat(booking.price.Remaining_price);
      }, 0).toFixed(2);

      this.servies_price = filteredData.reduce((total, booking) => {
        return total + parseFloat(booking.price.servies_price);
      }, 0).toFixed(2);
      this.numberOfBooks = filteredData.length;
    },

    showPreviousMonths() {
      this.isTransitioning = true; // Bắt đầu hiệu ứng
      setTimeout(() => {
        this.isTransitioning = false; // Kết thúc hiệu ứng sau 0.5s (thời gian transition)
        // Trừ đi 1 để lấy tháng trước đó và cập nhật dữ liệu
        this.currentMonth = this.currentMonth - 1;

        console.log(  this.currentMonth );

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
          console.log(  this.currentMonth );

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
      if (this.currentMonth >= currentMonth && this.currentYear >= currentYear) {
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

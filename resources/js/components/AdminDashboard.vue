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

      <ul class="main__body__box-info admin_dashboard" :class="{ fade: isTransitioning }">
        <li class="Price Total_Booking_Price">
          <img :src="'/assets/images/total%20booking%20price.png'" alt="" srcset="">
          <h6>Total Booking Price</h6>
          <h4>${{ parseFloat(this.servies_price) }}</h4>
        </li>
        <li class="Price Revenue_price">
          <img :src="'/assets/images/Revenue.png'" alt="" srcset="">
          <h6>Revenue</h6>
          <h4>${{ this.RevenueTatol }}</h4>
         
        </li>

        <li class=" Price Done_price">
          <img :src="'/assets/images/Done.png'" alt="" srcset="">
          <h6>Done</h6>
          <h4>${{ parseFloat(this.Done_price) }}</h4>
        </li>

        <li class="Price Remaining_price">
          <img :src="'/assets/images/Remaining.png'" alt="" srcset="">
          <h6>Remaining</h6>
          <h4>${{ parseFloat(this.Remaining_price) }}</h4>
        </li>
    
      </ul>

      <ul class="main__body__box-info" :class="{ fade: isTransitioning }">
        <li class="Price Deposit_price">
          <img :src="'/assets/images/Deposit.png'" alt="" srcset="">
          <h6>Deposit</h6>
          <h4>${{ parseFloat(this.Deposit_price) }}</h4>
        </li>

        <li class="Price Cancel_price">
          <img :src="'/assets/images/Cancel.png'" alt="" srcset="">
          <h6>Cancel</h6>
          <h4>${{ parseFloat(this.Cancel_price) }}</h4>
        </li>

        <li class="Price Refund_price">
          <img :src="'/assets/images/Refund.png'" alt="" srcset="">
          <h6>Refund</h6>
          <h4>${{ parseFloat(this.Refund_price) }}</h4>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css"; // Import the CSS
import axios from "axios";
import moment from "moment";

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

         this.fetchapiData_id(this.dateRange.start, this.dateRange.end);
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
    fetchapiData_id(start, end) {
      if (this.artistId !== null) {
        axios
          .get(`/api/getDataArtist/ ${start}/${end}`)
          .then((response) => {
            // Lọc dữ liệu dựa trên ArtistID
            this.apiData_id = Object.values(
              this.totalByName(response.data)?.find(
                (filler) => parseInt(filler.id) === parseInt(this.artistId)
              ) || {}
            );
            this.Price();
          })

          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      } else if (this.employeeId !== null) {
        axios
          .get(`/api/getDataEmployee/${start}/${end}`)
          .then((response) => {
            this.apiData_id = Object.values(
              this.totalByName(response.data)?.find(
                (filler) => parseInt(filler.id) === parseInt(this.employeeId)
              ) || {}
            );
            this.Price();
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      } else {
        axios
          .get(`/api/getDataShowroom/ ${start}/${end}`)
          .then((response) => {
            // Nhận dữ liệu từ phản hồi
            this.apiData_id = response.data;

            this.Price();
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      }
    },

    totalByName(data) {
      // Tạo một đối tượng để lưu trữ tổng số tiền cho từng tên dịch vụ
      const totals = {};

      // Lặp qua các ngày trong dữ liệu của bạn
      for (const date in data) {
        const fillerDatas = data[date];
        for (const Id in fillerDatas) {
          const fillerData = fillerDatas[Id];
          const Name = fillerData.Name;
          const id = fillerData.id;
          const total_price = fillerData.Total_price;

          // Nếu tên dịch vụ chưa tồn tại trong totals, thì khởi tạo nó với giá trị ban đầu
          if (!totals[Name]) {
            totals[Name] = {
              id: id,
              Name: Name,
              Total_price: 0,
              Deposit_price: 0,
              servies_price: 0,
              Revenue: 0,
              Done_price: 0,
              Cancel_price: 0,
              Refund_price: 0,
              Remaining_price: 0,
              length: 0,
            };
          }
          // Thêm giá trị của Total_price vào tổng số tiền cho tên dịch vụ
          totals[Name].Total_price += total_price;
          totals[Name].Deposit_price += fillerData.Deposit_price;
          totals[Name].servies_price += fillerData.servies_price;
          totals[Name].Revenue += fillerData.revenue;
          totals[Name].Done_price += fillerData.Done_price;
          totals[Name].Cancel_price += fillerData.Cancel_price;
          totals[Name].Refund_price += fillerData.Refund_price;
          totals[Name].Remaining_price += fillerData.Remaining_price;
          totals[Name].length += fillerData.length;
        }
      }

      // Chuyển đối tượng totals thành một mảng nếu cần
      const totalsArray = Object.values(totals);

      return totalsArray;
    },

    Price() {


      this.Total_price = 0;
      this.Deposit_price = 0;
      this.servies_price = 0;
      this.RevenueTatol = 0;
      this.Cancel_price = 0;
      this.Refund_price = 0;
      this.Done_price = 0;
      this.Remaining_price = 0;
      this.numberOfBooks = 0;

      if (this.adminId !== null) {
        const data = this.totalByName(this.apiData_id);

        data.forEach((item) => {
          this.Total_price += parseFloat(item.servies_price);
          this.Deposit_price += parseFloat(item.Deposit_price);
          this.servies_price += parseFloat(item.servies_price);
          this.RevenueTatol += parseFloat(item.Revenue);
          this.Cancel_price += parseFloat(item.Cancel_price);
          this.Refund_price += parseFloat(item.Refund_price);
          this.Done_price += parseFloat(item.Done_price);
          this.Remaining_price += parseFloat(item.Remaining_price);
          this.numberOfBooks = item.length;
        });
      } else {
        const data = this.apiData_id;
        this.Total_price += parseFloat(data[2]);
        this.Deposit_price += parseFloat(data[3]);
        this.servies_price += parseFloat(data[4]);
        this.RevenueTatol += parseFloat(data[5]);
        this.Cancel_price += parseFloat(data[7]);
        this.Refund_price += parseFloat(data[8]);
        this.Done_price += parseFloat(data[6]);
        this.Remaining_price += parseFloat(data[9]);

        this.numberOfBooks = data[10];
      }

      // Lặp qua danh sách dữ liệu và tính tổng
    },
  },

  mounted() {
    this.adminId = this.$root.adminId;

    this.artistId = this.$root.artistId;

    this.employeeId = this.$root.employeeId;

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

    this.fetchapiData_id(this.dateRange.start, this.dateRange.end);
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

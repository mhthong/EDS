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
    </div>

    <div>
      <!-- Hiển thị các thông tin và nút để xem các tháng -->

      <ul
        class="main__body__box-info admin_dashboard"
        :class="{ fade: isTransitioning }"
      >
        <li class="Price Total_Booking_Price">
          <img
            :src="'/assets/images/total%20booking%20price.png'"
            alt=""
            srcset=""
          />
          <h6>Initial Booking Price</h6>
          <h4>${{ parseFloat(this.servies_price) }}</h4>
        </li>
        <li class="Price Total_Booking_Price">
          <img
            :src="'/assets/images/total%20booking%20price.png'"
            alt=""
            srcset=""
          />
          <h6>Actual Booking Price</h6>
          <h4>${{ parseFloat(this.servies_price - this.PartialDone) }}</h4>
        </li>
        <li class="Price Revenue_price">
          <img :src="'/assets/images/Revenue.png'" alt="" srcset="" />
          <h6>Initial Revenue</h6>
          <h4>${{ this.Initial_revenue }}</h4>
        </li>
        <li class="Price Revenue_price">
          <img :src="'/assets/images/Revenue.png'" alt="" srcset="" />
          <h6>Actual Revenue</h6>
          <h4>${{ this.RevenueTatol }} </h4>
        </li>

<!--         <li class="Price Done_price">
          <img :src="'/assets/images/Done.png'" alt="" srcset="" />
          <h6>Done Revenue</h6>
          <h4>${{ parseFloat(this.Done_price_revenue) }}</h4>
        </li>

        <li class="Price Done_price">
          <img :src="'/assets/images/Done.png'" alt="" srcset="" />
          <h6>Done Booking Price </h6>
          <h4>${{ parseFloat(this.Done_price) }}</h4>
        </li>
 -->
    
         <li class="Price Refund_price">
          <img :src="'/assets/images/Refund.png'" alt="" srcset="" />
          <h6>Refund Price</h6>
          <h4>${{ parseFloat(this.Refund_price) }}</h4>
        </li>

        <li class="Price Deposit_price">
          <img :src="'/assets/images/Deposit.png'" alt="" srcset="" />
          <h6>Deposit Price</h6>
          <h4>${{ parseFloat(this.Deposit_price) }}</h4>
        </li>
        <li class="Price Remaining_price">
          <img :src="'/assets/images/Remaining.png'" alt="" srcset="" />
          <h6>Remaining Price</h6>
          <h4>${{ parseFloat(this.Remaining_price) }}</h4>
        </li>
        <li class="Price Refund_price">
          <img
            :src="'/assets/images/total%20booking%20price.png'"
            alt=""
            srcset=""
          />
          <h6>Upsell ( Artist )</h6>
          <h4>${{ parseFloat(this.upsale) }}</h4>
        </li>
        <li class="Price Refund_price">
          <img :src="'/assets/images/Refund.png'" alt="" srcset="" />
          <h6>Refund Booking Price</h6>
          <h4>${{ parseFloat(this.Refund_booking) }}</h4>
        </li>

        <li class="Price Cancel_price">
          <img :src="'/assets/images/Cancel.png'" alt="" srcset="" />
          <h6>Cancel Booking Price</h6>
          <h4>${{ parseFloat(this.Cancel_price) }}</h4>
        </li>

   
    
        <li class="Price" v-if="this.title !== 'Artist' && this.employeeId === null && this.kpi != undefined">
          <img
            :src="'/assets/images/total%20booking%20price.png'"
            alt=""
            srcset=""
          />
          <h6>KPI</h6>
          <h4>
            ${{ this.RevenueTatol }} / ${{ parseFloat(this.kpi) }} POC
            {{ calculatePercentage() }} %
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
      showrooms: [],
      selectedShowroom: null,
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
      Done_price_revenue: "",
      PartialDone: 0,
      Initial_revenue: 0,
      Refund_booking:0,
      kpi: "",
      upsale: "",
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
      selectedEmployee: null,
      title: null,
      apiDataAritst: null,
      apiDataEmployee: null,
      apiDatakpi: [],
      kpi: 0,
      resuft: [],
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
          .get(`/api/getDataArtistLocation/${start}/${end}/${selectedShowroom}`)
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
            `/api/getDataEmployeeLocation/${start}/${end}/${selectedShowroom}`
          )
          .then((response) => {
            /*       this.apiData_id = Object.values(
              this.totalByName(response.data)?.find(
                (filler) => parseInt(filler.id) === parseInt(this.employeeId)
              ) || {}
            ); */
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
          .get(
            `/api/getDataShowroomEmployee/${start}/${end}/${employee}/${title}`
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

    calculatePercentage() {
      const revenueTotal = parseFloat(this.RevenueTatol);
      const kpiValue = parseFloat(this.kpi);

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
              Done_price_revenue: 0,
              upsale: 0,
              PartialDone: 0,
              Initial_revenue:0,
              Refund_booking:0,
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
          totals[Name].Done_price_revenue += fillerData.Done_price_revenue;
          totals[Name].upsale += fillerData.upsale;
          totals[Name].PartialDone += fillerData.PartialDone;
          totals[Name].Initial_revenue += fillerData.Initial_revenue;
          totals[Name].Refund_booking += fillerData.Refund_booking;
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
      this.Total_price = 0;
      this.Deposit_price = 0;
      this.servies_price = 0;
      this.RevenueTatol = 0;
      this.Cancel_price = 0;
      this.Refund_price = 0;
      this.Done_price = 0;
      this.Remaining_price = 0;
      this.numberOfBooks = 0;
      this.Done_price_revenue = 0;
      this.upsale = 0;
      this.PartialDone =0;
      this.Initial_revenue = 0;
      this.Refund_booking = 0;


      if (this.adminId !== null) {
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
          this.Total_price += parseFloat(item.servies_price);
          this.Deposit_price += parseFloat(item.Deposit_price);
          this.servies_price += parseFloat(item.servies_price);
          this.RevenueTatol += parseFloat(item.Revenue);
          this.Cancel_price += parseFloat(item.Cancel_price);
          this.Refund_price += parseFloat(item.Refund_price);
          this.Done_price += parseFloat(item.Done_price);
          this.Remaining_price += parseFloat(item.Remaining_price);
          this.numberOfBooks = item.length;
          this.Done_price_revenue += parseFloat(item.Done_price_revenue);
          this.upsale += parseFloat(item.upsale);
          this.PartialDone += parseFloat(item.PartialDone);
          this.Initial_revenue += parseFloat(item.Initial_revenue);
          this.Refund_booking += parseFloat(item.Refund_booking);
        });
      } else {
        if (this.employeeId !== null) {
          this.resuft = Object.values(
            this.totalByName(this.apiData_id)?.find(
              (filler) => parseInt(filler.id) === parseInt(this.employeeId)
            ) || {}
          );
        } else {
          this.resuft = Object.values(
            this.totalByName(this.apiData_id)?.find(
              (filler) => parseInt(filler.id) === parseInt(this.artistId)
            ) || {}
          );
        }

        const data = this.resuft;
        this.Total_price += parseFloat(data[2]);
        this.Deposit_price += parseFloat(data[3]);
        this.servies_price += parseFloat(data[4]);
        this.RevenueTatol += parseFloat(data[5]);
        this.Cancel_price += parseFloat(data[7]);
        this.Refund_price += parseFloat(data[8]);
        this.Done_price += parseFloat(data[6]);
        this.Remaining_price += parseFloat(data[9]);

        this.numberOfBooks = data[10];
        this.Done_price_revenue = data[11];
        this.upsale = data[12];
        this.PartialDone = data[13];
        this.Initial_revenue = data[14];
        this.Refund_booking = data[15];

      }

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

    if (this.employeeId !== null) {
      this.selectedEmployee = this.employeeId;
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
</style>

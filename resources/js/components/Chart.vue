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
          @change="selectedShowroomChart()"
          style="padding: 5px; min-width: 300px; margin-bottom: 1rem"
        >
          <option :value="null" selected>Select Showroom</option>
          <option
            v-for="showroom in apiDatalocation"
            :key="showroom.id"
            :value="showroom.id"
          >
            {{ showroom.Name }}
          </option>
        </select>
      </label>
    </div>
    <div>
      <!-- Hiển thị các thông tin và nút để xem các tháng -->
      <ul class="main__body__box-info" :class="{ fade: isTransitioning }">
        <li class="Price">
          <img
            :src="'/assets/images/total%20booking%20price.png'"
            alt=""
            srcset=""
          />
          <h6>Total Booking Price</h6>
          <h4>${{ parseFloat(this.servies_price) }}</h4>
        </li>
        <li class="Price">
          <img :src="'/assets/images/Revenue.png'" alt="" srcset="" />
          <h6>Revenue</h6>
          <h4>${{ this.RevenueTatol }}</h4>
        </li>
      </ul>
    </div>

    <div class="radio-section">
      <button
        class="btn custom-btn btn-16"
        :class="{ active: selectedOptions.includes('Revenue') }"
        @click="toggleOption('Revenue')"
        :disabled="this.fillerArrayEmployee.length === 0"
      >
        Revenue
      </button>
      <button
        class="btn custom-btn btn-16"
        :class="{ active: selectedOptions.includes('splot') }"
        @click="toggleOption('splot')"
        :disabled="this.fillerArrayEmployee.length === 0"
      >
        Sales by splot
      </button>

      <button
        class="btn custom-btn btn-16"
        :class="{ active: selectedOptions.includes('Saler') }"
        @click="toggleOption('Saler')"
        :disabled="this.fillerArrayEmployee.length === 0"
      >
        Saler
      </button>

      <button
        class="btn custom-btn btn-16"
        :class="{ active: selectedOptions.includes('Location') }"
        @click="toggleOption('Location')"
        :disabled="this.fillerArrayLocation.length === 0"
      >
        Location
      </button>
      <button
        class="btn custom-btn btn-16"
        :class="{ active: selectedOptions.includes('Channel') }"
        @click="toggleOption('Channel')"
        :disabled="this.fillerArraySource.length === 0"
      >
        Channel Source
      </button>
      <button
        class="btn custom-btn btn-16"
        :class="{ active: selectedOptions.includes('Artist') }"
        @click="toggleOption('Artist')"
        :disabled="this.fillerArrayArtist.length === 0"
      >
        Artist
      </button>
      <button
        class="btn custom-btn btn-16"
        :class="{ active: selectedOptions.includes('Service') }"
        @click="toggleOption('Service')"
        :disabled="this.fillerArrayService.length === 0"
      >
        Service Booking
      </button>
    </div>

    <div class="main__body__data">
      <div class="members"  :class="{ active: selectedOptions.includes('Revenue') }">
        <div class="members__top">
          <h4>Revenue</h4>
        </div>

        <ul class="members__user">
          <li v-for="(item, index) in resultArrayFilteredRevenue" :key="index">
            <div class="profile">
              <p class="mb-0">{{ item[1] }}</p>
            </div>
            <span v-if="item[10] === 0">
              <p class="mb-0">{{ item[5] }} $ / {{ item[10] }} Spot</p>
            </span>
            <span v-else>
              <p class="mb-0">{{ item[5] }} $ / {{ item[10] }} Spot</p>
            </span>
          </li>
        </ul>
        <canvas ref="mychartRevenue"></canvas>
        <div></div>
      </div>

      <div class="members" :class="{ active: selectedOptions.includes('splot') }" >
        <div class="members__top">
          <h4>Customers number</h4>
        </div>
        <ul class="members__user">
          <li v-for="(item, index) in resultArrayFilteredSplot" :key="index">
            <div class="profile">
              <p class="mb-0">{{ item[1] }}</p>
            </div>
            <span v-if="item[10] === 0">
              <p class="mb-0">
                {{ item[4] }} $ / {{ item[11] }} Spot (AOV : 0 $)
              </p>
            </span>
            <span v-else>
              <p class="mb-0">
                {{ item[4] }} $ / {{ item[11] }} Spot (AOV :
                {{ (parseInt(item[4]) / parseInt(item[11])).toFixed(2) }}
                $)
              </p>
            </span>
          </li>
        </ul>
        <canvas ref="mychartSplot"></canvas>
        <div>
          <!--  <canvas ref="lineChartShowroom"></canvas> -->
        </div>
      </div>

      <div class="members" :class="{ active: selectedOptions.includes('Saler') }" >
        <div class="members__top">
          <h4>Saler</h4>
        </div>
        <ul class="members__user">
          <li v-for="(item, index) in resultArrayFilteredEmployee" :key="index">
            <div class="profile">
              <p class="mb-0">{{ item[1] }}</p>
            </div>
            <span v-if="item[10] === 0">
              <p class="mb-0">
                {{ item[4] }} $ / {{ item[10] }} Spot (AOV : 0 $)
              </p>
            </span>
            <span v-else>
              <p class="mb-0">
                {{ item[4] }} $ / {{ item[10] }} Spot (AOV :
                {{ (parseInt(item[4]) / parseInt(item[10])).toFixed(2) }}
                $)
              </p>
            </span>
          </li>
        </ul>
        <canvas ref="myChart"></canvas>
        <div>
          <!--  <canvas ref="lineChartShowroom"></canvas> -->
        </div>
      </div>


      <div class="members" :class="{ active: selectedOptions.includes('Location') }" >
        <div class="members__top">
          <h4>Location</h4>
        </div>
        <ul class="members__user">
          <li v-for="(item, index) in resultArrayFilteredLocation" :key="index">
            <div class="profile">
              <p class="mb-0">{{ item[1] }}</p>
            </div>
            <span v-if="item[11] === 0">
              <p class="mb-0">
                {{ item[4] }} $ / {{ item[11] }} Spot (AOV : 0 $)
              </p>
            </span>
            <span v-else>
              <p class="mb-0">
                {{ item[4] }} $ / {{ item[11] }} Spot(AOV :
                {{ (parseInt(item[4]) / parseInt(item[11])).toFixed(2) }}
                $)
              </p>
            </span>
          </li>
        </ul>
        <canvas ref="myChartLocation"></canvas>
        <div>
          <!--  <canvas ref="lineChartShowroom"></canvas> -->
        </div>
      </div>

      <div class="members" :class="{ active: selectedOptions.includes('Channel') }" >

        <div class="members__top">
          <h4>Channel source</h4>
        </div>
        <ul class="members__user">
          <li v-for="(item, index) in resultArrayFilteredSource" :key="index">
            <div class="profile">
              <p class="mb-0">{{ item[1] }}</p>
            </div>
            <span v-if="item[10] === 0">
              <p class="mb-0">{{ item[4] }} $ / {{ item[10] }} Spot</p>
            </span>
            <span v-else>
              <p class="mb-0">{{ item[4] }} $ / {{ item[10] }} Spot</p>
            </span>
          </li>
        </ul>
        <canvas ref="myChartSource"></canvas>
        <div>
          <!--  <canvas ref="lineChartShowroom"></canvas> -->
        </div>
      </div>

      <div class="members" :class="{ active: selectedOptions.includes('Artist') }" >

        <div class="members__top">
          <h4>Artist</h4>
        </div>
        <ul class="members__user">
          <li v-for="(item, index) in resultArrayFilteredArtist" :key="index">
            <div class="profile">
              <p class="mb-0">{{ item[1] }}</p>
            </div>

            <div class="profile">
              <p class="mb-0">Revunue : {{ item[5] }} $</p>
            </div>
            <div class="profile">
              <p class="mb-0">Upsell : {{ item[12] }} $</p>
            </div>
            <span v-if="item[10] === 0">
              <p class="mb-0">
                Service Price : {{ item[4] }} $ / {{ item[10] }} Spot
              </p>
            </span>
            <span v-else>
              <p class="mb-0">
                Service Price : {{ item[4] }} $ / {{ item[10] }} Spot
              </p>
            </span>
          </li>
        </ul>
        <canvas ref="myChartArtist"></canvas>
        <div>
          <!--  <canvas ref="lineChartShowroom"></canvas> -->
        </div>
      </div>

      <div class="members" :class="{ active: selectedOptions.includes('Service') }" >

        <div class="members__top">
          <h4>Service Booking</h4>
          <div class="col-3">
            <select
              class="form-control"
              id="showroomSelect"
              v-model="selectedEmployee"
              @change="selectedEmployeeChart()"
              style="padding: 5px; margin-bottom: 1rem"
            >
              <option :value="null" selected>Select Employee</option>
              <option
                v-for="employee in apiDataEmployee"
                :key="employee.id"
                :value="employee.id"
              >
                {{ employee.name }}
              </option>
            </select>
          </div>
        </div>
        <ul class="members__user">
          <li v-for="(item, index) in resultArrayFilteredService" :key="index">
            <div class="profile">
              <p class="mb-0">{{ item[1] }}</p>
            </div>
            <span v-if="item[10] === 0">
              <p class="mb-0">
                {{ item[4] }} $ / {{ item[10] }} Spot (AOV : 0 $)
              </p>
            </span>
            <span v-else>
              <p class="mb-0">
                {{ item[4] }} $ / {{ item[10] }} Spot (AOV :
                {{ (parseInt(item[4]) / parseInt(item[10])).toFixed(2) }}
                $)
              </p>
            </span>
          </li>
        </ul>
        <canvas ref="myChartService"></canvas>
        <div>
          <!--  <canvas ref="lineChartShowroom"></canvas> -->
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";
import ChartZoom from "chartjs-plugin-zoom";
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css"; // Import the CSS
import axios from "axios";
import moment from "moment";

// Thêm plugin vào Chart.js
Chart.register(ChartZoom);

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

      id: "",
      currentURL: "",
      apiData: [],
      apiData_id: [],
      apiDataEmployee: [],
      apiDatalocation: [],
      apiDataGet: [],
      apiDataService: [],
      resuft: [],
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
      filteredDataEmployee: [],
      filteredDataChart: [],
      resultArrayFilteredSplot: [],
      filteredDataWaiting: null,
      filteredDataCancel: null,
      filteredDataDone: null,
      filteredDataRefund: null,

      showrooms: [],
      selectedShowroom: null,

      selectedEmployee: null,

      statusbooking: null,
      statusbookingall: null,

      chart: null,
      resultArrayFilteredEmployee: [],
      fillerArrayEmployee: [],

      chartLocation: null,
      resultArrayFilteredLocation: [],
      fillerArrayLocation: [],

      chartSource: null,
      resultArrayFilteredSource: [],
      fillerArraySource: [],

      chartArtist: null,
      resultArrayFilteredArtist: [],
      fillerArrayArtist: [],

      chartService: null,
      resultArrayFilteredService: [],
      fillerArrayService: [],

      chartSplot: null,
      chartRevenue: null,
      resultArrayFilteredRevenue: [],
      fillerArrayRevenue: [],

      updated_at_price: null,

      key: null,
      resultArray: [],
      selectedOptions: [],
      chartRendered: {
        Revenue: false,
        Service: false,
        Channel: false,
        Location: false,
        Artist: false,
        Saler: false,
        splot: false,
      },
    };
  },

  watch: {
    dateRange(newDateRange, oldDateRange) {
      // Log khi dateRange thay đổi
      this.dateRange.end = moment(newDateRange.endDate).format("YYYY-MM-DD");
      this.dateRange.start = moment(newDateRange.startDate).format(
        "YYYY-MM-DD"
      );
      this.selectedShowroomChart();
    },
    deep: true, // Theo dõi các sự thay đổi sâu trong object
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

    this.fetchapiDataEmployee();
    this.fetchShowrooms();
    this.fetchGet();
    this.fetchArtist();
    this.fetchServices();

    this.fetchapiData_id(
      this.dateRange.start,
      this.dateRange.end,
      this.selectedShowroom
    );

    this.fetchapiServiceData(
      this.dateRange.start,
      this.dateRange.end,
      this.selectedShowroom,
      this.selectedEmployee
    );

    this.fetchapiShowroomsData(this.dateRange.start, this.dateRange.end);

    this.fetchapiEmployeeData(
      this.dateRange.start,
      this.dateRange.end,
      this.selectedShowroom
    );

    this.fetchapiSourceData(
      this.dateRange.start,
      this.dateRange.end,
      this.selectedShowroom
    );

    this.fetchapiArtistData(
      this.dateRange.start,
      this.dateRange.end,
      this.selectedShowroom
    );

    if (this.apiData_id.length !== 0) {
      this.Price();
    }
  },
  methods: {
    /*     fetchapiData_id(start, end) {
      if (this.artistId !== null) {
        axios
          .get(`/api/getDataArtist/${start}/${end}`)
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
          .get(`/api/getDataShowroom/${start}/${end}`)
          .then((response) => {
            // Nhận dữ liệu từ phản hồi
            this.apiData_id = response.data;

            this.Price();
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      }
    }, */

    fetchapiData_id(start, end, showroom) {
      if (this.artistId !== null) {
        axios
          .get(`/api/getDataArtistLocation/${start}/${end}/${selectedShowroom}`)
          .then((response) => {
            this.apiData_id = response.data;
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

            this.Price();
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      } else {
        axios
          .get(`/api/getDataShowroom/${start}/${end}`)
          .then((response) => {
            this.apiData_id = response.data;
            this.Price();
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      }
    },

    fetchapiShowroomsData(start, end) {
      axios
        .get(`/api/getDataShowroom/${start}/${end}`)
        .then((response) => {
          this.fillerArrayLocation = response.data;
          // Tiếp tục xử lý dữ liệu và tính toán
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    fetchapiArtistData(start, end, showroom) {
      axios
        .get(`/api/getDataArtistLocation/${start}/${end}/${showroom}`)
        .then((response) => {
          this.fillerArrayArtist = response.data;
          // Tiếp tục xử lý dữ liệu và tính toán
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    async fetchapiSourceData(start, end, showroom) {
      try {
        await axios
          .get(`/api/getDataSourceLocation/${start}/${end}/${showroom}`)
          .then((response) => {
            this.fillerArraySource = response.data;
            // Tiếp tục xử lý dữ liệu và tính toán
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    },

    async fetchapiServiceData(start, end, showroom, employee) {
      try {
        await axios
          .get(
            `/api/getDataServiceLocation/${start}/${end}/${showroom}/${employee}`
          )
          .then((response) => {
            this.fillerArrayService = response.data;
            // Tiếp tục xử lý dữ liệu và tính toán
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    },

    async fetchapiEmployeeData(start, end, showroom) {
      try {
        await axios
          .get(`/api/getDataEmployeeLocation/${start}/${end}/${showroom}`)
          .then((response) => {
            this.fillerArrayEmployee = response.data;
            // Tiếp tục xử lý dữ liệu và tính toán
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    },

    selectedEmployeeChart() {
      this.chartRendered.Service = false;

      Promise.all([
        (this.fillerArrayService = []),
        this.fetchapiServiceData(
          this.dateRange.start,
          this.dateRange.end,
          this.selectedShowroom,
          this.selectedEmployee
        ),
      ]).then(() => {
        this.Price();
        // Tất cả API đã kết thúc
        this.toggleOption();
        this.handleSelectedOptions();
      });
    },

    selectedShowroomChart() {
      this.chartRendered.Revenue = false;
      this.chartRendered.Service = false;
      this.chartRendered.Channel = false;
      this.chartRendered.Location = false;
      this.chartRendered.Saler = false;
      this.chartRendered.Artist = false;
      this.chartRendered.splot = false;

      Promise.all([
        (this.fillerArrayLocation = []),
        this.fetchapiShowroomsData(this.dateRange.start, this.dateRange.end),

        (this.fillerArrayArtist = []),
        this.fetchapiArtistData(
          this.dateRange.start,
          this.dateRange.end,
          this.selectedShowroom
        ),

        (this.apiData_id = []),
        this.fetchapiData_id(
          this.dateRange.start,
          this.dateRange.end,
          this.selectedShowroom
        ),

        (this.fillerArraySource = []),
        this.fetchapiSourceData(
          this.dateRange.start,
          this.dateRange.end,
          this.selectedShowroom
        ),

        (this.fillerArrayService = []),
        this.fetchapiServiceData(
          this.dateRange.start,
          this.dateRange.end,
          this.selectedShowroom,
          this.selectedEmployee
        ),

        (this.fillerArrayEmployee = []),
        this.fetchapiEmployeeData(
          this.dateRange.start,
          this.dateRange.end,
          this.selectedShowroom
        ),
      ]).then(() => {
        this.Price();
        // Tất cả API đã kết thúc
        this.toggleOption();
        this.handleSelectedOptions();
      });
    },

    fetchShowrooms() {
      axios
        .get("/api/showrooms")
        .then((response) => {
          this.apiDatalocation = response.data;
        })
        .catch((error) => {
          console.error("Error fetching showrooms:", error);
        });
    },

    fetchGet() {
      axios
        .get("/api/get")
        .then((response) => {
          this.apiDataGet = response.data;
        })
        .catch((error) => {
          console.error("Error fetching Get::", error);
        });
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

    fetchServices() {
      axios
        .get("/api/services")
        .then((response) => {
          this.apiDataServices = response.data;
        })
        .catch((error) => {
          console.error("Error fetching Services::", error);
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

    Price() {
      this.Total_price = 0;
      this.Deposit_price = 0;
      this.servies_price = 0;
      this.RevenueTatol = 0;
      this.numberOfBooks = 0;

      if (this.adminId !== null) {
        /*        const data = this.totalByName(this.apiData_id); */

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
          this.numberOfBooks = item.length;
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
        this.numberOfBooks = data[10];
      }

      // Lặp qua danh sách dữ liệu và tính tổng
    },

    createChart(ctx, data, arrayFine) {
      const dates = Object.keys(data); // Lấy danh sách ngày
      const names = [
        ...new Set(
          Object.values(data)
            .map((item) => Object.values(item).map((inner) => inner.Name))
            .flat()
        ),
      ]; // Lấy danh sách tên duy nhất

      let datasets, totalRevenue;

      if (arrayFine == "revenue") {
        // Tạo dòng biểu đồ cho mỗi tên
        datasets = names.map((name) => ({
          label: name,
          data: dates.map(
            (date) =>
              data[date][
                Object.keys(data[date]).find(
                  (key) => data[date][key].Name === name
                )
              ].revenue
          ),
          borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16), // Màu sắc ngẫu nhiên
          borderWidth: 1.2,
          fill: true,
          pointRadius: 0.3,
        }));

        // Tính tổng doanh thu từ tất cả các tên
        totalRevenue = dates.map((date) =>
          names.reduce(
            (total, name) =>
              total +
              data[date][
                Object.keys(data[date]).find(
                  (key) => data[date][key].Name === name
                )
              ].revenue,
            0
          )
        );
      } else if (arrayFine == "servies_price") {
        // Tạo dòng biểu đồ cho mỗi tên
        datasets = names.map((name) => ({
          label: name,
          data: dates.map(
            (date) =>
              data[date][
                Object.keys(data[date]).find(
                  (key) => data[date][key].Name === name
                )
              ].servies_price
          ),
          borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16), // Màu sắc ngẫu nhiên
          borderWidth: 1.2,
          fill: true,
          pointRadius: 0.3,
        }));

        // Tính tổng doanh thu từ tất cả các tên
        totalRevenue = dates.map((date) =>
          names.reduce(
            (total, name) =>
              total +
              data[date][
                Object.keys(data[date]).find(
                  (key) => data[date][key].Name === name
                )
              ].servies_price,
            0
          )
        );
      } else {
        // Tạo dòng biểu đồ cho mỗi tên
        datasets = names.map((name) => ({
          label: name,
          data: dates.map(
            (date) =>
              data[date][
                Object.keys(data[date]).find(
                  (key) => data[date][key].Name === name
                )
              ].length_real
          ),
          borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16), // Màu sắc ngẫu nhiên
          borderWidth: 1.2,
          fill: true,
          pointRadius: 0.3,
        }));

        // Tính tổng doanh thu từ tất cả các tên
        totalRevenue = dates.map((date) =>
          names.reduce(
            (total, name) =>
              total +
              data[date][
                Object.keys(data[date]).find(
                  (key) => data[date][key].Name === name
                )
              ].length_real,
            0
          )
        );
      }

      // Thêm dòng biểu đồ cho tổng doanh thu
      datasets.push({
        label: "Total",
        data: totalRevenue,
        borderColor: "blue", // Màu sắc của dòng biểu đồ tổng doanh thu
        fill: false,
        borderWidth: 1.2,
        fill: true,
        pointRadius: 0.3,
      });
      // Khởi tạo biểu đồ với các datasets đã tạo và labels đã sắp xếp
      const chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: dates,
          datasets: datasets,
        },
        options: {
          elements: {
            line: {
              tension: 0.4, // Điều chỉnh độ bo cong của đường
            },
          },
          plugins: {
            filler: {
              propagate: true, // Cho phép lớp phủ
              use: ["start", "origin"], // Sử dụng lớp phủ từ "start" hoặc "origin"
            },

            zoom: {
              wheel: {
                enabled: true, // Cho phép zoom bằng cách sử dụng bánh xe chuột
              },
              drag: {
                enabled: true, // Cho phép kéo để zoom
              },
              pinch: {
                enabled: true, // Cho phép zoom bằng cách pinch (ngón tay cự đại)
              },
            },
          },
        },
      });

      return chart;
    },

    renderChart() {
      const ctx = this.$refs.myChart.getContext("2d");

      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = this.createChart(
        ctx,
        this.fillerArrayEmployee,
        "servies_price"
      );
      // Bắt sự kiện nhấp vào một nhãn (label) trong biểu đồ

      const DataMap = {};

      this.apiDataEmployee.forEach((Employee) => {
        DataMap[Employee.name] = Employee;
      });

      const sortedLabels = Object.keys(DataMap);

      this.resultArrayFilteredEmployee = this.resultArrayFiltered(
        this.fillerArrayEmployee,
        sortedLabels
      ).sort((a, b) => b[4] - a[4]);
    },

    renderChartRevenue() {
      // Sắp xếp các labels theo thứ tự tăng dần
      const ctx = this.$refs.mychartRevenue.getContext("2d");

      if (this.chartRevenue) {
        this.chartRevenue.destroy();
      }

      this.chartRevenue = this.createChart(
        ctx,
        this.fillerArrayEmployee,
        "revenue"
      );
      // Bắt sự kiện nhấp vào một nhãn (label) trong biểu đồ

      const DataMap = {};

      this.apiDataEmployee.forEach((Employee) => {
        DataMap[Employee.name] = Employee;
      });

      const sortedLabels = Object.keys(DataMap);

      this.resultArrayFilteredRevenue = this.resultArrayFiltered(
        this.fillerArrayEmployee,
        sortedLabels
      ).sort((a, b) => b[5] - a[5]);
      // Bắt sự kiện nhấp vào một nhãn (label) trong biểu đồ
    },

    renderChartSplot() {
      // Sắp xếp các labels theo thứ tự tăng dần
      const ctx = this.$refs.mychartSplot.getContext("2d");

      if (this.chartSplot) {
        this.chartSplot.destroy();
      }

      this.chartSplot = this.createChart(
        ctx,
        this.fillerArrayEmployee,
        "lenght_real"
      );
      // Bắt sự kiện nhấp vào một nhãn (label) trong biểu đồ

      const DataMap = {};

      this.apiDataEmployee.forEach((Employee) => {
        DataMap[Employee.name] = Employee;
      });

      const sortedLabels = Object.keys(DataMap);

      this.resultArrayFilteredSplot = this.resultArrayFiltered(
        this.fillerArrayEmployee,
        sortedLabels
      ).sort((a, b) => b[5] - a[5]);
      // Bắt sự kiện nhấp vào một nhãn (label) trong biểu đồ
    },

    renderChartLocation() {
      const ctx = this.$refs.myChartLocation.getContext("2d");

      // Check if a chart instance already exists and destroy it
      if (this.chartLocation) {
        this.chartLocation.destroy();
      }

      this.chartLocation = this.createChart(
        ctx,
        this.fillerArrayLocation,
        "servies_price"
      );
      // Bắt sự kiện nhấp vào một nhãn (label) trong biểu đồ

      const DataMap = {};

      this.apiDatalocation.forEach((location) => {
        DataMap[location.Name] = location;
      });

      const sortedLabels = Object.keys(DataMap);

      this.resultArrayFilteredLocation = this.resultArrayFiltered(
        this.fillerArrayLocation,
        sortedLabels
      ).sort((a, b) => b[4] - a[4]);
    },

    renderChartSource() {
      // Sắp xếp các labels theo thứ tự tăng dần
      const ctx = this.$refs.myChartSource.getContext("2d");

      // Check if a chart instance already exists and destroy it
      if (this.chartSource) {
        this.chartSource.destroy();
      }

      this.chartSource = this.createChart(
        ctx,
        this.fillerArraySource,
        "servies_price"
      );
      // Bắt sự kiện nhấp vào một nhãn (label) trong biểu đồ

      const DataMap = {};

      this.apiDataGet.forEach((source) => {
        DataMap[source.source_data] = source;
      });

      const sortedLabels = Object.keys(DataMap);

      this.resultArrayFilteredSource = this.resultArrayFiltered(
        this.fillerArraySource,
        sortedLabels
      ).sort((a, b) => b[4] - a[4]);
    },

    renderChartArtist() {
      // Sắp xếp các labels theo thứ tự tăng dần

      const ctx = this.$refs.myChartArtist.getContext("2d");

      // Check if a chart instance already exists and destroy it
      if (this.chartArtist) {
        this.chartArtist.destroy();
      }

      this.chartArtist = this.createChart(
        ctx,
        this.fillerArrayArtist,
        "servies_price"
      );
      // Bắt sự kiện nhấp vào một nhãn (label) trong biểu đồ

      const DataMap = {};

      this.apiDataAritst.forEach((Aritst) => {
        DataMap[Aritst.name] = Aritst;
      });

      const sortedLabels = Object.keys(DataMap);

      this.resultArrayFilteredArtist = this.resultArrayFiltered(
        this.fillerArrayArtist,
        sortedLabels
      ).sort((a, b) => b[4] - a[4]);
    },

    renderChartService() {
      // Sắp xếp các labels theo thứ tự tăng dần

      const ctx = this.$refs.myChartService.getContext("2d");

      // Check if a chart instance already exists and destroy it
      if (this.chartService) {
        this.chartService.destroy();
      }

      this.chartService = this.createChart(
        ctx,
        this.fillerArrayService,
        "servies_price"
      );
      // Bắt sự kiện nhấp vào một nhãn (label) trong biểu đồ

      const DataMap = {};

      this.apiDataServices.forEach((Service) => {
        DataMap[Service.Name] = Service;
      });

      const sortedLabels = Object.keys(DataMap);

      this.resultArrayFilteredService = this.resultArrayFiltered(
        this.fillerArrayService,
        sortedLabels
      ).sort((a, b) => b[4] - a[4]);
    },

    getRandomColor() {
      // Hàm này trả về một màu ngẫu nhiên dưới dạng rgba
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const alpha = 0.5; // Độ trong suốt của màu
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
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
              length_real: 0,
              upsale: 0,
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
          totals[Name].length_real += fillerData.length_real;
          totals[Name].upsale += fillerData.upsale;
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

    resultArrayFiltered(fillerArray, sortedLabels) {
      const result = sortedLabels.map((label) => {
        // Tìm dữ liệu hiện tại và quá khứ dựa trên label

        const DataForLabel = Object.values(
          this.totalByName(fillerArray)?.find(
            (filler) => filler.Name === label
          ) || {}
        );

        // Khởi tạo mảng dữ liệu cho hiện tại và quá khứ
        const Data = [];

        // Kiểm tra nếu dữ liệu hiện tại và quá khứ tồn tại
        if (DataForLabel) {
          // Đảm bảo rằng có hai giá trị tương ứng với quá khứ và hiện tại
          Data.push(...DataForLabel);
        }

        return Data;
      });

      return result;
    },

    destroyChart(chart) {
      if (chart) {
        chart.destroy();
      }
    },

    toggleOption(option) {
      if (this.selectedOptions.includes(option)) {
        // If the option is already selected, remove it
        const index = this.selectedOptions.indexOf(option);
        if (index !== -1) {
          this.selectedOptions.splice(index, 1);
        }
      } else {
        // If the option is not selected, add it
        this.selectedOptions.push(option);
      }

      // Call different functions based on the selected options
      this.handleSelectedOptions();
    },

    handleSelectedOptions() {
      // Handle different functions based on the selected options
      // Xử lý các hàm khác nhau dựa trên các lựa chọn đã chọn
      if (
        this.selectedOptions.includes("Revenue") &&
        !this.chartRendered.Revenue
      ) {
        this.renderChartRevenue();
        this.chartRendered.Revenue = true;
      }
      if (this.selectedOptions.includes("splot") && !this.chartRendered.splot) {
        this.renderChartSplot();
        this.chartRendered.splot = true;
      }
      if (
        this.selectedOptions.includes("Service") &&
        !this.chartRendered.Service
      ) {
        this.renderChartService();
        this.chartRendered.Service = true;
      }
      if (
        this.selectedOptions.includes("Channel") &&
        !this.chartRendered.Channel
      ) {
        this.renderChartSource();
        this.chartRendered.Channel = true;
      }
      if (
        this.selectedOptions.includes("Location") &&
        !this.chartRendered.Location
      ) {
        this.renderChartLocation();
        this.chartRendered.Location = true;
      }
      if (
        this.selectedOptions.includes("Artist") &&
        !this.chartRendered.Artist
      ) {
        this.renderChartArtist();
        this.chartRendered.Artist = true;
      }
      if (this.selectedOptions.includes("Saler") && !this.chartRendered.Saler) {
        this.renderChart();
        this.chartRendered.Saler = true;
      }
    },
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
  width: auto;
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

button.active {
  background: #b5ddff !important;
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

#main .main__body__data > div {
    flex: 1 0 49%;
    background: var(--white);
    padding: 1.25rem 1.5rem;
    border-radius: 5px;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.05);
}

#main .main__body__data > div {
  display: none;
}

#main .main__body__data > .active {
  display: block;

  width: 49%;
  flex: 1 0 49,5%;
    background: var(--white);
    padding: 1.25rem 1.5rem;
    border-radius: 5px;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.05);
}

</style>

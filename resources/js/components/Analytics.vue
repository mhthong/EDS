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
        :disabled="
          this.fillerArrayEmployee.length === 0 ||
          this.fillerArrayEmployeeOld.length === 0
        "
      >
        Revenue
      </button>
      <button
        class="btn custom-btn btn-16"
        :class="{ active: selectedOptions.includes('splot') }"
        @click="toggleOption('splot')"
        :disabled="
          this.fillerArrayEmployee.length === 0 ||
          this.fillerArrayEmployeeOld.length === 0
        "
      >
        Sales by splot
      </button>

      <button
        class="btn custom-btn btn-16"
        :class="{ active: selectedOptions.includes('Channel') }"
        @click="toggleOption('Channel')"
        :disabled="
          this.fillerArraySource.length === 0 ||
          this.fillerArraySourceOld.length === 0
        "
      >
        Channel Source
      </button>
      <button
        class="btn custom-btn btn-16"
        :class="{ active: selectedOptions.includes('Location') }"
        @click="toggleOption('Location')"
        :disabled="
          this.fillerArrayLocation.length === 0 ||
          this.fillerArrayLocationOld.length === 0
        "
      >
        Location
      </button>
      <button
        class="btn custom-btn btn-16"
        :class="{ active: selectedOptions.includes('Service') }"
        @click="toggleOption('Service')"
        :disabled="
          this.fillerArrayService.length === 0 ||
          this.fillerArrayServiceOld.length === 0
        "
      >
        Service Booking
      </button>
    </div>

    <div></div>

    <div class="main__body__data">
      <div class="members">
        <div class="members__top">
          <h4>Revenue</h4>
        </div>
        <canvas ref="mychartRevenue"></canvas>
        <div></div>
      </div>
      <div class="members">
        <div class="members__top">
          <h4>Customers number</h4>
        </div>
        <canvas ref="mychartSplot"></canvas>
        <div></div>
      </div>
      
    </div>

    <div class="main__body__data">
      <div class="members">
        <div class="members__top">
          <h4>Channel source</h4>
        </div>
        <canvas ref="myChartSource"></canvas>
        <div></div>
      </div>

      <div class="members">
        <div class="members__top">
          <h4>Location</h4>
        </div>
        <canvas ref="myChartLocation"></canvas>
        <div></div>
      </div>
    </div>

    <div class="main__body__data">      
      <div class="members">
        <div class="members__top">
          <h4>Service Booking</h4>
        </div>
        <canvas ref="myChartService"></canvas>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";
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
      newStartDate: null,
      newEndDate: null,

      id: "",
      currentURL: "",
      apiData: [],
      apiDataNow: [],
      apiDataPast: [],
      apiDataEmployee: [],
      apiDatalocation: [],
      apiDataGet: [],
      apiDataService: [],
      Total_price: 0,
      Deposit_price: 0,
      Remaining_price: 0,
      servies_price: 0,
      Revenue: 0,
      RevenueTatol: 0,
      adminId: null,
      employeeId: null,
      artistId: null,
      isTransitioning: false,
      disableNextButton: false,
      numberOfBooks: 0,
      filteredDataChartRange: [],
      filteredData: [],
      filteredDataEmployee: [],
      filteredDataChart: [],
      filteredDataChartOld: [],
      filteredDataWaiting: null,
      filteredDataCancel: null,
      filteredDataDone: null,
      filteredDataRefund: null,

      statusbooking: null,
      statusbookingall: null,

      chart: null,
      resultArrayFilteredEmployee: [],

      chartLocation: null,
      resultArrayFilteredLocation: [],
      fillerArrayLocation: [],
      fillerArrayLocationOld: [],
      PercentageLocation: [],

      chartSource: null,
      resultArrayFilteredSource: [],
      fillerArraySource: [],
      fillerArraySourceOld: [],
      PercentageSource: [],

      chartArtist: null,
      resultArrayFilteredArtist: [],

      chartService: null,
      resultArrayFilteredService: [],
      fillerArrayService: [],
      fillerArrayServiceOld: [],
      PercentageService: [],

      chartSplot: null,

      chartRevenue: null,
      resultArrayFilteredRevenue: [],
      updated_at_price: null,
      created_at_price: null,
      fillerArrayEmployee: [],
      fillerArrayEmployeeOld: [],

      key: null,
      resultArray: [],
      selectedOptions: [],

      chartRendered: {
        Revenue: false,
        Service: false,
        Channel: false,
        Location: false,
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
      const { newStartDate, newEndDate } = this.calculateNewStartAndEndDates(
        this.dateRange.start,
        this.dateRange.end
      );

      this.newStartDate = moment(newStartDate).format("YYYY-MM-DD");
      this.newEndDate = moment(newEndDate).format("YYYY-MM-DD");

      this.chartRendered.Revenue = false;
      this.chartRendered.Service = false;
      this.chartRendered.Channel = false;
      this.chartRendered.Location = false;
      this.chartRendered.splot = false;

      Promise.all([
        (this.fillerArrayLocation = []),
        (this.fillerArrayLocationOld = []),
        this.fetchapiShowroomsData(this.dateRange.start, this.dateRange.end),
        this.fetchapiShowroomsDataPast(this.newStartDate, this.newEndDate),

        (this.apiData_id = []),
        this.fetchapiData_id(this.dateRange.start, this.dateRange.end),


        (this.fillerArraySource = []),
        (this.fillerArraySourceOld = []),
        this.fetchapiSourceData(this.dateRange.start, this.dateRange.end),
        this.fetchapiSourceDataPast(this.newStartDate, this.newEndDate),

        (this.fillerArrayService = []),
        (this.fillerArrayServiceOld = []),
        this.fetchapiServiceData(this.dateRange.start, this.dateRange.end),
        this.fetchapiServiceDataPast(this.newStartDate, this.newEndDate),

        (this.fillerArrayEmployee = []),
        (this.fillerArrayEmployeeOld = []),
        this.fetchapiEmployeeData(this.dateRange.start, this.dateRange.end),
        this.fetchapiEmployeeDataPast(this.newStartDate, this.newEndDate),
      ]).then(() => {
        this.Price();
        // Tất cả API đã kết thúc
        this.toggleOption();
        this.handleSelectedOptions();
      });
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

    const { newStartDate, newEndDate } = this.calculateNewStartAndEndDates(
      this.dateRange.start,
      this.dateRange.end
    );

    this.newStartDate = moment(newStartDate).format("YYYY-MM-DD");
    this.newEndDate = moment(newEndDate).format("YYYY-MM-DD");

    this.fetchapiDataEmployee();
    this.fetchShowrooms();
    this.fetchGet();
    this.fetchArtist();
    this.fetchServices();

    this.fetchapiData_id(this.dateRange.start, this.dateRange.end);

    this.fetchapiServiceData(this.dateRange.start, this.dateRange.end);
    this.fetchapiServiceDataPast(this.newStartDate, this.newEndDate);

    this.fetchapiShowroomsData(this.dateRange.start, this.dateRange.end);
    this.fetchapiShowroomsDataPast(this.newStartDate, this.newEndDate);

    this.fetchapiEmployeeData(this.dateRange.start, this.dateRange.end);
    this.fetchapiEmployeeDataPast(this.newStartDate, this.newEndDate);

    this.fetchapiSourceData(this.dateRange.start, this.dateRange.end);
    this.fetchapiSourceDataPast(this.newStartDate, this.newEndDate);

    this.Price();
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

    fetchapiShowroomsData(start, end) {
      axios
        .get(`/api/getDataShowroom/ ${start}/${end}`)
        .then((response) => {
          this.fillerArrayLocation = response.data;
          // Tiếp tục xử lý dữ liệu và tính toán
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    fetchapiShowroomsDataPast(start, end) {
      axios
        .get(`/api/getDataShowroom/${start}/${end}`)
        .then((response) => {
          this.fillerArrayLocationOld = response.data;
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    async fetchapiSourceData(start, end) {
      try {
        await axios
          .get(`/api/getDataSource/ ${start}/${end}`)
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

    fetchapiSourceDataPast(start, end) {
      axios
        .get(`/api/getDataSource/${start}/${end}`)
        .then((response) => {
          this.fillerArraySourceOld = response.data;
          // Tiếp tục xử lý dữ liệu và tính toán
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    async fetchapiServiceData(start, end) {
      try {
        await axios
          .get(`/api/getDataService/ ${start}/${end}`)
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

    async fetchapiServiceDataPast(start, end) {
      try {
        await axios
          .get(`/api/getDataService/${start}/${end}`)
          .then((response) => {
            this.fillerArrayServiceOld = response.data;
            // Tiếp tục xử lý dữ liệu và tính toán
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    },

    async fetchapiEmployeeData(start, end) {
      try {
        await axios
          .get(`/api/getDataEmployee/ ${start}/${end}`)
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

    async fetchapiEmployeeDataPast(start, end) {
      try {
        await axios
          .get(`/api/getDataEmployee/${start}/${end}`)
          .then((response) => {
            this.fillerArrayEmployeeOld = response.data;
            // Tiếp tục xử lý dữ liệu và tính toán
          })
          .catch((error) => {
            console.error("Error fetching API data:", error);
          });
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
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
      if (
        this.selectedOptions.includes("Service") &&
        !this.chartRendered.Service &&
        this.fillerArrayService != [] &&
        this.fillerArrayServiceOld != []
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
        this.selectedOptions.includes("splot") &&
        !this.chartRendered.splot
      ) {
        this.renderChartSplot();
        this.chartRendered.splot = true;
      }
    },

    Price() {
      this.Total_price = 0;
      this.Deposit_price = 0;
      this.servies_price = 0;
      this.RevenueTatol = 0;
      this.numberOfBooks = 0;

      if (this.adminId !== null) {
        const data = this.totalByName(this.apiData_id);

        data.forEach((item) => {
          this.Total_price += parseFloat(item.servies_price);
          this.Deposit_price += parseFloat(item.Deposit_price);
          this.servies_price += parseFloat(item.servies_price);
          this.RevenueTatol += parseFloat(item.Revenue);
          this.numberOfBooks = item.length;
        });
      } else {
        const data = this.apiData_id;
        this.Total_price += parseFloat(data[2]);
        this.Deposit_price += parseFloat(data[3]);
        this.servies_price += parseFloat(data[4]);
        this.RevenueTatol += parseFloat(data[5]);
        this.numberOfBooks = data[10];
      }

      // Lặp qua danh sách dữ liệu và tính tổng
    },

    renderChartRevenue() {
      const ctx = this.$refs.mychartRevenue.getContext("2d");

      // Xử lý dữ liệu apiDataEmployee trước
      const employeeDataMap = {};

      this.apiDataEmployee.forEach((employee) => {
        employeeDataMap[employee.name] = employee;
      });

      const Name_Chart = this.dateRange.start + "  " + this.dateRange.end;

      const Name_Chart_New = this.newStartDate + "  " + this.newEndDate;

      const sortedLabels = Object.keys(employeeDataMap);

      // 2. Sử dụng map để tạo datasets
      const datasets = sortedLabels.map((label) => {
        // Tìm dữ liệu hiện tại và quá khứ dựa trên label

        const currentDataForLabel = Object.values(
          this.totalByName(this.fillerArrayEmployee)?.find(
            (filler) => filler.Name === label
          ) || {}
        );

        const pastDataForLabel = Object.values(
          this.totalByName(this.fillerArrayEmployeeOld)?.find(
            (filler) => filler.Name === label
          ) || {}
        );

        // Khởi tạo mảng dữ liệu cho hiện tại và quá khứ
        const currentData = [];
        const pastData = [];

        // Kiểm tra nếu dữ liệu hiện tại và quá khứ tồn tại
        if (currentDataForLabel && pastDataForLabel) {
          // Đảm bảo rằng có hai giá trị tương ứng với quá khứ và hiện tại
          currentData.push(currentDataForLabel[5]);
          pastData.push(pastDataForLabel[5]);
        } else {
          // Trong trường hợp không tìm thấy dữ liệu, thêm giá trị 0
          currentData.push(0);
          pastData.push(0);
        }

        return {
          label: label,
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(192, 75, 75, 0.2)",
          ],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(192, 75, 75, 1)"],
          borderWidth: 1,
          data: currentData.concat(pastData), // Dữ liệu cột hiện tại và quá khứ
        };
      });

      // Tạo dữ liệu theo cấu trúc bạn yêu cầu
      const data = {
        labels: sortedLabels,
        datasets: [
          {
            label: Name_Chart,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            data: datasets.map((dataset) => dataset.data[0]), // Lấy giá trị hiện tại từ mảng datasets
          },
          {
            label: Name_Chart_New,
            backgroundColor: "rgba(192, 75, 75, 0.2)",
            borderColor: "rgba(192, 75, 75, 1)",
            borderWidth: 1,
            data: datasets.map((dataset) => dataset.data[1]), // Lấy giá trị quá khứ từ mảng datasets
          },
        ],
      };

      if (this.chartRevenue) {
        this.chartRevenue.destroy();
      }

      this.chartRevenue = new Chart(ctx, {
        type: "line", // Chọn loại biểu đồ là line
        data: data,
        options: {
          scales: {
            x: {
              maxRotation: 0, // Góc xoay tối đa là 0 độ
              minRotation: 0, // Góc xoay tối thiểu là 0 độ
              beginAtZero: true, // Bắt đầu từ 0
              maxTicksLimit: 10,
              scaleLabel: {
                display: true,
                labelString: "X-axis Label",
              },
            },
            y: {
              stacked: false,
              beginAtZero: true,
              scaleLabel: {
                display: true,
                labelString: "Y-axis Label",
              },
            },
          },
        },
      });
    },



    renderChartSplot() {
      const ctx = this.$refs.mychartSplot.getContext("2d");

      // Xử lý dữ liệu apiDataEmployee trước
      const employeeDataMap = {};

      this.apiDataEmployee.forEach((employee) => {
        employeeDataMap[employee.name] = employee;
      });

      const Name_Chart = this.dateRange.start + "  " + this.dateRange.end;

      const Name_Chart_New = this.newStartDate + "  " + this.newEndDate;

      const sortedLabels = Object.keys(employeeDataMap);

      // 2. Sử dụng map để tạo datasets
      const datasets = sortedLabels.map((label) => {
        // Tìm dữ liệu hiện tại và quá khứ dựa trên label

        const currentDataForLabel = Object.values(
          this.totalByName(this.fillerArrayEmployee)?.find(
            (filler) => filler.Name === label
          ) || {}
        );

        const pastDataForLabel = Object.values(
          this.totalByName(this.fillerArrayEmployeeOld)?.find(
            (filler) => filler.Name === label
          ) || {}
        );

        console.log(this.fillerArrayEmployee ,currentDataForLabel ,pastDataForLabel );
        // Khởi tạo mảng dữ liệu cho hiện tại và quá khứ
        const currentData = [];
        const pastData = [];

        // Kiểm tra nếu dữ liệu hiện tại và quá khứ tồn tại
        if (currentDataForLabel && pastDataForLabel) {
          // Đảm bảo rằng có hai giá trị tương ứng với quá khứ và hiện tại
          currentData.push(currentDataForLabel[11]);
          pastData.push(pastDataForLabel[11]);
        } else {
          // Trong trường hợp không tìm thấy dữ liệu, thêm giá trị 0
          currentData.push(0);
          pastData.push(0);
        }


        console.log(currentData ,pastData );

        return {
          label: label,
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(192, 75, 75, 0.2)",
          ],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(192, 75, 75, 1)"],
          borderWidth: 1,
          data: currentData.concat(pastData), // Dữ liệu cột hiện tại và quá khứ
        };
      });

      // Tạo dữ liệu theo cấu trúc bạn yêu cầu
      const data = {
        labels: sortedLabels,
        datasets: [
          {
            label: Name_Chart,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            data: datasets.map((dataset) => dataset.data[0]), // Lấy giá trị hiện tại từ mảng datasets
          },
          {
            label: Name_Chart_New,
            backgroundColor: "rgba(192, 75, 75, 0.2)",
            borderColor: "rgba(192, 75, 75, 1)",
            borderWidth: 1,
            data: datasets.map((dataset) => dataset.data[1]), // Lấy giá trị quá khứ từ mảng datasets
          },
        ],
      };

      if (this.chartSplot) {
        this.chartSplot.destroy();
      }

      this.chartSplot = new Chart(ctx, {
        type: "line", // Chọn loại biểu đồ là line
        data: data,
        options: {
          scales: {
            x: {
              maxRotation: 0, // Góc xoay tối đa là 0 độ
              minRotation: 0, // Góc xoay tối thiểu là 0 độ
              beginAtZero: true, // Bắt đầu từ 0
              maxTicksLimit: 10,
              scaleLabel: {
                display: true,
                labelString: "X-axis Label",
              },
            },
            y: {
              stacked: false,
              beginAtZero: true,
              scaleLabel: {
                display: true,
                labelString: "Y-axis Label",
              },
            },
          },
        },
      });
    },


    renderChartService() {
      const ctxService = this.$refs.myChartService.getContext("2d");
      // Tạo một đối tượng Map để lưu trữ dữ liệu cho từng datasets dựa trên "source_name", "source_id", và "created_at" cùng 1 ngày

      const Name_Chart = this.dateRange.start + "  " + this.dateRange.end;

      const Name_Chart_New = this.newStartDate + "  " + this.newEndDate;

      const ServiceDataMap = {};

      this.apiDataServices.forEach((Service) => {
        ServiceDataMap[Service.Name] = Service;
      });

      const sortedLabels = Object.keys(ServiceDataMap);

      // 2. Sử dụng map để tạo datasets
      const datasets = sortedLabels.map((label) => {
        // Tìm dữ liệu hiện tại và quá khứ dựa trên label

        const currentDataForLabel = Object.values(
          this.totalByName(this.fillerArrayService)?.find(
            (filler) => filler.Name === label
          ) || {}
        );

        const pastDataForLabel = Object.values(
          this.totalByName(this.fillerArrayServiceOld)?.find(
            (filler) => filler.Name === label
          ) || {}
        );

        // Khởi tạo mảng dữ liệu cho hiện tại và quá khứ
        const currentData = [];
        const pastData = [];

        // Kiểm tra nếu dữ liệu hiện tại và quá khứ tồn tại
        if (currentDataForLabel && pastDataForLabel) {
          // Đảm bảo rằng có hai giá trị tương ứng với quá khứ và hiện tại
          currentData.push(currentDataForLabel[3]);
          pastData.push(pastDataForLabel[3]);
        } else {
          // Trong trường hợp không tìm thấy dữ liệu, thêm giá trị 0
          currentData.push(0);
          pastData.push(0);
        }

        return {
          label: label,
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(192, 75, 75, 0.2)",
          ],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(192, 75, 75, 1)"],
          borderWidth: 1,
          data: currentData.concat(pastData), // Dữ liệu cột hiện tại và quá khứ
        };
      });

      // Tạo dữ liệu theo cấu trúc bạn yêu cầu
      const data = {
        labels: sortedLabels,
        datasets: [
          {
            label: Name_Chart,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            data: datasets.map((dataset) => dataset.data[0]), // Lấy giá trị hiện tại từ mảng datasets
          },
          {
            label: Name_Chart_New,
            backgroundColor: "rgba(192, 75, 75, 0.2)",
            borderColor: "rgba(192, 75, 75, 1)",
            borderWidth: 1,
            data: datasets.map((dataset) => dataset.data[1]), // Lấy giá trị quá khứ từ mảng datasets
          },
        ],
      };

      if (this.chartService) {
        this.chartService.destroy();
      }

      this.chartService = new Chart(ctxService, {
        type: "line", // Chọn loại biểu đồ là line
        data: data,
        options: {
          scales: {
            x: {
              maxRotation: 0, // Góc xoay tối đa là 0 độ
              minRotation: 0, // Góc xoay tối thiểu là 0 độ
              beginAtZero: true, // Bắt đầu từ 0
              maxTicksLimit: 10,
              scaleLabel: {
                display: true,
                labelString: "X-axis Label",
              },
            },
            y: {
              stacked: false,
              beginAtZero: true,
              scaleLabel: {
                display: true,
                labelString: "Y-axis Label",
              },
            },
          },
        },
      });
    },

    renderChartSource() {
      // Sắp xếp các labels theo thứ tự tăng dần
      const ctxSource = this.$refs.myChartSource.getContext("2d");

      const SourceDataMap = {};

      this.apiDataGet.forEach((Source) => {
        SourceDataMap[Source.source_data] = Source;
      });

      const Name_Chart = this.dateRange.start + "  " + this.dateRange.end;

      const Name_Chart_New = this.newStartDate + "  " + this.newEndDate;

      const sortedLabels = Object.keys(SourceDataMap);

      // 2. Sử dụng map để tạo datasets
      const datasets = sortedLabels.map((label) => {
        // Tìm dữ liệu hiện tại và quá khứ dựa trên label

        const currentDataForLabel = Object.values(
          this.totalByName(this.fillerArraySource).find(
            (filler) => filler.Name === label
          )
        );
        const pastDataForLabel = Object.values(
          this.totalByName(this.fillerArraySourceOld).find(
            (filler) => filler.Name === label
          )
        );

        // Khởi tạo mảng dữ liệu cho hiện tại và quá khứ
        const currentData = [];
        const pastData = [];

        // Kiểm tra nếu dữ liệu hiện tại và quá khứ tồn tại
        if (currentDataForLabel && pastDataForLabel) {
          // Đảm bảo rằng có hai giá trị tương ứng với quá khứ và hiện tại
          currentData.push(currentDataForLabel[3]);
          pastData.push(pastDataForLabel[3]);
        } else {
          // Trong trường hợp không tìm thấy dữ liệu, thêm giá trị 0
          currentData.push(0);
          pastData.push(0);
        }

        return {
          label: label,
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(192, 75, 75, 0.2)",
          ],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(192, 75, 75, 1)"],
          borderWidth: 1,
          data: currentData.concat(pastData), // Dữ liệu cột hiện tại và quá khứ
        };
      });

      // Tạo dữ liệu theo cấu trúc bạn yêu cầu
      const data = {
        labels: sortedLabels,
        datasets: [
          {
            label: Name_Chart,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            data: datasets.map((dataset) => dataset.data[0]), // Lấy giá trị hiện tại từ mảng datasets
          },
          {
            label: Name_Chart_New,
            backgroundColor: "rgba(192, 75, 75, 0.2)",
            borderColor: "rgba(192, 75, 75, 1)",
            borderWidth: 1,
            data: datasets.map((dataset) => dataset.data[1]), // Lấy giá trị quá khứ từ mảng datasets
          },
        ],
      };

      if (this.chartSource) {
        this.chartSource.destroy();
      }

      this.chartSource = new Chart(ctxSource, {
        type: "bar", // Chọn loại biểu đồ là cột
        data: data,
        options: {
          scales: {
            x: {
              stacked: false, // Đặt để hiển thị các cột lên nhau
            },
            y: {
              stacked: false,
            },
          },
        },
      });
    },

    renderChartLocation() {
      // Sắp xếp các labels theo thứ tự tăng dần
      const ctxLocation = this.$refs.myChartLocation.getContext("2d");

      const LocationDataMap = {};

      this.apiDatalocation.forEach((Location) => {
        LocationDataMap[Location.Name] = Location;
      });

      const Name_Chart = this.dateRange.start + "  " + this.dateRange.end;

      const Name_Chart_New = this.newStartDate + "  " + this.newEndDate;

      const sortedLabels = Object.keys(LocationDataMap);

      // 2. Sử dụng map để tạo datasets
      const datasets = sortedLabels.map((label) => {
        // Tìm dữ liệu hiện tại và quá khứ dựa trên label

        const currentDataForLabel = Object.values(
          this.totalByName(this.fillerArrayLocation)?.find(
            (filler) => filler.Name === label
          )
        );
        const pastDataForLabel = Object.values(
          this.totalByName(this.fillerArrayLocationOld)?.find(
            (filler) => filler.Name === label
          )
        );

        // Khởi tạo mảng dữ liệu cho hiện tại và quá khứ
        const currentData = [];
        const pastData = [];

        // Kiểm tra nếu dữ liệu hiện tại và quá khứ tồn tại
        if (currentDataForLabel && pastDataForLabel) {
          // Đảm bảo rằng có hai giá trị tương ứng với quá khứ và hiện tại
          currentData.push(currentDataForLabel[3]);
          pastData.push(pastDataForLabel[3]);
        } else {
          // Trong trường hợp không tìm thấy dữ liệu, thêm giá trị 0
          currentData.push(0);
          pastData.push(0);
        }

        return {
          label: label,
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(192, 75, 75, 0.2)",
          ],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(192, 75, 75, 1)"],
          borderWidth: 1,
          data: currentData.concat(pastData), // Dữ liệu cột hiện tại và quá khứ
        };
      });

      // Tạo dữ liệu theo cấu trúc bạn yêu cầu
      const data = {
        labels: sortedLabels,
        datasets: [
          {
            label: Name_Chart,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            data: datasets.map((dataset) => dataset.data[0]), // Lấy giá trị hiện tại từ mảng datasets
          },
          {
            label: Name_Chart_New,
            backgroundColor: "rgba(192, 75, 75, 0.2)",
            borderColor: "rgba(192, 75, 75, 1)",
            borderWidth: 1,
            data: datasets.map((dataset) => dataset.data[1]), // Lấy giá trị quá khứ từ mảng datasets
          },
        ],
      };

      if (this.chartLocation) {
        this.chartLocation.destroy();
      }

      this.chartLocation = new Chart(ctxLocation, {
        type: "bar", // Chọn loại biểu đồ là cột
        data: data,
        options: {
          scales: {
            x: {
              stacked: false, // Đặt để hiển thị các cột lên nhau
            },
            y: {
              stacked: false,
            },
          },
        },
      });
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
        }
      }

      // Chuyển đối tượng totals thành một mảng nếu cần
      const totalsArray = Object.values(totals);

      return totalsArray;
    },

    createdChart(sortedLabels, datasets, ctx) {
      // Check if a chartRevenue instance already exists and destroy it

      // Khởi tạo biểu đồ với các datasets đã tạo và labels đã sắp xếp
      const thisChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: sortedLabels,
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
          },
        },
      });

      return thisChart;
    },

    getRandomColor() {
      // Hàm này trả về một màu ngẫu nhiên dưới dạng rgba
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const alpha = 0.5; // Độ trong suốt của màu
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    },

    calculateNewStartAndEndDates(startDate, endDate) {
      const newStartDate = new Date(startDate);
      const newEndDate = new Date(endDate);
      const monthsDifference = moment(endDate).diff(
        moment(startDate),
        "months"
      );

      if (monthsDifference === 0) {
        newStartDate.setMonth(newStartDate.getMonth() - 1);
        newEndDate.setMonth(newEndDate.getMonth() - 1);
      } else {
        newStartDate.setMonth(newStartDate.getMonth() - monthsDifference);
        newEndDate.setMonth(newEndDate.getMonth() - monthsDifference);
      }

      return { newStartDate, newEndDate };
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

button.active {
  background: #b5ddff !important;
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

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


  <div class="radio-section">
    <button class="btn" :class="{ 'active': selectedOptions.includes('Revenue') }" @click="toggleOption('Revenue')">Revenue</button>
    <button class="btn" :class="{ 'active': selectedOptions.includes('Service') }" @click="toggleOption('Service')">Service Booking</button>
    <button class="btn" :class="{ 'active': selectedOptions.includes('Channel') }" @click="toggleOption('Channel')">Channel Source</button>
    <button class="btn" :class="{ 'active': selectedOptions.includes('Location') }" @click="toggleOption('Location')">Location</button>
  </div>



    <div>
      
    </div>

    <div class="main__body__data">
      <div class="members">
        <div class="members__top">
          <h4>Revenue</h4>
          <div class="members__menu">
            <ul>
              <li
                v-for="(item, index) in resultArrayFilteredRevenue"
                :key="'revenue-' + index"
              >
                <!-- Add this part to compare with the previous item -->
                <span v-if="index < 1">
                  Total Price Revenue : ${{ item.price.Revenue }}
                </span>
                <span v-if="index > 0">
                  <div
                    v-if="
                      resultArrayFilteredRevenue[index - 1].price.Revenue -
                        item.price.Revenue >=
                      0
                    "
                    style="color: #005eff"
                  >
                    <i>
                      {{
                        (
                          ((resultArrayFilteredRevenue[index - 1].price
                            .Revenue -
                            item.price.Revenue) /
                            item.price.Revenue) *
                          100
                        ).toFixed(2)
                      }}%
                      increase</i>
                  </div>

                  <div
                    v-if="
                      resultArrayFilteredRevenue[index - 1].price.Revenue -
                        item.price.Revenue <
                      0
                    "
                    style="color: #ff0000"
                  >
                    <i>
                      {{
                        (
                          ((resultArrayFilteredRevenue[index - 1].price
                            .Revenue -
                            item.price.Revenue) /
                            item.price.Revenue) *
                          100
                        ).toFixed(2)
                      }}%
                      decrease</i>
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <ul class="members__user"></ul>
        <canvas ref="mychartRevenue"></canvas>
        <div>
          <!--  <canvas ref="lineChartShowroom"></canvas> -->
        </div>
      </div>
      <div class="members">
        <div class="members__top">
          <h4>Service Booking</h4>
          <div class="members__menu">
            <ul>
              <li
                v-for="(item, index) in resultArrayFilteredService"
                :key="'Service' + index"
              >
                <span v-if="index < 1">
                  Total Servies Price : ${{ item.price.servies_price }}
                </span>
                <!-- Add this part to compare with the previous item -->
                <span v-if="index > 0">
                  <div
                    v-if="
                      resultArrayFilteredService[index - 1].price
                        .servies_price -
                        item.price.servies_price >=
                      0
                    "
                    style="color: #005eff"
                  >
                    <i>
                      {{
                        (
                          ((resultArrayFilteredService[index - 1].price
                            .servies_price -
                            item.price.servies_price) /
                            item.price.servies_price) *
                          100
                        ).toFixed(2)
                      }}%
                      increase</i>
                  </div>

                  <div
                    v-if="
                      resultArrayFilteredService[index - 1].price
                        .servies_price -
                        item.price.servies_price <
                      0
                    "
                    style="color: #ff0000"
                  >
                    <i>
                      {{
                        (
                          ((resultArrayFilteredService[index - 1].price
                            .servies_price -
                            item.price.servies_price) /
                            item.price.servies_price) *
                          100
                        ).toFixed(2)
                      }}%
                      decrease</i>
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <ul class="members__user">
          <li
            v-for="(result, indexpercent) in PercentageService"
            :key="indexpercent"
          >
            <div class="profile">
              <h5>{{ result.source_name }}</h5>
              <p>Service</p>
            </div>
            <span v-if="result.serviesPricePercentage >= 0">
              <i style="color: #005eff">
                ${{ result.services }}
                increase
                {{ result.serviesPricePercentage }} %
              </i>
            </span>

            <span v-if="result.serviesPricePercentage < 0">
              <i style="color: #ff0000">
                ${{ result.services }}
                decrease
                {{ result.serviesPricePercentage }} %
              </i>
            </span>
          </li>
        </ul>
        <canvas ref="myChartService"></canvas>
        <div>
          <!--  <canvas ref="lineChartShowroom"></canvas> -->
        </div>
      </div>
    </div>

    <div class="main__body__data">
      <div class="members">
        <div class="members__top">
          <h4>Channel source</h4>
          <div class="members__menu">
            <ul>
              <li
                v-for="(item, index) in resultArrayFilteredSource"
                :key="'Service' + index"
              >
                <span v-if="index < 1">
                  Total Servies Price : ${{ item.price.servies_price }}
                </span>
                <!-- Add this part to compare with the previous item -->
                <span v-if="index > 0">
                  <div
                    v-if="
                      resultArrayFilteredSource[index - 1].price.servies_price -
                        item.price.servies_price >=
                      0
                    "
                    style="color: #005eff"
                  >
                    <i>
                      {{
                        (
                          ((resultArrayFilteredSource[index - 1].price
                            .servies_price -
                            item.price.servies_price) /
                            item.price.servies_price) *
                          100
                        ).toFixed(2)
                      }}%
                      increase</i>
                  </div>

                  <div
                    v-if="
                      resultArrayFilteredSource[index - 1].price.servies_price -
                        item.price.servies_price <
                      0
                    "
                    style="color: #ff0000"
                  >
                    <i>
                      {{
                        (
                          ((resultArrayFilteredSource[index - 1].price
                            .servies_price -
                            item.price.servies_price) /
                            item.price.servies_price) *
                          100
                        ).toFixed(2)
                      }}%
                      decrease</i>
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <ul class="members__user">
          <li
            v-for="(result, indexpercent) in PercentageSource"
            :key="'PercentageSource' + indexpercent"
          >
            <div class="profile">
              <h5>{{ result.source_name }}</h5>
            </div>
            <span v-if="result.serviesPricePercentage >= 0">
              <i style="color: #005eff">
                ${{ result.services }}
                increase
                {{ result.serviesPricePercentage }} %
              </i>
            </span>

            <span v-if="result.serviesPricePercentage < 0">
              <i style="color: #ff0000">
                ${{ result.services }}
                decrease
                {{ result.serviesPricePercentage }} %
              </i>
            </span>
          </li>
        </ul>
        <canvas ref="myChartSource"></canvas>
        <div>
          <!--  <canvas ref="lineChartShowroom"></canvas> -->
        </div>
      </div>

      <div class="members">
        <div class="members__top">
          <h4>Location</h4>
          <div class="members__menu">
            <ul>
              <li
                v-for="(item, index) in resultArrayFilteredLocation"
                :key="'Location' + index"
              >
                <span v-if="index < 1">
                  Total Servies Price : ${{ item.price.servies_price }}
                </span>
                <!-- Add this part to compare with the previous item -->
                <span v-if="index > 0">
                  <div
                    v-if="
                      resultArrayFilteredLocation[index - 1].price
                        .servies_price -
                        item.price.servies_price >=
                      0
                    "
                    style="color: #005eff"
                  >
                    <i>
                      {{
                        (
                          ((resultArrayFilteredLocation[index - 1].price
                            .servies_price -
                            item.price.servies_price) /
                            item.price.servies_price) *
                          100
                        ).toFixed(2)
                      }}%
                      increase</i>
                  </div>

                  <div
                    v-if="
                      resultArrayFilteredLocation[index - 1].price
                        .servies_price -
                        item.price.servies_price <
                      0
                    "
                    style="color: #ff0000"
                  >
                    <i>
                      {{
                        (
                          ((resultArrayFilteredLocation[index - 1].price
                            .servies_price -
                            item.price.servies_price) /
                            item.price.servies_price) *
                          100
                        ).toFixed(2)
                      }}%
                      decrease</i>
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <ul class="members__user">
          <li
            v-for="(result, indexpercent) in PercentageLocation"
            :key="'PercentageLocation' + indexpercent"
          >
            <div class="profile">
              <h5>{{ result.source_name }}</h5>
            </div>

            <span v-if="result.serviesPricePercentage >= 0">
              <i style="color: #005eff">
                ${{ result.services }}
                increase
                {{ result.serviesPricePercentage }} %
              </i>
            </span>

            <span v-if="result.serviesPricePercentage < 0">
              <i style="color: #ff0000">
                ${{ result.services }}
                decrease
                {{ result.serviesPricePercentage }} %
              </i>
            </span>
          </li>
        </ul>
        <canvas ref="myChartLocation"></canvas>
        <div>
          <!--  <canvas ref="lineChartShowroom"></canvas> -->
        </div>
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
      dateRange: [
        moment().startOf("day").add(1, "second"),
        moment().endOf("day").subtract(1, "second"),
      ],

      id: "",
      currentURL: "",
      apiData: [],
      apiData_id: [],
      apiDataEmployee: [],
      apiDatalocation: [],
      apiDataGet: [],
      apiDataService: [],
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

      chartRevenue: null,
      resultArrayFilteredRevenue: [],
      updated_at_price: null,
      created_at_price: null,

      key: null,
      resultArray: [],
      selectedOptions: [],

      chartRendered: {
      Revenue: false,
      Service: false,
      Channel: false,
      Location: false,
      },
    };
  },

  watch: {
    dateRange: {
      handler(newDateRange, oldDateRange) {
        // Log khi dateRange thay đổi
        this.dateRange.end = newDateRange.endDate;
        this.dateRange.start = newDateRange.startDate;

        this.chartRendered.Revenue = false;
        this.chartRendered.Service = false;
        this.chartRendered.Channel = false;
        this.chartRendered.Location = false;
              
        this.calculate();
      },
      deep: true, // Theo dõi các sự thay đổi sâu trong object
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
      this.dateRange.start = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      this.dateRange.end = currentDate;
    }

    this.fetchapiDataEmployee();
    this.fetchShowrooms();
    this.fetchGet();
    this.fetchArtist();
    this.fetchServices();

    this.fetchapiData_id();
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

      const startDate = new Date(this.dateRange.start);
      const endDate = new Date(this.dateRange.end);

      const monthsDifference = moment(endDate).diff(
        moment(startDate),
        "months"
      );

      const newStartDate = new Date(startDate);
      const newEndDate = new Date(endDate);

      if (monthsDifference === 0) {
        // Calculate the new start date that's one month earlier

        newStartDate.setMonth(newStartDate.getMonth() - 1);

        // Calculate the new end date that's one month earlier

        newEndDate.setMonth(newEndDate.getMonth() - 1);
      } else {
        // Calculate the new start date that's one month earlier

        newStartDate.setMonth(newStartDate.getMonth() - monthsDifference);

        // Calculate the new end date that's one month earlier

        newEndDate.setMonth(newEndDate.getMonth() - monthsDifference);
      }

      this.filteredDataChart = this.apiData_id.filter((booking) => {
        const updatedAtDate = new Date(booking.updated_at);
        /*   console.log("updatedAtDate", updatedAtDate , this.dateRange.end ,this.dateRange.start, updatedAtDate <= this.dateRange.end ,updatedAtDate >= this.dateRange.start); */
        return updatedAtDate <= endDate && updatedAtDate >= newStartDate;
      });

      this.filteredData_con();
      this.Price();
      this.toggleOption();
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
        if (this.selectedOptions.includes('Revenue') && !this.chartRendered.Revenue) {
            this.renderChartRevenue();
            this.chartRendered.Revenue = true;
          }
          if (this.selectedOptions.includes('Service') && !this.chartRendered.Service) {
            this.renderChartService();
            this.chartRendered.Service = true;
          }
          if (this.selectedOptions.includes('Channel') && !this.chartRendered.Channel) {
            this.renderChartSource();
            this.chartRendered.Channel = true;
          }
          if (this.selectedOptions.includes('Location') && !this.chartRendered.Location) {
            this.renderChartLocation();
            this.chartRendered.Location = true;
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

    Price() {
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

    renderChartRevenue() {
      const startDate = new Date(this.dateRange.start);
      const endDate = new Date(this.dateRange.end);

      const monthsDifference = moment(endDate).diff(
        moment(startDate),
        "months"
      );

      const newStartDate = new Date(startDate);
      const newEndDate = new Date(endDate);

      if (monthsDifference === 0) {
        // Calculate the new start date that's one month earlier

        newStartDate.setMonth(newStartDate.getMonth() - 1);

        // Calculate the new end date that's one month earlier

        newEndDate.setMonth(newEndDate.getMonth() - 1);
      } else {
        // Calculate the new start date that's one month earlier

        newStartDate.setMonth(newStartDate.getMonth() - monthsDifference);

        // Calculate the new end date that's one month earlier

        newEndDate.setMonth(newEndDate.getMonth() - monthsDifference);
      }

      const sortedLabels = [];
      const currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        sortedLabels.push(
          `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${currentDate
            .getDate()
            .toString()
            .padStart(2, "0")}`
        );
        currentDate.setDate(currentDate.getDate() + 1); // Tăng ngày lên 1
      }

      const ctx = this.$refs.mychartRevenue.getContext("2d");

      // Tạo một đối tượng Map để lưu trữ dữ liệu cho từng datasets dựa trên "source_name", "source_id", và "created_at" cùng 1 ngày
      const datasetsMap = new Map();

      const resultArrayEmployee = [];

      const resultArrayEmployeeNew = [];

      // Xử lý dữ liệu apiDataEmployee trước
      const employeeDataMap = {};

      this.apiDataEmployee.forEach((employee) => {
        employeeDataMap[employee.name] = employee;
      });

      const currentDateEmployee = new Date(startDate);
      const currentDateEmployeeNew = new Date(newStartDate);

      this.fillerRangeDate(
        currentDateEmployee,
        endDate,
        employeeDataMap,
        resultArrayEmployee,
        this.filteredDataChart,
        "Revenue"
      );

      this.fillerRangeDate(
        currentDateEmployeeNew,
        newEndDate,
        employeeDataMap,
        resultArrayEmployeeNew,
        this.filteredDataChart,
        "Revenue"
      );

      this.calculateAllDataDate(resultArrayEmployeeNew);
      this.calculateAllDataDate(resultArrayEmployee);


      const Name_Chart =
        moment(startDate).format("YYYY-MM-DD") +
        "  " +
        moment(endDate).format("YYYY-MM-DD");
      this.fillerRangeDateAll(
        startDate,
        endDate,
        resultArrayEmployee,
        Name_Chart
      );

      const Name_Chart_New =
        moment(newStartDate).format("YYYY-MM-DD") +
        "  " +
        moment(newEndDate).format("YYYY-MM-DD");

      this.fillerRangeDateAll(
        newStartDate,
        newEndDate,
        resultArrayEmployeeNew,
        Name_Chart_New
      );

      const resultArray = [].concat(
        Object.values(resultArrayEmployee).filter(
          (item) => item.source_name === Name_Chart
        ),
        Object.values(resultArrayEmployeeNew).filter(
          (item) => item.source_name === Name_Chart_New
        )
      );

      const groupedData = this.synthetic(resultArray);

      // Chuyển kết quả từ object thành mảng
      this.resultArrayFilteredRevenue = Object.values(groupedData);

      const datasets = this.creatDatasetsMap(resultArray, datasetsMap);

      if (this.chartRevenue) {
        this.chartRevenue.destroy();
      }

      this.chartRevenue = this.createdChart(sortedLabels, datasets, ctx);
    },

    renderChartService() {
      const startDate = new Date(this.dateRange.start);
      const endDate = new Date(this.dateRange.end);

      const monthsDifference = moment(endDate).diff(
        moment(startDate),
        "months"
      );

      const newStartDate = new Date(startDate);
      const newEndDate = new Date(endDate);

      if (monthsDifference === 0) {
        // Calculate the new start date that's one month earlier

        newStartDate.setMonth(newStartDate.getMonth() - 1);

        // Calculate the new end date that's one month earlier

        newEndDate.setMonth(newEndDate.getMonth() - 1);
      } else {
        // Calculate the new start date that's one month earlier

        newStartDate.setMonth(newStartDate.getMonth() - monthsDifference);

        // Calculate the new end date that's one month earlier

        newEndDate.setMonth(newEndDate.getMonth() - monthsDifference);
      }

      const sortedLabels = [];
      const currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        sortedLabels.push(
          `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${currentDate
            .getDate()
            .toString()
            .padStart(2, "0")}`
        );
        currentDate.setDate(currentDate.getDate() + 1); // Tăng ngày lên 1
      }

      const ctxService = this.$refs.myChartService.getContext("2d");

      // Tạo một đối tượng Map để lưu trữ dữ liệu cho từng datasets dựa trên "source_name", "source_id", và "created_at" cùng 1 ngày
      const datasetsMapService = new Map();

      const resultArrayService = [];
      const resultArrayServiceOld = [];

      const ServiceDataMap = {};

      this.apiDataServices.forEach((Service) => {
        ServiceDataMap[Service.Name] = Service;
      });

      const currentDateService = new Date(startDate);

      const currentDateServiceOld = new Date(newStartDate);

      this.fillerRangeDate(
        currentDateService,
        endDate,
        ServiceDataMap,
        resultArrayService,
        this.filteredDataChart,
        "Service"
      );

      this.fillerRangeDate(
        currentDateServiceOld,
        newEndDate,
        ServiceDataMap,
        resultArrayServiceOld,
        this.filteredDataChart,
        "Service"
      );

      this.calculateAllDataDate(resultArrayService);
      this.calculateAllDataDate(resultArrayServiceOld);

      const Name_Chart =
        moment(startDate).format("YYYY-MM-DD") +
        "  " +
        moment(endDate).format("YYYY-MM-DD");
      this.fillerRangeDateAll(
        startDate,
        endDate,
        resultArrayService,
        Name_Chart
      );

      const Name_Chart_New =
        moment(newStartDate).format("YYYY-MM-DD") +
        "  " +
        moment(newEndDate).format("YYYY-MM-DD");
      this.fillerRangeDateAll(
        newStartDate,
        newEndDate,
        resultArrayServiceOld,
        Name_Chart_New
      );

      const resultArray = [].concat(
        Object.values(resultArrayService).filter(
          (item) => item.source_name === Name_Chart
        ),
        Object.values(resultArrayServiceOld).filter(
          (item) => item.source_name === Name_Chart_New
        )
      );

      this.fillerArrayService = this.synthetic(
        Object.values(resultArrayService).filter(
          (item) => item.source_name !== Name_Chart
        )
      );

      this.fillerArrayServiceOld = this.synthetic(
        Object.values(resultArrayServiceOld).filter(
          (item) => item.source_name !== Name_Chart_New
        )
      );

      this.PercentageService = this.compareArraysAndPrint(
        Object.values(this.fillerArrayService),
        Object.values(this.fillerArrayServiceOld)
      );

      const groupedData = this.synthetic(resultArray);

      // Chuyển kết quả từ object thành mảng
      this.resultArrayFilteredService = Object.values(groupedData);

      const datasets = this.creatDatasetsMap(resultArray, datasetsMapService);

      if (this.chartService) {
        this.chartService.destroy();
      }

      this.chartService = this.createdChart(sortedLabels, datasets, ctxService);
    },

    renderChartSource() {
      // Sắp xếp các labels theo thứ tự tăng dần
      const startDate = new Date(this.dateRange.start);
      const endDate = new Date(this.dateRange.end);

      const monthsDifference = moment(endDate).diff(
        moment(startDate),
        "months"
      );

      const newStartDate = new Date(startDate);
      const newEndDate = new Date(endDate);

      if (monthsDifference === 0) {
        // Calculate the new start date that's one month earlier

        newStartDate.setMonth(newStartDate.getMonth() - 1);

        // Calculate the new end date that's one month earlier

        newEndDate.setMonth(newEndDate.getMonth() - 1);
      } else {
        // Calculate the new start date that's one month earlier

        newStartDate.setMonth(newStartDate.getMonth() - monthsDifference);

        // Calculate the new end date that's one month earlier

        newEndDate.setMonth(newEndDate.getMonth() - monthsDifference);
      }

      const ctxSource = this.$refs.myChartSource.getContext("2d");

      // Tạo một đối tượng Map để lưu trữ dữ liệu cho từng datasets dựa trên "source_name", "source_id", và "created_at" cùng 1 ngày
      const datasetsMapSource = new Map();

      const resultArraySource = [];
      const resultArraySourceOld = [];

      const SourceDataMap = {};

      this.apiDataGet.forEach((Source) => {
        SourceDataMap[Source.source_data] = Source;
      });

      const currentDateSource = new Date(startDate);

      const currentDateSourceOld = new Date(newStartDate);

      this.fillerRangeDate(
        currentDateSource,
        endDate,
        SourceDataMap,
        resultArraySource,
        this.filteredDataChart,
        "Source"
      );

      this.fillerRangeDate(
        currentDateSourceOld,
        newEndDate,
        SourceDataMap,
        resultArraySourceOld,
        this.filteredDataChart,
        "Source"
      );

      this.calculateAllDataDate(resultArraySource);
      this.calculateAllDataDate(resultArraySourceOld);

      const Name_Chart =
        moment(startDate).format("YYYY-MM-DD") +
        "  " +
        moment(endDate).format("YYYY-MM-DD");
      this.fillerRangeDateAll(
        startDate,
        endDate,
        resultArraySource,
        Name_Chart
      );

      const Name_Chart_New =
        moment(newStartDate).format("YYYY-MM-DD") +
        "  " +
        moment(newEndDate).format("YYYY-MM-DD");
      this.fillerRangeDateAll(
        newStartDate,
        newEndDate,
        resultArraySourceOld,
        Name_Chart_New
      );

      this.fillerArraySource = this.synthetic(
        Object.values(resultArraySource).filter(
          (item) => item.source_name !== Name_Chart
        )
      );

      this.fillerArraySourceOld = this.synthetic(
        Object.values(resultArraySourceOld).filter(
          (item) => item.source_name !== Name_Chart_New
        )
      );

      const resultArray = [].concat(
        this.fillerArraySource,
        this.fillerArraySourceOld
      );

      this.PercentageSource = this.compareArraysAndPrint(
        Object.values(this.fillerArraySource),
        Object.values(this.fillerArraySourceOld)
      );

      const resultArrayall = [].concat(
        Object.values(resultArraySource).filter(
          (item) => item.source_name === Name_Chart
        ),
        Object.values(resultArraySourceOld).filter(
          (item) => item.source_name === Name_Chart_New
        )
      );

      const groupedData = this.synthetic(resultArrayall);

      // Chuyển kết quả từ object thành mảng
      this.resultArrayFilteredSource = Object.values(groupedData);

      const sortedLabels = Object.keys(SourceDataMap);

      // 2. Sử dụng map để tạo datasets
      const datasets = sortedLabels.map((label) => {
        // Tìm dữ liệu hiện tại và quá khứ dựa trên label
        const currentDataForLabel = Object.values(this.fillerArraySource).find(
          (filler) => filler.source_name === label
        );
        const pastDataForLabel = Object.values(this.fillerArraySourceOld).find(
          (filler) => filler.source_name === label
        );

        // Khởi tạo mảng dữ liệu cho hiện tại và quá khứ
        const currentData = [];
        const pastData = [];

        // Kiểm tra nếu dữ liệu hiện tại và quá khứ tồn tại
        if (currentDataForLabel && pastDataForLabel) {
          // Đảm bảo rằng có hai giá trị tương ứng với quá khứ và hiện tại
          currentData.push(currentDataForLabel.splot);
          pastData.push(pastDataForLabel.splot);
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
      const startDate = new Date(this.dateRange.start);
      const endDate = new Date(this.dateRange.end);

      const monthsDifference = moment(endDate).diff(
        moment(startDate),
        "months"
      );

      const newStartDate = new Date(startDate);
      const newEndDate = new Date(endDate);

      if (monthsDifference === 0) {
        // Calculate the new start date that's one month earlier

        newStartDate.setMonth(newStartDate.getMonth() - 1);

        // Calculate the new end date that's one month earlier

        newEndDate.setMonth(newEndDate.getMonth() - 1);
      } else {
        // Calculate the new start date that's one month earlier

        newStartDate.setMonth(newStartDate.getMonth() - monthsDifference);

        // Calculate the new end date that's one month earlier

        newEndDate.setMonth(newEndDate.getMonth() - monthsDifference);
      }

      const ctxLocation = this.$refs.myChartLocation.getContext("2d");

      // Tạo một đối tượng Map để lưu trữ dữ liệu cho từng datasets dựa trên "source_name", "source_id", và "created_at" cùng 1 ngày
      const datasetsMapLocation = new Map();

      const resultArrayLocation = [];
      const resultArrayLocationOld = [];

      const LocationDataMap = {};

      this.apiDatalocation.forEach((Location) => {
        LocationDataMap[Location.Name] = Location;
      });

      const currentDateLocation = new Date(startDate);

      const currentDateLocationOld = new Date(newStartDate);

      this.fillerRangeDate(
        currentDateLocation,
        endDate,
        LocationDataMap,
        resultArrayLocation,
        this.filteredDataChart,
        "Location"
      );

      this.fillerRangeDate(
        currentDateLocationOld,
        newEndDate,
        LocationDataMap,
        resultArrayLocationOld,
        this.filteredDataChart,
        "Location"
      );

      this.calculateAllDataDate(resultArrayLocation);
      this.calculateAllDataDate(resultArrayLocationOld);

      const Name_Chart =
        moment(startDate).format("YYYY-MM-DD") +
        "  " +
        moment(endDate).format("YYYY-MM-DD");
      this.fillerRangeDateAll(
        startDate,
        endDate,
        resultArrayLocation,
        Name_Chart
      );

      const Name_Chart_New =
        moment(newStartDate).format("YYYY-MM-DD") +
        "  " +
        moment(newEndDate).format("YYYY-MM-DD");
      this.fillerRangeDateAll(
        newStartDate,
        newEndDate,
        resultArrayLocationOld,
        Name_Chart_New
      );

      this.fillerArrayLocation = this.synthetic(
        Object.values(resultArrayLocation).filter(
          (item) => item.source_name !== Name_Chart
        )
      );

      this.fillerArrayLocationOld = this.synthetic(
        Object.values(resultArrayLocationOld).filter(
          (item) => item.source_name !== Name_Chart_New
        )
      );

      const resultArray = [].concat(
        this.fillerArrayLocation,
        this.fillerArrayLocationOld
      );

      this.PercentageLocation = this.compareArraysAndPrint(
        Object.values(this.fillerArrayLocation),
        Object.values(this.fillerArrayLocationOld)
      );

      const resultArrayall = [].concat(
        Object.values(resultArrayLocation).filter(
          (item) => item.source_name === Name_Chart
        ),
        Object.values(resultArrayLocationOld).filter(
          (item) => item.source_name === Name_Chart_New
        )
      );

      const groupedData = this.synthetic(resultArrayall);

      // Chuyển kết quả từ object thành mảng
      this.resultArrayFilteredLocation = Object.values(groupedData);

      const sortedLabels = Object.keys(LocationDataMap);

      // 2. Sử dụng map để tạo datasets
      const datasets = sortedLabels.map((label) => {
        // Tìm dữ liệu hiện tại và quá khứ dựa trên label
        const currentDataForLabel = Object.values(
          this.fillerArrayLocation
        ).find((filler) => filler.source_name === label);
        const pastDataForLabel = Object.values(
          this.fillerArrayLocationOld
        ).find((filler) => filler.source_name === label);

        // Khởi tạo mảng dữ liệu cho hiện tại và quá khứ
        const currentData = [];
        const pastData = [];

        // Kiểm tra nếu dữ liệu hiện tại và quá khứ tồn tại
        if (currentDataForLabel && pastDataForLabel) {
          // Đảm bảo rằng có hai giá trị tương ứng với quá khứ và hiện tại
          currentData.push(currentDataForLabel.splot);
          pastData.push(pastDataForLabel.splot);
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


    synthetic(resultArray) {
      const groupedData = {};
      // Lặp qua mảng dữ liệu và tổng hợp theo source_id và source_name
      resultArray.forEach((item) => {
        const key = `${item.source_id}-${item.source_name}`;
        if (!groupedData[key]) {
          groupedData[key] = {
            source_id: item.source_id,
            source_name: item.source_name,
            price: {
              Total_price: 0,
              Deposit_price: 0,
              servies_price: 0,
              Revenue: 0,
            },
            splot: 0,
          };
        }
        // Tính tổng giá
        for (const priceKey in item.price) {
          groupedData[key].price[priceKey] += item.price[priceKey];
        }

        groupedData[key].splot += parseInt(item.splot);
      });

      return groupedData;
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

    calculateAllDataDate(Array) {
      for (let i = 0; i < Object.values(Array).length; i++) {
        // Bỏ qua nếu update_at là null
        if (
          Object.values(Array)[i].updated_at <
          Object.values(Array)[i].created_at
        ) {
          continue;
        }

        for (let j = 0; j < Object.values(Array).length; j++) {
          if (
            i !== j &&
            Object.values(Array)[i].updated_at ===
              Object.values(Array)[j].created_at
          ) {
            Object.values(Array)[j].price.Revenue +=
              Object.values(Array)[i].price.Total_price -
              Object.values(Array)[i].price.Deposit_price;
          }
        }
      }
      return Array;
    },

    fillerRangeDate(start, end, DataMap, resultArray, filteredData, fillerkey) {
      let key;
      let keydata;
      let data;
      let name_array;
      while (start <= end) {
        const year = start.getFullYear();
        const month = String(start.getMonth() + 1).padStart(2, "0");
        const day = String(start.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;

        Object.keys(DataMap).forEach((name) => {
          if (fillerkey == "Revenue") {
            data = DataMap[name];
            name_array = data.name;
            keydata = `${name}-${data.id}-${year}-${month}-${day}`;
          } else if (fillerkey == "Service") {
            data = DataMap[name];
            name_array = data.Name;
            keydata = `${data.id}-${year}-${month}-${day}`;
          } else if (fillerkey == "Source") {
            data = DataMap[name];
            name_array = data.source_data;
            keydata = `${data.source_data}-${year}-${month}-${day}`;
          } else if (fillerkey == "Location") {
            data = DataMap[name];
            name_array = data.Name;
            keydata = `${data.id}-${year}-${month}-${day}`;
          }

          // Tạo một mảng tạm thời để tích hợp dữ liệu từ các mục có cùng ngày
          const tempArray = [];

          filteredData.forEach((item) => {
            const createdAt = new Date(item.price.created_at);
            const itemYear = createdAt.getFullYear();
            const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
            const itemDay = String(createdAt.getDate()).padStart(2, "0");

            if (fillerkey === "Revenue") {
              key = `${item.source_name}-${item.source_id}-${itemYear}-${itemMonth}-${itemDay}`;
            } else if (fillerkey == "Service") {
              key = `${item.services[0].id}-${itemYear}-${itemMonth}-${itemDay}`;
            } else if (fillerkey == "Source") {
              key = `${item.source_data}-${itemYear}-${itemMonth}-${itemDay}`;
            } else if (fillerkey == "Location") {
              key = `${item.ShowroomID}-${itemYear}-${itemMonth}-${itemDay}`;
            }

            const updatedAtDate = new Date(item.price.updated_at);
            const updateitemYear = updatedAtDate.getFullYear();
            const updateitemMonth = String(
              updatedAtDate.getMonth() + 1
            ).padStart(2, "0");
            const updateitemDay = String(updatedAtDate.getDate()).padStart(
              2,
              "0"
            );

            // Add the 'status' property to the merged item.
            if (key === keydata) {
              this.statusbooking = item.status;
              this.updated_at_price = `${updateitemYear}-${updateitemMonth}-${updateitemDay}`;
              tempArray.push({
                ...item,
                status: this.statusbooking, // Replace 'some_status_value' with the actual status property you want to add.
                updated_at: this.updated_at_price,
              });
            }
          });

          // Kiểm tra xem có dữ liệu trong mảng tạm thời không
          if (tempArray.length > 0) {
            // Nếu có dữ liệu, tích hợp chúng và thêm vào resultArrayEmployee
            const mergedItem = tempArray.reduce(
              (merged, item) => {
                merged.price.Total_price += parseInt(item.price.Total_price);
                merged.price.Deposit_price += parseInt(
                  item.price.Deposit_price
                );
                merged.price.servies_price += parseInt(
                  item.price.servies_price
                );
                merged.price.Revenue += parseInt(item.price.Deposit_price);
                merged.splot += 1;
                return merged;
              },
              {
                source_name: name_array,
                avatar: data.avatar,
                source_id: data.id,
                created_at: formattedDate,
                updated_at: this.updated_at_price,
                price: {
                  Total_price: 0,
                  Deposit_price: 0,
                  servies_price: 0,
                  Revenue: 0,
                },
                splot: 0,
                status: this.statusbooking,
              }
            );

            if (!resultArray[keydata]) {
              resultArray[keydata] = mergedItem;
              // Update the 'status' property.
            } else {
              resultArray[keydata].price.Total_price +=
                mergedItem.price.Total_price;
              resultArray[keydata].price.Deposit_price +=
                mergedItem.price.Deposit_price;
              resultArray[keydata].price.servies_price +=
                mergedItem.price.servies_price;
              resultArray[keydata].splot += mergedItem.splot;
            }
          } else {
            // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
            resultArray[keydata] = {
              source_name: name_array,
              avatar: data.avatar,
              source_id: data.id,
              created_at: formattedDate,
              updated_at: this.updated_at_price,
              price: {
                Total_price: 0,
                Deposit_price: 0,
                servies_price: 0,
                Revenue: 0,
              },
              splot: 0,
              status: this.statusbooking,
            };
          }
        });

        // Tăng ngày hiện tại lên 1 ngày
        start.setDate(start.getDate() + 1);
        this.updated_at_price = null;
        this.statusbooking = null;
      }

      return resultArray;
    },

    fillerRangeDateAll(start, end, resultArray, name) {
      while (start <= end) {
        const year = start.getFullYear();
        const month = String(start.getMonth() + 1).padStart(2, "0");
        const day = String(start.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;

        const tempArrayAll = [];

        Object.values(resultArray).forEach((item) => {
          const createdAt = new Date(item.created_at);
          const itemYear = createdAt.getFullYear();
          const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
          const itemDay = String(createdAt.getDate()).padStart(2, "0");
          const keyAll = `${itemYear}-${itemMonth}-${itemDay}`;

          if (keyAll === formattedDate) {
            tempArrayAll.push(item);
          }
        });

        if (tempArrayAll.length > 0) {
          // Nếu có dữ liệu, tích hợp chúng và thêm vào resultArray
          const mergedItem = tempArrayAll.reduce(
            (merged, item) => {
              merged.price.Total_price += parseInt(item.price.Total_price);
              merged.price.Deposit_price += parseInt(item.price.Deposit_price);
              merged.price.servies_price += parseInt(item.price.servies_price);
              merged.price.Revenue += parseInt(item.price.Revenue);
              merged.splot += parseInt(item.splot);
              return merged;
            },
            {
              source_name: name,
              avatar: name,
              source_id: name,
              created_at: formattedDate,
              price: {
                Total_price: 0,
                Deposit_price: 0,
                servies_price: 0,
                Revenue: 0,
              },
              splot: 0,
            }
          );

          if (!resultArray[formattedDate]) {
            resultArray[formattedDate] = mergedItem;
          } else {
            // Cập nhật giá trị trong resultArray thay vì gán lại
            resultArray[formattedDate].price.Total_price =
              mergedItem.price.Total_price;
            resultArray[formattedDate].price.Deposit_price =
              mergedItem.price.Deposit_price;
            resultArray[formattedDate].price.servies_price =
              mergedItem.price.servies_price;
            resultArray[formattedDate].price.Revenue = mergedItem.price.Revenue;
            resultArray[formattedDate].splot = mergedItem.splot;
          }
        } else {
          // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
          resultArray[formattedDate] = {
            source_name: name,
            avatar: name,
            source_id: name,
            created_at: formattedDate,
            price: {
              Total_price: 0,
              Deposit_price: 0,
              servies_price: 0,
              Revenue: 0,
            },
            splot: 0,
          };
        }

        // Tiến hành tới ngày tiếp theo
        start.setDate(start.getDate() + 1);
      }

      return resultArray;
    },

    creatDatasetsMap(resultArray, datasetsMap) {
      // Duyệt qua this.filteredData và tích hợp dữ liệu vào datasetsMap
      resultArray.forEach((dataPoint) => {
        // Assuming dataPoint.created_at is a date string in the format 'YYYY-MM-DD'
        const dateComponent = dataPoint.created_at;

        // Now you can use the "day" variable in your key generation
        this.key = `${dataPoint.source_name}`;

        let price = dataPoint.price.Revenue;
        let created_at = dataPoint.created_at;

        if (!datasetsMap.has(this.key)) {
          // Tạo một màu ngẫu nhiên cho backgroundColor và borderColor
          const backgroundColor = this.getRandomColor();
          const borderColor = this.getRandomColor();
          datasetsMap.set(this.key, {
            label: dataPoint.source_name,
            data: [],
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1.2,
            fill: false,
            pointRadius: 0.3,
            content: [],
          });
        }
        const dataset = datasetsMap.get(this.key);
        // Cộng tổng giá trị tiền vào dataset cho ngày này
        dataset.data.push(parseFloat(price));
        dataset.content.push(created_at);
      });

      // Chuyển đổi datasetsMap thành một mảng các datasets và tính tổng giá trị tiền
      const datasets = Array.from(datasetsMap.values()).map((dataset) => {
        const totalValue = dataset.data.reduce(
          (total, value) => total + value,
          0
        );
        return {
          ...dataset,
          data: dataset.data, // Giữ lại giá trị tiền
          totalValue: totalValue, // Tổng giá trị tiền
        };
      });

      return datasets;
    },

    compareArraysAndPrint(Array1, Array2) {
      const comparisonResults = [];

      if (!Array.isArray(Array1) || !Array.isArray(Array2)) {
        // Handle cases where Array1 or Array2 is not an array
        console.error("Input is not an array");
        return comparisonResults;
      }

      Array1.forEach((item) => {
        const correspondingItem = Array2.find(
          (oldItem) => oldItem.source_name === item.source_name
        );

        if (correspondingItem) {
          const depositPricePercentage = (
            ((item.price.Deposit_price -
              correspondingItem.price.Deposit_price) /
              correspondingItem.price.Deposit_price) *
            100
          ).toFixed(2);
          const depositPrice = item.price.Deposit_price;
          const revenuePercentage = (
            ((item.price.Revenue - correspondingItem.price.Revenue) /
              correspondingItem.price.Revenue) *
            100
          ).toFixed(2);
          const revenue = item.price.Revenue;
          const totalPricePercentage = (
            ((item.price.Total_price - correspondingItem.price.Total_price) /
              correspondingItem.price.Total_price) *
            100
          ).toFixed(2);
          const total = item.price.Total_price;
          const serviesPricePercentage = (
            ((item.price.servies_price -
              correspondingItem.price.servies_price) /
              correspondingItem.price.servies_price) *
            100
          ).toFixed(2);
          const services = item.price.servies_price;

          comparisonResults.push({
            source_name: item.source_name,
            depositPricePercentage,
            depositPrice,
            revenuePercentage,
            revenue,
            totalPricePercentage,
            total,
            serviesPricePercentage,
            services,
          });
        }
      });

      return comparisonResults;
    },

    getRandomColor() {
      // Hàm này trả về một màu ngẫu nhiên dưới dạng rgba
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const alpha = 0.5; // Độ trong suốt của màu
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
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

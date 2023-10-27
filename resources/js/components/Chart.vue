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
          <h4>Revenue</h4>
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
          <li v-for="(item, index) in resultArrayFilteredRevenue" :key="index">
            <div class="profile">
              <h5>{{ item.source_name }}</h5>
              <p>Revenue</p>
            </div>
            <span v-if="item.splot === 0">
              {{ item.price.Revenue }} $ / {{ item.splot }} Spot (AOV : 0 $)
            </span>
            <span v-else>
              {{ item.price.Revenue }} $ / {{ item.splot }} Spot
            </span>
          </li>
        </ul>
        <canvas ref="mychartRevenue"></canvas>
        <div>
          <!--  <canvas ref="lineChartShowroom"></canvas> -->
        </div>
      </div>
      <div class="members">
        <div class="members__top">
          <h4>Service Booking</h4>
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
          <li v-for="(item, index) in resultArrayFilteredService" :key="index">
            <div class="profile">
              <h5>{{ item.source_name }}</h5>
              <p>Service</p>
            </div>
            <span v-if="item.splot === 0">
              {{ item.price.servies_price }} $ / {{ item.splot }} Spot (AOV : 0
              $)
            </span>
            <span v-else>
              {{ item.price.servies_price }} $ / {{ item.splot }} Spot (AOV :
              {{
                (
                  parseInt(item.price.servies_price) / parseInt(item.splot)
                ).toFixed(2)
              }}
              $)
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
          <h4>Saler</h4>
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
          <li v-for="(item, index) in resultArrayFilteredEmployee" :key="index">
            <!--             <img :src="item.avatar" alt="" style="border-radius: 50%" /> -->
            <div class="profile">
              <h5>{{ item.source_name }}</h5>
              <p>Sale</p>
            </div>
            <span v-if="item.splot === 0">
              {{ item.price.servies_price }} $ / {{ item.splot }} Spot (AOV : 0
              $)
            </span>
            <span v-else>
              {{ item.price.servies_price }} $ / {{ item.splot }}
            </span>
          </li>
        </ul>
        <canvas ref="myChart"></canvas>
        <div>
          <!--  <canvas ref="lineChartShowroom"></canvas> -->
        </div>
      </div>

      <div class="members">
        <div class="members__top">
          <h4>Location</h4>
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
          <li v-for="(item, index) in resultArrayFilteredLocation" :key="index">
            <div class="profile">
              <h5>{{ item.source_name }}</h5>
              <p>Location</p>
            </div>
            <span v-if="item.splot === 0">
              {{ item.price.servies_price }} $ / {{ item.splot }} Spot (AOV : 0
              $)
            </span>
            <span v-else>
              {{ item.price.servies_price }} $ / {{ item.splot }} Spot (AOV :
              {{
                (
                  parseInt(item.price.servies_price) / parseInt(item.splot)
                ).toFixed(2)
              }}
              $)
            </span>
          </li>
        </ul>
        <canvas ref="myChartLocation"></canvas>
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
          <li v-for="(item, index) in resultArrayFilteredSource" :key="index">
            <div class="profile">
              <h5>{{ item.source_name }}</h5>
              <p>Source</p>
            </div>
            <span v-if="item.splot === 0">
              {{ item.price.servies_price }} $ / {{ item.splot }} Spot (AOV : 0
              $)
            </span>
            <span v-else>
              {{ item.price.servies_price }} $ / {{ item.splot }} Spot
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
          <h4>Artist</h4>
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
          <li v-for="(item, index) in resultArrayFilteredArtist" :key="index">
            <div class="profile">
              <h5>{{ item.source_name }}</h5>
              <p>Artist</p>
            </div>
            <span v-if="item.splot === 0">
              {{ item.price.servies_price }} $ / {{ item.splot }} Spot (AOV : 0
              $)
            </span>
            <span v-else>
              {{ item.price.servies_price }} $ / {{ item.splot }} Spot
            </span>
          </li>
        </ul>
        <canvas ref="myChartArtist"></canvas>
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
      filteredData: [],
      filteredDataEmployee: [],
      filteredDataChart: [],
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

      chartSource: null,
      resultArrayFilteredSource: [],

      chartArtist: null,
      resultArrayFilteredArtist: [],

      chartService: null,
      resultArrayFilteredService: [],

      chartRevenue: null,
      resultArrayFilteredRevenue: [],
      updated_at_price: null,

      key: null,
      resultArray: [],
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

      this.filteredDataChart = this.apiData_id.filter((booking) => {
        const updatedAtDate = new Date(booking.updated_at);
        /*   console.log("updatedAtDate", updatedAtDate , this.dateRange.end ,this.dateRange.start, updatedAtDate <= this.dateRange.end ,updatedAtDate >= this.dateRange.start); */
        return (
          updatedAtDate <= this.dateRange.end &&
          updatedAtDate >= this.dateRange.start
        );
      });

      this.filteredData_con();
      this.Price();

      this.renderChartService();
      this.renderChartRevenue();
      this.renderChart();
      this.renderChartLocation();
      this.renderChartSource();
      this.renderChartArtist();
    },

    renderChart() {
      // Sắp xếp các labels theo thứ tự tăng dần
      const startDate = this.dateRange.start; // Ngày bắt đầu
      const endDate = this.dateRange.end; // Ngày kết thúc

      const ctx = this.$refs.myChart.getContext("2d");

      // Tạo một đối tượng Map để lưu trữ dữ liệu cho từng datasets dựa trên "source_name", "source_id", và "created_at" cùng 1 ngày
      const datasetsMap = new Map();

      const resultArrayEmployee = [];

      // Xử lý dữ liệu apiDataEmployee trước
      const employeeDataMap = {};
      this.apiDataEmployee.forEach((employee) => {
        employeeDataMap[employee.name] = employee;
      });

      const currentDateEmployee = new Date(startDate);

      while (currentDateEmployee <= endDate) {
        const year = currentDateEmployee.getFullYear();
        const month = String(currentDateEmployee.getMonth() + 1).padStart(
          2,
          "0"
        );
        const day = String(currentDateEmployee.getDate()).padStart(2, "0");
        const formattedDateEmployee = `${year}-${month}-${day}`;

        Object.keys(employeeDataMap).forEach((name) => {
          const employee = employeeDataMap[name];
          const keyemployee = `${name}-${employee.id}-${year}-${month}-${day}`;

          // Tạo một mảng tạm thời để tích hợp dữ liệu từ các mục có cùng ngày
          const tempArray = [];
          const tempArrayAll = [];

          this.filteredDataChart.forEach((item) => {
            const createdAt = new Date(item.created_at);
            const itemYear = createdAt.getFullYear();
            const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
            const itemDay = String(createdAt.getDate()).padStart(2, "0");
            const key = `${item.source_name}-${item.source_id}-${itemYear}-${itemMonth}-${itemDay}`;
            const keyAll = `${item.source_type}-${itemYear}-${itemMonth}-${itemDay}`;

            // Add the 'status' property to the merged item.
            if (key === keyemployee) {
              this.statusbooking = item.status;
              tempArray.push({
                ...item,
                status: this.statusbooking, // Replace 'some_status_value' with the actual status property you want to add.
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

                let RefundRevenue = 0;
                let DoneRevenue = 0;

                if (this.statusbooking === "Refund") {
                  RefundRevenue =
                    parseInt(item.price.Total_price) -
                    parseInt(item.price.Deposit_price);
                } else if (this.statusbooking === "Done") {
                  DoneRevenue =
                    parseInt(item.price.Total_price) -
                    parseInt(item.price.Deposit_price);
                }

                merged.price.Revenue +=
                  parseInt(item.price.Deposit_price) +
                  parseInt(RefundRevenue) +
                  parseInt(DoneRevenue);

                merged.splot += 1;
                return merged;
              },
              {
                source_name: employee.name,
                avatar: employee.avatar,
                source_id: employee.id,
                created_at: formattedDateEmployee,
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

            if (!resultArrayEmployee[keyemployee]) {
              resultArrayEmployee[keyemployee] = mergedItem;
              // Update the 'status' property.
            } else {
              resultArrayEmployee[keyemployee].price.Total_price +=
                mergedItem.price.Total_price;
              resultArrayEmployee[keyemployee].price.Deposit_price +=
                mergedItem.price.Deposit_price;
              resultArrayEmployee[keyemployee].price.servies_price +=
                mergedItem.price.servies_price;
              resultArrayEmployee[keyemployee].splot += mergedItem.splot;
            }
          } else {
            // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
            resultArrayEmployee[keyemployee] = {
              source_name: employee.name,
              avatar: employee.avatar,
              source_id: employee.id,
              created_at: formattedDateEmployee,
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
        currentDateEmployee.setDate(currentDateEmployee.getDate() + 1);
      }

      const currentDateEmployeeALl = new Date(startDate);

      while (currentDateEmployeeALl <= new Date(endDate)) {
        const year = currentDateEmployeeALl.getFullYear();
        const month = String(currentDateEmployeeALl.getMonth() + 1).padStart(
          2,
          "0"
        );
        const day = String(currentDateEmployeeALl.getDate()).padStart(2, "0");
        const formattedDateEmployee = `${year}-${month}-${day}`;

        const tempArrayAll = [];

        Object.values(resultArrayEmployee).forEach((item) => {
          const createdAt = new Date(item.created_at);
          const itemYear = createdAt.getFullYear();
          const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
          const itemDay = String(createdAt.getDate()).padStart(2, "0");
          const keyAll = `${itemYear}-${itemMonth}-${itemDay}`;

          if (keyAll === formattedDateEmployee) {
            tempArrayAll.push(item);
          }
        });

        if (tempArrayAll.length > 0) {
          // Nếu có dữ liệu, tích hợp chúng và thêm vào resultArrayEmployee
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
              source_name: "All",
              avatar: "All",
              source_id: "All",
              created_at: formattedDateEmployee,
              price: {
                Total_price: 0,
                Deposit_price: 0,
                servies_price: 0,
                Revenue: 0,
              },
              splot: 0,
            }
          );

          if (!resultArrayEmployee[formattedDateEmployee]) {
            resultArrayEmployee[formattedDateEmployee] = mergedItem;
          } else {
            // Cập nhật giá trị trong resultArrayEmployee thay vì gán lại
            resultArrayEmployee[formattedDateEmployee].price.Total_price =
              mergedItem.price.Total_price;
            resultArrayEmployee[formattedDateEmployee].price.Deposit_price =
              mergedItem.price.Deposit_price;
            resultArrayEmployee[formattedDateEmployee].price.servies_price =
              mergedItem.price.servies_price;
            resultArrayEmployee[formattedDateEmployee].price.Revenue =
              mergedItem.price.Revenue;
            resultArrayEmployee[formattedDateEmployee].splot = mergedItem.splot;
          }
        } else {
          // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
          resultArrayEmployee[formattedDateEmployee] = {
            source_name: "All",
            avatar: "All",
            source_id: "All",
            created_at: formattedDateEmployee,
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
        currentDateEmployeeALl.setDate(currentDateEmployeeALl.getDate() + 1);
      }

      const resultArray = Object.values(resultArrayEmployee);

      const groupedData = {};

      // Lặp qua mảng dữ liệu và tổng hợp theo source_id và source_name
      resultArray.forEach((item) => {
        const key = `${item.source_id}-${item.source_name}`;
        if (!groupedData[key]) {
          groupedData[key] = {
            created_at: item.created_at,
            avatar: item.avatar,
            source_id: item.source_id,
            source_name: item.source_name,
            price: { Total_price: 0, Deposit_price: 0, servies_price: 0 },
            splot: 0,
          };
        }
        // Tính tổng giá
        for (const priceKey in item.price) {
          groupedData[key].price[priceKey] += item.price[priceKey];
        }

        groupedData[key].splot += parseInt(item.splot);
      });

      // Chuyển kết quả từ object thành mảng
      this.resultArrayFilteredEmployee = Object.values(groupedData).sort(
        (a, b) => {
          // Sắp xếp theo giá servies_price giảm dần
          return b.price.servies_price - a.price.servies_price;
        }
      );

      // Duyệt qua this.filteredData và tích hợp dữ liệu vào datasetsMap
      resultArray.forEach((dataPoint) => {
        // Assuming dataPoint.created_at is a date string in the format 'YYYY-MM-DD'
        const dateComponent = dataPoint.created_at;

        // Now you can use the "day" variable in your key generation
        this.key = `${dataPoint.source_name}_${dataPoint.source_id}`;

        let price = dataPoint.price.servies_price;

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
            fill: true,
            pointRadius: 0.3,
          });
        }
        const dataset = datasetsMap.get(this.key);
        // Cộng tổng giá trị tiền vào dataset cho ngày này
        dataset.data.push(parseFloat(price));
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

      // Check if a chart instance already exists and destroy it
      if (this.chart) {
        this.chart.destroy();
      }

      // Khởi tạo biểu đồ với các datasets đã tạo và labels đã sắp xếp
      this.chart = new Chart(ctx, {
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
    },

    renderChartRevenue() {
      // Sắp xếp các labels theo thứ tự tăng dần
      const startDate = this.dateRange.start; // Ngày bắt đầu
      const endDate = this.dateRange.end; // Ngày kết thúc

      const ctx = this.$refs.mychartRevenue.getContext("2d");

      // Tạo một đối tượng Map để lưu trữ dữ liệu cho từng datasets dựa trên "source_name", "source_id", và "created_at" cùng 1 ngày
      const datasetsMap = new Map();

      const resultArrayEmployee = [];

      // Xử lý dữ liệu apiDataEmployee trước
      const employeeDataMap = {};
      this.apiDataEmployee.forEach((employee) => {
        employeeDataMap[employee.name] = employee;
      });

      const currentDateEmployee = new Date(startDate);

      while (currentDateEmployee <= endDate) {
        const year = currentDateEmployee.getFullYear();
        const month = String(currentDateEmployee.getMonth() + 1).padStart(
          2,
          "0"
        );
        const day = String(currentDateEmployee.getDate()).padStart(2, "0");
        const formattedDateEmployee = `${year}-${month}-${day}`;

        Object.keys(employeeDataMap).forEach((name) => {
          const employee = employeeDataMap[name];
          const keyemployee = `${name}-${employee.id}-${year}-${month}-${day}`;

          // Tạo một mảng tạm thời để tích hợp dữ liệu từ các mục có cùng ngày
          const tempArray = [];
          const tempArrayAll = [];

          this.filteredDataChart.forEach((item) => {
            const createdAt = new Date(item.price.created_at);
            const itemYear = createdAt.getFullYear();
            const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
            const itemDay = String(createdAt.getDate()).padStart(2, "0");
            const key = `${item.source_name}-${item.source_id}-${itemYear}-${itemMonth}-${itemDay}`;

            const updatedAtDate = new Date(item.price.updated_at);
            const updateitemYear = updatedAtDate.getFullYear();
            const updateitemMonth = String(
              updatedAtDate.getMonth() + 1
            ).padStart(2, "0");
            const updateitemDay = String(updatedAtDate.getDate()).padStart(
              2,
              "0"
            );

            const keyAll = `${item.source_type}-${itemYear}-${itemMonth}-${itemDay}`;

            // Add the 'status' property to the merged item.
            if (key === keyemployee) {
              this.statusbooking = item.status;
              this.updated_at_price = `${updateitemYear}-${updateitemMonth}-${updateitemDay}`;

              tempArray.push({
                ...item,
                status: this.statusbooking, // Replace 'some_status_value' with the actual status property you want to add.
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
                source_name: employee.name,
                avatar: employee.avatar,
                source_id: employee.id,
                created_at: formattedDateEmployee,
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

            if (!resultArrayEmployee[keyemployee]) {
              resultArrayEmployee[keyemployee] = mergedItem;
              // Update the 'status' property.
            } else {
              resultArrayEmployee[keyemployee].price.Total_price +=
                mergedItem.price.Total_price;
              resultArrayEmployee[keyemployee].price.Deposit_price +=
                mergedItem.price.Deposit_price;
              resultArrayEmployee[keyemployee].price.servies_price +=
                mergedItem.price.servies_price;
              resultArrayEmployee[keyemployee].splot += mergedItem.splot;
            }
          } else {
            // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
            resultArrayEmployee[keyemployee] = {
              source_name: employee.name,
              avatar: employee.avatar,
              source_id: employee.id,
              created_at: formattedDateEmployee,
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
        currentDateEmployee.setDate(currentDateEmployee.getDate() + 1);
      }

      for (let i = 0; i < Object.values(resultArrayEmployee).length; i++) {
        // Bỏ qua nếu update_at là null
        if (
          Object.values(resultArrayEmployee)[i].updated_at <
          Object.values(resultArrayEmployee)[i].created_at
        ) {
          continue;
        }

        for (let j = 0; j < Object.values(resultArrayEmployee).length; j++) {
          if (
            i !== j &&
            Object.values(resultArrayEmployee)[i].updated_at ===
              Object.values(resultArrayEmployee)[j].created_at
          ) {
            Object.values(resultArrayEmployee)[j].price.Revenue +=
              Object.values(resultArrayEmployee)[i].price.Total_price -
              Object.values(resultArrayEmployee)[i].price.Deposit_price;
          }
        }
      }

      const currentDateEmployeeALl = new Date(startDate);

      while (currentDateEmployeeALl <= new Date(endDate)) {
        const year = currentDateEmployeeALl.getFullYear();
        const month = String(currentDateEmployeeALl.getMonth() + 1).padStart(
          2,
          "0"
        );
        const day = String(currentDateEmployeeALl.getDate()).padStart(2, "0");
        const formattedDateEmployee = `${year}-${month}-${day}`;

        const tempArrayAll = [];

        Object.values(resultArrayEmployee).forEach((item) => {
          const createdAt = new Date(item.created_at);
          const itemYear = createdAt.getFullYear();
          const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
          const itemDay = String(createdAt.getDate()).padStart(2, "0");
          const keyAll = `${itemYear}-${itemMonth}-${itemDay}`;

          if (keyAll === formattedDateEmployee) {
            tempArrayAll.push(item);
          }
        });

        if (tempArrayAll.length > 0) {
          // Nếu có dữ liệu, tích hợp chúng và thêm vào resultArrayEmployee
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
              source_name: "All",
              avatar: "All",
              source_id: "All",
              created_at: formattedDateEmployee,
              price: {
                Total_price: 0,
                Deposit_price: 0,
                servies_price: 0,
                Revenue: 0,
              },
              splot: 0,
            }
          );

          if (!resultArrayEmployee[formattedDateEmployee]) {
            resultArrayEmployee[formattedDateEmployee] = mergedItem;
          } else {
            // Cập nhật giá trị trong resultArrayEmployee thay vì gán lại
            resultArrayEmployee[formattedDateEmployee].price.Total_price =
              mergedItem.price.Total_price;
            resultArrayEmployee[formattedDateEmployee].price.Deposit_price =
              mergedItem.price.Deposit_price;
            resultArrayEmployee[formattedDateEmployee].price.servies_price =
              mergedItem.price.servies_price;
            resultArrayEmployee[formattedDateEmployee].price.Revenue =
              mergedItem.price.Revenue;
            resultArrayEmployee[formattedDateEmployee].splot = mergedItem.splot;
          }
        } else {
          // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
          resultArrayEmployee[formattedDateEmployee] = {
            source_name: "All",
            avatar: "All",
            source_id: "All",
            created_at: formattedDateEmployee,
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
        currentDateEmployeeALl.setDate(currentDateEmployeeALl.getDate() + 1);
      }

      const resultArray = Object.values(resultArrayEmployee);

      const groupedData = {};

      // Lặp qua mảng dữ liệu và tổng hợp theo source_id và source_name
      resultArray.forEach((item) => {
        const key = `${item.source_id}-${item.source_name}`;
        if (!groupedData[key]) {
          groupedData[key] = {
            created_at: item.created_at,
            avatar: item.avatar,
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

      // Chuyển kết quả từ object thành mảng
      this.resultArrayFilteredRevenue = Object.values(groupedData).sort(
        (a, b) => {
          // Sắp xếp theo giá servies_price giảm dần
          return b.price.Revenue - a.price.Revenue;
        }
      );

      // Duyệt qua this.filteredData và tích hợp dữ liệu vào datasetsMap
      resultArray.forEach((dataPoint) => {
        // Assuming dataPoint.created_at is a date string in the format 'YYYY-MM-DD'
        const dateComponent = dataPoint.created_at;

        // Now you can use the "day" variable in your key generation
        this.key = `${dataPoint.source_name}_${dataPoint.source_id}`;

        let price = dataPoint.price.Revenue;

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
            fill: true,
            pointRadius: 0.3,
          });
        }
        const dataset = datasetsMap.get(this.key);
        // Cộng tổng giá trị tiền vào dataset cho ngày này
        dataset.data.push(parseFloat(price));
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

      // Check if a chartRevenue instance already exists and destroy it
      if (this.chartRevenue) {
        this.chartRevenue.destroy();
      }

      // Khởi tạo biểu đồ với các datasets đã tạo và labels đã sắp xếp
      this.chartRevenue = new Chart(ctx, {
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
    },

    renderChartLocation() {
      // Sắp xếp các labels theo thứ tự tăng dần
      const startDate = this.dateRange.start; // Ngày bắt đầu
      const endDate = this.dateRange.end; // Ngày kết thúc

      const ctxLocation = this.$refs.myChartLocation.getContext("2d");

      // Tạo một đối tượng Map để lưu trữ dữ liệu cho từng datasets dựa trên "source_name", "source_id", và "created_at" cùng 1 ngày
      const datasetsMapLocation = new Map();

      const resultArrayLocation = [];

      const locationDataMap = {};

      this.apiDatalocation.forEach((location) => {
        locationDataMap[location.Name] = location;
      });

      const currentDatelocation = new Date(startDate);

      while (currentDatelocation <= endDate) {
        const year = currentDatelocation.getFullYear();
        const month = String(currentDatelocation.getMonth() + 1).padStart(
          2,
          "0"
        );
        const day = String(currentDatelocation.getDate()).padStart(2, "0");
        const formattedDatelocation = `${year}-${month}-${day}`;

        Object.keys(locationDataMap).forEach((name) => {
          const location = locationDataMap[name];
          const keylocation = `${location.id}-${year}-${month}-${day}`;
          // Tạo một mảng tạm thời để tích hợp dữ liệu từ các mục có cùng ngày
          const tempArray = [];

          this.filteredDataChart.forEach((item) => {
            const createdAt = new Date(item.created_at);
            const itemYear = createdAt.getFullYear();
            const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
            const itemDay = String(createdAt.getDate()).padStart(2, "0");
            const key = `${item.ShowroomID}-${itemYear}-${itemMonth}-${itemDay}`;

            if (key === keylocation) {
              tempArray.push(item);
            }
          });

          // Kiểm tra xem có dữ liệu trong mảng tạm thời không
          if (tempArray.length > 0) {
            // Nếu có dữ liệu, tích hợp chúng và thêm vào resultArrayLocation
            const mergedItem = tempArray.reduce(
              (merged, item) => {
                merged.price.Total_price += parseInt(item.price.Total_price);
                merged.price.Deposit_price += parseInt(
                  item.price.Deposit_price
                );
                merged.price.servies_price += parseInt(
                  item.price.servies_price
                );
                merged.splot += 1;
                return merged;
              },
              {
                source_name: location.Name,
                source_id: location.id,
                created_at: formattedDatelocation,
                price: {
                  Total_price: 0,
                  Deposit_price: 0,
                  servies_price: 0,
                },
                splot: 0,
              }
            );

            if (!resultArrayLocation[keylocation]) {
              resultArrayLocation[keylocation] = mergedItem;
            } else {
              resultArrayLocation[keylocation].price.Total_price +=
                mergedItem.price.Total_price;
              resultArrayLocation[keylocation].price.Deposit_price +=
                mergedItem.price.Deposit_price;
              resultArrayLocation[keylocation].price.servies_price +=
                mergedItem.price.servies_price;
              resultArrayLocation[keylocation].splot += mergedItem.splot;
            }
          } else {
            // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
            resultArrayLocation[keylocation] = {
              source_name: location.Name,
              source_id: location.id,
              created_at: formattedDatelocation,
              price: {
                Total_price: 0,
                Deposit_price: 0,
                servies_price: 0,
              },
              splot: 0,
            };
          }
        });

        // Tăng ngày hiện tại lên 1 ngày
        currentDatelocation.setDate(currentDatelocation.getDate() + 1);
      }

      const currentDateLocationall = new Date(startDate);

      while (currentDateLocationall <= new Date(endDate)) {
        const year = currentDateLocationall.getFullYear();
        const month = String(currentDateLocationall.getMonth() + 1).padStart(
          2,
          "0"
        );
        const day = String(currentDateLocationall.getDate()).padStart(2, "0");
        const formattedDatelocation = `${year}-${month}-${day}`;

        const tempArrayAll = [];

        Object.values(resultArrayLocation).forEach((item) => {
          const createdAt = new Date(item.created_at);
          const itemYear = createdAt.getFullYear();
          const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
          const itemDay = String(createdAt.getDate()).padStart(2, "0");
          const keyAll = `${itemYear}-${itemMonth}-${itemDay}`;

          if (keyAll === formattedDatelocation) {
            tempArrayAll.push(item);
          }
        });

        if (tempArrayAll.length > 0) {
          // Nếu có dữ liệu, tích hợp chúng và thêm vào resultArrayLocation
          const mergedItem = tempArrayAll.reduce(
            (merged, item) => {
              merged.price.Total_price += parseInt(item.price.Total_price);
              merged.price.Deposit_price += parseInt(item.price.Deposit_price);
              merged.price.servies_price += parseInt(item.price.servies_price);
              merged.splot += parseInt(item.splot);
              return merged;
            },
            {
              source_name: "All",
              avatar: "All",
              source_id: "All",
              created_at: formattedDatelocation,
              price: {
                Total_price: 0,
                Deposit_price: 0,
                servies_price: 0,
              },
              splot: 0,
            }
          );

          if (!resultArrayLocation[formattedDatelocation]) {
            resultArrayLocation[formattedDatelocation] = mergedItem;
          } else {
            // Cập nhật giá trị trong resultArrayLocation thay vì gán lại
            resultArrayLocation[formattedDatelocation].price.Total_price =
              mergedItem.price.Total_price;
            resultArrayLocation[formattedDatelocation].price.Deposit_price =
              mergedItem.price.Deposit_price;
            resultArrayLocation[formattedDatelocation].price.servies_price =
              mergedItem.price.servies_price;
            resultArrayLocation[formattedDatelocation].splot = mergedItem.splot;
          }
        } else {
          // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
          resultArrayLocation[formattedDatelocation] = {
            source_name: "All",
            avatar: "All",
            source_id: "All",
            created_at: formattedDatelocation,
            price: {
              Total_price: 0,
              Deposit_price: 0,
              servies_price: 0,
            },
            splot: 0,
          };
        }

        // Tiến hành tới ngày tiếp theo
        currentDateLocationall.setDate(currentDateLocationall.getDate() + 1);
      }

      const resultArray = Object.values(resultArrayLocation);

      const groupedData = {};

      // Lặp qua mảng dữ liệu và tổng hợp theo source_id và source_name
      resultArray.forEach((item) => {
        const key = `${item.source_id}-${item.source_name}`;
        if (!groupedData[key]) {
          groupedData[key] = {
            created_at: item.created_at,
            source_id: item.source_id,
            source_name: item.source_name,
            price: { Total_price: 0, Deposit_price: 0, servies_price: 0 },
            splot: 0,
          };
        }
        // Tính tổng giá
        for (const priceKey in item.price) {
          groupedData[key].price[priceKey] += item.price[priceKey];
        }
        groupedData[key].splot += parseInt(item.splot);
      });

      // Chuyển kết quả từ object thành mảng
      this.resultArrayFilteredLocation = Object.values(groupedData).sort(
        (a, b) => {
          // Sắp xếp theo giá servies_price giảm dần
          return b.price.servies_price - a.price.servies_price;
        }
      );

      // Duyệt qua this.filteredData và tích hợp dữ liệu vào datasetsMapLocation
      resultArray.forEach((dataPoint) => {
        // Assuming dataPoint.created_at is a date string in the format 'YYYY-MM-DD'
        const dateComponent = dataPoint.created_at;

        // Now you can use the "day" variable in your key generation
        this.key = `${dataPoint.source_name}_${dataPoint.source_id}`;

        let price = dataPoint.price.servies_price;

        if (!datasetsMapLocation.has(this.key)) {
          // Tạo một màu ngẫu nhiên cho backgroundColor và borderColor
          const backgroundColor = this.getRandomColor();
          const borderColor = this.getRandomColor();
          datasetsMapLocation.set(this.key, {
            label: dataPoint.source_name,
            data: [],
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1.2,
            fill: true,
            pointRadius: 0.3,
          });
        }
        const dataset = datasetsMapLocation.get(this.key);
        // Cộng tổng giá trị tiền vào dataset cho ngày này
        dataset.data.push(parseFloat(price));
      });

      // Chuyển đổi datasetsMapLocation thành một mảng các datasets và tính tổng giá trị tiền
      const datasets = Array.from(datasetsMapLocation.values()).map(
        (dataset) => {
          const totalValue = dataset.data.reduce(
            (total, value) => total + value,
            0
          );
          return {
            ...dataset,
            data: dataset.data, // Giữ lại giá trị tiền
            totalValue: totalValue, // Tổng giá trị tiền
          };
        }
      );

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

      // Check if a chart instance already exists and destroy it
      if (this.chartLocation) {
        this.chartLocation.destroy();
      }

      // Khởi tạo biểu đồ với các datasets đã tạo và labels đã sắp xếp
      this.chartLocation = new Chart(ctxLocation, {
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
    },

    renderChartSource() {
      // Sắp xếp các labels theo thứ tự tăng dần
      const startDate = this.dateRange.start; // Ngày bắt đầu
      const endDate = this.dateRange.end; // Ngày kết thúc

      const ctxSource = this.$refs.myChartSource.getContext("2d");

      // Tạo một đối tượng Map để lưu trữ dữ liệu cho từng datasets dựa trên "source_name", "source_id", và "created_at" cùng 1 ngày
      const datasetsMapSource = new Map();

      const resultArraySource = [];

      const SourceDataMap = {};

      this.apiDataGet.forEach((Source) => {
        SourceDataMap[Source.source_data] = Source;
      });

      const currentDateSource = new Date(startDate);

      while (currentDateSource <= endDate) {
        const year = currentDateSource.getFullYear();
        const month = String(currentDateSource.getMonth() + 1).padStart(2, "0");
        const day = String(currentDateSource.getDate()).padStart(2, "0");
        const formattedDateSource = `${year}-${month}-${day}`;

        Object.keys(SourceDataMap).forEach((name) => {
          const Source = SourceDataMap[name];
          const keySource = `${Source.source_data}-${year}-${month}-${day}`;

          // Tạo một mảng tạm thời để tích hợp dữ liệu từ các mục có cùng ngày
          const tempArray = [];

          this.filteredDataChart.forEach((item) => {
            const createdAt = new Date(item.created_at);
            const itemYear = createdAt.getFullYear();
            const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
            const itemDay = String(createdAt.getDate()).padStart(2, "0");
            const key = `${item.source_data}-${itemYear}-${itemMonth}-${itemDay}`;

            if (key === keySource) {
              tempArray.push(item);
            }
          });

          // Kiểm tra xem có dữ liệu trong mảng tạm thời không
          if (tempArray.length > 0) {
            // Nếu có dữ liệu, tích hợp chúng và thêm vào resultArraySource
            const mergedItem = tempArray.reduce(
              (merged, item) => {
                merged.price.Total_price += parseInt(item.price.Total_price);
                merged.price.Deposit_price += parseInt(
                  item.price.Deposit_price
                );
                merged.price.servies_price += parseInt(
                  item.price.servies_price
                );
                merged.splot += 1;
                return merged;
              },
              {
                source_name: Source.source_data,
                source_id: Source.id,
                created_at: formattedDateSource,
                price: {
                  Total_price: 0,
                  Deposit_price: 0,
                  servies_price: 0,
                },
                splot: 0,
              }
            );

            if (!resultArraySource[keySource]) {
              resultArraySource[keySource] = mergedItem;
            } else {
              resultArraySource[keySource].price.Total_price +=
                mergedItem.price.Total_price;
              resultArraySource[keySource].price.Deposit_price +=
                mergedItem.price.Deposit_price;
              resultArraySource[keySource].price.servies_price +=
                mergedItem.price.servies_price;
              resultArraySource[keySource].splot += mergedItem.splot;
            }
          } else {
            // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
            resultArraySource[keySource] = {
              source_name: Source.source_data,
              source_id: Source.id,
              created_at: formattedDateSource,
              price: {
                Total_price: 0,
                Deposit_price: 0,
                servies_price: 0,
              },
              splot: 0,
            };
          }
        });

        // Tăng ngày hiện tại lên 1 ngày
        currentDateSource.setDate(currentDateSource.getDate() + 1);
      }

      ///

      const currentDateSourceall = new Date(startDate);

      while (currentDateSourceall <= new Date(endDate)) {
        const year = currentDateSourceall.getFullYear();
        const month = String(currentDateSourceall.getMonth() + 1).padStart(
          2,
          "0"
        );
        const day = String(currentDateSourceall.getDate()).padStart(2, "0");
        const formattedDateSource = `${year}-${month}-${day}`;

        const tempArrayAll = [];

        Object.values(resultArraySource).forEach((item) => {
          const createdAt = new Date(item.created_at);
          const itemYear = createdAt.getFullYear();
          const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
          const itemDay = String(createdAt.getDate()).padStart(2, "0");
          const keyAll = `${itemYear}-${itemMonth}-${itemDay}`;

          if (keyAll === formattedDateSource) {
            tempArrayAll.push(item);
          }
        });

        if (tempArrayAll.length > 0) {
          // Nếu có dữ liệu, tích hợp chúng và thêm vào resultArraySource
          const mergedItem = tempArrayAll.reduce(
            (merged, item) => {
              merged.price.Total_price += parseInt(item.price.Total_price);
              merged.price.Deposit_price += parseInt(item.price.Deposit_price);
              merged.price.servies_price += parseInt(item.price.servies_price);
              merged.splot += parseInt(item.splot);
              return merged;
            },
            {
              source_name: "All",
              avatar: "All",
              source_id: "All",
              created_at: formattedDateSource,
              price: {
                Total_price: 0,
                Deposit_price: 0,
                servies_price: 0,
              },
              splot: 0,
            }
          );

          if (!resultArraySource[formattedDateSource]) {
            resultArraySource[formattedDateSource] = mergedItem;
          } else {
            // Cập nhật giá trị trong resultArraySource thay vì gán lại
            resultArraySource[formattedDateSource].price.Total_price =
              mergedItem.price.Total_price;
            resultArraySource[formattedDateSource].price.Deposit_price =
              mergedItem.price.Deposit_price;
            resultArraySource[formattedDateSource].price.servies_price =
              mergedItem.price.servies_price;
            resultArraySource[formattedDateSource].splot = mergedItem.splot;
          }
        } else {
          // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
          resultArraySource[formattedDateSource] = {
            source_name: "All",
            avatar: "All",
            source_id: "All",
            created_at: formattedDateSource,
            price: {
              Total_price: 0,
              Deposit_price: 0,
              servies_price: 0,
            },
            splot: 0,
          };
        }

        // Tiến hành tới ngày tiếp theo
        currentDateSourceall.setDate(currentDateSourceall.getDate() + 1);
      }

      ///

      const resultArray = Object.values(resultArraySource);

      const groupedData = {};

      // Lặp qua mảng dữ liệu và tổng hợp theo source_id và source_name
      resultArray.forEach((item) => {
        const key = `${item.source_id}-${item.source_name}`;
        if (!groupedData[key]) {
          groupedData[key] = {
            created_at: item.created_at,
            source_id: item.source_id,
            source_name: item.source_name,
            price: { Total_price: 0, Deposit_price: 0, servies_price: 0 },
            splot: 0,
          };
        }

        // Tính tổng giá
        for (const priceKey in item.price) {
          groupedData[key].price[priceKey] += item.price[priceKey];
        }
        groupedData[key].splot += parseInt(item.splot);
      });

      // Chuyển kết quả từ object thành mảng
      this.resultArrayFilteredSource = Object.values(groupedData).sort(
        (a, b) => {
          // Sắp xếp theo giá servies_price giảm dần
          return b.price.servies_price - a.price.servies_price;
        }
      );

      // Duyệt qua this.filteredData và tích hợp dữ liệu vào datasetsMapSource
      resultArray.forEach((dataPoint) => {
        // Assuming dataPoint.created_at is a date string in the format 'YYYY-MM-DD'
        const dateComponent = dataPoint.created_at;

        // Now you can use the "day" variable in your key generation
        this.key = `${dataPoint.source_name}_${dataPoint.source_id}`;

        let price = dataPoint.price.servies_price;

        if (!datasetsMapSource.has(this.key)) {
          // Tạo một màu ngẫu nhiên cho backgroundColor và borderColor
          const backgroundColor = this.getRandomColor();
          const borderColor = this.getRandomColor();
          datasetsMapSource.set(this.key, {
            label: dataPoint.source_name,
            data: [],
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1.2,
            fill: true,
            pointRadius: 0.3,
          });
        }
        const dataset = datasetsMapSource.get(this.key);
        // Cộng tổng giá trị tiền vào dataset cho ngày này
        dataset.data.push(parseFloat(price));
      });

      // Chuyển đổi datasetsMapSource thành một mảng các datasets và tính tổng giá trị tiền
      const datasets = Array.from(datasetsMapSource.values()).map((dataset) => {
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

      // Check if a chart instance already exists and destroy it
      if (this.chartSource) {
        this.chartSource.destroy();
      }

      // Khởi tạo biểu đồ với các datasets đã tạo và labels đã sắp xếp
      this.chartSource = new Chart(ctxSource, {
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
    },

    renderChartArtist() {
      // Sắp xếp các labels theo thứ tự tăng dần
      const startDate = this.dateRange.start; // Ngày bắt đầu
      const endDate = this.dateRange.end; // Ngày kết thúc

      const ctxArtist = this.$refs.myChartArtist.getContext("2d");

      // Tạo một đối tượng Map để lưu trữ dữ liệu cho từng datasets dựa trên "source_name", "source_id", và "created_at" cùng 1 ngày
      const datasetsMapArtist = new Map();

      const resultArrayArtist = [];

      const ArtistDataMap = {};

      this.apiDataAritst.forEach((Artist) => {
        ArtistDataMap[Artist.name] = Artist;
      });

      const currentDateArtist = new Date(startDate);

      while (currentDateArtist <= endDate) {
        const year = currentDateArtist.getFullYear();
        const month = String(currentDateArtist.getMonth() + 1).padStart(2, "0");
        const day = String(currentDateArtist.getDate()).padStart(2, "0");
        const formattedDateArtist = `${year}-${month}-${day}`;

        Object.keys(ArtistDataMap).forEach((name) => {
          const Artist = ArtistDataMap[name];
          const keyArtist = `${Artist.id}-${year}-${month}-${day}`;
          // Tạo một mảng tạm thời để tích hợp dữ liệu từ các mục có cùng ngày
          const tempArray = [];

          this.filteredDataChart.forEach((item) => {
            const createdAt = new Date(item.created_at);
            const itemYear = createdAt.getFullYear();
            const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
            const itemDay = String(createdAt.getDate()).padStart(2, "0");
            const key = `${item.ArtistID}-${itemYear}-${itemMonth}-${itemDay}`;

            if (key === keyArtist) {
              tempArray.push(item);
            }
          });

          // Kiểm tra xem có dữ liệu trong mảng tạm thời không
          if (tempArray.length > 0) {
            // Nếu có dữ liệu, tích hợp chúng và thêm vào resultArrayArtist
            const mergedItem = tempArray.reduce(
              (merged, item) => {
                merged.price.Total_price += parseInt(item.price.Total_price);
                merged.price.Deposit_price += parseInt(
                  item.price.Deposit_price
                );
                merged.price.servies_price += parseInt(
                  item.price.servies_price
                );
                merged.splot += 1;
                return merged;
              },
              {
                source_name: Artist.name,
                source_id: Artist.id,
                created_at: formattedDateArtist,
                price: {
                  Total_price: 0,
                  Deposit_price: 0,
                  servies_price: 0,
                },
                splot: 0,
              }
            );

            if (!resultArrayArtist[keyArtist]) {
              resultArrayArtist[keyArtist] = mergedItem;
            } else {
              resultArrayArtist[keyArtist].price.Total_price +=
                mergedItem.price.Total_price;
              resultArrayArtist[keyArtist].price.Deposit_price +=
                mergedItem.price.Deposit_price;
              resultArrayArtist[keyArtist].price.servies_price +=
                mergedItem.price.servies_price;

              resultArrayArtist[keyArtist].splot += mergedItem.splot;
            }
          } else {
            // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
            resultArrayArtist[keyArtist] = {
              source_name: Artist.name,
              source_id: Artist.id,
              created_at: formattedDateArtist,
              price: {
                Total_price: 0,
                Deposit_price: 0,
                servies_price: 0,
              },
              splot: 0,
            };
          }
        });

        // Tăng ngày hiện tại lên 1 ngày
        currentDateArtist.setDate(currentDateArtist.getDate() + 1);
      }

      ///

      const currentDateArtistall = new Date(startDate);

      while (currentDateArtistall <= new Date(endDate)) {
        const year = currentDateArtistall.getFullYear();
        const month = String(currentDateArtistall.getMonth() + 1).padStart(
          2,
          "0"
        );
        const day = String(currentDateArtistall.getDate()).padStart(2, "0");
        const formattedDateArtist = `${year}-${month}-${day}`;

        const tempArrayAll = [];

        Object.values(resultArrayArtist).forEach((item) => {
          const createdAt = new Date(item.created_at);
          const itemYear = createdAt.getFullYear();
          const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
          const itemDay = String(createdAt.getDate()).padStart(2, "0");
          const keyAll = `${itemYear}-${itemMonth}-${itemDay}`;

          if (keyAll === formattedDateArtist) {
            tempArrayAll.push(item);
          }
        });

        if (tempArrayAll.length > 0) {
          // Nếu có dữ liệu, tích hợp chúng và thêm vào resultArrayArtist
          const mergedItem = tempArrayAll.reduce(
            (merged, item) => {
              merged.price.Total_price += parseInt(item.price.Total_price);
              merged.price.Deposit_price += parseInt(item.price.Deposit_price);
              merged.price.servies_price += parseInt(item.price.servies_price);
              merged.splot += parseInt(item.splot);
              return merged;
            },
            {
              source_name: "All",
              avatar: "All",
              source_id: "All",
              created_at: formattedDateArtist,
              price: {
                Total_price: 0,
                Deposit_price: 0,
                servies_price: 0,
              },
              splot: 0,
            }
          );

          if (!resultArrayArtist[formattedDateArtist]) {
            resultArrayArtist[formattedDateArtist] = mergedItem;
          } else {
            // Cập nhật giá trị trong resultArrayArtist thay vì gán lại
            resultArrayArtist[formattedDateArtist].price.Total_price =
              mergedItem.price.Total_price;
            resultArrayArtist[formattedDateArtist].price.Deposit_price =
              mergedItem.price.Deposit_price;
            resultArrayArtist[formattedDateArtist].price.servies_price =
              mergedItem.price.servies_price;
            resultArrayArtist[formattedDateArtist].splot = mergedItem.splot;
          }
        } else {
          // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
          resultArrayArtist[formattedDateArtist] = {
            source_name: "All",
            avatar: "All",
            source_id: "All",
            created_at: formattedDateArtist,
            price: {
              Total_price: 0,
              Deposit_price: 0,
              servies_price: 0,
            },
            splot: 0,
          };
        }

        // Tiến hành tới ngày tiếp theo
        currentDateArtistall.setDate(currentDateArtistall.getDate() + 1);
      }

      ///

      const resultArray = Object.values(resultArrayArtist);

      const groupedData = {};

      // Lặp qua mảng dữ liệu và tổng hợp theo source_id và source_name
      resultArray.forEach((item) => {
        const key = `${item.source_id}-${item.source_name}`;
        if (!groupedData[key]) {
          groupedData[key] = {
            created_at: item.created_at,
            source_id: item.source_id,
            source_name: item.source_name,
            price: { Total_price: 0, Deposit_price: 0, servies_price: 0 },
            splot: 0,
          };
        }
        // Tính tổng giá
        for (const priceKey in item.price) {
          groupedData[key].price[priceKey] += item.price[priceKey];
        }
        groupedData[key].splot += parseInt(item.splot);
      });

      // Chuyển kết quả từ object thành mảng
      this.resultArrayFilteredArtist = Object.values(groupedData).sort(
        (a, b) => {
          // Sắp xếp theo giá servies_price giảm dần
          return b.price.servies_price - a.price.servies_price;
        }
      );

      // Duyệt qua this.filteredData và tích hợp dữ liệu vào datasetsMapArtist
      resultArray.forEach((dataPoint) => {
        // Assuming dataPoint.created_at is a date string in the format 'YYYY-MM-DD'
        const dateComponent = dataPoint.created_at;

        // Now you can use the "day" variable in your key generation
        this.key = `${dataPoint.source_name}_${dataPoint.source_id}`;

        let price = dataPoint.price.servies_price;

        if (!datasetsMapArtist.has(this.key)) {
          // Tạo một màu ngẫu nhiên cho backgroundColor và borderColor
          const backgroundColor = this.getRandomColor();
          const borderColor = this.getRandomColor();
          datasetsMapArtist.set(this.key, {
            label: dataPoint.source_name,
            data: [],
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1.2,
            fill: true,
            pointRadius: 0.3,
          });
        }
        const dataset = datasetsMapArtist.get(this.key);
        // Cộng tổng giá trị tiền vào dataset cho ngày này
        dataset.data.push(parseFloat(price));
      });

      // Chuyển đổi datasetsMapArtist thành một mảng các datasets và tính tổng giá trị tiền
      const datasets = Array.from(datasetsMapArtist.values()).map((dataset) => {
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

      // Check if a chart instance already exists and destroy it
      if (this.chartArtist) {
        this.chartArtist.destroy();
      }

      // Khởi tạo biểu đồ với các datasets đã tạo và labels đã sắp xếp
      this.chartArtist = new Chart(ctxArtist, {
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
    },

    renderChartService() {
      // Sắp xếp các labels theo thứ tự tăng dần
      const startDate = this.dateRange.start; // Ngày bắt đầu
      const endDate = this.dateRange.end; // Ngày kết thúc

      const ctxService = this.$refs.myChartService.getContext("2d");

      // Tạo một đối tượng Map để lưu trữ dữ liệu cho từng datasets dựa trên "source_name", "source_id", và "created_at" cùng 1 ngày
      const datasetsMapService = new Map();

      const resultArrayService = [];

      const ServiceDataMap = {};

      this.apiDataServices.forEach((Service) => {
        ServiceDataMap[Service.Name] = Service;
      });

      const currentDateService = new Date(startDate);

      while (currentDateService <= endDate) {
        const year = currentDateService.getFullYear();
        const month = String(currentDateService.getMonth() + 1).padStart(
          2,
          "0"
        );
        const day = String(currentDateService.getDate()).padStart(2, "0");
        const formattedDateService = `${year}-${month}-${day}`;

        Object.keys(ServiceDataMap).forEach((name) => {
          const Service = ServiceDataMap[name];
          const keyService = `${Service.id}-${year}-${month}-${day}`;
          // Tạo một mảng tạm thời để tích hợp dữ liệu từ các mục có cùng ngày
          const tempArray = [];

          this.filteredDataChart.forEach((item) => {
            const createdAt = new Date(item.created_at);
            const itemYear = createdAt.getFullYear();
            const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
            const itemDay = String(createdAt.getDate()).padStart(2, "0");
            const key = `${item.services[0].id}-${itemYear}-${itemMonth}-${itemDay}`;

            if (key === keyService) {
              tempArray.push(item);
            }
          });

          // Kiểm tra xem có dữ liệu trong mảng tạm thời không
          if (tempArray.length > 0) {
            // Nếu có dữ liệu, tích hợp chúng và thêm vào resultArrayService
            const mergedItem = tempArray.reduce(
              (merged, item) => {
                merged.price.Total_price += parseInt(item.price.Total_price);
                merged.price.Deposit_price += parseInt(
                  item.price.Deposit_price
                );
                merged.price.servies_price += parseInt(
                  item.price.servies_price
                );
                merged.splot += 1;
                return merged;
              },
              {
                source_name: Service.Name,
                source_id: Service.id,
                created_at: formattedDateService,
                price: {
                  Total_price: 0,
                  Deposit_price: 0,
                  servies_price: 0,
                },
                splot: 0,
              }
            );

            if (!resultArrayService[keyService]) {
              resultArrayService[keyService] = mergedItem;
            } else {
              resultArrayService[keyService].price.Total_price +=
                mergedItem.price.Total_price;
              resultArrayService[keyService].price.Deposit_price +=
                mergedItem.price.Deposit_price;
              resultArrayService[keyService].price.servies_price +=
                mergedItem.price.servies_price;
              resultArrayService[keyService].splot += mergedItem.splot;
            }
          } else {
            // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
            resultArrayService[keyService] = {
              source_name: Service.Name,
              source_id: Service.id,
              created_at: formattedDateService,
              price: {
                Total_price: 0,
                Deposit_price: 0,
                servies_price: 0,
              },
              splot: 0,
            };
          }
        });

        // Tăng ngày hiện tại lên 1 ngày
        currentDateService.setDate(currentDateService.getDate() + 1);
      }

      ///

      const currentDateServiceall = new Date(startDate);

      while (currentDateServiceall <= new Date(endDate)) {
        const year = currentDateServiceall.getFullYear();
        const month = String(currentDateServiceall.getMonth() + 1).padStart(
          2,
          "0"
        );
        const day = String(currentDateServiceall.getDate()).padStart(2, "0");
        const formattedDateService = `${year}-${month}-${day}`;

        const tempArrayAll = [];

        Object.values(resultArrayService).forEach((item) => {
          const createdAt = new Date(item.created_at);
          const itemYear = createdAt.getFullYear();
          const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
          const itemDay = String(createdAt.getDate()).padStart(2, "0");
          const keyAll = `${itemYear}-${itemMonth}-${itemDay}`;

          if (keyAll === formattedDateService) {
            tempArrayAll.push(item);
          }
        });

        if (tempArrayAll.length > 0) {
          // Nếu có dữ liệu, tích hợp chúng và thêm vào resultArrayService
          const mergedItem = tempArrayAll.reduce(
            (merged, item) => {
              merged.price.Total_price += parseInt(item.price.Total_price);
              merged.price.Deposit_price += parseInt(item.price.Deposit_price);
              merged.price.servies_price += parseInt(item.price.servies_price);
              merged.splot += parseInt(item.splot);
              return merged;
            },
            {
              source_name: "All",
              avatar: "All",
              source_id: "All",
              created_at: formattedDateService,
              price: {
                Total_price: 0,
                Deposit_price: 0,
                servies_price: 0,
              },
              splot: 0,
            }
          );

          if (!resultArrayService[formattedDateService]) {
            resultArrayService[formattedDateService] = mergedItem;
          } else {
            // Cập nhật giá trị trong resultArrayService thay vì gán lại
            resultArrayService[formattedDateService].price.Total_price =
              mergedItem.price.Total_price;
            resultArrayService[formattedDateService].price.Deposit_price =
              mergedItem.price.Deposit_price;
            resultArrayService[formattedDateService].price.servies_price =
              mergedItem.price.servies_price;
            resultArrayService[formattedDateService].splot = mergedItem.splot;
          }
        } else {
          // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
          resultArrayService[formattedDateService] = {
            source_name: "All",
            avatar: "All",
            source_id: "All",
            created_at: formattedDateService,
            price: {
              Total_price: 0,
              Deposit_price: 0,
              servies_price: 0,
            },
            splot: 0,
          };
        }

        // Tiến hành tới ngày tiếp theo
        currentDateServiceall.setDate(currentDateServiceall.getDate() + 1);
      }

      ///

      const resultArray = Object.values(resultArrayService);
      const groupedData = {};

      // Lặp qua mảng dữ liệu và tổng hợp theo source_id và source_name
      resultArray.forEach((item) => {
        const key = `${item.source_id}-${item.source_name}`;
        if (!groupedData[key]) {
          groupedData[key] = {
            created_at: item.created_at,
            source_id: item.source_id,
            source_name: item.source_name,
            price: { Total_price: 0, Deposit_price: 0, servies_price: 0 },
            splot: 0, // Initialize splot to 0
          };
        }
        // Tính tổng giá
        for (const priceKey in item.price) {
          groupedData[key].price[priceKey] += item.price[priceKey];
        }
        // Tính tổng splot
        groupedData[key].splot += parseInt(item.splot);
      });

      // Chuyển kết quả từ object thành mảng
      this.resultArrayFilteredService = Object.values(groupedData).sort(
        (a, b) => {
          // Sắp xếp theo giá servies_price giảm dần
          return b.price.servies_price - a.price.servies_price;
        }
      );

      // Duyệt qua this.filteredData và tích hợp dữ liệu vào datasetsMapService
      resultArray.forEach((dataPoint) => {
        // Assuming dataPoint.created_at is a date string in the format 'YYYY-MM-DD'
        const dateComponent = dataPoint.created_at;

        // Now you can use the "day" variable in your key generation
        this.key = `${dataPoint.source_name}_${dataPoint.source_id}`;

        let price = dataPoint.price.servies_price;

        if (!datasetsMapService.has(this.key)) {
          // Tạo một màu ngẫu nhiên cho backgroundColor và borderColor
          const backgroundColor = this.getRandomColor();
          const borderColor = this.getRandomColor();
          datasetsMapService.set(this.key, {
            label: dataPoint.source_name,
            data: [],
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1.2,
            fill: true,
            pointRadius: 0.3,
          });
        }
        const dataset = datasetsMapService.get(this.key);
        // Cộng tổng giá trị tiền vào dataset cho ngày này
        dataset.data.push(parseFloat(price));
      });

      // Chuyển đổi datasetsMapService thành một mảng các datasets và tính tổng giá trị tiền
      const datasets = Array.from(datasetsMapService.values()).map(
        (dataset) => {
          const totalValue = dataset.data.reduce(
            (total, value) => total + value,
            0
          );
          return {
            ...dataset,
            data: dataset.data, // Giữ lại giá trị tiền
            totalValue: totalValue, // Tổng giá trị tiền
          };
        }
      );

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

      // Check if a chart instance already exists and destroy it
      if (this.chartService) {
        this.chartService.destroy();
      }

      // Khởi tạo biểu đồ với các datasets đã tạo và labels đã sắp xếp
      this.chartService = new Chart(ctxService, {
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

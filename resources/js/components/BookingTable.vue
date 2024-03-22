<template>
  <div>
    <v-app>
      <v-card flat title="Nutrition">
        <v-row style="flex-wrap: wrap">
          <v-col>
            <v-text-field
              v-model="search"
              label="Search"
              class="search"
            ></v-text-field>
          </v-col>
          <v-col style="display: contents">
            <!-- Add your button here -->
            <label for="">
            <v-btn
              class="btn-sub btn btn-info m-0"
              @click="exportToExcel()" :disabled="this.adminId == null"
              >Export to Excel</v-btn
            >
          </label>
          </v-col>
        </v-row>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap">
          <label>
            <select
              class="form-control"
              id="showroomSelect"
              v-model="selectdateCompare"
              style="padding: 5px; min-width: 170px; max-width: 170px"
            >
              <option :value="null" selected>Select Booking Date</option>
              <option
                v-for="selectdateCompareArray in selectdateCompareArrays"
                :key="selectdateCompareArray.id"
                :value="selectdateCompareArray.id"
              >
                {{ selectdateCompareArray.name }}
              </option>
            </select>
          </label>

          <label :for="dateRange">
            <date-range-picker
              v-model="dateRange"
              :id="dateRange"
              :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy' }"
              label="Date range"
              locale="en-AU"
              :value="dateRange"
              :timePicker="true"
              style="min-width: 230px"
            ></date-range-picker>
          </label>

          <label>
            <select
              class="form-control"
              id="showroomSelect"
              v-model="selectedShowroom"
              style="padding: 5px; min-width: 170px; max-width: 170px"
            >
              <option :value="null" selected>Select Location</option>
              <option
                v-for="showroom in showrooms"
                :key="showroom.id"
                :value="showroom.id"
              >
                {{ showroom.Name }}
              </option>
            </select>
          </label>

          <label>
            <select
              class="form-control"
              id="showroomSelect"
              v-model="selectedAritst"
              style="padding: 5px; min-width: 170px; max-width: 170px"
            >
              <option :value="null" selected>Select Artist</option>
              <option
                v-for="Aritst in apiDataAritst"
                :key="Aritst.id"
                :value="Aritst.id"
              >
                {{ Aritst.name }}
              </option>
            </select>
          </label>

          <label>
            <select
              class="form-control"
              id="showroomSelect"
              v-model="selectedEmployee"
              style="padding: 5px; min-width: 170px; max-width: 170px"
            >
              <option :value="null" selected>Select Staff</option>
              <option
                v-for="Employee in Employees"
                :key="Employee.id"
                :value="Employee.name"
              >
                {{ Employee.name }}
              </option>
            </select>
          </label>

          <label>
            <select
              class="form-control"
              id="showroomSelect"
              v-model="Status"
              style="padding: 5px; min-width: 170px; max-width: 170px"
            >
              <option :value="null" selected>Select Status</option>
              <option
                v-for="selectStatusArray in selectStatusArrays"
                :key="selectStatusArray.id"
                :value="selectStatusArray.name"
              >
                {{ selectStatusArray.name }}
              </option>
            </select>
          </label>
          <label for="">
            <v-btn
              class="btn-sub btn btn-info m-0"
              @click="handleButtonClickFillter()"
              >Filter</v-btn
            >
          </label>
        </div>
        <v-data-table
          v-if="filteredDataTable.length > 0"
          :headers="flattenedHeaders"
          :items="generateTableData()"
          :search="search"
          :options="pagination"
          style="margin-top: 1rem"
        >
          <template v-slot:header="{ props }">
            <thead>
              <tr>
                <th
                  v-for="header in flattenedHeadersWithoutChildren"
                  :key="header.value"
                  :colspan="header.children ? header.children.length : 1"
                  :class="header.text.toLowerCase().replace(/[^a-z0-9]/g, '-')"
                  class="header-details"
                >
                  {{ header.text }}
                </th>
              </tr>
            </thead>
          </template>
          <template v-slot:item="{ item }">
            <tr>
              <td @click="redirectToEditPage(item.id)">{{ item.id }}</td>
              <td @click="redirectToEditPage(item.id)">{{ item.Staff }}</td>
              <td @click="redirectToEditPage(item.id)">{{ item.Location }}</td>
              <td @click="redirectToEditPage(item.id)">{{ item.Artist }}</td>
              <td @click="redirectToEditPage(item.id)">{{ item.Client }}</td>
              <td @click="redirectToEditPage(item.id)">
                {{ item.BookingDateCreate }}
              </td>
              <td @click="redirectToEditPage(item.id)">
                {{ item.TreatmentDate }}
              </td>
              <td @click="redirectToEditPage(item.id)">{{ item.StartTime }}
              </td>
              <td @click="redirectToEditPage(item.id)">{{ item.EndTime }}
              </td>
              <td @click="redirectToEditPage(item.id)">
                <div
                  class="status"
                  :class="item.Status.toLowerCase().replace(/[^a-z0-9]/g, '-')"
                >
                  {{ item.Status }}
                </div>
              </td>
              <td @click="redirectToEditPage(item.id)">
                <div class="clamp-text">{{ item.Services }}</div>
              </td>
              <td @click="redirectToEditPage(item.id)">{{ item.Price }}</td>
              <td @click="redirectToEditPage(item.id)">{{ item.Deposit }}</td>
              <td @click="redirectToEditPage(item.id)">
                {{ item.PaymentType }}
              </td>
              <td>
                <label class="switch bookingcheck" :id="item.paymentID">
                  <input
                    type="hidden"
                    :id="'1stchecknone_' + item.paymentID"
                    name="1stcheck"
                    value="0"
                    :checked="parseInt(item.stCheck) === 1 ? false : true"
                  />
                  <input
                    type="checkbox"
                    name="1stcheck"
                    :id="'1stcheck_' + item.paymentID"
                    class="onoffswitch-checkbox"
                    value="1"
                    :checked="parseInt(item.stCheck) === 1 ? true : false"
                    @click="
                      updatePaymentStatus(
                        item.stCheck,
                        '1stcheck',
                        item.paymentID
                      )
                    "
                  />
                  <span class="slider"></span>
                </label>
              </td>

              <td @click="redirectToEditPage(item.id)">{{ item.Remaining }}</td>
              <td @click="redirectToEditPage(item.id)">
                {{ item.PaymentTypeSecond }}
              </td>
              <td>
                <label class="switch bookingcheck" :id="item.paymentID">
                  <input
                    type="hidden"
                    :id="'2ndchecknone_' + item.paymentID"
                    name="2ndcheck"
                    value="0"
                    :checked="parseInt(item.ndCheck) === 1 ? false : true"
                  />
                  <input
                    type="checkbox"
                    name="2ndcheck"
                    :id="'2ndcheck_' + item.paymentID"
                    class="onoffswitch-checkbox"
                    value="1"
                    :checked="parseInt(item.ndCheck) === 1 ? true : false"
                    @click="
                      updatePaymentStatus(
                        item.ndCheck,
                        '2ndcheck',
                        item.paymentID
                      )
                    "
                  />
                  <span class="slider"></span>
                </label>
              </td>
              <td @click="redirectToEditPage(item.id)">
                {{ item.TotalRevenue }}
              </td>
              <td @click="redirectToEditPage(item.id)">{{ item.Phone }}</td>
              <td @click="redirectToEditPage(item.id)">
                <div class="clamp-text">  {{ item.Email }}</div>
              
              </td>
              <td @click="redirectToEditPage(item.id)">
                <div class="clamp-text">{{ item.Address }}</div>
              </td>
              <td @click="redirectToEditPage(item.id)">
                <div class="clamp-text">{{ item.Note }}</div>
              </td>
             
              <td @click="redirectToEditPage(item.id)">
                
                <div class="clamp-text">  {{ item.Source }}</div>
               </td>
              <td @click="redirectToEditPage(item.id)">
                <div class="clamp-text">       {{ item.SourceData }}</div>
         
              </td>
              <td>
                <v-icon @click="deleteItem(item.id)">mdi-delete</v-icon>
              </td>
            </tr>
          </template>
        </v-data-table>
        <div v-else>
          <!-- Optionally, you can show a loading spinner or a message when data is being fetched -->
          Loading data...
        </div>
      </v-card>

      <div v-if="popupVisible" class="popup">
        <div class="popup-content col-8 col-md-6">
          <div class="header text-center pb-4">
            <h5>KPI</h5>
          </div>

          <label :for="showroomSelect">Selected Showroom</label>
          <select
            class="form-control mb-3"
            :id="showroomSelect"
            v-model="selectedShowroom"
          >
            <option value="0">All Showroom</option>

            <option
              v-for="showroom in showrooms"
              :key="showroom.id"
              :value="showroom.id"
            >
              {{ showroom.Name }}
            </option>
          </select>

          <label :for="employeeSelect">Selected Employee</label>
          <select
            class="form-control mb-3"
            :id="employeeSelect"
            v-model="selectedEmployee"
          >
            <option value="0">All Employee</option>
            <option
              v-for="Employee in Employees"
              :key="Employee.id"
              :value="Employee.id"
            >
              {{ Employee.name }}
            </option>
          </select>

          <label :for="kpi">KPI</label>
          <input
            class="form-control mb-3"
            type="number"
            :id="kpi"
            v-model="kpi"
            :min="0"
            placeholder="Enter data"
          />

          <label :for="popupInputData">Selected Month</label>
          <input
            class="form-control mb-3"
            type="month"
            :id="popupInputData"
            v-model="popupInputData"
            placeholder="Enter data"
          />

          <button
            v-if="this.dialogEdit != true"
            class="custom-btn bnt-16"
            type="submit"
            @click="saveData"
            :disabled="this.popupInputData == ''"
          >
            Save
          </button>

          <button
            v-if="this.dialogEdit == true"
            class="custom-btn bnt-16"
            type="submit"
            @click="saveDataChanges"
            :disabled="this.popupInputData == ''"
          >
            Save
          </button>
          <button class="custom-btn bnt-16" @click="closePopup">Cancel</button>
        </div>
      </div>

      <div v-if="dialogDelete" max-width="500px" class="popup">
        <div class="">
          <v-card>
            <v-card-title class="radio-header radio-text"
              >Are you really sure of your actions ?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text"   class="bg-primary"  @click="closeDelete" style="min-width: 100px;"
                >Cancel</v-btn
              >
              <v-btn
                color="red-darken-1"
                variant="text"
                class="bg-danger"
                @click="deleteItemConfirm"
                style="min-width: 100px; "
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css"; // Import the CSS
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
import { VCard, VDataTable, VIcon, VTextField } from "vuetify/lib";
import moment from "moment";
import VueRouter from "vue-router";
import ExcelJS from "exceljs";

export default {
  components: {
    VCard,
    VDataTable,
    VIcon,
    VTextField,
    DateRangePicker,
    // ... other components
  },

  data() {
    return {
      adminId: null,
      artistId: null,
      employeeId: null,
      manage_supers: null,
      selectedArtist: 0,
      showroomschedule: [],
      showrooms: [],
      Employees: [],
      apiDataAritst: [],
      selectedAritst: null,
      selectedShowroom: null,
      selectedEmployee: null,
      selectedActive: "none",
      step: "none",
      data: [],
      showroomSelect: "defaultSelectValue",
      employeeSelect: "defaultSelectValue",
      dateRange: {
        type: Object,
        required: true, // Nếu cần
      },

      oldstart: null,
      oldend: null,

      dateCompare: {
        start: null, // Ngày bắt đầu
        end: null, // Ngày kết thúc
      },
      selectdateCompareArrays: [
        { id: 1, name: "Booking Date Create" },
        { id: 2, name: "Booking Treament Date" },
      ],

      selectStatusArrays: [
        { id: 1, name: "Waiting" },
        { id: 2, name: "Done" },
        { id: 3, name: "Partial Done" },
        { id: 4, name: "Refund" },
        { id: 5, name: "Reschedule" },
        { id: 6, name: "Cancel" },
        { id: 7, name: "Unidentified" },
      ],
      Status: null,
      selectdateCompare: null,
      OldselectdateCompare: null,
      selectedDate: null,
      inputData: "",
      popupVisible: false,
      popupInputData: "",
      currentViewStart: null,
      currentViewEnd: null,
      activeDays: [],
      kpi: 0,
      search: "",
      pagination: {
        page: 1,
        itemsPerPage: 10,
      },
      DataTables: [],
      editedItem: {
        // ... properties for CRUD operations
      },
      editedIndex: -1,
      DeletedItem: null,

      dialogDelete: false, // To control the visibility of the delete confirmation popup
      dialogEdit: false,
    };
  },

  methods: {



    async exportToExcel() {

      if(this.adminId != null) {

              // Tạo một workbook và một worksheet mới
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Sheet 1");

      // Lấy dữ liệu từ DataTable (thay bằng DataTable của bạn)
      const data = this.generateTableData();

      console.log("data", data);
      // Tạo các header cho bảng Excel

      const headers = this.dynamicHeaders();

      const width = 10;

      headers.forEach((header) => {
        if (header.children) {
          header.children.forEach((childHeader) => {
            const column = worksheet.getColumn(childHeader.getColumn);
            column.header = childHeader.text;
            column.width = Number(width); // Chuyển đổi width thành số
          });
        }
      });

      const rows = [];
      // Thêm dữ liệu từ DataTable vào bảng Excel
      data.forEach((row) => {
        const newRow = {};
        headers.forEach((header) => {
          if (header.children) {
            header.children.forEach((childHeader) => {
              console.log("headers", childHeader.value);

              const value = row[childHeader.value];
              newRow[childHeader.value] = value !== undefined ? value : ""; // Đảm bảo giá trị không phải là undefined
            });
          }
        });

        worksheet.addRow(Object.values(newRow));
      });

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const date = new Date();
      const filename = "Exported_Data_Booing" + date + ".xlsx";

      if (window.navigator.msSaveOrOpenBlob) {
        // IE
        window.navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        // Other browsers
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }

      }else {
        alert("You do not have rights !!!");
      }

    },

    handleButtonClickFillter() {
      // Log khi dateRange thay đổi
      const filteredData = this.filteredDataTable;
      console.log("Filtered Data:", filteredData, this.selectedShowroom);

      console.log(
        this.dateRange.start,
        this.oldstart,
        this.dateRange.end,
        this.oldend,
        this.OldselectdateCompare,
        this.selectdateCompare,
        this.dateRange.start != this.oldstart,
        this.dateRange.end != this.oldend,
        this.OldselectdateCompare != this.selectdateCompare
      );

      if (
        this.dateRange.start != this.oldstart ||
        this.dateRange.end != this.oldend ||
        this.OldselectdateCompare != this.selectdateCompare
      ) {
        this.fetchBookingTable(
          this.dateRange.start,
          this.dateRange.end,
          this.selectdateCompare
        );
      } else {

      }
    },

    updatePaymentStatus(isChecked, checkboxName, paymentId) {
      let status = parseInt(isChecked) === 0 ? 1 : 0;

      console.log(isChecked ,status , isChecked == status );


      if (
        this.adminId == null &&
        (this.manage_supers != 1 ||
          this.manage_supers != 0 ||
          this.manage_supers != 5)
      ) {
        alert("You do not have rights");
      } else {
        console.log(status, checkboxName, paymentId);
        axios
          .post("/api/update-payment-status", {
            isChecked: status,
            checkboxName: checkboxName,
            paymentId: paymentId, // Replace with the actual payment ID
          })
          .then((response) => {
            console.log(response.data.message);
            this.fetchBookingTable(
              this.dateRange.start,
              this.dateRange.end,
              this.selectdateCompare
            );
          })
          .catch((error) => {
            console.error("Error updating payment status:", error);
          });
      }
    },

    openPopup() {
      if (this.dialogEdit == true) {
        Promise.all([
          (this.inputData = moment().format("YYYY-MM-DD")),
          (this.kpi = this.editedItem.number_of_kpi),
          (this.selectedShowroom = this.editedItem.kpi_showroom),
          (this.selectedEmployee = this.editedItem.kpi_employee),
          console.log(
            this.inputData,
            this.kpi,
            this.selectedShowroom,
            this.selectedEmployee
          ),
        ]).then(() => {
          this.popupVisible = true;
        });
      } else {
        this.popupVisible = true;
      }
    },
    closePopup() {
      this.popupVisible = false;
      this.dialogEdit = false;
      this.inputData = [];
      this.kpi = [];
      this.selectedShowroom = [];
      this.selectedEmployee = [];
    },

    handleViewRender(view) {
      const start = view.start.format(); // Ngày bắt đầu
      const end = view.end.format(); // Ngày kết thúc

      // Đoạn mã xử lý khi view được render
    },

    handleDatesSet(info) {
      const currentMonth = info.view.currentStart.getMonth() + 1; // Tháng bắt đầu từ 0
      const currentYear = info.view.currentStart.getFullYear();
    },

    /*     saveData() {
      // Tạo một đối tượng dữ liệu để gửi lên server
      const postData = {
        date: `${this.popupInputData}-01`, // Thêm ngày là 01
        number_of_kpi: this.kpi,
        kpi_showroom: this.selectedShowroom,
        kpi_employee: this.selectedEmployee,
      };

      // Gửi yêu cầu POST đến API để lưu dữ liệu
      axios
        .post("/api/kpi-store", postData)
        .then((response) => {
          // Thực hiện các bước cần thiết sau khi lưu dữ liệu thành công
          this.closePopup(); // Đóng popup sau khi lưu thành công
          this.fetchBookingTable(this.dateRange.start,this.dateRange.end,this.selectdateCompare);
        })
        .catch((error) => {
          console.log(postData);
          console.error("Error saving data:", error);
          // Xử lý lỗi nếu có
        });
    },

    saveDataChanges() {
      // Tạo một đối tượng dữ liệu để gửi lên server
      const postData = {
        id: this.editedItem.id,
        date: `${this.popupInputData}-01`, // Thêm ngày là 01
        number_of_kpi: this.kpi,
        kpi_showroom: this.selectedShowroom,
        kpi_employee: this.selectedEmployee,
      };

      console.log(postData);
      // Gửi yêu cầu POST đến API để lưu dữ liệu
      axios
        .put("/api/kpi-update/", postData)
        .then((response) => {
          // Thực hiện các bước cần thiết sau khi lưu dữ liệu thành công
          this.closePopup(); // Đóng popup sau khi lưu thành công
          this.fetchBookingTable(this.dateRange.start,this.dateRange.end,this.selectdateCompare);
        })
        .catch((error) => {
          console.log(postData);
          console.error("Error saving data:", error);
          // Xử lý lỗi nếu có
        });
    }, */

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

    fetchapiDataEmployee() {
      axios
        .get(`/api/employee`)
        .then((response) => {
          this.Employees = response.data;
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
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

    AddNew() {
      this.openPopup();
    },

    formatMonthYear(date) {
      const options = { year: "numeric", month: "long" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    getShowroomName(showroomId) {
      const showroomsArray = Array.isArray(this.showrooms)
        ? this.showrooms
        : [];
      const showroom = showroomsArray.find(
        (s) => parseInt(s.id) === parseInt(showroomId)
      );
      return showroom ? showroom.Name : "All Showroom";
    },
    getEmployeeName(employeeId) {
      const employeesArray = Array.isArray(this.Employees)
        ? this.Employees
        : [];
      const employee = employeesArray.find(
        (e) => parseInt(e.id) === parseInt(employeeId)
      );
      return employee ? employee.name : "All Employee";
    },

    fetchBookingTable(start, end, type) {
      axios
        .get(`/api/getAllDataTable/${start}/${end}/${type}`)
        .then((response) => {
          this.DataTables = response.data;
          console.log(this.DataTables);
          this.OldselectdateCompare = this.selectdateCompare;
        })
        .catch((error) => {
          console.error("Error fetching KPIs:", error);
        });
    },

    handleDateSelect(info) {
      this.selectedDate = info.start;
    },

    getActiveDays() {
      return this.showroomschedule
        .filter((item) => item.active === 1)
        .map((item) => item.day.toLowerCase());
    },

    // Edit existing item
    editItem(item) {
      this.editedIndex = this.DataTables.indexOf(item);
      const resultItem = { ...item };

      this.editedItem = this.filteredDataTable.find(
        (item) => parseInt(item.id) === parseInt(resultItem.id)
      );

      this.dialogEdit = true;
      this.openPopup();
    },

    openPopupDelete() {
      this.dialogDelete = true;
    },
    closeDelete() {
      this.dialogDelete = false;
      this.DeletedItem = null;
    },

    // Delete item
    deleteItem(item) {
      this.DeletedItem = item;
      this.dialogDelete = true;
      this.openPopupDelete();
    },

    // Confirm delete
    deleteItemConfirm() {

      console.log('adminId',this.adminId,
        'manage_supers',this.manage_supers );
      if (
        this.adminId !== null &&
        ( parseInt(this.manage_supers) === 1 || parseInt(this.manage_supers) === 0)
      ) {
        axios
          .delete(`/api/deleteBooking/${this.DeletedItem}`)
          .then((response) => {
            console.log(response.data.message);
            this.closeDelete();
            this.fetchBookingTable(
              this.dateRange.start,
              this.dateRange.end,
              this.selectdateCompare
            );
          })
          .catch((error) => {
            console.error("Error deleting Booking:", error);
          });
      } else {
        alert("You do not have rights !!!");
      }
    },

    generateTableData() {
      return this.filteredDataTable.map((item) => ({
        id: item.id,
        Staff: item.source_name,
        Location: item.showroom.Name, // Dynamically set the showroomName property
        Artist: item.artist.name,
        Client: item.get.Name,
        BookingDateCreate: moment(item.created_at).format("DD-MM-YYYY"),
        TreatmentDate: moment(item.date).format("DD-MM-YYYY"),
        StartTime: item.time,
        EndTime: item.time_end,
        Status: item.status,
        Services: item.services[0].Name,
        Source: item.get.source_data,
        Price: item.price.servies_price,
        Deposit: item.price.Deposit_price,
        PaymentType: item.payment.payment_type,
        stCheck: item.payment["1stcheck"],
        Remaining: item.price.Remaining_price,
        PaymentTypeSecond: item.payment.payment_type_remainding,
        ndCheck: item.payment["2ndcheck"],
        TotalRevenue: item.price.Total_price,
        Email: item.get.Email,
        Address: item.get.Address,
        Phone: item.get.Phone,
        Note: item.get.Note,
        SourceData: item.get.Source,
        Approved: item.content,
        action: item.action,
        paymentID: item.payment.id,
      }));
    },

    dynamicHeaders() {
      return [
        {
          text: "Main",
          align: "center",
          children: [
            { text: "ID", getColumn: 1, value: "id", width: "75px" },
            { text: "Staff", getColumn: 2, value: "Staff", width: "100px" },
            {
              text: "Location",
              getColumn: 3,
              value: "Location",
              width: "150px",
            },
            { text: "Artist", getColumn: 4, value: "Artist", width: "100px" },
            { text: "Client", getColumn: 5, value: "Client", width: "150px" },
          ],
        },
        {
          text: "Booking Details",
          align: "center",
          children: [
            {
              text: "C.Date",
              getColumn: 6,
              value: "BookingDateCreate",
              width: "150px",
            },
            {
              text: "T.Date",
              getColumn: 7,
              value: "TreatmentDate",
              width: "150px",
            },
            {
              text: "S.Time",
              getColumn: 8,
              value: "StartTime",
              width: "150px",
            },
            { text: "E.Time", getColumn: 9, value: "EndTime", width: "150px" },
            { text: "Status", getColumn: 10, value: "Status", width: "150px" },
            {
              text: "Services",
              getColumn: 11,
              value: "Services",
              width: "150px",
            },
          ],
        },
        {
          text: "Payment Details",
          align: "center",
          children: [
            { text: "Price", getColumn: 12, value: "Price", width: "100px" },
            {
              text: "Deposit",
              getColumn: 13,
              value: "Deposit",
              width: "100px",
            },
            {
              text: "P.Type",
              getColumn: 14,
              value: "PaymentType",
              width: "150px",
            },
            { text: "1st.C", getColumn: 15, value: "stCheck", width: "100px" },
            {
              text: "Remaining",
              getColumn: 16,
              value: "Remaining",
              width: "150px",
            },
            {
              text: "P.Type 2nd",
              getColumn: 17,
              value: "PaymentTypeSecond",
              width: "150px",
            },
            { text: "2nd.C", getColumn: 18, value: "ndCheck", width: "100px" },
            {
              text: "T.Revenue",
              getColumn: 19,
              value: "TotalRevenue",
              width: "150px",
            },
            // ... other payment-related headers
          ],
        },

        {
          text: "Client Details",
          align: "center",
          children: [
            { text: "Phone", getColumn: 20, value: "Phone", width: "100px" },
            { text: "Email", getColumn: 21, value: "Email", width: "100px" },
            {
              text: "Address",
              getColumn: 22,
              value: "Address",
              width: "150px",
            },
            { text: "Note", getColumn: 23, value: "Note", width: "150px" },
            { text: "Source", getColumn: 24, value: "Source", width: "100px" },
            {
              text: "Source Data",
              getColumn: 25,
              value: "SourceData",
              width: "150px",
            },
            // ... other payment-related headers
          ],
        },
        // ... other headers
        {
          text: "",
          value: "action",
          sortable: false,
          align: "center",
          children: [
            { text: "Action", getColumn: 26, value: "action", width: "100px" },
            // ... other payment-related headers
          ],
        },
      ];
    },

    redirectToEditPage(bookId) {
      // Assuming you're using Vue Router
      if (this.adminId != null) {
        const editUrl = `/admin/books/${bookId}/edit`;
        window.location.href = editUrl;
      } else if (this.employeeId != null) {
        const editUrl = `/employee/books/${bookId}/edit`;
        window.location.href = editUrl;
      } else {
        const editUrl = `/artist/books/${bookId}/edit`;
        window.location.href = editUrl;
      }
      // Perform the redirection
    },
  },

  watch: {
    dateRange: {
      handler(newDateRange, oldDateRange) {
        // Log khi dateRange thay đổi
        this.dateRange.end = moment(newDateRange.endDate).format("YYYY-MM-DD");
        this.dateRange.start = moment(newDateRange.startDate).format(
          "YYYY-MM-DD"
        );

        this.oldstart = moment(oldDateRange.start).format("YYYY-MM-DD");
        this.oldend = moment(oldDateRange.end).format("YYYY-MM-DD");

        console.log(newDateRange, oldDateRange, this.oldstart, this.oldend);
      },
      deep: true, // Theo dõi các sự thay đổi sâu trong object
    },
  },

  created() {
    this.activeDays = this.getActiveDays();
  },

  mounted() {
    this.adminId = this.$root.adminId;

    this.artistId = this.$root.artistId;

    this.employeeId = this.$root.employeeId;

    this.manage_supers = this.$root.manage_supers;

    console.log(
      this.adminId,
      this.artistId,
      this.employeeId,
      this.manage_supers
    );

    if (this.artistId !== null) {
      this.selectedArtist = this.artistId;
    }

    const currentDate = new Date();
    this.currentMonth = currentDate.getMonth() + 1;
    this.currentYear = currentDate.getFullYear();

    // Kiểm tra nếu dateRange không có giá trị, đặt mặc định là ngày bắt đầu và ngày hiện tại
    if (!this.dateRange.start || !this.dateRange.end) {
      const currentDate = new Date();

      // Set start to the first day of the current month
      this.dateRange.start = moment(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
      ).format("YYYY-MM-DD");

      // Set end to the last day of the current month
      this.dateRange.end = moment(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
      ).format("YYYY-MM-DD");
    }

    this.fetchBookingTable(
      this.dateRange.start,
      this.dateRange.end,
      this.selectdateCompare
    );
    this.fetchShowrooms();
    this.fetchapiDataEmployee();
    this.fetchArtist();
  },

  computed: {
    flattenedHeaders() {
      const headers = this.dynamicHeaders();
      const flattened = [];

      headers.forEach((header) => {
        if (header.children) {
          flattened.push(...header.children);
        }
      });

      return flattened;
    },

    flattenedHeadersParent() {
      const headers = this.dynamicHeaders();
      const flattened = [];

      headers.forEach((header) => {
        flattened.push(header);
        if (header.children) {
          flattened.push(...header.children);
        }
      });

      return flattened;
    },
    flattenedHeadersWithoutChildren() {
      return this.flattenedHeadersParent.filter((header) => header.children);
    },

    filteredDataTable() {
      const query = this.search.toLowerCase();

      const conditions = [
        (item) => item.id.toString().includes(query),
        (item) => item.artist.name.toLowerCase().includes(query),
        (item) => item.source_name.toLowerCase().includes(query),
        (item) => item.services[0]?.Name.toLowerCase().includes(query),
        (item) => item.get?.Name.toLowerCase().includes(query),
        (item) => item.showroom.Name.toLowerCase().includes(query),
      ];

      let filtered = this.DataTables.filter((item) =>
        conditions.some((condition) => condition(item))
      );

      const filters = [
        {
          condition: (item) =>
            item.ShowroomID.toString().includes(this.selectedShowroom),
          key: "selectedShowroom",
        },
        {
          condition: (item) =>
            item.status.toLowerCase().includes(this.Status?.toLowerCase()),
          key: "Status",
        },
        {
          condition: (item) =>
            item.source_name
              .toLowerCase()
              .includes(this.selectedEmployee?.toLowerCase()),
          key: "selectedEmployee",
        },
        {
          condition: (item) =>
            item.ArtistID.toString().includes(this.selectedAritst),
          key: "selectedAritst",
        },
        // Add more filters as needed
      ];

      filters.forEach(({ condition, key }) => {
        if (this[key] !== null) {
          filtered = filtered.filter(condition);
        }
      });

      console.log(filtered);
      return filtered;
    },
  },
};
</script>

<style>
.event-info {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 999;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.custom-btn {
  width: 130px;
  height: 40px;
  color: #000000;
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
/* Style for the table rows */

.search {
  max-width: 300px;
}

.v-card {
  margin: 1rem;
}
.id {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

.header-details {
  background-color: rgb(106 165 251);
}
.main {
  background-color: rgb(144 188 255);
}

.booking-details {
  background-color: rgb(171 205 255);
}

.payment-details {
  background-color: rgb(193, 224, 255);
}

.client-details {
  background-color: rgb(216 232 255);
}

@media only screen and (max-width: 600px) {
  /* Add your media query for mobile view */
  .header-details,
  .main,
  .booking-details,
  .payment-details,
  .client-details {
    display: none;
  }
}

.clamp-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Adjust the number of lines as needed */
  -webkit-box-orient: vertical;
}

.status {
  text-align: center;
  border-radius: 10px;
}

.refund {
  background-color: #9d9a9d;
}

.partial-done {
  background-color: #4d9352;
}

.done {
  background-color: #8edb93;
}

.waiting {
  background-color: #91c5ea;
}

.cancel {
  background-color: #eda3a3;
}
.reschedule {
  background-color: #caa1d4;
}

@media (max-width: 768px) {
  .daterangepicker.openscenter[data-v-1ebd09d2] {
    right: auto;
    left: 50% !important;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
  }

  td {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    min-width: 150px;
    max-width: 150px;

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

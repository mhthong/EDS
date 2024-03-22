<template>
  <div>
    <button
      class="custom-btn bnt-16 bg-white mb-3"
      type="submit"
      @click="AddNew"
    >
      Add New
    </button>
    <v-app>
      <v-card flat title="Nutrition">
        <v-text-field
          v-model="search"
          label="Search"
          class="search"
        ></v-text-field>

        <v-data-table
          v-if="filteredKpis.length > 0"
          :headers="dynamicHeaders"
           :items="generateTableData()"
          :search="search"
          :options="pagination"
        >

        <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.id }}</td>
          <td>{{ item.number_of_kpi }}</td>
          <td>{{ item.showroomName}}</td>
          <td>{{ item.kpi_employee}}</td>
          <td>{{ formatMonthYear(item.date) }}</td>
          <td>
            <v-icon @click="editItem(item)">mdi-pencil</v-icon>
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

          <button v-if=" this.dialogEdit != true"
            class="custom-btn bnt-16"
            type="submit"
            @click="saveData"
            :disabled="this.popupInputData == ''"
          >
            Save
          </button>

          <button v-if=" this.dialogEdit == true"
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
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="deleteItemConfirm"
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
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
import { VCard, VDataTable, VIcon, VTextField } from "vuetify/lib";
import moment from "moment";

export default {
  components: {
    VCard,
    VDataTable,
    VIcon,
    VTextField,
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
      selectedShowroom: 0,
      selectedEmployee: 0,
      selectedActive: "none",
      step: "none",
      selectedStatus: "None",
      data: [],
      showroomSelect: "defaultSelectValue",
      employeeSelect: "defaultSelectValue",

      selectedDate: null,
      inputData: "",
      popupVisible: false,
      popupInputData: "",
      currentViewStart: null,
      currentViewEnd: null,
      activeDays: [],
      kpi: 0,
      search: "",
      headers: [
        { text: "ID", value: "id" },
        { text: "Number of KPI", value: "number_of_kpi" },
        { text: "Showroom", value: "kpi_showroom" },
        { text: "Employee", value: "kpi_employee" },
        { text: "Date", value: "date" },
        { text: "Action", value: "action", sortable: false },
      ],
      pagination: {
        page: 1,
        itemsPerPage: 10,
      },
      kpis: [],
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

    

    saveData() {
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
          this.fetchKpis();
        
        })
        .catch((error) => {
          console.log(postData);
          console.error("Error saving data:", error);
          // Xử lý lỗi nếu có
        });
    },

    saveDataChanges(){
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
          this.fetchKpis();
        })
        .catch((error) => {
          console.log(postData);
          console.error("Error saving data:", error);
          // Xử lý lỗi nếu có
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
      const showroom = showroomsArray.find((s) => parseInt(s.id) === parseInt(showroomId));
      return showroom ? showroom.Name : "All Showroom";
    },
    getEmployeeName(employeeId) {
      const employeesArray = Array.isArray(this.Employees)
        ? this.Employees
        : [];
      const employee = employeesArray.find((e) => parseInt(e.id) === parseInt(employeeId));
      return employee ? employee.name : "All Employee";
    },

    generateTableData() {
    return this.filteredKpis.map((item) => ({
      id: item.id,
      number_of_kpi: item.number_of_kpi,
      showroomName: this.getShowroomName(item.kpi_showroom), // Dynamically set the showroomName property
      kpi_employee: this.getEmployeeName(item.kpi_employee),
      date: item.date,
      action: item.action,
    }));
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

    fetchKpis() {
      axios
        .get("/api/kpis")
        .then((response) => {
          this.kpis = response.data.kpis;
        })
        .catch((error) => {
          console.error("Error fetching KPIs:", error);
        });
    },

    fetchEmployee() {
      axios
        .get(`/api/employee`)
        .then((response) => {
          this.Employees = response.data;
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    fetchShowroomschedule() {
      axios
        .get(`/api/showroomschedule/${this.selectedShowroom}`)
        .then((response) => {
          this.showroomschedule = response.data;
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
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
      this.editedIndex = this.kpis.indexOf(item);
      const resultItem = { ...item };

      this.editedItem = this.filteredKpis.find(item => parseInt(item.id) === parseInt(resultItem.id));
    
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
      
      axios
        .delete(`/api/kpis/${this.DeletedItem}`)
        .then(response => {
          console.log(response.data.message);
          this.closeDelete();
          this.fetchKpis();
        })
        .catch(error => {
          console.error('Error deleting KPI:', error);
        }); 
},

  },

  watch: {},

  created() {
    this.activeDays = this.getActiveDays();
  },

  mounted() {
    this.adminId = this.$root.adminId;

    this.artistId = this.$root.artistId;

    this.employeeId = this.$root.employeeId;

    this.manage_supers = this.$root.manage_supers;

    if (this.artistId !== null) {
      this.selectedArtist = this.artistId;
    }
    this.fetchShowrooms();
    this.fetchEmployee();
    this.fetchKpis();
  },

  computed: {
    filteredKpis() {
      const query = this.search.toLowerCase();
      const filtered = this.kpis.filter(
        (item) =>
          item.id.toString().includes(query) ||
          item.number_of_kpi.toString().includes(query) ||
          this.getShowroomName(item.kpi_showroom).toLowerCase().includes(query) ||
          this.getEmployeeName(item.kpi_employee).toLowerCase().includes(query) ||
          this.formatMonthYear(item.date).toLowerCase().includes(query)
      );

      return filtered;
},

dynamicHeaders() {
    return [
      { text: "ID", value: "id" },
      { text: "Number of KPI", value: "number_of_kpi" },
      { text: "Showroom", value: "showroomName", align: "center" },
      { text: "Employee", value: "kpi_employee" },
      { text: "Date", value: "date" },
      { text: "Action", value: "action", sortable: false },
    ];
  },
  },
};
</script>

<style scoped>
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

tbody tr td {
  text-align: start;
}
</style>

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
 


        <div class="mb-3" style="display: flex; gap: 1rem; flex-wrap: wrap">

            <v-text-field
          v-model="search"
          label="Search"
          class="search"
        ></v-text-field>

        

            <label style="    padding-top: 12px;
    margin-top: 4px;">
            <select
              class="form-control"
              id="showroomSelect"
              v-model="Status"
              style="padding: 5px; min-width: 170px; max-width: 170px"
            >
              <option :value="null" selected>Select Status</option>
              <option value="published" selected>Published</option>
              <option value="pending" selected>Pending</option>
              <option value="draft" selected>Draft</option>
            </select>
          </label>

   
        </div>

        <v-data-table
          v-if="filteredData.length > 0"
          :headers="dynamicHeaders"
          :items="generateTableData()"
          :search="search"
          :options="pagination"
        >
          <template v-slot:item="{ item }">
            <tr>
              <td  @click="redirectToEditPage(item.id)">{{ item.id}}</td>
              <td  @click="redirectToEditPage(item.id)">{{ item.name }}</td>

              <td  @click="redirectToEditPage(item.id)">{{ item.address }}</td>
              <td @click="redirectToEditPage(item.id)">
                <div
                  class="status"
                  :class="item.status.toLowerCase().replace(/[^a-z0-9]/g, '-')"
                >
                  {{ item.status.charAt(0).toUpperCase() + item.status.slice(1) }}
                </div>
              </td>

              <td  @click="redirectToEditPage(item.id)">{{ item.phone }}</td>
              <td  @click="redirectToEditPage(item.id)">{{ item.description}}</td>
        
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
    <div v-if="showNotification" class="notificationinfo">{{ notificationMessage }}</div>

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
      Status:null,
      selectedShowroom: null,
      selectedEmployee: 0,
      selectedActive: "none",
      step: "none",
      selectedStatus: "None",
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
        { text: "Name", value: "name" },
        { text: "Address", value: "address" },
        { text: "Status", value: "status" },
        { text: "Phone", value: "phone" },
        { text: "Description", value: "description" },
        { text: "Action", value: "action", sortable: false },
      ],
      pagination: {
        page: 1,
        itemsPerPage: 10,
      },
      data: [],
      editedItem: {
        // ... properties for CRUD operations
      },
      editedIndex: -1,
      DeletedItem: null,

      dialogDelete: false, // To control the visibility of the delete confirmation popup
      dialogEdit: false,
      showNotification: false, // Control the visibility of the notification
      notificationMessage: "", // Store the content of the notification
    };
  },

  methods: {

    redirectToEditPage(Id) {
      // Assuming you're using Vue Router
      if (this.adminId != null) {
        const editUrl = `/admin/showrooms/${Id}/edit`;
        window.location.href = editUrl;
      } 
      // Perform the redirection
    },

    openPopup() {
      if (this.dialogEdit == true) {
        Promise.all([
          (this.inputData = moment().format("YYYY-MM-DD")),
          (this.kpi = this.editedItem.number_of_kpi),
          (this.selectedShowroom = this.editedItem.kpi_showroom),
          (this.selectedEmployee = this.editedItem.kpi_employee),

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

    AddNew() {
      if (this.adminId != null) {
        const editUrl = `/admin/showrooms/create`;
        window.location.href = editUrl;
      }
    },
    generateTableData() {
      return this.filteredData.map((item) => ({
        id: item.id,
        name: item.Name,
        address:item.Address, // Dynamically set the showroomName property
        status:item.status,
        phone: item.Phone,
        description: item.Description,
        action: item.action,
      }));
    },


    fetchData() {
      axios
        .get("/api/getallShowrooms")
        .then((response) => {
          this.data = response.data;

   
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
        .delete(`/api/delete_showroom/${this.DeletedItem}`)
        .then((response) => {

          this.notificationMessage = response.data.message;
          this.showNotification = true; // Show the notification
          this.closeDelete();
          this.fetchData();
        })
        .catch((error) => {
          this.notificationMessage = "Error deleting : " + error.message;
          this.showNotification = true; // Show the notification
          console.error("Error deleting :", error);
        });

        setTimeout(() => {
        this.showNotification = false;
      }, 3000);
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
    this.fetchData();
  },

  computed: {




filteredData() {
      const query = this.search.toLowerCase();

      const conditions = [
        (item) => item.id.toString().includes(query),
        (item) => item.Name.toLowerCase().includes(query),
        (item) => item.Phone.toLowerCase().includes(query),
      ];

      let filtered = this.data.filter((item) =>
        conditions.some((condition) => condition(item))
      );

      const filters = [
 
        {
          condition: (item) =>
            item.status.toLowerCase().includes(this.Status?.toLowerCase()),
          key: "Status",
        },
        // Add more filters as needed
      ];

      filters.forEach(({ condition, key }) => {
        if (this[key] !== null) {
          filtered = filtered.filter(condition);
        }
      });


      return filtered;
    },

    dynamicHeaders() {
      return [
      { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Address", value: "address" },
        { text: "Status", value: "status" },
        { text: "Phone", value: "phone" },
        { text: "Description", value: "description" },
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


.status {
  text-align: center;
  border-radius: 10px;
}


.pending {
  background-color: #fff1c9;
}

.published {
  background-color: #91c5ea;
}

.draft {
  background-color: #eda3a3;
}



</style>

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
          v-if="filteredGroups.length > 0"
          :headers="dynamicHeaders"
          :items="generateTableData()"
          :search="search"
          :options="pagination"
        >
          <template v-slot:item="{ item }">
            <tr>
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.description }}</td>
              <td>
            <span v-for="showroomgroup in item.showroom"
              :key="showroomgroup.id">
    [  {{ showroomgroup.Name }} ]
            </span>
            </td>
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
            <h5>Groups Showroom</h5>
          </div>

          <label :for="name" style="width: 100%">
            <span>Name</span>
            <input
              class="form-control mb-3"
              type="text"
              :id="name"
              v-model="name"
              name="name"
              placeholder="Enter Name"
            />
          </label>

          <label :for="description" style="width: 100%">
            <span>Description</span>
            <input
              class="form-control mb-3"
              type="text"
              :id="description"
              v-model="description"
              name="description"
              placeholder="Enter Description"
            />
          </label>

          <div class="mb-3" style="display: flex; flex-wrap: wrap; gap: 1rem">
            <div
              style="flex: 1"
              v-for="showroom in showrooms"
              :key="showroom.id"
            >
              <label class="label m-0" :for="'showroom_' + showroom.id">
                <input
                  type="checkbox"
                  :value="showroom.id"
                  :id="'showroom_' + showroom.id"
                  v-model="selectedShowroom"
                />
                <div>{{ showroom.Name }}</div>
              </label>
            </div>
          </div>

          <button
            class="custom-btn bnt-16"
            type="submit"
            @click="saveData"
          >
            Save
          </button>
          <button class="custom-btn bnt-16" @click="closePopup">Cancel</button>
        </div>
      </div>

      <div v-if="popupEditVisible" class="popup">
        <div class="popup-content col-8 col-md-6">
          <div class="header text-center pb-4">
            <h5>Groups Showroom</h5>
          </div>

          <label :for="name" style="width: 100%">
            <span>Name</span>
            <input
              class="form-control mb-3"
              type="text"
              :id="name"
              v-model="name"
              name="name"
              placeholder="Enter Name"
            />
          </label>

          <label :for="description" style="width: 100%">
            <span>Description</span>
            <input
              class="form-control mb-3"
              type="text"
              :id="description"
              v-model="description"
              name="description"
              placeholder="Enter Description"
            />
          </label>

          <div class="mb-3" style="display: flex; flex-wrap: wrap; gap: 1rem">
            <div
              style="flex: 1"
              v-for="showroom in showrooms"
              :key="showroom.id"
            >
              <label class="label m-0" :for="'showroom_' + showroom.id">
                <input
                  type="checkbox"
                  :value="showroom.id"
                  :id="'showroom_' + showroom.id"
                  v-model="selectedShowroom"
                />
                <div>{{ showroom.Name }}</div>
              </label>
            </div>
          </div>

          <button
            class="custom-btn bnt-16"
            type="submit"
            @click="saveDataEdit"
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

    <div v-if="showNotification" class="notificationinfo">
      {{ notificationMessage }}
    </div>
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
      id: null,
      adminId: null,
      artistId: null,
      employeeId: null,
      manage_supers: null,
      showrooms: [],
      name:null,
      description:null,
      selectedShowroom: [],
      step: "none",
      selectedStatus: "None",
      data: [],
      showroomSelect: "defaultSelectValue",
      employeeSelect: "defaultSelectValue",

      selectedDate: null,
      inputData: "",
      popupVisible: false,
      popupEditVisible: false,
      popupInputData: "",
      currentViewStart: null,
      currentViewEnd: null,
      activeDays: [],
      kpi: 0,
      search: "",
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Description", value: "description" },
        { text: "Showroom", value: "showroom" },
        { text: "Action", value: "action", sortable: false },
      ],
      pagination: {
        page: 1,
        itemsPerPage: 10,
      },
      groups: [],
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
    openPopup() {
      if (this.dialogEdit == true) {
        Promise.all([

        ]).then(() => {
          this.popupVisible = true;
        });
      } else {
        this.popupVisible = true;
      }
    },

    closePopup() {
      this.name = null;
      this.id = null;
      this.description = null;
      this.selectedShowroom = [];
      this.popupVisible = false;
      this.popupEditVisible = false;
      this.dialogEdit = false;
    },



    saveData() {
      // Tạo một đối tượng dữ liệu để gửi lên server
      const postData = {
        name: this.name, // Thêm ngày là 01
        description: this.description,
        showrooms: this.selectedShowroom,
      };

      // Gửi yêu cầu POST đến API để lưu dữ liệu
      axios
        .post("/api/groups-store", postData)
        .then((response) => {
          // Thực hiện các bước cần thiết sau khi lưu dữ liệu thành công
          this.notificationMessage = response.data.message;
          this.showNotification = true; // Show the notification
          console.log(response.data);

          this.closePopup(); // Đóng popup sau khi lưu thành công
          this.fetchGroups();
        })
        .catch((error) => {
          this.notificationMessage = response.data.message;
          this.showNotification = true; // Show the notification
          console.error("Error saving data:", error);
          // Xử lý lỗi nếu có
        });

      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    },

    saveDataEdit() {
      // Tạo một đối tượng dữ liệu để gửi lên server
      const postData = {
        id : this.id,
        name: this.name, // Thêm ngày là 01
        description: this.description,
        showrooms: this.selectedShowroom,
      };

      // Gửi yêu cầu POST đến API để lưu dữ liệu
      axios
        .put("/api/groups-update/", postData)
        .then((response) => {
          // Thực hiện các bước cần thiết sau khi lưu dữ liệu thành công
          this.notificationMessage = response.data.message;
          this.showNotification = true; // Show the notification
          this.closePopup(); // Đóng popup sau khi lưu thành công
          this.fetchGroups();
        })
        .catch((error) => {
          this.notificationMessage = response.data.message;
          this.showNotification = true; // Show the notification
          console.error("Error saving data:", error);
          // Xử lý lỗi nếu có
        });
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
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

    generateTableData() {
      return this.filteredGroups.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        showroom: item.showrooms,
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

    fetchGroups() {
      axios
        .get("/api/groups")
        .then((response) => {
          this.groups = response.data;

          console.log(      this.groups);
        })
        .catch((error) => {
          console.error("Error fetching KPIs:", error);
        });
    },



    // Edit existing item
    editItem(item) {
      this.editedIndex = this.groups.indexOf(item);
      const resultItem = { ...item };

      this.editedItem = this.filteredGroups.find(
        (item) => parseInt(item.id) === parseInt(resultItem.id)
      );


      this.id = this.editedItem.id;
      this.name = this.editedItem.name;
      this.description = this.editedItem.description;

      // Loop through each showroom in the 'showrooms' array of the current object
      this.editedItem.showrooms.forEach(showroom => {
        // Push the showroom ID into the 'selectedShowrooms' array
        this.selectedShowroom.push(showroom.id);
      });
      this.dialogEdit = true;
      this.popupEditVisible= true;


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
        .delete(`/api/groups/${this.DeletedItem}`)
        .then((response) => {
          this.notificationMessage = response.data.message;
          this.showNotification = true; // Show the notification

          this.closeDelete();
          this.fetchGroups();
        })
        .catch((error) => {
          this.notificationMessage = "Error deleting: " + error.message;
          this.showNotification = true; // Show the notification
          console.error("Error deleting KPI:", error);
        });

      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    },
  },

  watch: {},

  created() {

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
    this.fetchGroups();
  },

  computed: {
    filteredGroups() {
      const query = this.search.toLowerCase();

    const filtered = this.groups.filter(
        (item) =>
          item.id.toString().includes(query)
      ); 

      return filtered;
    },

    dynamicHeaders() {
      return [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Description", value: "description" },
        { text: "Showroom", value: "showroom" },
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

.label {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  padding: 12px 14px;
  margin: 1rem 0px;
  background-color: #fff;
  transition: 0.1s;
  position: relative;
  text-align: left;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: 500;
}
</style>

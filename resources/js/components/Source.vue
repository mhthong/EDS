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
          v-if="filteredSources.length > 0"
          :headers="dynamicHeaders"
          :items="generateTableData()"
          :search="search"
          :options="pagination"
        >
          <template v-slot:item="{ item }">
            <tr>
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
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
            <h5>Source</h5>
          </div>
          <label :for="popupInputData" class="mb-3">Source Name</label>
          <input
            class="form-control mb-3"
            type="text"
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
      source: 0,
      search: "",
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Action", value: "action", sortable: false },
      ],
      pagination: {
        page: 1,
        itemsPerPage: 10,
      },
      sources: [],
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
          console.log(  this.editedItem),
          (this.popupInputData = this.editedItem.name),

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
        name: this.popupInputData, // Thêm ngày là 01
      };

      // Gửi yêu cầu POST đến API để lưu dữ liệu
      axios
        .post("/api/source-store", postData)
        .then((response) => {
          // Thực hiện các bước cần thiết sau khi lưu dữ liệu thành công
          this.closePopup(); // Đóng popup sau khi lưu thành công
          this.fetchSource();
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
        name: this.popupInputData, // Thêm ngày là 01
      };

      console.log(postData);
      // Gửi yêu cầu POST đến API để lưu dữ liệu
      axios
        .put("/api/source-update/", postData)
        .then((response) => {
          // Thực hiện các bước cần thiết sau khi lưu dữ liệu thành công
          this.closePopup(); // Đóng popup sau khi lưu thành công
          this.fetchSource();
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


    generateTableData() {
      return this.filteredSources.map((item) => ({
        id: item.id,
        name: item.name,
        action: item.action,
      }));
    },


    fetchSource() {
      axios
        .get("/api/Sources")
        .then((response) => {
          this.sources = response.data.Source;
        })
        .catch((error) => {
          console.error("Error fetching KPIs:", error);
        });
    },

    // Edit existing item
    editItem(item) {
      this.editedIndex = this.sources.indexOf(item);
      const resultItem = { ...item };

      this.editedItem = this.filteredSources.find(
        (item) => parseInt(item.id) === parseInt(resultItem.id)
      );
      console.log(  this.editedItem);
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
        .then((response) => {
          console.log(response.data.message);
          this.closeDelete();
          this.fetchSource();
        })
        .catch((error) => {
          console.error("Error deleting KPI:", error);
        });
    },
  },

  watch: {},

  created() {},

  mounted() {
    this.adminId = this.$root.adminId;

    this.artistId = this.$root.artistId;

    this.employeeId = this.$root.employeeId;

    this.manage_supers = this.$root.manage_supers;

    if (this.artistId !== null) {
      this.selectedArtist = this.artistId;
    }
    this.fetchSource();
  },

  computed: {
    filteredSources() {
      const query = this.search.toLowerCase();
      const filtered = this.sources.filter(
        (item) =>
          item.id.toString().includes(query) ||
          item.name.toString().includes(query)
      );

      return filtered;
    },

    dynamicHeaders() {
      return [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
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

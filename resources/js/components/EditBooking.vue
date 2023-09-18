<template>
  <div
    class="flexb-c col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
    style="align-items: flex-start; justify-content: space-between"
  >
    <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
      <div>
        <h4 class="col-12">
          <p class="radio-header radio-text"> Service :  {{ selectedServicesName }}</p>

        </h4>
        <div class="col-12">
          <div class="col-12 col-sm-12 col-lg-12 p-2 mb-2">
            <div class="controls">
              <input
                id="depart"
                class="floatLabel pointer-events-a "
                type="date"
                name="date"
                v-model="selectedDate"
                @change="filterActiveDays"
                @input="checkSelectedDate"
              />
              <label
                for="selectedDate"
                class="label-date active"
                :class="{ active: isLabelActive }"
                ><i class="fa fa-calendar"></i>&nbsp;&nbsp;Treament Date</label
              >
              <div v-if="showWarning" class="error-message">
                Please select a date more today.
              </div>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="col-12 col-sm-4 col-lg-4 p-2 mb-2">
            <div class="controls">
              <i class="fa fa-sort"></i>

              <select
                v-model="selectedArtist"
                @input="checkselectedArtist"
                id="artistSelect"
                class="floatLabel pointer-events-a"
                name="artist"
              >
                <option :value="0">N/A</option>
                <option
                  v-for="artist in artists"
                  :key="artist.id"
                  :value="artist.id"
                >
                  {{ artist.name }}
                </option>
              </select>

              <label for="artistSelect" class="label-date active"
                ><i class="fa fa-male"></i>&nbsp;&nbsp;Artist</label
              >
            </div>
          </div>

          <div class="col-12 col-sm-4 col-lg-4 p-2 mb-2">
            <div class="controls">
              <input
                class="floatLabe "
                type="time"
                id="start-time"
                style=" pointer-events: none;"
                v-model="startTime"
                @input="validateTime"
              />
              <label for="artistSelect" class="label-date active"
                ><i class="fa-regular fa-clock"></i>&nbsp;&nbsp;Start Time</label
              >
            </div>
          </div>

          <div class="col-12 col-sm-4 col-lg-4 p-2 mb-2">
            <div class="controls">
              <input
                class="floatLabel"
                type="time"
                style=" pointer-events: none;"
                id="end_time"
                v-model="endTime"
                @input="validateTime"
              />
              <label for="artistSelect" class="label-date active"
                ><i class="fa-regular fa-clock"></i>&nbsp;&nbsp;End Time</label
              >
            </div>
          </div>
        </div>

        <!-- Hiển thị danh sách các ngày active và working_hours -->

        <div class="col-12" v-if="!showWarning && filteredDays.length > 0">
          <div class="col-12" v-for="day in filteredDays" :key="day.id">
            <div
              class="radio-section col-12 col-sm-6 col-lg-3 p-2"
              v-for="workingHour in day.working_hours"
              :key="workingHour.id"
            >
              <div class="">
                <label class="label m-0">
                  <input
                  class="pointer-events-a"
                    type="radio"
                    :value="workingHour"
                    v-model="selectedWorkingHour"
                    :disabled="
                      isDisabled(
                        day.day,
                        workingHour.start_time,
                        workingHour.end_time,
                        selectedDate,
                        selectedArtist
                      )
                    "
                  />

                  <input
                
                    style="display: none"
                    class="floatLabel pointer-events-a "
                    type="time"
                    id="start-time"
                    name="start_time"
                    :value="selectedStartTime"
                  />

                  <input
                    style="display: none"
                    class="floatLabel pointer-events-a "
                    type="time"
                    id="start-time"
                    name="end_time"
                    :value="selectedEndTime"
                  />

                  <span class="radio-header radio-text">
                    {{ workingHour.start_time }} -
                    {{ workingHour.end_time }}</span
                  >
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
      >
        <div class="controls mb-4">
          <input
            class="form-control pointer-events-a "
            type="text"
            id="name"
            name="name"
            v-model="formData.name"
            required
          />
          <label for="name" class="label-date active">Name:</label>
        </div>
        <div class="controls mb-4">
          <input
            class="form-control pointer-events-a "
            type="email"
            id="email"
            name="email"
            v-model="formData.email"
          />

          <label for="email" class="label-date active">Email:</label>
        </div>

        <div class="controls mb-4">
          <label for="address" class="label-date active">Address:</label>
          <input
            class="form-control pointer-events-a "
            type="text"
            id="address"
            name="address"
            v-model="formData.address"
          />
        </div>
        <div class="controls mb-4">
          <label for="phone" class="label-date active">Phone:</label>
          <input
            class="form-control pointer-events-a "
            type="tel"
            id="phone"
            name="phone"
            v-model="formData.phone"
          />
        </div>
        <!--    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p> -->
      </div>
      <div
        class="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
      >
        <template v-if="step === 'showroom'">
          <button
            class="custom-btn btn-16 "
            @click="nextStep"
            type="button"
            :disabled="!selectedShowroom"
          >
            Service
          </button>
        </template>

        <template v-if="step === 'groupService'">
          <!-- Group Services -->
          <div
            class="label groupService"
            v-for="groupService in groupServices"
            :key="groupService.groupService.id"
          >
            <div
              class="radio-header radio-text"
              @click="toggleGroupService(groupService.groupService.id)"
              :class="{
                active: groupServiceStates[groupService.groupService.id],
              }"
            >
              {{ groupService.groupService.Name }}
            </div>
            <ul
              class="m-0"
              v-if="groupServiceStates[groupService.groupService.id]"
            >
              <li
                v-for="service in groupService.groupService.services"
                :key="service.id"
              >
                <label class="flex-groupService">
                  <input class="pointer-events-a"
                    name="service_id"
                    type="radio"
                    :value="service.id"
                    v-model="selectedServices"
                    @change="calculateTotalSelectedServicesPrice()"
                  />
                  <div class="radio-header radio-text">
                    {{ service.Name }} -- Price:
                    {{ formatCurrency(service.Price) }}
                  </div>
                </label>
              </li>
            </ul>
          </div>

          <button class="custom-btn btn-16" @click="prevStep" type="button">
            Back
          </button>
        </template>
      </div>
    </div>

    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
      <div class="bg-ad-form right-sidebar">
        <div
          class="widget meta-boxes form-actions form-actions-default action-horizontal"
        >
          <div class="widget-title">
            <h4>
              <span>Publish</span>
            </h4>
          </div>
          <div class="widget-body">
            <div class="btn-set">
              <button
                type="submit"
                name="submit"
                value="save"
                class="btn btn-info "
                @click="SubmitEvent"
                :disabled="submitted "
              >
                <i class="fa fa-save"></i> Save
              </button>
              &nbsp;
              <button
                type="submit"
                name="submit"
                value="apply"
                class="btn btn-success"
                @click="SubmitEvent"
                :disabled="submitted "
              >
                <i class="fa fa-check-circle"></i> Save &amp; Edit
              </button>

              <div v-if="errorMessagesubmitted" class="error-message">
                {{ errorMessage }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-ad-form right-sidebar mt-3">
        <div class="widget meta-boxes">
          <div class="widget-title">
            <h4>
              <label
                for="status"
                class="m-0 control-label required "
                aria-required="true"
                >Status</label
              >
            </h4>
          </div>
          <div class="widget-body p-3">
            <div class="ui-select-wrapper form-group">
              <div>
                <select
                  class="form-control pointer-events-p"
                  v-model="selectedStatus"
                  name="status"
                >
                  <option value="Waiting" selected>Waiting</option>
                  <option value="Done">Done</option>
                  <option value="Cancel">Cancel</option>
                  <option value="Refund">Refund</option>
                </select>

                <div
                  class="form-group"
                  v-if="
                    selectedStatus === 'Cancel' || selectedStatus === 'Refund'
                  "
                >
                  <label for="">Note</label>
                  <!-- Input field for "Cancel" or "Refund" status -->
                  <textarea
                    type="text"
                    class="form-control"
                    name="content"
                    v-model="content"
                    required
                  >{{ this.content }}</textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-ad-form right-sidebar mt-3">
        <div class="widget meta-boxes">
          <div class="widget-title">
            <h4>
              <label
                for="status"
                class="m-0 control-label required"
                aria-required="true"
                >PaymentType</label
              >
            </h4>
          </div>
          <div class="widget-body p-3">
            <div class="ui-select-wrapper form-group">
              <div>
                <select
                  class="form-control"
                  name="payment_type"
                  v-model="selectedPaymentType"
                >
                  <option value="N/A">N/A</option>
                  <option value="Bank transfer">Bank transfer</option>
                  <option value="After Pay">After Pay</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-ad-form right-sidebar mt-3">
        <div class="widget meta-boxes">
          <div class="widget-title">
            <h4>
              <label
                for="status"
                class="m-0 control-label required"
                aria-required="true"
                >Action</label
              >
            </h4>
          </div>
          <div class="widget-body p-3">
            <div class="ui-select-wrapper form-group">
              <div>
                <select  class="form-control pointer-events-a pointer-events-p" name="action" v-model="action">
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                </select>

                <div class="form-group">
                  <label for="">Note</label>
                  <!-- Input field for "Cancel" or "Refund" status -->
                  <textarea
                    type="text"
                    class="form-control pointer-events-a pointer-events-p"
                    name="sendmail"
                    v-model="sendmail"
                  ></textarea>

                  <div class="btn-set">
                    <button
                      type="submit"
                      name="submit"
                      value="sendmail"
                      class="btn btn-info pointer-events-a pointer-events-p"
                      @click="submitFormSendMail"
                      :disabled="
                        sendmail.trim() === '' || submitted || !submitFormSendMail()
                      "
                    >
                      <i class="fa-regular fa-paper-plane"></i>
                      Send Mail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--      -->
  </div>
</template>

<script>
import axios, { Axios } from "axios";

export default {
  data() {
    return {
      showrooms: [],
      showroomspath: "N/A",
      selectedShowroom: null,
      selectedArtist: 0,
      groupServices: [],
      showroomSchedules: [],
      services: [],
      artistlevels: [],
      selectedArtistlevel: null,
      selectedshowroomschedule: null,
      selectedGroupService: "",
      selectedGroupServiceServices: [],
      step: "showroom",
      selectedServices: null,
      selectedServicesName: null,
      totalPrice: 0,
      selectedDate: "",
      showWarning: false, // Ngày tối thiểu cho trường input
      filteredDays: [],
      selectedWorkingHour: "",
      selectedWorkingHour_end_time: "",
      apiData: [],
      artists: [],
      formData: {
        name: "",
        email: "",
        address: "",
        phone: "",
      },
      InputSelectedStatus: "",
      errorMessage: "", // Dữ liệu từ API
      jsonData: "",
      bookingData: "",
      selectedDepositPrice: 0,
      maxDepositPrice: 0,
      minDepositPrice: 0,
      inputError: false,
      selectedStatus: "Waiting",
      selectedPaymentType: "N/A",
      content: "",
      sendmail:"",
      id: "",
      currentURL: "",
      apiData_id: [],
      GetID: [],
      startTime: "", // Initialize with empty values
      endTime: "",
      action: "",
      errorMessagesubmitted: "",
      submitted: false,
      groupServiceStates: {},
      isLabelActive: false,
      isIconActive: false,
      selectedStartTime: "",
      selectedEndTime: "",
      /*   selectedOption: "option1", */
    };
  },

  created() {
    // Lấy URL hiện tại và gán cho biến currentURL
    this.currentURL = window.location.href;

    // Sử dụng biểu thức chính quy để trích xuất ID từ URL
    const idMatch = this.currentURL.match(/\/(\d+)\/edit$/);

    if (idMatch && idMatch[1]) {
      // Nếu có khớp và tìm thấy ID, bạn có thể lấy nó và chuyển thành số nguyên
      this.id = parseInt(idMatch[1]);
    }
    // Call the method to fetch data when the component is created
  },

  watch: {
    selectedArtist: function (newValue, oldValue) {
      // Khi selectedArtist thay đổi, đặt selectedWorkingHour về giá trị mặc định hoặc null
      this.selectedWorkingHour = null; // hoặc giá trị mặc định nếu bạn đã xác định nó
    },

    selectedWorkingHour: function (newWorkingHour, oldWorkingHour) {
      // Update selectedStartTime when selectedWorkingHour changes
      if (newWorkingHour) {
        this.selectedStartTime = newWorkingHour.start_time;
        this.selectedEndTime = newWorkingHour.end_time;
      } else {
        // Handle the case when nothing is selected
        this.selectedStartTime = "";
        this.selectedEndTime = "";
      }
    },
  },

  computed: {
    selectedShowroomMap() {
      // Lấy thông tin maps của showroom được chọn
      if (this.selectedShowroom) {
        const selectedShowroom = this.showrooms.find(
          (showroom) => showroom.id === this.selectedShowroom
        );
        return selectedShowroom ? selectedShowroom.maps : "";
      }
      return "";
    },

    selectedArtistlevelDetails() {
      if (this.selectedArtistlevel) {
        const selectedLevel = this.artistlevels.find(
          (level) => level.id === this.selectedArtistlevel
        );
        return selectedLevel
          ? { Name: selectedLevel.Name, Level_price: selectedLevel.Level_price }
          : null;
      }
      return null;
    },

    totalLevelPrice() {
      if (this.selectedArtistlevelDetails) {
        const levelPrice = parseFloat(
          this.selectedArtistlevelDetails.Level_price
        );
        return levelPrice;
      }
      return 0;
    },

    selectedServicesPriced() {
      if (this.selectedServices) {
        const selectedServices = this.services.filter((service) =>
          this.selectedServices.includes(service.id)
        );
        return selectedServices.map((service) => service.Price);
      }
      return null;
    },
  },

  methods: {
    fetchapiData_id() {
      // Gọi API và cập nhật biến apiData với dữ liệu từ API
      axios
        .get(`/api/data-bookings/${this.id}`)
        .then((response) => {
          this.apiData_id = response.data;
          this.selectedShowroom = this.apiData_id[0].ShowroomID;
          this.selectedArtist = this.apiData_id[0].ArtistID;
          this.GetID = this.apiData_id[0].GetID;
          this.selectedStatus = this.apiData_id[0].status;
          this.selectedDate = this.apiData_id[0].date;
          this.selectedArtist = this.apiData_id[0].ArtistID;
          this.startTime = this.apiData_id[0].time;
          this.endTime = this.apiData_id[0].time_end;
          this.selectedServices = this.apiData_id[0].services[0].id;
          this.selectedServicesName = this.apiData_id[0].services[0].Name;
          this.content = this.apiData_id[0].content;
 
          if (this.apiData_id[0].ArtistID === 7) {
            this.selectedArtist = 0;
          } else {
            this.selectedArtist = this.apiData_id[0].ArtistID;
          }
          // Check if the payment object exists in the data
          if (this.apiData_id[0] && this.apiData_id[0].payment) {
            // Set this.selectedPaymentType to the value of payment_type
            this.selectedPaymentType = this.apiData_id[0].payment.payment_type;
          } else {
            // Handle the case where payment data is not available
            this.selectedPaymentType = "N/A";
          }

          this.action = this.apiData_id[0].action;

          this.formData = {
            name: this.apiData_id[0].get.Name,
            email: this.apiData_id[0].get.Email,
            address: this.apiData_id[0].get.Address,
            phone: this.apiData_id[0].get.Phone,
          };

          this.fetchApiData();
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

    fetchGroupServices() {
      axios
        .get(`/api/group-services/${this.selectedShowroom}`)
        .then((response) => {
          this.groupServices = response.data;
        })
        .catch((error) => {
          console.error("Error fetching group services:", error);
        });
    },

    async fetchApiData() {
      try {
        const response = await axios.get(
          `/api/bookings/showroom/${this.selectedShowroom}`
        );
        this.apiData = response.data;
        console.log(this.selectedShowroom);
        console.log("API data fetched:", this.apiData);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    },

    fetchArtists() {
      // Gọi API và cập nhật biến apiData với dữ liệu từ API
      axios
        .get(`/api/artist`)
        .then((response) => {
          this.artists = response.data;
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },


    async fetchShowroomSchedule() {
      try {
        const response = await axios.get(
          `/api/showroomschedule/${this.selectedShowroom}`
        );
        this.showroomSchedules = response.data;
        console.log("selectedShowroom",this.selectedShowroom);
        console.log("showroomSchedules", response.data);
      } catch (error) {
        console.error("Error fetching showroomschedule data:", error);
      }
    },

    fetchShowroomSchedule() {
      axios
        .get(`/api/showroomschedule/${this.id}`)
        .then((response) => {
          this.showroomSchedules = response.data;
          console.log("showroomSchedules", response.data);
        })
        .catch((error) => {
          console.error("Error fetching showroomschedule:", error);
        });
    },

    filterActiveDays() {
      if (!this.selectedDate) return;
      const selectedDay = this.selectedDateToDay(this.selectedDate);
      const selectedShowroomSchedule = this.showroomSchedules.find(
        (schedule) => schedule.day === selectedDay && schedule.active === "1"
      );
      this.filteredDays = selectedShowroomSchedule
        ? [selectedShowroomSchedule]
        : [];

        console.log( this.filteredDays);
    },
    selectedDateToDay(dateString) {
      const date = new Date(dateString);
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return daysOfWeek[date.getDay()];
    },

    inputSelectedStatus() {
      // Handle input change event if needed
    },

    // ... (Phần methods và các hàm đã có)
    isDisabled(
      day,
      workingHourStartTime,
      workingHourEndTime,
      selectedDate,
      selectedArtist
    ) {
      // Check if API data has already been fetched

      // Fetch API data if it hasn't been fetched yet
      // Set the flag to true to indicate that data has been fetched
      const matchingApiData = this.apiData.find(
        (data) =>
          data.time === workingHourStartTime &&
          data.date === selectedDate &&
          data.time_end === workingHourEndTime &&
          parseInt(data.ArtistID) === parseInt(selectedArtist)
      );

      return (
        matchingApiData && matchingApiData.ArtistID !== this.selectedShowroom
      );
    },

    checkSelectedDate() {
      // Xử lý sự kiện khi ngày được chọn thay đổi
      const apiData = this.apiData_id[0];
      const currentDateISO = apiData.created_at;
      const currentDate = new Date(currentDateISO); // Convert to JavaScript Date object

      const selectedDate = new Date(this.selectedDate);

      // Tính số mili giây giữa ngày hiện tại và ngày đã chọn
      const timeDiff = selectedDate - currentDate;

      // Kiểm tra xem ngày đã chọn có nằm trong khoảng 7 ngày không
      if (timeDiff < 0 /* || timeDiff < 7 * 24 * 60 * 60 * 1000 */) {
        // Ngày không hợp lệ, hiển thị thông báo
        this.showWarning = true;
      } else {
        // Ngày hợp lệ, ẩn thông báo
        this.showWarning = false;
      }
    },

    fetchServices() {
      axios
        .get("/api/services")
        .then((response) => {
          this.services = response.data; // Cập nhật biến services với dữ liệu lấy từ server
        })
        .catch((error) => {
          console.error("Error fetching services:", error);
        });
    },

    fetchArtistlevels() {
      axios
        .get("/api/artist-levels")
        .then((response) => {
          this.artistlevels = response.data; // Cập nhật biến services với dữ liệu lấy từ server
        })
        .catch((error) => {
          console.error("Error fetching artist levels:", error);
        });
    },

    updateTotalPrice() {
      this.totalPrice = this.calculateTotalPrice;
    },

    formatCurrency(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "UAD",
      });
      return formatter.format(value);
    },

    getServiceName(id) {
      const service = this.services.find((service) => service.id === id);
      return service ? service.Name : "";
    },

    getServicePrice(id) {
      const service = this.services.find((service) => service.id === id);
      if (service) {
        const priceString = service.Price.replace(/[^0-9.-]/g, ""); // Loại bỏ ký tự không cần thiết
        return parseFloat(priceString);
      }
      return 0;
    },

    getServiceSalePrice(id) {
      const service = this.services.find((service) => service.id === id);
      if (service) {
        const Sale_PricepriceString = service.Sale_Price.replace(
          /[^0-9.-]/g,
          ""
        ); // Loại bỏ ký tự không cần thiết
        return parseFloat(Sale_PricepriceString);
      }
      return 0;
    },

    checkInputValue() {
      if (
        this.selectedDepositPrice > this.maxDepositPrice ||
        this.selectedDepositPrice < this.minDepositPrice ||
        this.selectedDepositPrice === ""
      ) {
        this.inputError = true;
      } else {
        this.inputError = false;
      }
    },

    calculateTotalSelectedServicesPrice() {
      let serviceTotalPrice = 0;

      if (this.selectedServices !== null) {
        // Tìm dịch vụ được chọn trong danh sách dịch vụ
        const servicePrice = this.getServicePrice(this.selectedServices);
        const serviceSalePrice = this.getServiceSalePrice(
          this.selectedServices
        );

        serviceTotalPrice = parseFloat(servicePrice);
      }

      this.maxDepositPrice = serviceTotalPrice;

      this.maxDiscountPrice = serviceTotalPrice;

      if (this.selectedDepositPrice !== "") {
        const selectedDepositPrice = this.selectedDepositPrice;
        return (
          serviceTotalPrice +
          this.totalLevelPrice -
          parseFloat(selectedDepositPrice)
        );
      } else {
        return serviceTotalPrice + this.totalLevelPrice;
      }
    },

    nextStep() {
      if (this.step === "showroom") {
        if (this.selectedServices) {
          this.fetchArtistlevels();
          this.fetchGroupServices();
          this.fetchApiData();
          this.step = "groupService";
        }
      }
    },

    prevStep() {
      if (this.step === "groupService") {
        this.step = "showroom";
        this.bookingDatavalue = "";
        this.selectedGroupService = null;
        this.selectedServices = this.apiData_id[0].services[0].id;
        this.selectedArtistlevel = [];
        this.totalSelectedServicesPrice = 0;
        // Xóa dữ liệu đã chọn
      }
    },

    checkselectedArtist() {
      this.isIconActive = true;
    },

    SubmitEvent() {
      if (this.step === "groupService") {
        if (this.validateForm()) {
          // If the form is valid, proceed with submission
          // Your existing code here to submit the data
          // After successful submission, you can set this.submitted = true;
          const bookingDatavalue = {
            showroomId: this.selectedShowroom,
            groupServiceId: this.selectedGroupService,
            serviceIds: this.selectedServices,
            Artist_levelID: this.selectedArtistlevel,
            ArtistID: this.selectedArtist,
            Level_price: this.totalLevelPrice,
            Remaining_price: this.calculateTotalSelectedServicesPrice(),
            Deposit_price: this.selectedDepositPrice,
            Total_price:
              parseFloat(this.calculateTotalSelectedServicesPrice()) +
              parseFloat(this.selectedDepositPrice),
          };

          this.bookingData = JSON.stringify(bookingDatavalue);
        } else {
          // If the form is not valid, do not submit and display an error message
          this.submitted = false;
        }
      } else {
        this.step = "showroom";
      }
    },

    submitFormSendMail() {
      if (this.sendmail.trim() === "") {
        // Check if content is empty or contains only whitespace
        alert("Textarea cannot be empty.");
        return false; // You can show an alert or any other error handling here
      } else {
        // Proceed with form submission
        // You can use axios or any other method to send the data to the server
        return true;
      }
    },

    validateTime() {
      // Parse the time inputs into Date objects
      const startTime = new Date(`1970-01-01T${this.startTime}`);
      const endTime = new Date(`1970-01-01T${this.endTime}`);

      // Check if the end time is later than the start time
      if (startTime >= endTime) {
        alert("End time must be later than start time.");
        // You can reset the end time or handle the error as needed
        this.endTime = "";
      }
    },



    isNameValid(name) {
      // Kiểm tra dữ liệu tên (có thể có các yêu cầu riêng cho trường này)
      return name.trim().length > 0;
    },
    isEmailValid(email) {
      // Kiểm tra dữ liệu email (đơn giản kiểm tra định dạng)
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    isAddressValid(address) {
      // Kiểm tra dữ liệu địa chỉ (có thể có các yêu cầu riêng cho trường này)
      return address.trim().length > 0;
    },
    isPhoneValid(phone) {
      // Kiểm tra dữ liệu số điện thoại (ví dụ: 10 chữ số)
      return /^\d{10}$/.test(phone);
    },

    toggleGroupService(groupId) {
      // Sử dụng Vue.set để đảm bảo Vue.js theo dõi sự thay đổi trong trường dữ liệu groupServiceStates
      this.$set(
        this.groupServiceStates,
        groupId,
        !this.groupServiceStates[groupId]
      );
    },
  },

  mounted() {
    this.fetchShowrooms();
    this.fetchServices();
    this.fetchArtistlevels();
    this.fetchShowroomSchedule();
    this.fetchApiData();
    this.fetchArtists();
    this.fetchapiData_id();
    this.fetchGroupServices();
  },
};
</script>

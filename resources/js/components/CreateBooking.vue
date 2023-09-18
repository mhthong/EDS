<template>
  <div>
    <div v-if="selectedShowroom" class="selectedShowroom">
      <div class="form-control mb-4">
        <div class="book_detail">
          <i class="fa-solid fa-location-dot"></i>
          <span class="radio-header radio-text">{{
            selectedShowroomName
          }}</span>
        </div>

        <div v-if=" this.selectedServices !== null ">
          <div class="book_detail">
            <p>
              <i class="fa-brands fa-servicestack" style="color: #eab3e0"></i>
              <span class="radio-header radio-text">Selected Services:</span>
            </p>
            <ul class="m-0">
              <li class="book-title">
                <p class="radio-text">
                  {{ getServiceName(selectedServices) }} -- Price:
                  {{ formatCurrency(getServicePrice(selectedServices)) }}
                  <!-- -- SalePrice :
                {{ formatCurrency(getServiceSalePrice(selectedServices)) }} -->
                </p>
              </li>
            </ul>
            <div v-if="selectedArtistlevelDetails">
              <div class="">
                <p>
                  <i class="fa-solid fa-user" style="color: #944747"></i>
                  <span class="radio-header radio-text">{{
                    selectedArtistlevelDetails.Name
                  }}</span>
                </p>
                <ul>
                  <li>
                    <p class="radio-text">
                      <i>{{
                        formatCurrency(selectedArtistlevelDetails.Level_price)
                      }}</i>
                    </p>

                    <p class="radio-text">
                      Level Price: {{ formatCurrency(totalLevelPrice) }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <p v-else class="radio-text">No selected level</p>
            <p class="radio-header radio-text">
              Remaining Price:
              {{ formatCurrency(calculateTotalSelectedServicesPrice()) }}
            </p>
          </div>
        </div>
      </div>

      <!--      <div v-html="selectedShowroomMap"></div> -->
    </div>

    <template v-if="step === 'showroom'">
      <div class="radio-section">
        <div v-for="showroom in showrooms" :key="showroom.id">
          <label class="label" for="">
            <input
              type="radio"
              :value="showroom.id"
              v-model="selectedShowroom"
            />
            <div class="radio-header radio-text">{{ showroom.Name }}</div>
          </label>
        </div>
      </div>

      <button
        class="custom-btn btn-16"
        @click="nextStep"
        type="button"
        :disabled="!selectedShowroom"
      >
        Next
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
          :class="{ active: groupServiceStates[groupService.groupService.id] }"
        >
          {{ groupService.groupService.Name }}
        </div>
        <ul class="m-0" v-if="groupServiceStates[groupService.groupService.id]">
          <li
            v-for="service in groupService.groupService.services"
            :key="service.id"
          >
            <label class="flex-groupService">
              <input
                type="radio"
                :value="service.id"
                v-model="selectedServices"
                @change="calculateTotalSelectedServicesPrice()"
              />
              <div class="radio-header radio-text">
                {{ service.Name }} -- Price: {{ formatCurrency(service.Price) }}
              </div>
            </label>
          </li>
        </ul>
      </div>

      <button class="custom-btn btn-16" @click="prevStep" type="button">
        Back
      </button>
      <button
        class="custom-btn btn-16"
        @click="nextStep"
        type="button"
        :disabled="selectedServices === null"
      >
        Next
      </button>
    </template>

    <template v-if="step === 'artistlevels'">
      <ul>
        <li class="mt-3 mb-3">
          <div class="radio-header radio-text">Deposit Price</div>
          <input
            class="deposit"
            type="number"
            v-model="selectedDepositPrice"
            @change="calculateTotalSelectedServicesPrice"
            :max="maxDepositPrice"
            :min="minDepositPrice"
            @input="checkInputValue"
          />
          <p v-if="inputError" class="error-message">
            Value exceeds limit min 100.
          </p>
        </li>

        <li class="mt-3 mb-3">
          <div class="radio-header radio-text">Discount Price</div>
          <input
            class="deposit"
            type="number"
            v-model="selectedDiscountPrice"
            @change="calculateTotalSelectedServicesPrice"
            :max="maxDiscountPrice"
            :min="minDiscountPrice"
            @input="checkInputValueDiscount"
          />
          <p v-if="inputError_01" class="error-message">Value exceeds limit.</p>
        </li>

        <div class="radio-header radio-text">Select Level Artist</div>

        <li
          class="mt-3 mb-3"
          v-for="artistLevel in artistlevels"
          :key="artistLevel.id"
        >
          <label class="label">
            <input
              type="radio"
              :value="artistLevel.id"
              v-model="selectedArtistlevel"
              @change="calculateTotalSelectedServicesPrice"
            />
            <div class="radio-header radio-text">{{ artistLevel.Name }}</div>

            <i class="radio-text">{{
              formatCurrency(artistLevel.Level_price)
            }}</i>
          </label>
        </li>
      </ul>
      <button class="custom-btn btn-16" @click="prevStep" type="button">
        Back
      </button>
      <button
        class="custom-btn btn-16"
        @click="nextStep"
        :disabled="isNextButtonDisabled"
        type="button"
      >
        Next
      </button>
    </template>

    <template v-if="step === 'showroomschedule'">
      <div class="col-12">
        <div class="col-12 col-sm-12 col-lg-12  p-2 mb-2">
          <div class="controls">
            <input
              id="depart"
              class="floatLabel"
              type="date"
              v-model="selectedDate"
              @change="filterActiveDays"
              @input="checkSelectedDate"
            />
            <label
              for="selectedDate"
              class="label-date"
              :class="{ active: isLabelActive }"
              ><i class="fa fa-calendar"></i>&nbsp;&nbsp;Date</label
            >
            <div v-if="showWarning" class="error-message">
              Please select a date more today.
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="col-12 col-sm-4 col-lg-4  p-2 mb-2">
          <div class="controls">
            <i class="fa fa-sort"></i>

            <select
              v-model="selectedArtist"
              @input="checkselectedArtist"
              id="artistSelect"
              class="floatLabel"
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

        <div class="col-12 col-sm-4 col-lg-4  p-2 mb-2">
          <div class="controls">
            <i class="fa fa-sort"></i>
            <select v-model="selectedStatus">
              <option value="Waiting" selected>Waiting</option>
              <!--<option value="Done" >Done</option>
            <option value="Cancel">Cancel</option>
            <option value="Refund">Refund</option> -->
            </select>

            <label for="artistSelect" class="label-date active"
              >&nbsp;&nbsp;Status</label
            >
          </div>
        </div>

        <div class="col-12 col-sm-4 col-lg-4  p-2 mb-2">
          <div class="controls">
            <i class="fa fa-sort"></i>
            <select v-model="selectedPaymentType">
              <option value="N/A" selected>N/A</option>
              <option value="Bank transfer">Bank transfer</option>
              <option value="After Pay">After Pay</option>
            </select>

            <label for="artistSelect" class="label-date active"
              >&nbsp;&nbsp;Payment Type</label
            >
          </div>
        </div>
      </div>

      <!-- Hiển thị danh sách các ngày active và working_hours -->
      <div class="col-12" v-if="!showWarning && filteredDays.length > 0">

          <div class="col-12" v-for="day in filteredDays" :key="day.id">
            <!--          <h3>{{ day.day }}</h3> -->
            <div
              class="radio-section col-12 col-sm-6 col-lg-3  p-2"
              v-for="workingHour in day.working_hours"
              :key="workingHour.id"
            >

            <div class="">
              <label class="label m-0">
                <input
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
                <span class="radio-header radio-text">
                  {{ workingHour.start_time }} -
                  {{ workingHour.end_time }}</span
                >
              </label>
            </div>
            
 
            </div>
          </div>


        <!--         <p v-else class="error-message">
          No active days for the selected showroom and date.
        </p> -->
      </div>

      <button class="custom-btn btn-16" @click="prevStep" type="button">
        Back
      </button>
      <button
        class="custom-btn btn-16"
        @click.prevent="nextStep"
        :disabled="!selectedWorkingHour"
        type="button"
      >
        Next
      </button>
    </template>

    <template v-if="step === 'getShow'">
      <input
          class="form-control"
          style="display: none"
          type="text"
          :value="bookingData"
          id="bookingData"
          name="bookingData"
          required
        />
      <div class="controls mb-4">


        <input
          class="form-control"
          type="text"
          id="name"
          name="name"
          v-model="formData.name"
          required
        />
        <label for="name"  class="label-date active" >Name:</label>

      </div>
      <div class="controls mb-4">

       
        <input
          class="form-control"
          type="email"
          id="email"
          name="email"
          v-model="formData.email"
        />

        <label for="email"  class="label-date active">Email:</label>
      </div>

      <div class="controls mb-4">

        <label for="address"  class="label-date active">Address:</label>
        <input
          class="form-control"
          type="text"
          id="address"
          name="address"
          v-model="formData.address"
        />

        </div>
        <div class="controls mb-4">

        <label for="phone" class="label-date active">Phone:</label>
        <input
          class="form-control"
          type="tel"
          id="phone"
          name="phone"
          v-model="formData.phone"
        />
      </div>
      
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <button class="custom-btn btn-16" @click="prevStep" type="button">
        Back
      </button>
      <button class="custom-btn btn-16" type="submit">Submit</button>
    </template>

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
      errorMessage: "", // Dữ liệu từ API
      jsonData: "",
      bookingData: "",
      selectedDiscountPrice: 0,
      selectedDepositPrice: 100,
      maxDepositPrice: 0,
      maxDiscountPrice: 0,
      minDepositPrice: 100,
      minDiscountPrice: 0,
      inputError: false,
      inputError_01: false,
      selectedStatus: "Waiting",
      selectedPaymentType: "N/A",
      htmlData: "",
      groupServiceStates: {},
      isLabelActive: false,
      isIconActive: false,

      /*   selectedOption: "option1", */
    };
  },

  watch: {
    selectedArtist: function (newValue, oldValue) {
      // Khi selectedArtist thay đổi, đặt selectedWorkingHour về giá trị mặc định hoặc null
      this.selectedWorkingHour = null; // hoặc giá trị mặc định nếu bạn đã xác định nó
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

    selectedShowroomName() {
      // Lấy thông tin maps của showroom được chọn
      if (this.selectedShowroom) {
        const selectedShowroom = this.showrooms.find(
          (showroom) => showroom.id === this.selectedShowroom
        );
        return selectedShowroom ? selectedShowroom.Name : "";
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

    isNextButtonDisabled() {
      return (
        this.inputError ||
        this.inputError_01 ||
        this.selectedArtistlevel === null || // Check if an artist level is selected
        this.selectedArtistlevel === undefined
      );
    },
  },

  methods: {
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

    fetchApiData() {
      // Gọi API và cập nhật biến apiData với dữ liệu từ API
      axios
        .get(`/api/bookings/showroom/${this.selectedShowroom}`)
        .then((response) => {
          this.apiData = response.data;
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
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

    fetchShowroomSchedule() {
      axios
        .get(`/api/showroomschedule/${this.selectedShowroom}`)
        .then((response) => {
          this.showroomSchedules = response.data;
        })
        .catch((error) => {
          console.error("Error fetching showroomschedule:", error);
        });
    },

    filterActiveDays() {
      if (!this.selectedDate) return;
      console.log("selectedDate:", this.selectedDate);
      const selectedDay = this.selectedDateToDay(this.selectedDate);
      const selectedShowroomSchedule = this.showroomSchedules.find(
        (schedule) => schedule.day === selectedDay && schedule.active === 1
      );
      this.filteredDays = selectedShowroomSchedule
        ? [selectedShowroomSchedule]
        : [];
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
    // ... (Phần methods và các hàm đã có)
    isDisabled(
      day,
      workingHourStartTime,
      workingHourEndTime,
      selectedDate,
      selectedArtist
    ) {
      // Kiểm tra xem giờ và ngày từ API có trùng với workingHour và selectedDate hay không
      // Nếu trùng và trạng thái là "Waiting", trả về true để vô hiệu hóa input radio, ngược lại trả về false

      const matchingApiData = this.apiData.find(
        (data) =>
          data.time === workingHourStartTime &&
          data.date === selectedDate &&
          data.time_end === workingHourEndTime &&
          data.ArtistID === selectedArtist
      );

      return (
        matchingApiData && matchingApiData.ArtistID !== this.selectedShowroom
      );
    },

    checkSelectedDate() {
      // Xử lý sự kiện khi ngày được chọn thay đổi
      const currentDate = new Date();
      const selectedDate = new Date(this.selectedDate);
      this.isLabelActive = true;

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

    checkInputValueDiscount() {
      const max = this.maxDiscountPrice - this.selectedDepositPrice;
      if (
        this.selectedDiscountPrice > max ||
        this.selectedDiscountPrice < this.minDiscountPrice ||
        this.selectedDiscountPrice === ""
      ) {
        this.inputError_01 = true;
      } else {
        this.inputError_01 = false;
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

        console.log(serviceTotalPrice);
      }

      this.maxDepositPrice = serviceTotalPrice;

      this.maxDiscountPrice = serviceTotalPrice;

      if (
        this.selectedDepositPrice !== "" ||
        this.selectedDiscountPrice !== ""
      ) {
        const selectedDepositPrice = this.selectedDepositPrice;
        const selectedDiscountPrice = this.selectedDiscountPrice;

        return (
          serviceTotalPrice +
          this.totalLevelPrice -
          parseFloat(selectedDepositPrice) -
          parseFloat(selectedDiscountPrice)
        );
      } else {
        return serviceTotalPrice + this.totalLevelPrice;
      }
    },

    nextStep() {
      if (this.step === "showroom") {
        if (this.selectedShowroom) {
          this.fetchGroupServices();
          this.fetchApiData();
          this.selectedGroupService = "";
          this.step = "groupService";
        }
      } else if (this.step === "groupService") {
        console.log(this.selectedServices);
        if (this.selectedServices) {
          this.fetchArtistlevels();
          this.step = "artistlevels";
        }
      } else if (this.step === "artistlevels") {
        console.log(this.selectedShowroom);
        if (this.selectedShowroom) {
          this.fetchShowroomSchedule();
          this.step = "showroomschedule";
        }
      } else if (this.step === "showroomschedule") {
        this.fetchArtists();
        if (this.selectedDate && this.selectedWorkingHour) {
          this.step = "getShow";

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
            Date: this.selectedDate,
            workingHour: this.selectedWorkingHour.start_time,
            WorkingHour_end_time: this.selectedWorkingHour.end_time,
            Status: this.selectedStatus,
            PaymentType: this.selectedPaymentType,
          };

          console.log(bookingDatavalue);

          this.bookingData = JSON.stringify(bookingDatavalue);
        }
      }
    },

    checkselectedArtist() {
      this.isIconActive = true;
    },

    prevStep() {
      if (this.step === "groupService") {
        this.step = "showroom";
        this.selectedGroupService = null;
        this.selectedServices = null;
        this.selectedArtistlevel = [];
        this.totalSelectedServicesPrice = 0;
        // Xóa dữ liệu đã chọn
      } else if (this.step === "artistlevels") {
        this.step = "groupService";
        this.selectedArtistlevel = [];
        this.totalSelectedServicesPrice = 0;
      } else if (this.step === "showroomschedule") {
        this.step = "artistlevels";
        this.selectedshowroomschedule = [];
        this.selectedDate = "";
        this.selectedWorkingHour = "";
      } else if (this.step === "getShow") {
        this.step = "showroomschedule";
        this.formData = "";
        this.selectedshowroomschedule = [];
        this.selectedDate = "";
        this.selectedArtist = "";
        this.selectedWorkingHour = "";
        this.bookingDatavalue = "";
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
    this.htmlData = this.selectedShowroomMap;
  },
};
</script>

<style>
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
</style>

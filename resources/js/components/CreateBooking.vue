<template>
  <div>
    <div v-if="selectedShowroom">
      Selected Showroom Maps: {{ selectedShowroomMap }}
    </div>

    <div v-if="selectedServices.length > 0">
      <p>Selected Services:</p>
      <ul>
        <li v-for="serviceId in selectedServices" :key="serviceId">
          <p>
            Name: {{ getServiceName(serviceId) }} -- Price:
            {{ formatCurrency(getServicePrice(serviceId)) }} -- SalePrice :
            {{ formatCurrency(getServiceSalePrice(serviceId)) }}
          </p>
        </li>
      </ul>
      <ul v-if="selectedArtistlevelDetails">
        <li>
          {{ selectedArtistlevelDetails.Name }}
          <p>
            <i>{{ formatCurrency(selectedArtistlevelDetails.Level_price) }}</i>
          </p>

          Total Level Price: {{ formatCurrency(totalLevelPrice) }}
        </li>
      </ul>
      <p v-else>No selected level</p>
      Total Price: {{ formatCurrency(calculateTotalSelectedServicesPrice()) }}
    </div>

    <template v-if="step === 'showroom'">
      <label for="">Choose location</label>
      <div v-for="showroom in showrooms" :key="showroom.id">
        <input type="radio" :value="showroom.id" v-model="selectedShowroom" />
        {{ showroom.Name }}
      </div>
      <span>Đã chọn: {{ selectedShowroom }}</span>

      <button @click="nextStep" type="button" :disabled="!selectedShowroom">Next</button>
    </template>

    <template v-if="step === 'groupService'">
      <!-- Group Services -->
      <div
        v-for="groupService in groupServices"
        :key="groupService.groupService.id"
      >
        <p>groupService: {{ groupService.groupService.Name }}</p>
        <ul>
          <li
            v-for="service in groupService.groupService.services"
            :key="service.id"
          >
            <label>
              <input
                type="checkbox"
                :value="service.id"
                v-model="selectedServices"
                @change="calculateTotalSelectedServicesPrice"
              />

              <p>
                Service: {{ service.Name }} -- Price:
                {{ formatCurrency(service.Price) }}
              </p>
            </label>
          </li>
        </ul>
      </div>

      <button @click="prevStep" type="button">Back</button>
      <button @click="nextStep" type="button" :disabled="selectedServices.length === 0">
        Next
      </button>
    </template>

    <template v-if="step === 'artistlevels'">
      <ul>
    
        <li>
          selectedDepositPrice
          <label >
          <input
              type="number"
              v-model="selectedDepositPrice"
              @change="calculateTotalSelectedServicesPrice"
              :max="maxDepositPrice"
              @input="checkInputValue"
            />
            {{ maxDepositPrice }}
            <p v-if="inputError" class="error-message">Value exceeds limit.</p>
        </label>
        </li>
 
        <li v-for="artistLevel in artistlevels" :key="artistLevel.id">
          <label>
            <input
              type="radio"
              :value="artistLevel.id"
              v-model="selectedArtistlevel"
              @change="calculateTotalSelectedServicesPrice"
            />
            <p>
              <i>{{ formatCurrency(artistLevel.Level_price) }}</i>
            </p>
          </label>
        </li>
      </ul>
      <button @click="prevStep" type="button">Back</button>
      <button @click="nextStep" :disabled="inputError || selectedArtistlevel === null || selectedArtistlevel === undefined" type="button">Next</button>
    </template>

    <template v-if="step === 'showroomschedule'">
      <ul>
        <label>
          Select Date:
          <input
            type="date"
            v-model="selectedDate"
            @change="filterActiveDays"
            @input="checkSelectedDate"
          />
          <div v-if="showWarning" class="warning">
            Please select a date 7 days from today.
          </div>
        </label>
        <!-- Hiển thị danh sách các ngày active và working_hours -->
        <div v-if="!showWarning && filteredDays.length > 0">
          <ul>
            <li v-for="day in filteredDays" :key="day.id">
              <!--          <h3>{{ day.day }}</h3> -->
              <div
                v-for="workingHour in day.working_hours"
                :key="workingHour.id"
              >
                <label>
                  <input
                    type="radio"
                    :value="workingHour.start_time"
                    v-model="selectedWorkingHour"
                    :disabled="
                      isDisabled(day.day, workingHour.start_time, selectedDate)
                    "
                  />
                  {{ workingHour.start_time }} - {{ workingHour.end_time }}
                </label>
              </div>
            </li>
          </ul>
        </div>

        <p v-else>No active days for the selected showroom and date.</p>
      </ul>

      <button @click="prevStep" type="button">Back</button>
      <button @click="nextStep" type="button" :disabled="!selectedWorkingHour">Next</button>
    </template>

    <template v-if="step === 'getShow'">
      <div class="form-group">
        <input
          class="form-control"
          style="display: none"
          type="text"
          :value="bookingData"
          id="bookingData"
          name="bookingData"
          required
        />

        <label for="name">Name:</label>

        <input
          class="form-control"
          type="text"
          id="name"
          name="name"
          v-model="formData.name"
         
        />

        <label for="email">Email:</label>
        <input
          class="form-control"
          type="email"
          id="email"
          name="email"
          v-model="formData.email"
         
        />

        <label for="address">Address:</label>
        <input
          class="form-control"
          type="text"
          id="address"
          name="address"
          v-model="formData.address"
         
        />

        <label for="phone">Phone:</label>
        <input
          class="form-control"
          type="tel"
          id="phone"
          name="phone"
          v-model="formData.phone"
         
        />
      </div>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

      <button @click="prevStep" type="button">Back</button>
      <button type="submit">Submit</button>
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
      showroomspath: [],
      selectedShowroom: null,
      groupServices: [],
      showroomSchedules: [],
      services: [],
      artistlevels: [],
      selectedArtistlevel: null,
      selectedshowroomschedule: null,
      selectedGroupService: "",
      selectedGroupServiceServices: [],
      step: "showroom",
      selectedServices: [],
      totalPrice: 0,
      selectedDate: "",
      showWarning: false, // Ngày tối thiểu cho trường input
      filteredDays: [],
      selectedWorkingHour: "",
      apiData: [],
      formData: {
        name: "",
        email: "",
        address: "",
        phone: "",
      },
      errorMessage: "", // Dữ liệu từ API
      jsonData: "",
      bookingData: "",
      selectedDepositPrice: "",
      maxDepositPrice: 0,
      inputError: false,
      /*   selectedOption: "option1", */
    };
  },

  watch: {},

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
      if (this.selectedServices.length > 0 && this.selectedArtistlevelDetails) {
        const levelPrice = parseFloat(
          this.selectedArtistlevelDetails.Level_price
        );
        return this.selectedServices.length * levelPrice;
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

    selectedDay() {
      // Chuyển đổi giá trị selectedshowroomschedule thành thứ
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const selectedDate = new Date(this.selectedshowroomschedule);
      const dayIndex = selectedDate.getDay();
      return daysOfWeek[dayIndex];
    },

    /*     totalSelectedServicesPrice() {
    return this.calculateTotalPrice(); // Tính tổng giá trị dịch vụ đã chọn
  }, */
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
    isDisabled(day, workingHourStartTime, selectedDate) {
      // Kiểm tra xem giờ và ngày từ API có trùng với workingHour và selectedDate hay không
      // Nếu trùng và trạng thái là "Waiting", trả về true để vô hiệu hóa input radio, ngược lại trả về false
      const matchingApiData = this.apiData.find(
        (data) =>
          data.time === workingHourStartTime && data.date === selectedDate
      );

      return (
        matchingApiData && matchingApiData.ArtistID !== this.selectedShowroom
      );
    },
    checkSelectedDate() {
      // Xử lý sự kiện khi ngày được chọn thay đổi
      const currentDate = new Date();
      const selectedDate = new Date(this.selectedDate);

      // Tính số mili giây giữa ngày hiện tại và ngày đã chọn
      const timeDiff = selectedDate - currentDate;

      // Kiểm tra xem ngày đã chọn có nằm trong khoảng 7 ngày không
      if (timeDiff < 0 || timeDiff < 7 * 24 * 60 * 60 * 1000) {
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
    if (this.selectedDepositPrice > this.maxDepositPrice) {
      this.inputError = true;
    } else {
      this.inputError = false;
    }
  },

    calculateTotalSelectedServicesPrice() {
      const serviceTotalPrice = this.selectedServices.reduce(
        (totalPrice, serviceId) => {
          const servicePrice = this.getServicePrice(serviceId);
          const serviceSalePrice = this.getServiceSalePrice(serviceId);
          totalPrice += parseFloat(servicePrice) - parseFloat(serviceSalePrice);
      
          return totalPrice;
        },
        0
      );

      this.maxDepositPrice = serviceTotalPrice;

      if(this.selectedDepositPrice !== ""){
            const selectedDepositPrice = this.selectedDepositPrice;
            return serviceTotalPrice + this.totalLevelPrice - parseFloat(selectedDepositPrice);

      }else{
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
        console.log(this.selectedDate, this.selectedWorkingHour);
        if (this.selectedDate && this.selectedWorkingHour) {
          this.step = "getShow";

          const bookingDatavalue = {
            showroomId: this.selectedShowroom,
            groupServiceId: this.selectedGroupService,
            serviceIds: this.selectedServices,
            Artistlevel: this.selectedArtistlevelDetails,
            totalPrice: this.calculateTotalSelectedServicesPrice(),
            Date: this.selectedDate,
            workingHour: this.selectedWorkingHour,
          };

          this.bookingData = JSON.stringify(bookingDatavalue);
        }
      }
    },

    prevStep() {
      if (this.step === "groupService") {
        this.step = "showroom";
        this.selectedGroupService = null;
        this.selectedServices = [];
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
        this.selectedWorkingHour = "";
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
  },

  mounted() {
    this.fetchShowrooms();
    this.fetchServices();
    this.fetchArtistlevels();
    this.fetchShowroomSchedule();
    this.fetchApiData();
  },
};
</script>

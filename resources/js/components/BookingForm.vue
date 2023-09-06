<template>
  <div>

    <!-- Hiển thị tên và giá của các dịch vụ đã chọn -->
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

      <button @click="nextStep" :disabled="!selectedShowroom">Next</button>
    </template>

    <template>
      <div>
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

                <!--               
 -->
              </li>
            </ul>
          </div>

          <button @click="prevStep">Back</button>
          <button @click="nextStep" :disabled="!selectedServices">Next</button>
        </template>
      </div>
    </template>

    <template v-if="step === 'artistlevels'">
      <ul>
        <li v-for="artistLevel in artistlevels" :key="artistLevel.id">
          <label>
            <input
              type="radio"
              :value="artistLevel.id"
              v-model="selectedArtistlevel"
              @change="calculateTotalSelectedServicesPrice"
            />
            {{ artistLevel.Name }}
            <p>
              <i>{{ formatCurrency(artistLevel.Level_price) }}</i>
            </p>
          </label>
        </li>
      </ul>
      <button @click="prevStep">Back</button>
      <button @click="nextStep" :disabled="!selectedArtistlevel">Next</button>
    </template>

    <template v-if="step === 'showroomschedule'">
      <!--       <ul>
        <li
          v-for="showroomschedule in showroomSchedules"
          :key="showroomschedule.id"
        >
          <label>
            <input type="date" v-model="selectedshowroomschedule" />
            {{ showroomschedule.day }}
          </label>
        </li>
      </ul> -->
      <ul>
        <FullCalendar :options="calendarOptions" />
      </ul>
      <button @click="prevStep">Back</button>
      <button @click="nextStep" :disabled="!selectedshowroomschedule">
        Next
      </button>
      <button @click="submit" :disabled="!selectedshowroomschedule">
        Submit
      </button>
    </template>

    <!--      -->
  </div>
</template>

<script>
import axios from "axios";
import { Calendar } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
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
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: "dayGridMonth",
        weekends: true,
        events: [], // Sự kiện sẽ được thêm vào đây
      },
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

    fetchShowroomSchedule() {
      axios
        .get(`/api/showroomschedule/${this.selectedShowroom}`)
        .then((response) => {
          this.showroomSchedules = response.data;
          // Cập nhật sự kiện trong FullCalendar sau khi nhận dữ liệu từ API
          this.updateCalendarEvents();
        })
        .catch((error) => {
          console.error("Error fetching showroomschedule:", error);
        });
    },
    updateCalendarEvents() {
      const visibleDates = this.calendar.getDates();

        for (const date of visibleDates) {
          const dayOfWeek = date.getDay();
          const dayOfMonth = date.getDate();
          const month = date.getMonth();
          const year = date.getFullYear();

          console.log(`Ngày: ${dayOfMonth}, Tháng: ${month + 1}, Năm: ${year}, Thứ: ${this.getDayName(dayOfWeek)}`);
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

      return serviceTotalPrice + this.totalLevelPrice;
    },

    nextStep() {
      if (this.step === "showroom") {
        if (this.selectedShowroom) {
          this.fetchGroupServices();
          this.selectedGroupService = "";
          this.step = "groupService";
        }
      } else if (this.step === "groupService") {
        if (this.selectedServices) {
          this.fetchArtistlevels();
          this.step = "artistlevels";
        }
      } else if (this.step === "artistlevels") {
        if (this.selectedShowroom) {
          this.fetchShowroomSchedule();
          this.step = "showroomschedule";
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
      }
    },

    submit() {
      // Process and save the selected data
      const bookingData = {
        showroomId: this.selectedShowroom,
        groupServiceId: this.selectedGroupService,
        serviceIds: this.selectedServices,
        Artistlevel: this.selectedArtistlevelDetails,
        totalPrice: this.calculateTotalSelectedServicesPrice(),
      };
      console.log("Booking Data:", bookingData);
    },
  },

  mounted() {
    this.fetchShowrooms();
    this.fetchServices();
    this.fetchArtistlevels();
    this.fetchShowroomSchedule();


       // Khởi tạo FullCalendar
       this.calendar = new FullCalendar.Calendar(this.$refs.calendar, {
      plugins: [dayGridPlugin],
      // Cấu hình khác của FullCalendar
    });

    // Render lịch
    this.calendar.render();

    // Lấy thông tin các ngày trong tháng hiện tại
    this.getVisibleDatesInfo();
  },
};
</script>

<template>
  <div>
    <template v-if="step === 'showroom'">
      <div v-if="selectedShowroom">
        Selected Showroom Maps: {{ selectedShowroomMap }}
      </div>

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
 <!-- Hiển thị tên và giá của các dịch vụ đã chọn -->
 <div v-if="selectedServices.length > 0">
        <h2>Selected Services:</h2>
        <ul>
          <li v-for="serviceId in selectedServices" :key="serviceId">
            {{ (serviceId) }} - {{ formatCurrency((serviceId)) }}
          </li>
        </ul>
        Total Price: {{ formatCurrency(totalPrice) }}
      </div>
    <!-- Group Services -->
        <div v-for="groupService in groupServices" :key="groupService.groupService.id">
        <p>Name: {{ groupService.groupService.Name }}</p>
          <ul>
            <li v-for="service in groupService.groupService.services" :key="service.id">
              <label>
                <input
                  type="checkbox"
                  :value="service.id"
                  v-model="selectedServices"
                  @change="calculateTotalPrice"
                />
              <p>
                Name: {{ service.Name }} -- Price: {{ formatCurrency(service.Price) }}
              </p>
              </label>
            </li>
          </ul>
        </div>

      <button @click="prevStep">Back</button>
      <button @click="submit" :disabled="!selectedServices">Submit</button>
    </template>
  </div>
</template>
    <!--      -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      showrooms: [],
      showroomspath: [],
      selectedShowroom: null,
      groupServices: [],
      services: [],
      selectedGroupService: "",
      selectedGroupServiceServices: [],
      step: "showroom",
      selectedServices: [],
      totalPrice: 0,
      /*   selectedOption: "option1", */
    };
  },

  watch: {
    selectedGroupService(newValue) {
      if (newValue) {
        this.fetchServices(newValue);
      }
    },

    selectedServices: {
      handler: 'updateTotalPrice',
      immediate: true,
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

    fetchServices(ServiceId) {
      axios
        .get(`/api/services/$selectedServices`)
        .then((response) => {
          this.services = response.data; // Cập nhật biến services với dữ liệu lấy từ server
        })
        .catch((error) => {
          console.error("Error fetching services:", error);
        });
    },


    
    updateTotalPrice() {
      this.totalPrice = this.calculateTotalPrice;
    },
    
    formatCurrency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "UAD",
      }).format(value);
    },

   
    getServiceName(serviceId) {
      const service = this.services.find((service) => service.id === serviceId);
      return service ? service.Name : "";
    },

    getServicePrice(serviceId) {
      const service = this.services.find((service) => service.id === serviceId);
      return service ? service.Price : 0;
    },

    nextStep() {
      if (this.step === "showroom") {
        if (this.selectedShowroom) {
          this.fetchGroupServices();
          this.selectedGroupService = "";
          this.step = "groupService";
        }
      } else if (this.step === "groupService") {
        if (this.selectedGroupService) {
          this.fetchServices();
          this.step = "service";
        }
      }
    },

    prevStep() {
      if (this.step === "groupService") {
        this.step = "showroom";
        this.selectedGroupService = null; // Xóa dữ liệu đã chọn
      } else if (this.step === "service") {
        this.step = "groupService";
        this.selectedShowroom = null; 
        this.selectedServices = []; // Xóa dữ liệu đã chọn
      }
    },

    submit() {
      // Process and save the selected data
      const bookingData = {
        showroomId: this.selectedShowroom,
        groupServiceId: this.selectedGroupService,
        serviceIds: this.selectedServices,
      };
      console.log("Booking Data:", bookingData);
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

    selectedServicesPriced() {
      if (this.selectedServices) {
        const selectedServices = this.services.filter((service) =>
          this.selectedServices.includes(service.id)
        );
        return selectedServices.map((service) => service.Price);
      }
      return null;
    },

    calculateTotalPrice() {
      return this.selectedServices.reduce((total, serviceId) => {
        const servicePrice = this.getServicePrice(serviceId);
        return total + parseFloat(servicePrice);
      }, 0);
    },
  },


  mounted() {
    this.fetchShowrooms();
  },
};
</script>



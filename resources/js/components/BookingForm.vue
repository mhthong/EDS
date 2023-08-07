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


    <template v-else-if="step === 'groupService'">
      <div v-for="groupService in groupServices" :key="groupService.id">
        <input
          type="radio"
          :value="groupService.id"
          v-model="selectedGroupService"
        />
        {{ groupService.Name }}
      </div>

      <!-- Display services for selected group service -->
      <div v-if="selectedGroupService">
        <div v-for="service in services" :key="service.id">
          {{ service.Name }} - {{ formatCurrency(service.Price) }}
        </div>
      </div>
      <!-- ... -->
    </template>


    <template v-else-if="step === 'service'">
      <div v-for="service in services" :key="service.id">
        <input type="checkbox" :value="service.id" v-model="selectedServices" />
        {{ service.Name }}
        {{ formatCurrency(service.Price) }}
      </div>

      <div v-if="selectedServices.length > 0">
        <div>Selected Services Prices:</div>
        <div v-for="serviceId in selectedServices" :key="serviceId">
          <span>{{ getServiceName(serviceId) }}: </span>
          <span>{{ formatCurrency(getServicePrice(serviceId)) }}</span>
        </div>
        <div>Total Price: {{ formatCurrency(calculateTotalPrice) }}</div>
      </div>

      <button @click="prevStep">Back</button>
      <button @click="submit" :disabled="!selectedServices">Submit</button>
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
      selectedGroupService: null,
      services: [],
      selectedServices: [],
      step: "showroom",
      /*   selectedOption: "option1", */
    };
  },

  watch: {
    selectedGroupService(newValue) {
      if (newValue) {
        this.fetchServices(newValue);
      }
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
    fetchServices(groupServiceId) {
      axios
        .get(`/api/services/${groupServiceId}`)
        .then((response) => {
          this.services = response.data;
        })
        .catch((error) => {
          console.error("Error fetching services:", error);
        });
    },

    getServiceName(serviceId) {
      const service = this.services.find((service) => service.id === serviceId);
      return service ? service.Name : "";
    },

    formatCurrency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "UAD",
      }).format(value);
    },

    getServicePrice(serviceId) {
      const service = this.services.find((service) => service.id === serviceId);
      return service ? service.Price : 0;
    },

    nextStep() {
      if (this.step === "showroom") {
        if (this.selectedShowroom) {
          this.fetchGroupServices();
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
      // Lấy thông tin services được chọn
      if (this.selectedServices) {
        const selectedServices = this.services.filter((service) =>
          this.selectedServices.includes(service.id)
        );
        return selectedServices
          ? selectedServices.map((service) => service.Price)
          : "";
      }
      return console.log(selectedServices);
    },
    calculateTotalPrice() {
      return this.selectedServices
        .reduce((total, serviceId) => {
          const selectedService = this.services.find(
            (service) => service.id === serviceId
          );
          if (selectedService && selectedService.Price > 0) {
            total += parseFloat(selectedService.Price);
          }
          return total;
        }, 0)
        .toFixed(0);
    },
  },

  mounted() {
    this.fetchShowrooms();
  },
};
</script>

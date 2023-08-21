<template>
  <div>
    <template v-if="step === 'showroom'">
      <div v-for="showroom in showrooms" :key="showroom.id">
        <input type="radio" :value="showroom.id" v-model="selectedShowroom">
        {{ showroom.Name }}
      </div>
      <button @click="nextStep">Next</button>
    </template>

    <template v-else-if="step === 'groupService'">
      <div v-for="groupService in groupServices" :key="groupService.id">
        <input type="radio" :value="groupService.id" v-model="selectedGroupService">
        {{ groupService.Name }}
      </div>
      <button @click="prevStep">Back</button>
      <button @click="nextStep">Next</button>
    </template>

    <template v-else-if="step === 'service'">
      <div v-for="service in services" :key="service.id">
        <input type="checkbox" :value="service.id" v-model="selectedServices">
        {{ service.Name }}
      </div>
      <button @click="prevStep">Back</button>
      <button @click="submit">Submit</button>
    </template>
  </div>
</template>



<script>
import axios from 'axios';

export default {
  data() {
    return {
      showrooms: [],
      selectedShowroom: null,
      groupServices: [],
      selectedGroupService: null,
      services: [],
      selectedServices: [],
      step: 'showroom',
    };
  },
  methods: {
    fetchShowrooms() {
      axios.get('/api/showrooms')
        .then(response => {
          this.showrooms = response.data;
        })
        .catch(error => {
          console.error('Error fetching showrooms:', error);
        });
    },
    fetchGroupServices() {
      axios.get(`/api/group-services/${this.selectedShowroom}`)
        .then(response => {
          this.groupServices = response.data;
        })
        .catch(error => {
          console.error('Error fetching group services:', error);
        });
    },
    fetchServices() {
      axios.get(`/api/services/${this.selectedGroupService}`)
        .then(response => {
          this.services = response.data;
        })
        .catch(error => {
          console.error('Error fetching services:', error);
        });
    },
    nextStep() {
      if (this.step === 'showroom') {
        this.fetchGroupServices();
        this.step = 'groupService';
      } else if (this.step === 'groupService') {
        this.fetchServices();
        this.step = 'service';
      }
    },
    prevStep() {
      if (this.step === 'groupService') {
        this.step = 'showroom';
      } else if (this.step === 'service') {
        this.step = 'groupService';
      }
    },
    submit() {
      // Process and save the selected data
      const bookingData = {
        showroomId: this.selectedShowroom,
        groupServiceId: this.selectedGroupService,
        serviceIds: this.selectedServices,
      };
      console.log('Booking Data:', bookingData);
    },
  },
  mounted() {
    this.fetchShowrooms();
  },
};
</script>

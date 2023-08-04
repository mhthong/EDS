<template>
  <div>
    <!-- Button to open showroom modal -->
    <button type="button" class="btn btn-primary" @click="openShowroomModal">Select Showroom</button>
    
    <!-- Location Popup -->
    <div class="modal fade" id="showroomModal" tabindex="-1" role="dialog" aria-labelledby="showroomModalLabel" aria-hidden="true">
      <!-- Modal Content... -->
      <div class="modal-body">
        <select v-model="selectedShowroom" @change="fetchGroupServices">
          <option v-for="showroom in showrooms" :value="showroom.id">{{ showroom.name }}</option>
        </select>
      </div>
    </div>
    
    <!-- Group Service and Service Dropdowns -->
    <div class="modal fade" id="groupServiceModal" tabindex="-1" role="dialog" aria-labelledby="groupServiceModalLabel" aria-hidden="true">
      <!-- Modal Content... -->
      <div class="modal-body">
        <select v-model="selectedGroupService" @change="fetchServices">
          <option v-for="groupService in groupServices" :value="groupService.id">{{ groupService.name }}</option>
        </select>
        <select v-model="selectedService">
          <option v-for="service in services" :value="service.id">{{ service.name }}</option>
        </select>
      </div>
    </div>
    
    <!-- ... Other content ... -->
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
      selectedService: null,
      // ... Other data ...
    };
  },
  mounted() {
    this.fetchShowrooms();
    // ... Other mounted logic ...
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
    openShowroomModal() {
      $('#showroomModal').modal('show');
    },
    fetchGroupServices() {
      axios.get(`/api/group-services/${this.selectedShowroom}`)
        .then(response => {
          this.groupServices = response.data;
          // Open group service modal after fetching data
          $('#groupServiceModal').modal('show');
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
    // ... Other methods ...
  }
};
</script>

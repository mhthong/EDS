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



fillerRangeDate(start , end , DataMap , resultArray , filteredData , statusbooking , updated ){

    while (start <= end) {
      const year = start.getFullYear();
      const month = String(start.getMonth() + 1).padStart(
        2,
        "0"
      );
      const day = String(start.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      Object.keys(DataMap).forEach((name) => {
        const data = DataMap[name];
        const keydata = `${name}-${data.id}-${year}-${month}-${day}`;

        // Tạo một mảng tạm thời để tích hợp dữ liệu từ các mục có cùng ngày
        const tempArray = [];

        filteredData.forEach((item) => {
          const createdAt = new Date(item.price.created_at);
          const itemYear = createdAt.getFullYear();
          const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
          const itemDay = String(createdAt.getDate()).padStart(2, "0");
          const key = `${item.source_name}-${item.source_id}-${itemYear}-${itemMonth}-${itemDay}`;

          const updatedAtDate = new Date(item.price.updated_at);
          const updateitemYear = updatedAtDate.getFullYear();
          const updateitemMonth = String(
            updatedAtDate.getMonth() + 1
          ).padStart(2, "0");
          const updateitemDay = String(updatedAtDate.getDate()).padStart(
            2,
            "0"
          );

          const keyAll = `${item.source_type}-${itemYear}-${itemMonth}-${itemDay}`;

          // Add the 'status' property to the merged item.
          if (key === keydata) {
            statusbooking = item.status;
            updated = `${updateitemYear}-${updateitemMonth}-${updateitemDay}`;

            tempArray.push({
              ...item,
              status: statusbooking, // Replace 'some_status_value' with the actual status property you want to add.
            });
          }
        });

        // Kiểm tra xem có dữ liệu trong mảng tạm thời không
        if (tempArray.length > 0) {
          // Nếu có dữ liệu, tích hợp chúng và thêm vào resultArray
          const mergedItem = tempArray.reduce(
            (merged, item) => {
              merged.price.Total_price += parseInt(item.price.Total_price);
              merged.price.Deposit_price += parseInt(
                item.price.Deposit_price
              );
              merged.price.servies_price += parseInt(
                item.price.servies_price
              );
              merged.price.Revenue += parseInt(item.price.Deposit_price);
              merged.splot += 1;
              return merged;
            },
            {
              source_name: employee.name,
              avatar: employee.avatar,
              source_id: employee.id,
              created_at: formattedDate,
              updated_at: updated,
              price: {
                Total_price: 0,
                Deposit_price: 0,
                servies_price: 0,
                Revenue: 0,
              },
              splot: 0,
              status: statusbooking,
            }
          );

          if (!resultArray[keydata]) {
            resultArray[keydata] = mergedItem;
            // Update the 'status' property.
          } else {
            resultArray[keydata].price.Total_price +=
              mergedItem.price.Total_price;
              resultArray[keydata].price.Deposit_price +=
              mergedItem.price.Deposit_price;
              resultArray[keydata].price.servies_price +=
              mergedItem.price.servies_price;
              resultArray[keydata].splot += mergedItem.splot;
          }
        } else {
          // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
          resultArray[keydata] = {
            source_name: employee.name,
            avatar: employee.avatar,
            source_id: employee.id,
            created_at: formattedDate,
            updated_at: updated,
            price: {
              Total_price: 0,
              Deposit_price: 0,
              servies_price: 0,
              Revenue: 0,
            },
            splot: 0,
            status: statusbooking,
          };
        }
      });

      // Tăng ngày hiện tại lên 1 ngày
      start.setDate(start.getDate() + 1);
    }

    return resultArray;

},



fillerRangeDateAll(start , end , resultArray  , name ){

    while (start <= end) {
        const year = start.getFullYear();
        const month = String(start.getMonth() + 1).padStart(
          2,
          "0"
        );
        const day = String(start.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;

        const tempArrayAll = [];

        Object.values(resultArray).forEach((item) => {
          const createdAt = new Date(item.created_at);
          const itemYear = createdAt.getFullYear();
          const itemMonth = String(createdAt.getMonth() + 1).padStart(2, "0");
          const itemDay = String(createdAt.getDate()).padStart(2, "0");
          const keyAll = `${itemYear}-${itemMonth}-${itemDay}`;

          if (keyAll === formattedDate) {
            tempArrayAll.push(item);
          }
        });

        if (tempArrayAll.length > 0) {
          // Nếu có dữ liệu, tích hợp chúng và thêm vào resultArray
          const mergedItem = tempArrayAll.reduce(
            (merged, item) => {
              merged.price.Total_price += parseInt(item.price.Total_price);
              merged.price.Deposit_price += parseInt(item.price.Deposit_price);
              merged.price.servies_price += parseInt(item.price.servies_price);
              merged.price.Revenue += parseInt(item.price.Revenue);
              merged.splot += parseInt(item.splot);
              return merged;
            },
            {
              source_name: name,
              avatar: name,
              source_id: name,
              created_at: formattedDate,
              price: {
                Total_price: 0,
                Deposit_price: 0,
                servies_price: 0,
                Revenue: 0,
              },
              splot: 0,
            }
          );

          if (!resultArray[formattedDate]) {
            resultArray[formattedDate] = mergedItem;
          } else {
            // Cập nhật giá trị trong resultArray thay vì gán lại
            resultArray[formattedDate].price.Total_price =
              mergedItem.price.Total_price;
            resultArray[formattedDate].price.Deposit_price =
              mergedItem.price.Deposit_price;
            resultArray[formattedDate].price.servies_price =
              mergedItem.price.servies_price;
            resultArray[formattedDate].price.Revenue =
              mergedItem.price.Revenue;
            resultArray[formattedDate].splot = mergedItem.splot;
          }
        } else {
          // Nếu không có dữ liệu, tạo mục mới với giá trị mặc định
          resultArray[formattedDate] = {
            source_name: "All",
            avatar: "All",
            source_id: "All",
            created_at: formattedDate,
            price: {
              Total_price: 0,
              Deposit_price: 0,
              servies_price: 0,
              Revenue: 0,
            },
            splot: 0,
          };
        }

        // Tiến hành tới ngày tiếp theo
        start.setDate(start.getDate() + 1);
      } 

      return resultArray;

    }
    
  },
  mounted() {
    this.fetchShowrooms();
  },
};
</script>

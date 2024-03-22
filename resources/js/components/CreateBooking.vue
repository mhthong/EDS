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

        <div v-if="this.selectedServices !== null">
          <div class="book_detail">
            <p>
              <i class="fa-brands fa-servicestack" style="color: #eab3e0"></i>
              <span class="radio-header radio-text">Selected Services:</span>
            </p>
            <ul class="m-0">
              <li class="book-title">
                <div v-if="selectedServices.length > 0">
                  <p
                    class="radio-text"
                    v-for="selectedService in selectedServices"
                    :key="selectedServices.id"
                  >
                    {{ getServiceName(selectedService.id) }} --
                    {{ formatCurrency(getServicePrice(selectedService.id)) }}
                  </p>

                  <!--  <p class="radio-text">Selected Services: {{ getSelectedServiceNames() }} -- {{ getSelectedServicePrice() }}</p> -->
                </div>
                <div v-else="selectedServices.length > 0">
                  <p
                    class="radio-text"
                    v-for="selectedService in selectedServices"
                    :key="selectedServices.id"
                  >
                    {{ getServiceName(selectedService) }} -- Price:
                    {{ formatCurrency(getServicePrice(selectedService)) }}
                  </p>
                </div>
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
              </div>
            </div>
            <p v-else class="radio-text">No selected level</p>
            <p class="radio-header radio-text">
              Remaining Price:
              {{ formatCurrency(calculateTotalSelectedServicesPrice()) }}
            </p>

            <p class="radio-header radio-text">
              Deposit Price:
              {{ formatCurrency(this.selectedDepositPrice) }}
            </p>
          </div>
        </div>
      </div>

      <!--      <div v-html="selectedShowroomMap"></div> -->
    </div>

    <!--    <template v-if="step === 'showroom'"> -->

    <template v-if="step === 'showroom'">
      <div class="radio-section">
        <div v-for="showroom in showrooms" :key="showroom.id">
          <label class="label" :for="'showroom_' + showroom.id">
            <input
              class="showroom_label"
              type="radio"
              :value="showroom.id"
              :id="'showroom_' + showroom.id"
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
    <!--    <template v-if="step === 'showroom'"> -->

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
                type="checkbox"
                :value="{
                  id: service.id,
                  price: service.Price,
                  salePrice: service.Sale_Price,
                  Deposit: 0,
                  RemainingPrice: 0,
                  ImageDeposit: '',
                  DateTreament: '',
                  Artist: 0,
                  filteredDays: [],
                  StartTime: null,
                  EndTime: null,
                  dateActive: null,
                  isTimeConflict: false,
                  showAlert: false,
                  Status: 'Waiting',
                  PaymentType: 'Bank transfer',
                }"
                v-model="selectedServices"
                @change="calculateTotalSelectedServicesPrice()"
              />
              <div class="radio-header radio-text">
                {{ service.Name }} -- Sale_PricepriceString:
                {{ formatCurrency(service.Price) }}
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
      <ul class="ps-0 ul_bookingg">
        <li>
          <div v-if="this.selectedServices !== null">
            <div>
              <div v-if="selectedServices.length > 0">
                <div
                  class="radio-text form-control mb-3"
                  v-for="(selectedService, index) in selectedServices"
                  :key="selectedService.id"
                >
                  <div class="radio-header radio-text">
                    {{ getServiceName(selectedService.id) }}
                  </div>
                  <div class="form-price">
                    <div>
                      Booking Value
                      <input
                        class="deposit"
                        type="number"
                        v-model="selectedService.price"
                        @change="calculateTotalSelectedServicesPrice"
                        :max="getServicePrice(selectedService.id)"
                        @min="0"
                      />
                    </div>

                    <div>
                      Deposit Price
                      <input
                        class="deposit"
                        type="number"
                        v-model="selectedService.Deposit"
                        @change="calculateTotalSelectedServicesPrice"
                        :max="maxDepositPrice"
                        :min="minDepositPrice"
                        @input="checkInputValue(index)"
                      />
                    </div>
                    <div>
                      Remaining Price
                      <input
                        class="deposit"
                        type="number"
                        v-model="selectedService.RemainingPrice"
                        @change="calculateTotalSelectedServicesPrice"
                        :max="maxDepositPrice"
                        :min="minDepositPrice"
                        @input="checkInputValue(index)"
                      />
                    </div>
                  </div>
                  <p v-if="inputError" class="error-message">
                    Please check the Remaining Price and Deposit price values
                    above
                  </p>

                  <div
                    v-if="selectedService.Deposit > 0"
                    class="form-group mt-4"
                    style="
                      display: flex;
                      flex-direction: row-reverse;
                      align-items: end;
                    "
                  >
                    <div
                      class="holder image-category"
                      :id="'image-category_' + selectedService.id"
                      value=""
                    ></div>
                    <div class="-space-y-px mb-4">
                      <div class="containerInput input-group">
                        <div class="main__body__box-info"></div>
                        <span class="input-group-btn">
                          <a
                            class="radio-header radio-text"
                            :id="'image_manager_' + selectedService.id"
                            :data-input="'Deposit_' + selectedService.id"
                            :data-preview="
                              'image-category_' + selectedService.id
                            "
                            @click="
                              ImageDepositSelected(
                                'image_manager_' + selectedService.id,
                                index
                              )
                            "
                          >
                            <button
                              class="custom-btn btn-16 mt-0"
                              type="button"
                            >
                              Choose
                            </button>
                          </a>
                        </span>
                        <input
                          class="form-control"
                          :id="'Deposit_' + selectedService.id"
                          type="text"
                          :name="'Deposit_' + selectedService.id"
                          style="display: none;"
                          @input="
                            updateImageDeposit(
                              selectedService,
                              $event.target.value
                            )
                          "
                        />
                      </div>
                    </div>
                  </div>

                  <div class="container">
                    <div class="row">
                      <div class="controls col">
                        Artist

                        <select
                          v-model="selectedService.Artist"
                          @input="checkselectedArtist"
                          @change="
                            filterActiveDays(
                              selectedService.DateTreament,
                              index ,selectedService.Artist
                            )
                          "
                          id="artistSelect"
                          class="floatLabel"
                        >
                          <option
                            v-for="artist in artists"
                            :key="artist.id"
                            :value="artist.id"
                          >
                            {{ artist.name }}
                          </option>
                        </select>
                      </div>

                      <div class="controls col">
                        Treament Date
                        <input
                          id="depart"
                          class="floatLabel"
                          type="date"
                          :id="'Date' + selectedService.DateTreament"
                          v-model="selectedService.DateTreament"
                          @change="
                          filterActiveDays(
                              selectedService.DateTreament,
                              index ,selectedService.Artist
                            )
                          "
                          @input="
                            checkSelectedDate(selectedService.DateTreament)
                          "
                        />

                        <div
                          v-if="
                            selectedService.dateActive === false &&
                            selectedService.DateTreament !== ''
                          "
                          class="error-message"
                        >
                          This day is inactive .
                        </div>
                        <div v-if="showWarning" class="error-message">
                          Please select a date more today.
                        </div>
                      </div>
                      <div class="controls col">
                        Status
                        <i class="fa fa-sort"></i>
                        <select v-model="selectedService.Status">
                          <option value="Waiting" selected>Waiting</option>
                          <!--<option value="Done" >Done</option>
                    <option value="Cancel">Cancel</option>
                    <option value="Refund">Refund</option> -->
                        </select>
                      </div>

                      <div class="controls col">
                        Payment Type
                        <i class="fa fa-sort"></i>
                        <select v-model="selectedService.PaymentType">
                          <option value="Bank transfer">Bank transfer</option>
                          <option value="After Pay">After Pay</option>
                          <option value="Cash">Cash</option>
                          <option value="Card">Card</option>
                        </select>
                      </div>

                      <!-- Hiển thị danh sách các ngày active và working_hours -->
                      <div class="col-12">
                        <div v-if="selectedService.filteredDays.length > 0">
                          <span class="radio-text">Spot exists</span>

                          <div
                            v-for="(
                              schedule, index
                            ) in selectedService.filteredDays"
                            :key="index"
                          >
                            <!--          <h3>{{ day.day }}</h3> -->

                            <div
                              class="radio-section col-12 col-sm-6 col-lg-3 p-2"
                            >
                              <label class="label label-schedule m-0">
                                <span class="radio-header radio-text"
                                  >Spot {{ index + 1 }} (
                                  {{ formatTime(schedule.time) }} -
                                  {{ formatTime(schedule.time_end) }} )</span
                                >
                              </label>
                            </div>
                          </div>
                        </div>

                        <div v-if="selectedService.filteredDays.length < 1">
                          <span class="radio-text">None spot exists .</span>
                        </div>

                        <div>
                          <div class="col-12">
                            <span class="radio-text col-12 mb-3 mt-1"
                              >Please choose a time that does not coincide with
                              the Spot's existence .</span
                            >
                            <!-- Trường đầu vào cho thời gian bắt đầu -->

                            <div
                              class="radio-section col-12 col-sm-6 col-lg-3 p-2"
                              style="margin-right: 1rem"
                            >
                              <div class="controls">
                                Start Time
                                <input
                                  class="floatLabe"
                                  type="time"
                                  :id="selectedService.StartTime"
                                  v-model="selectedService.StartTime"
                                  @change="checkTimeConflict(index)"
                                  step="1800"
                                />
                              </div>
                            </div>

                            <div
                              class="radio-section col-12 col-sm-6 col-lg-3 p-2"
                            >
                              <!-- Trường đầu vào cho thời gian kết thúc -->
                              <div class="controls">
                                End Time
                                <input
                                  class="floatLabel"
                                  type="time"
                                  v-model="selectedService.EndTime"
                                  @change="checkTimeConflict(index)"
                                  step="1800"
                                />
                              </div>
                            </div>

                            <div
                              class="alert col-12 draft"
                              v-if="selectedService.showAlert"
                            >
                              <i>The selected time conflicts or is invalid.</i>
                            </div>
                          </div>
                        </div>

                        <!--         <p v-else class="error-message">
          No active days for the selected showroom and date.
        </p> -->
                      </div>
                    </div>
                  </div>
                </div>

                <!--  <p class="radio-text">Selected Services: {{ getSelectedServiceNames() }} -- {{ getSelectedServicePrice() }}</p> -->
              </div>
            </div>
          </div>
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

      <div v-if="!checkPrice()" class="error-message">
        Please check the total Remaining Price and Deposit price values above .
      </div>

      <button class="custom-btn btn-16" @click="prevStep" type="button">
        Back
      </button>
      <button
        class="custom-btn btn-16"
        @click="nextStep"
        :disabled="isNextButtonDisabled || !checkPrice() ||  !checkButton()"
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
        <label for="name" class="label-date active">Name :</label>
      </div>
      <div class="controls mb-4">
        <input
          class="form-control"
          type="email"
          id="email"
          name="email"
          v-model="formData.email"
        />

        <label for="email" class="label-date active">Email :</label>
      </div>

      <div class="controls mb-4">
        <label for="address" class="label-date active">Address :</label>
        <input
          class="form-control"
          type="text"
          id="address"
          name="address"
          v-model="formData.address"
        />
      </div>

      <div class="controls mb-4">
        <label for="phone" class="label-date active">Phone :</label>
        <input
          class="form-control"
          type="tel"
          id="phone"
          name="phone"
          v-model="formData.phone"
        />
      </div>

      <div class="controls mb-4">
        <select
          name="source_data"
          id="source_data"
          v-model="formData.source_data"
        >
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
          <option value="Google">Google</option>
          <option value="Website">Website</option>
          <option value="Tiktok">Tiktok</option>
          <option value="Other">Other</option>
        </select>
        <label for="name" class="label-date active">Source :</label>
      </div>

      <div class="controls mb-4">
        <input
          class="form-control"
          type="text"
          id="source"
          name="source"
          v-model="formData.source"
          required
        />
        <label for="name" class="label-date active">Source Note:</label>
      </div>
      <div class="controls mb-4">
        <textarea
          name="note"
          id="note"
          cols="30"
          rows="10"
          v-model="formData.note"
          required
        ></textarea>

        <label for="name" class="label-date active">Note :</label>
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
      isActive: false, // Kết quả active sẽ được lưu ở đây
      selectedArtist: 0,
      groupServices: [],
      showroomSchedules: [],
      services: [],
      artistlevels: [],
      selectedArtistlevel: null,
      selectedshowroomschedule: [],
      selectedGroupService: "",
      selectedGroupServiceServices: [],
      step: "showroom",
      selectedServices: [],
      totalPrice: 0,
      selectedDate: "",
      showWarning: false, // Ngày tối thiểu cho trường input
      filteredDays: [],
      startTime: null,
      endTime: null,
      isTimeConflict: false,
      showAlert: false,
      apiData: [],
      artists: [],
      formData: {
        name: "",
        email: "",
        address: "",
        phone: "",
        source: "",
        note: "",
        source_data: "",
      },
      errorMessage: "", // Dữ liệu từ API
      jsonData: "",
      bookingData: "",
      selectedDiscountPrice: 0,
      selectedDepositPrice: 0,
      maxDepositPrice: 0,
      maxDiscountPrice: 0,
      minDepositPrice: 0,
      minDiscountPrice: 0,
      inputError: false,
      inputError_01: false,
      selectedStatus: "Waiting",
      selectedPaymentType: "Bank transfer",
      htmlData: "",
      groupServiceStates: {},
      isLabelActive: false,
      isIconActive: false,
      ImageDeposit: [],
      adminId: null,
      artistId: null,
      employeeId: null,
      ArrayPricedService: [],
      /*   selectedOption: "option1", */
    };
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

  watch: {
    selectedArtist: function (newValue, oldValue) {
      // Khi selectedArtist thay đổi, đặt selectedWorkingHour về giá trị mặc định hoặc null
      this.selectedWorkingHour = null; // hoặc giá trị mặc định nếu bạn đã xác định nó
    },
  },

  methods: {
    updateImageDeposit(selectedService, newValue) {
      selectedService.ImageDeposit = newValue;

      console.log(this.selectedServices);
    },

    formatTime(time) {
      // Chuyển đổi thời gian từ chuỗi "HH:mm:ss" sang đối tượng Date
      const timeParts = time.split(":");
      const hours = parseInt(timeParts[0]);
      const minutes = parseInt(timeParts[1]);

      // Định dạng thời gian thành chuỗi với số 0 đứng trước nếu cần
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      // Kết hợp giờ và phút thành chuỗi định dạng
      return `${formattedHours}:${formattedMinutes}`;
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

    ImageDepositSelected(value, index) {
      let route_prefix = "";

      if (this.employeeId !== null) {
        route_prefix = "/employee/laravel-filemanager";
      } else if (this.artistId !== null) {
        route_prefix = "/artists/laravel-filemanager";
      } else if (this.adminId !== null) {
        route_prefix = "/admin/laravel-filemanager";
      }

      $("#" + value).filemanager("image", {
        prefix: route_prefix,
      });

      $("#image_manager").filemanager("image", {
        prefix: route_prefix,
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

    /*    filterActiveDays() {
      if (!this.selectedDate) return;
      console.log("selectedDate:", this.selectedDate);
      console.log("this.showroomSchedules:", this.showroomSchedules);
      const selectedDay = this.selectedDateToDay(this.selectedDate);
      const selectedShowroomSchedule = this.showroomSchedules.find(
        (schedule) => */ /*  schedule.day === selectedDay && schedule.active === "1" */ /* schedule.day === selectedDay && schedule.active === 1
      );
      this.filteredDays = selectedShowroomSchedule
        ? [selectedShowroomSchedule]
        : [];

        console.log( this.filteredDays);
    }, */
    filterActiveDays(DateTreament, index ,artistId) {
      let InforData = this.selectedServices[index];

      if (!DateTreament || !this.selectedShowroom) return;

      // Gửi yêu cầu API để lấy dữ liệu
      axios
        .get(`/api/date-active/${DateTreament}/${this.selectedShowroom}/${artistId}`)
        .then((response) => {
          // Lấy giá trị active từ API
          InforData.dateActive = response.data.active;

          console.log("      InforData.dateActive",      InforData.dateActive ,this.selectedShowroom,artistId);

          // Kết quả true hoặc false có thể được sử dụng tùy thuộc vào logic của bạn
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      InforData.filteredDays = this.apiData.filter(
        (schedule) =>
          schedule.date === DateTreament &&
          parseInt(schedule.ArtistID) === parseInt(InforData.Artist)
      );
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
        /*   parseInt(data.ArtistID) === parseInt(selectedArtist) */
      );
      return (
        matchingApiData && matchingApiData.ArtistID !== this.selectedShowroom
      );
    },

    checkTimeConflict(index) {
      let InforData = this.selectedServices[index];

      if (!InforData.StartTime || !InforData.EndTime) {
        InforData.isTimeConflict = false;
        return;
      }

      const selectedStartTime = new Date(`1970-01-01T${InforData.StartTime}`);
      const selectedEndTime = new Date(`1970-01-01T${InforData.EndTime}`);
      // ...
      // Kiểm tra xem thời gian bắt đầu và kết thúc nằm trong khoảng từ 8AM đến 8PM
      const isStartTimeValid =
        selectedStartTime.getHours() >= 8 && selectedStartTime.getHours() < 20;
      const isEndTimeValid =
        selectedEndTime.getHours() >= 8 && selectedEndTime.getHours() < 20;
      // Kiểm tra xung đột thời gian cho cả startTime và endTime

      const conflict = InforData.filteredDays.some((schedule) => {
        const startTime = new Date(`1970-01-01T${schedule.time}`);
        const endTime = new Date(`1970-01-01T${schedule.time_end}`);
        // ...

        return (
          (selectedStartTime >= startTime && selectedStartTime < endTime) ||
          (selectedEndTime > startTime && selectedEndTime <= endTime)
        );
      });

      if (
        conflict ||
        selectedStartTime >= selectedEndTime ||
        !isStartTimeValid ||
        !isEndTimeValid
      ) {
        InforData.isTimeConflict = true;
        InforData.showAlert = true;
   
        InforData.StartTime = null;
        InforData.EndTime = null;
      } else {
        InforData.isTimeConflict = false;
        InforData.showAlert = false;

      }
    },

    checkSelectedDate(DateTreament) {
      // Xử lý sự kiện khi ngày được chọn thay đổi
      const currentDate = new Date();
      const selectedDate = new Date(DateTreament);
      this.isLabelActive = true;

      // Tính số mili giây giữa ngày hiện tại và ngày đã chọn
      const timeDiff = selectedDate - currentDate;

      // Kiểm tra xem ngày đã chọn có nằm trong khoảng 7 ngày không
      if (timeDiff < 0 /* || timeDiff < 7 * 24 * 60 * 60 * 1000 */) {
        // Ngày không hợp lệ, hiển thị thông báo
        /*    this.showWarning = true; */

        this.showWarning = false;
      } else {
        // Ngày hợp lệ, ẩn thông báo
        this.showWarning = false;
      }
    },

    handleFileChange() {
      // Handle the file selection here, e.g., store it in a data property
      this.paymentImage = this.$refs.fileInput.files[0];
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
      const formatter = new Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD",
      });
      return formatter.format(value);
    },

    getSelectedServiceNames() {
      return this.selectedServices
        .map((id) => this.getServiceName(id))
        .join(", ");
    },
    getServiceName(id) {
      const service = this.services.find((service) => service.id === id);
      return service ? service.Name : "";
    },

    getSelectedServicePrice() {
      return this.selectedServices
        .map((service) => this.getServicePrice(service))
        .join(", ");
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

    checkInputValue(index) {
      let TotalDeposit = 0;
      let TotalRemainingPrice = 0;
      this.selectedServices.map((Service) => {
        const DepositPrice = parseFloat(Service.Deposit);
        const RemainingPrice = parseFloat(Service.RemainingPrice);

        // Add the effective price to the total
        TotalDeposit += parseFloat(DepositPrice);
        TotalRemainingPrice += parseFloat(RemainingPrice);
      });

      let InforData = this.selectedServices[index];

      if (
        InforData.Deposit > this.maxDepositPrice ||
        InforData.Deposit < this.minDepositPrice ||
        InforData.Deposit === "" ||
        TotalDeposit > this.maxDepositPrice
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

    SelectedServicesPrice() {
      let totalPrice = 0;

      // Loop through selected services to calculate total price
      for (const service of this.selectedServices) {
        totalPrice += service.price;
      }

      // Now, totalPrice contains the total price of all selected services
      console.log("Total price of selected services:", totalPrice);
    },

    checkPrice() {
      let RemainingPriceTotalPrice = 0;

      this.selectedServices.map((Service) => {
        const RemainingPrice = parseFloat(Service.RemainingPrice);

        // Add the effective price to the total
        RemainingPriceTotalPrice += parseFloat(RemainingPrice);
      });

      const checkRemanining = this.calculateTotalSelectedServicesPrice();

      if (parseInt(RemainingPriceTotalPrice) === parseInt(checkRemanining)) {
        return true;
      } else {
        return false;
      }
    },


    checkButton() {
          return this.selectedServices.every(Service => {
            console.log(Service.StartTime, Service.EndTime, Service.DateTreament, Service.DateTreament == "", Service.EndTime == null);
            return Service.StartTime !== null && Service.EndTime !== null && Service.DateTreament !== "";
          });
        },

    calculateTotalSelectedServicesPrice() {
      let serviceTotalPrice = 0;
      let depositTotalPrice = 0;

      this.checkButton();

      // Check if selectedServices is not null and is an array
      if (
        this.selectedServices !== null &&
        Array.isArray(this.selectedServices)
      ) {
        // Loop through each selected service
        this.selectedServices.map((Service) => {
          const servicePrice = parseFloat(Service.price);
          const serviceSalePrice = parseFloat(Service.salePrice);
          const depositPrice = parseFloat(Service.Deposit);
          // Calculate the effective price (considering sale price if available)
          const effectivePrice =
            serviceSalePrice !== null ? serviceSalePrice : 0;

          // Add the effective price to the total
          serviceTotalPrice +=
            parseFloat(effectivePrice) + parseFloat(servicePrice);
          depositTotalPrice += parseFloat(depositPrice);
        });
      }

      this.selectedDepositPrice = depositTotalPrice;

      // Now serviceTotalPrice contains the total price of selected services
      this.maxDepositPrice = serviceTotalPrice;

      this.maxDiscountPrice = serviceTotalPrice;

      if (this.selectedDiscountPrice !== "") {
        const selectedDepositPrice = depositTotalPrice;
        const selectedDiscountPrice = this.selectedDiscountPrice;

        return (
          serviceTotalPrice +
          this.totalLevelPrice * this.selectedServices.length -
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
        if (this.selectedServices) {
          this.fetchArtistlevels();
          this.step = "artistlevels";
        }
      } else if (this.step === "artistlevels") {
        
        if (this.selectedShowroom) {
          this.fetchShowroomSchedule();

          this.selectedServices.map((Service) => {
            const inputId = 'Deposit_' + Service.id;
            const inputValue = document.getElementById(inputId)?.value;

            if (inputValue !== undefined) {
              Service.ImageDeposit = inputValue;
            }

          });

          this.step = "getShow";
          this.fetchArtists();
          const bookingDatavalue = {
            showroomId: this.selectedShowroom,
            serviceIds: this.selectedServices,
            Level_price: this.totalLevelPrice,
            Artist_levelID: this.selectedArtistlevel,
          };

          this.bookingData = JSON.stringify(bookingDatavalue);

          console.log(this.bookingData);
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
        this.selectedServices = [];
        this.selectedArtistlevel = [];
        this.totalSelectedServicesPrice = 0;
        // Xóa dữ liệu đã chọn
      } else if (this.step === "artistlevels") {
        this.step = "groupService";
        this.selectedArtistlevel = [];
        this.totalSelectedServicesPrice = 0;
      } else if (this.step === "getShow") {
        this.step = "artistlevels";
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
    this.adminId = this.$root.adminId;

    this.artistId = this.$root.artistId;

    this.employeeId = this.$root.employeeId;

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
.ul_bookingg {
  padding-left: 0rem !important;
}
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

.label-schedule {
  justify-content: center;
  background-color: rgb(255 112 158 / 25%);
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
  width: 150px;
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

input [type="checkbox"] {
  border-radius: 10rem;
}

.img_body,
.holder {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.img_body img {
  width: 50% !important;
  padding: 1rem;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.05);
}

.holder img {
  width: 150px !important;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.05);
  border: solid 1px #8abef6;
}

.image-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(48, 42, 42, 0.686);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 5%;
}
.image-popup img {
}
/* Style the close button */
.close-button {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 40px;
  color: #fff;
  cursor: pointer;
}

.form-price {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 1rem 0;
}

.form-info {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
}

.controls {
  min-width: 175px;
}

.controls .fa-sort {
  position: absolute;
  right: 20px;
  top: 53px;
  color: #999;
}
</style>

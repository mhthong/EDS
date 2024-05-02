<template>
  <div
    class="flexb-c col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
    style="align-items: flex-start; justify-content: space-between"
  >
    <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
      <div>
        <h4 class="col-6">
          <p class="radio-header radio-text">Staff : {{ this.Staff }}</p>
          <p class="radio-header radio-text">
            Service : {{ selectedServicesName }}
          </p>

          <p class="radio-header radio-text">
            Group Service : {{ this.group_service }}
          </p>
        </h4>
        <div class="col-6 text-end">
          <button
            class="input-group-btn custom-btn btn-16 text-center"
            type="button"
            @click="Change('Staff')"
            :disabled="this.adminId === null "
          >
            Change Staff
          </button>
          <button
            class="input-group-btn custom-btn btn-16 text-center"
            type="button"
            @click="Change('Service')"
            :disabled="this.adminId === null || this.approvednone != 'approved'"
          >
            Change Service
          </button>
        </div>
        <div class="col-12">
          <div class="col-12 col-sm-12 col-lg-12 p-2 mb-2">
            <select
              class="form-control"
              name="showroomID"
              v-model="selectedShowroom"
              @change="changeSelectedShowroom"
            >
              <option v-for="showroom in showrooms" :value="showroom.id">
                {{ showroom.Name }}
              </option>
            </select>
          </div>
        </div>

        <div class="col-12">
          <div class="col-12 col-sm-12 col-lg-12 p-2 mb-2">
            <div class="controls">
              <input
                id="created_at"
                class="floatLabel pointer-events-a"
                type="date"
                name="created_at"
                v-model="created_at"
              />
              <label
                for="selectedDate"
                class="label-date active"
                :class="{ active: isLabelActive }"
                ><i class="fa fa-calendar"></i>&nbsp;&nbsp;Create Date</label
              >
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="col-12 col-sm-12 col-lg-12 p-2 mb-2">
            <div class="controls">
              <input
                id="depart"
                class="floatLabel pointer-events-a"
                type="date"
                name="date"
                v-model="selectedDate"
                @change="filterActiveDays"
                @input="checkSelectedDate"
                @click="filterActiveDays"
              />
              <label
                for="selectedDate"
                class="label-date active"
                :class="{ active: isLabelActive }"
                ><i class="fa fa-calendar"></i>&nbsp;&nbsp;Treament Date</label
              >
              <div
                v-if="this.isActive === false && selectedDate"
                class="error-message"
              >
                This day is inactive .
              </div>
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
                @change="filterActiveDays"
                id="artistSelect"
                class="floatLabel pointer-events-a"
                name="artist"
              >
                <option :value="7" selected>N/A</option>
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

          <div class="col-12 col-sm-8 col-lg-8" v-if="showfilteredDays">
            <div>
              <div class="col-12">
                <!-- Trường đầu vào cho thời gian bắt đầu -->

                <div class="radio-section col-12 col-sm-6 col-lg-6 p-2">
                  <div class="controls">
                    <input
                      class="floatLabe"
                      type="time"
                      :id="startTime"
                      name="start_time"
                      v-model="startTime"
                      @change="checkTimeConflict"
                      step="1800"
                    />
                    <label for="artistSelect" class="label-date active"
                      ><i class="fa-regular fa-clock"></i>&nbsp;&nbsp;Start
                      Time</label
                    >
                  </div>
                </div>

                <div class="radio-section col-12 col-sm-6 col-lg-6 p-2">
                  <!-- Trường đầu vào cho thời gian kết thúc -->
                  <div class="controls">
                    <input
                      class="floatLabel"
                      type="time"
                      v-model="endTime"
                      name="end_time"
                      @change="checkTimeConflict"
                      step="1800"
                    />
                    <label for="artistSelect" class="label-date active"
                      ><i class="fa-regular fa-clock"></i>&nbsp;&nbsp;End
                      Time</label
                    >
                  </div>
                </div>

                <div class="alert col-12 draft" v-if="showAlert">
                  <i>The selected time conflicts or is invalid.</i>
                </div>
              </div>
            </div>

            <div v-if="filteredDays.length > 0">
              <span class="radio-text">Spot exists</span>

              <div v-for="(schedule, index) in filteredDays" :key="index">
                <!--          <h3>{{ day.day }}</h3> -->

                <div class="radio-section col-12 col-sm-6 col-lg-3 p-2">
                  <label class="label label-schedule m-0">
                    <span class="radio-header radio-text"
                      >Spot {{ index + 1 }} ( {{ formatTime(schedule.time) }} -
                      {{ formatTime(schedule.time_end) }} )</span
                    >
                  </label>
                </div>
              </div>

              <span class="radio-text col-12 mb-3 mt-1"
                >Please choose a time that does not coincide with the Spot's
                existence .</span
              >
            </div>
            <div v-else="filteredDays.length > 0">
              <span class="radio-text ps-2">None spot exists .</span>
            </div>
          </div>
        </div>

        <!-- Hiển thị danh sách các ngày active và working_hours -->
      </div>

      <div
        class="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
      >
        <div class="controls mb-4">
          <input
            class="form-control pointer-events-a"
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
            class="form-control pointer-events-a"
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
            class="form-control pointer-events-a"
            type="text"
            id="address"
            name="address"
            v-model="formData.address"
          />
        </div>
        <div class="controls mb-4">
          <label for="phone" class="label-date active">Phone:</label>
          <input
            class="form-control pointer-events-a"
            type="tel"
            id="phone"
            name="phone"
            v-model="formData.phone"
          />
        </div>

        <div class="controls mb-4">
          <label :for="formData.source" class="label-date active"
            >Source:</label
          >
          <input
            class="form-control pointer-events-a"
            type="text"
            :id="formData.source"
            name="source"
            v-model="formData.source"
          />
        </div>

        <div class="controls mb-4">
          <label :for="formData.source_data" class="label-date active"
            >Source Data:</label
          >

          <select
            :id="formData.source_data"
            name="source_data"
            v-model="formData.source_data"
          >
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Google">Google</option>
            <option value="Website">Website</option>
            <option value="Tiktok">Tiktok</option>
            <option value="Order">Order</option>
          </select>
        </div>

        <div class="controls mb-4">
          <label :for="formData.note" class="label-date active">Note:</label>
          <textarea
            name="note"
            :id="formData.note"
            cols="30"
            rows="10"
            v-model="formData.note"
          ></textarea>
        </div>

        <!--    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p> -->
      </div>
      <div
        class="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
      >
        <template v-if="step === 'showroom'">
          <button
            class="custom-btn btn-16"
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
                  <input
                    class="pointer-events-a"
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

          <ul>
            <li class="mt-3 mb-3">
              <div class="radio-header radio-text">Booking Value</div>
              <input
                class="deposit"
                name="booking_value"
                type="number"
                v-model="bookingvalue"
              />
              <p v-if="inputError_01" class="error-message">
                Value exceeds limit.
              </p>
            </li>

            <li class="mt-3 mb-3">
              <div class="radio-header radio-text">Deposit Price</div>
              <input
                class="deposit"
                name="deposit"
                type="number"
                v-model="selectedDepositPrice"
                :min="0"
              />
              <p v-if="inputError_01" class="error-message">
                Value exceeds limit.
              </p>
            </li>

            <li class="mt-3 mb-3">
              <div class="radio-header radio-text">Remaining Value</div>
              <input
                class="deposit"
                name="Remainingvalue"
                type="number"
                v-model="Remainingvalue"
              />
            </li>
          </ul>

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
                class="btn btn-info"
                @click="SubmitEvent"
                :disabled=" submitted ||
                  this.isActive === false ||
                  (this.approved == 'approved' && this.adminId == null) ||
                  this.inputError == true
                "
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
                :disabled="
                  submitted ||
                  this.isActive === false ||
                  (this.approved == 'approved' && this.adminId == null) ||
                  this.inputError == true
                "
              >
                <i class="fa fa-check-circle"></i> Save &amp; Exit
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
                class="m-0 control-label required"
                aria-required="true"
                >Status</label
              >
            </h4>
          </div>
          <div class="widget-body p-3">
            <div class="ui-select-wrapper form-group">
              <select
                class="form-control pointer-events-p"
                v-model="selectedStatus"
                name="status"
                @change="checkTimeConflict"
              >
                <option value="Waiting" selected>Waiting</option>
                <option value="Done">Done</option>
                <option value="Partial Done">Partial Done</option>
                <option value="Reschedule">Reschedule</option>
                <option value="Cancel">Cancel</option>
                <option value="Refund">Refund</option>
                <option value="Unidentified">Unidentified</option>
              </select>

              <div
                class="form-group"
                v-if="
                  selectedStatus === 'Waiting' &&
                  selectedStatusNone !== 'Waiting'
                "
              >
                <ul>
                  <li class="mt-3 mb-3">
                    <div class="radio-header radio-text">Booking Value</div>
                    <input
                      class="form-control"
                      name="booking_value"
                      type="number"
                      v-model="bookingvalue"
                    />
                    <p v-if="inputError_01" class="error-message">
                      Value exceeds limit.
                    </p>
                  </li>

                  <li class="mt-3 mb-3">
                    <div class="radio-header radio-text">Deposit Price</div>
                    <input
                      class="form-control"
                      name="deposit"
                      type="number"
                      v-model="selectedDepositPrice"
                      :max="maxDepositPrice"
                      :min="0"
                    />
                    <p v-if="inputError_01" class="error-message">
                      Value exceeds limit.
                    </p>
                  </li>

                  <li class="mt-3 mb-3">
                    <div class="radio-header radio-text">Remaining Value</div>
                    <input
                      class="form-control"
                      name="Remainingvalue"
                      type="number"
                      v-model="Remainingvalue"
                    />
                  </li>
                </ul>
              </div>

              <div class="form-group" v-if="selectedStatus === 'Cancel'">
                <label for="">Reason cancel</label>

                <select
                  class="form-control pointer-events-p"
                  v-model="Cancel"
                  name="Cancel"
                >
                  <option value="" selected>Select</option>
                  <option value="Clients" selected>Clients</option>
                  <option value="Operation">Operation</option>
                  <option value="NoArtist">No Artist</option>
                  <option value="NoLocation">No Location</option>
                  <option value="ArtistRejet">Artist Rejet</option>
                </select>

                <label class="mt-3" for="">Wage Percent (%)</label>
                <input type="number"
                  class="form-control"
                  name="cancel_wage"
                  v-model="cancel_wage"
                  min="0"
                  max="100"
                  required
                >


              </div>

              <div class="form-group" v-if="selectedStatus === 'Refund'">
                <label for="">Refund Price</label>
                <!-- Input field for "Cancel" or "Refund" status -->
                <input
                  type="number"
                  class="form-control"
                  name="Refund"
                  v-model="Refund"
                  min="0"
                  :max="this.maxRefund"
                  required
                />
              </div>

              <div class="form-group" v-if="selectedStatus === 'Partial Done'">
                <label for="">Price</label>
                <!-- Input field for "Cancel" or "Refund" status -->
                <input
                  type="number"
                  class="form-control"
                  name="Partial_Done"
                  v-model="Partial_Done"
                  min="0"
                  :max="this.maxPartial_Done"
                  required
                />
              </div>
              <div
                class="form-group"
                v-if="
                  selectedStatus === 'Done' || selectedStatus === 'Partial Done'
                "
              >
                <label for="">Upsell</label>
                <!-- Input field for "Cancel" or "Refund" status -->
                <input
                  type="number"
                  class="form-control"
                  name="upsale"
                  v-model="upsale"
                  min="0"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-ad-form right-sidebar mt-3" v-show="isAfterEndTime()">
        <div class="widget meta-boxes">
          <div class="widget-title">
            <h4>
              <label
                for="status"
                class="m-0 control-label required"
                aria-required="true"
                >Wage OT ($)</label
              >
            </h4>
          </div>
          <div class="widget-body p-3">
            <div class="ui-select-wrapper form-group">
              <div>
                <input type="number"
                  class="form-control"
                  name="OT_wage"
                  v-model="OT_wage"
                  min="0"
                  :disabled = "(this.adminId == null && (this.adminId !== 4 || this.adminId !== 1 || this.adminId !== 0))"
                  required
                >

                </input>
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
                >Payment Type</label
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
                  required
                >
                  <option value="Bank transfer">Bank transfer</option>
                  <option value="After Pay">After Pay</option>
                  <option value="Cash">Cash</option>
                  <option value="Card">Card</option>
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
                >Payment Remaining Type</label
              >
            </h4>
          </div>
          <div class="widget-body p-3">
            <div class="ui-select-wrapper form-group">
              <div>
                <select
                  class="form-control"
                  name="payment_remaining_type"
                  v-model="selectedPaymentRemainingType"
                >
                  <option value="null">None</option>
                  <option value="Bank transfer">Bank transfer</option>
                  <option value="After Pay">After Pay</option>
                  <option value="Cash">Cash</option>
                  <option value="Card">Card</option>
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
                <select
                  class="form-control pointer-events-a pointer-events-p"
                  name="action"
                  v-model="action"
                >
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
                        sendmail.trim() === '' ||
                        submitted ||
                        !submitFormSendMail()
                      "
                    >
                      <i class="fa-regular fa-paper-plane"></i>
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <ul class="main__body__box-info">
        <li>
          <p>Payment Deposit Image</p>
          <div class="form-group mt-4">
            <div class="main__body__box-info">
              <div
                class="holder image-category"
                id="image-category"
                value=""
              ></div>
            </div>

            <div class="-space-y-px mb-4">
              <div class="containerInput input-group">
                <div class="main__body__box-info">
                  <div class="img_body">
                    <img
                      v-for="(url, index) in this.payment_deposits"
                      :src="url"
                      :key="index"
                      alt="Image"
                      @click="openImagePopup(url)"
                    />
                    <!-- Popup for enlarged image -->
                  </div>
                </div>
                <a
                  class="radio-header radio-text"
                  id="image_manager"
                  data-input="Deposit"
                  data-preview="image-category"
                >
                  <button
                    class="input-group-btn custom-btn btn-16 text-center"
                    type="button"
                    @click="ImageSelected()"
                  >
                    Upload
                  </button>
                </a>

                <input
                  class="form-control"
                  value=""
                  id="Deposit"
                  style="display: none"
                  type="text"
                  name="Deposit"
                />
              </div>
            </div>
          </div>
        </li>
        <li>
          <p>Payment Remaining Image</p>

          <div class="form-group mt-4">
            <div
              class="holder image-category"
              id="PaymentRemainingImage"
              value=""
            ></div>

            <div class="-space-y-px mb-4">
              <div class="containerInput input-group">
                <div class="main__body__box-info">
                  <div class="img_body">
                    <img
                      v-for="(url, index) in this.payment_remaindings"
                      :src="url"
                      :key="index"
                      alt="Image"
                      @click="openImagePopup(url)"
                    />
                    <!-- Popup for enlarged image -->
                  </div>
                </div>

                <a
                  class="radio-header radio-text"
                  id="image_PaymentRemainingImage"
                  data-input="Remaining"
                  data-preview="PaymentRemainingImage"
                >
                  <button
                    class="input-group-btn custom-btn btn-16 text-center"
                    type="button"
                    @click="ImageSelected()"
                  >
                    Upload
                  </button>
                </a>

                <input
                  class="form-control"
                  value=""
                  id="Remaining"
                  style="display: none"
                  type="text"
                  name="Remaining"
                />
              </div>
            </div>
          </div>
        </li>

        <li>
          <p>Before Image</p>

          <div class="form-group mt-4">
            <div class="holder image-category" id="BeforeImage" value=""></div>
            <div class="-space-y-px mb-4">
              <div class="containerInput input-group">
                <div class="main__body__box-info">
                  <div class="img_body">
                    <img
                      v-for="(url, index) in this.Before_imgs"
                      :src="url"
                      :key="index"
                      alt="Image"
                      @click="openImagePopup(url)"
                    />
                    <!-- Popup for enlarged image -->
                  </div>
                </div>

                <a
                  class="radio-header radio-text"
                  id="image_BeforeImage"
                  data-input="Before"
                  data-preview="BeforeImage"
                >
                  <button
                    class="input-group-btn custom-btn btn-16 text-center"
                    type="button"
                    @click="ImageSelected()"
                  >
                    Upload
                  </button>
                </a>

                <input
                  class="form-control"
                  id="Before"
                  value=""
                  style="display: none"
                  type="text"
                  name="Before"
                />
              </div>
            </div>
          </div>
        </li>
        <li>
          <p>After Image</p>

          <div class="form-group mt-4">
            <div class="holder image-category" id="AfterImage" value=""></div>
            <div class="-space-y-px mb-4">
              <div class="containerInput input-group">
                <div class="main__body__box-info">
                  <div class="img_body">
                    <img
                      v-for="(url, index) in this.After_imgs"
                      :src="url"
                      :key="index"
                      alt="Image"
                      @click="openImagePopup(url)"
                    />
                    <!-- Popup for enlarged image -->
                  </div>
                </div>

                <a
                  class="radio-header radio-text"
                  id="image_AfterImage"
                  data-input="After"
                  data-preview="AfterImage"
                >
                  <button
                    class="input-group-btn custom-btn btn-16 text-center"
                    type="button"
                    @click="ImageSelected()"
                  >
                    Upload
                  </button>
                </a>

                <input
                  class="form-control"
                  id="After"
                  value=""
                  style="display: none"
                  type="text"
                  name="After"
                />
              </div>
            </div>
          </div>
        </li>
        <!-- Popup for enlarged image -->
        <div
          v-if="showImagePopup"
          class="image-popup"
          @click="closeImagePopupOutside"
        >
          <span @click="closeImagePopup" class="close-button">&times;</span>
          <img :src="selectedImageUrl" alt="Enlarged Image" />
        </div>
      </ul>
    </div>

    <div v-if="popupVisible" class="popup">

      <div class="popup-content col-8 col-md-6" v-if="this.stepchange == 'Staff'">
        <div class="header text-center pb-4">
          <h5>Change Staff</h5>
        </div>

        <select
          class="form-control pointer-events-p mb-2"
          v-model="selectedStaff"
          name="status"
          @change="changeInput()"
        >
          <option value="Employee" selected>Employee</option>
          <option value="Parner_Operation">Parner/Operation</option>
          <option value="Artists">Artists</option>
        </select>

        <div
          v-if="this.selectedStaff === 'Employee' && this.employeeId === null"
        >
          <select
            class="form-control"
            id="showroomSelect"
            v-model="input"
            style="padding: 5px; min-width: 250px; margin-bottom: 1rem"
          >
            <option :value="[]" selected>Name</option>

            <option
              v-for="employee in apiDataEmployee"
              :key="employee.id"
              :value="{
                id: employee.id,
                name: employee.name,
              }"
            >
              {{ employee.name }}
            </option>
          </select>
        </div>

        <div v-if="this.selectedStaff === 'Artists' && this.artistId === null">
          <select
            class="form-control"
            id="showroomSelect"
            v-model="input"
            style="padding: 5px; min-width: 250px; margin-bottom: 1rem"
          >
            <option :value="[]" selected>Name</option>

            <option
              v-for="Aritst in apiDataAritst"
              :key="Aritst.id"
              :value="{
                id: Aritst.id,
                name: Aritst.name,
              }"
            >
              {{ Aritst.name }}
            </option>
          </select>
        </div>

        <div
          v-if="
            this.selectedStaff === 'Parner_Operation' &&
            this.employeeId === null &&
            this.artistId === null
          "
        >
          <select
            class="form-control"
            id="showroomSelect"
            v-model="input"
            style="padding: 5px; min-width: 250px; margin-bottom: 1rem"
          >
            <option :value="[]" selected>Name</option>

            <option
              v-for="parner in apiDataParner"
              :key="parner.id"
              :value="{
                id: parner.id,
                name: parner.name,
              }"
            >
              {{ parner.name }}
            </option>
          </select>
        </div>

        <div>
          <button
            class="input-group-btn custom-btn btn-16 text-center"
            type="button"
            @click="saveData"
            :disabled="this.adminId === null || this.input.length < 1"
          >
            Save
          </button>
          <button
            class="input-group-btn custom-btn btn-16 text-center"
            @click="closePopup"
          >
            Cancel
          </button>
        </div>
      </div>


      <div class="popup-content col-8 col-md-6" v-if="this.stepchange == 'Service'">
        <div class="header text-center pb-4">
          <h5>Change Service</h5>
        </div>

        <div>
          <label for="">Service</label>

          <select
            class="form-control"
            v-model="input"
            style="padding: 5px; min-width: 250px; margin-bottom: 1rem"
          >
          <option  :value="[]" selected>Selected Service</option>
            <option
              v-for="service in services"
              :key="service.id" 
              :value="{
                id: service.id,
                time: service.Time,
              }"
            >
              {{ service.Name }}
            </option>
          </select>

          

          <label class="mt-3" for="">Wage Percent (%)</label>
                <input type="number"
                  class="form-control"
                  name="cancel_wage"
                  v-model="change_service_wage"
                  min="0"
                  max="100"
                  required
                >

        </div>

        <div>
          <button
            class="input-group-btn custom-btn btn-16 text-center"
            type="button"
            @click="saveData"
            :disabled="this.adminId === null || this.input.length < 1"
          >
            Save
          </button>
          <button
            class="input-group-btn custom-btn btn-16 text-center"
            @click="closePopup"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

    <!--      -->
  </div>
</template>

<script>
import axios, { Axios } from "axios";
import moment, { locale } from "moment";

export default {
  data() {
    return {
      showrooms: [],
      showroomsnone: [],
      showroomspath: "N/A",
      selectedShowroom: null,
      Staff: null,
      selectedArtist: 0,
      isActive: false,
      groupServices: [],
      showroomSchedules: [],
      services: [],
      artistlevels: [],
      selectedArtistlevel: null,
      selectedshowroomschedule: null,
      selectedGroupService: "",
      selectedGroupServiceServices: [],
      step: "showroom",
      stepchange: "Staff",
      selectedServices: null,
      selectedServicesName: null,
      totalPrice: 0,
      valueOP: 0,
      selectedDate: "",
      showWarning: false, // Ngày tối thiểu cho trường input
      filteredDays: [],
      startTime: null,
      endTime: null,
      isTimeConflict: false,
      showAlert: false,
      showfilteredDays: false,
      selectedWorkingHour: "",
      selectedWorkingHour_end_time: "",
      popupVisible: false,
      dialogEdit: false,
      apiData: [],
      artists: [],
      artistsnone: [],
      artistshowroom: [],
      formData: {
        name: "",
        email: "",
        address: "",
        phone: "",
        source: "",
        source_data: "",
        note: "",
      },
      InputSelectedStatus: "",
      errorMessage: "", // Dữ liệu từ API
      jsonData: "",
      bookingData: "",
      inputError_01: false,
      selectedDepositPrice: 0,
      maxDepositPrice: 0,
      maxDiscountPrice: 0,
      minDepositPrice: 0,
      minDiscountPrice: 0,
      selectedDiscountPrice: 0,
      Remainingvalue: 0,
      inputError: false,
      selectedStatus: "Waiting",
      selectedPaymentType: "N/A",
      Refund: 0,
      Partial_Done: 0,
      maxPartial_Done: 0,
      upsale: 0,
      maxRefund: "",
      Cancel: "Clients",
      sendmail: "",
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
      StatusPresent: "",
      selectedPaymentRemainingType: "",
      payment_deposits: [],
      payment_remaindings: [],
      After_imgs: [],
      Before_imgs: [],
      showImagePopup: false,
      selectedImageUrl: null,
      group_service: null,
      approved: "pending",
      employeeId: null,
      artistId: null,
      adminId: null,
      manage_supers: null,
      selectedStaff: "Employee",
      apiDataAritst: [],
      apiDataParner: [],
      apiDataEmployee: [],
      input: [],
      id: 0,
      bookingvalue: 0,
      selectedStatusNone: null,
      isactiveselectedStatusNone: false,
      checkEmployee: false,
      created_at: null,
      time_service:null,
      service_Idsnone:null,
      approvednone: null,
      cancel_wage: null,
      change_service_wage: null,
      OT_wage: null,
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
    selectedDateWatcher: function (newVal, oldVal) {
      this.filterActiveDays();
    },

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

    bookingvalue(newValue, oldValue) {
      // Update Remainingvalue whenever bookingvalue changes
      this.updateRemainingValue();
    },
    selectedDepositPrice(newValue, oldValue) {
      // Update Remainingvalue whenever selectedDepositPrice changes
      this.updateRemainingValue();
    },
    selectedStatus(newValue, oldValue) {
      this.checkisactiveselectedStatus();
    },
    selectedStatusNone(newValue, oldValue) {
      this.checkisactiveselectedStatus();
    },

    step(newValue, oldValue) {
      this.checkstep();
    },
  },

  computed: {
    selectedDateWatcher: function () {
      return this.selectedDate;
    },

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
    isAfterEndTime() {
      return moment(this.endTime, 'HH:mm:ss').isAfter(moment('16:00:00', 'HH:mm:ss'));
    },

    async fetchArtistsShowrooms() {
      await axios
        .get(`/api/artistshowroom`)
        .then((response) => {
          this.artistshowroom = response.data;
          this.updateArtistshowroom(this.selectedShowroom, null);
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    updateArtistshowroom(showroom, artist) {
      if (showroom !== null) {
        this.artists = this.artistshowroom
          .filter(
            (item) =>
              parseInt(item.showroom_id) === parseInt(showroom) &&
              item.artist.status == "published"
          ) // Lọc ra các dữ liệu có showroom_id là 21
          .map((item) => item.artist); // Chỉ trích xuất thông tin của artist

      } else {
        this.artists = this.artistsnone;
      }

    },

    checkisactiveselectedStatus() {
      if (
        this.step === "groupService" &&
        this.selectedStatus !== this.selectedStatusNone &&
        this.selectedStatusNone !== "Waiting"
      ) {
        this.step = "showroom";
        this.isactiveselectedStatusNone = true;
      }
    },

    checkstep() {
      if (this.isactiveselectedStatusNone == true) {
        this.isactiveselectedStatusNone = false;
      }
    },

    updateRemainingValue() {
      // Update Remainingvalue based on bookingvalue and selectedDepositPrice
      this.Remainingvalue = this.bookingvalue - this.selectedDepositPrice;
    },
    changeInput() {
      this.input = [];
    },

    async fetchArtist() {
      await axios
        .get("/api/artist")
        .then((response) => {
          this.apiDataAritst = response.data;
        })
        .catch((error) => {
          console.error("Error fetching artist::", error);
        });
    },

    async fetchapiDataParner() {
      await axios
        .get("/api/parner")
        .then((response) => {
          this.apiDataParner = response.data;
        })
        .catch((error) => {
          console.error("Error fetching artist::", error);
        });
    },

    fetchapiDataEmployee() {
      axios
        .get(`/api/employee`)
        .then((response) => {
          this.apiDataEmployee = response.data;
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    openImagePopup(url) {
      this.selectedImageUrl = url;
      this.showImagePopup = true;
    },
    closeImagePopup() {
      this.showImagePopup = false;
      this.selectedImageUrl = null;
    },

    openPopup() {
      if (this.dialogEdit == true) {
        Promise.all([]).then(() => {
          this.popupVisible = true;
        });
      } else {
        this.popupVisible = true;
      }
    },
    closePopup() {
      this.popupVisible = false;
      this.dialogEdit = false;
    },

    Change(stepchange) {
      this.openPopup();
      this.stepchange = stepchange;
    },

    saveData() {
      // Tạo một đối tượng dữ liệu để gửi lên server

      if(this.stepchange == "Staff"){

        const postData = {
        Staff: this.selectedStaff,
        input: this.input,
        id: this.id,
      };

      console.log(postData);
      // Gửi yêu cầu POST đến API để lưu dữ liệu
      axios
        .post("/api/changeStaff", postData)
        .then((response) => {
          // Thực hiện các bước cần thiết sau khi lưu dữ liệu thành công
          this.closePopup(); // Đóng popup sau khi lưu thành công
          this.fetchapiData_id();
        })
        .catch((error) => {
          console.log(postData);
          console.error("Error saving data:", error);
          // Xử lý lỗi nếu có
        });

      } else {
        const postData = {
        input: this.input,
        id: this.id,
        service_time:this.time_service,
        serviceId:this.service_Idsnone,
        change_service_wage:this.change_service_wage
      };

      console.log(postData);

      axios
        .post("/api/changeServices", postData)
        .then((response) => {
          // Thực hiện các bước cần thiết sau khi lưu dữ liệu thành công
          this.closePopup(); // Đóng popup sau khi lưu thành công
          this.fetchapiData_id();
        })
        .catch((error) => {
          console.log(postData);
          console.error("Error saving data:", error);
          // Xử lý lỗi nếu có
        });
      }

    },

    closeImagePopupOutside(event) {
      // Close the popup if the click is outside of the image
      if (!event.target.closest(".image-popup img")) {
        this.closeImagePopup();
      }
    },

    ImageSelected() {
      if (this.employeeId !== null) {
        var route_prefix = "/employee/laravel-filemanager";
        $("#image_PaymentRemainingImage").filemanager("image", {
          prefix: route_prefix,
        });
        $("#image_manager").filemanager("image", {
          prefix: route_prefix,
        });
        $("#image_AfterImage").filemanager("image", {
          prefix: route_prefix,
        });
        $("#image_BeforeImage").filemanager("image", {
          prefix: route_prefix,
        });
      }

      if (this.artistId !== null) {
        var route_prefix = "/artists/laravel-filemanager";
        $("#image_PaymentRemainingImage").filemanager("image", {
          prefix: route_prefix,
        });
        $("#image_manager").filemanager("image", {
          prefix: route_prefix,
        });
        $("#image_AfterImage").filemanager("image", {
          prefix: route_prefix,
        });
        $("#image_BeforeImage").filemanager("image", {
          prefix: route_prefix,
        });
      }

      if (this.adminId !== null) {
        var route_prefix = "/admin/laravel-filemanager";
        $("#image_PaymentRemainingImage").filemanager("image", {
          prefix: route_prefix,
        });
        $("#image_manager").filemanager("image", {
          prefix: route_prefix,
        });
        $("#image_AfterImage").filemanager("image", {
          prefix: route_prefix,
        });
        $("#image_BeforeImage").filemanager("image", {
          prefix: route_prefix,
        });
      }
    },

    async fetchapiData_id() {
      // Gọi API và cập nhật biến apiData với dữ liệu từ API
      await axios
        .get(`/api/data-bookings/${this.id}`)
        .then((response) => {
          this.apiData_id = response.data;

          this.created_at = moment(this.apiData_id[0].created_at).format(
            "YYYY-MM-DD"
          );
          this.id = this.apiData_id[0].id;
          this.selectedShowroom = this.apiData_id[0].ShowroomID;
          this.Staff = this.apiData_id[0].source_name;
          this.selectedArtist = this.apiData_id[0].ArtistID;
          this.GetID = this.apiData_id[0].GetID;
          this.selectedStatus = this.apiData_id[0].status;
          this.selectedStatusNone = this.apiData_id[0].status;

          if (this.selectedStatus == "Unidentified") {
            this.isActive = true;
          } 

          this.cancel_wage = this.apiData_id[0].cancel_wage;
          this.change_service_wage= this.apiData_id[0].change_service_wage;
          this.OT_wage = this.apiData_id[0].OT_wage;
          this.StatusPresent = this.apiData_id[0].status;
          this.selectedDate = this.apiData_id[0].date;
          this.selectedArtist = this.apiData_id[0].ArtistID;
          this.startTime = this.apiData_id[0].time;
          this.endTime = this.apiData_id[0].time_end;
          this.selectedServices = this.apiData_id[0].services[0].id;
          this.service_Idsnone = this.apiData_id[0].services[0].id;
          this.selectedServicesName = this.apiData_id[0].services[0].Name;
          this.time_service= this.apiData_id[0].services[0].Time;
          this.group_service =
            this.apiData_id[0].services[0].group_service.name;
          this.content = this.apiData_id[0].content;
          this.approved = this.apiData_id[0].action;
          this.approvednone = this.apiData_id[0].action;
          this.upsale = this.apiData_id[0].price.upsale;
          this.Refund =
            this.apiData_id[0].price.Deposit_price -
            this.apiData_id[0].price.Total_price;
          this.maxPartial_Done = this.apiData_id[0].price.Remaining_price;
          this.Partial_Done =
            this.apiData_id[0].price.Total_price -
            this.apiData_id[0].price.Deposit_price;
          this.valueOP = this.apiData_id[0].price.op_kpi;

          this.Cancel = this.apiData_id[0].content;
          this.maxRefund = this.apiData_id[0].price.Deposit_price;
          this.selectedDepositPrice = this.apiData_id[0].price.Deposit_price;
          if (this.apiData_id[0].ArtistID === 7) {
            this.selectedArtist = 0;
          } else {
            this.selectedArtist = this.apiData_id[0].ArtistID;
          }
          // Check if the payment object exists in the data
          if (this.apiData_id[0] && this.apiData_id[0].payment) {
            // Set this.selectedPaymentType to the value of payment_type
            this.selectedPaymentType = this.apiData_id[0].payment.payment_type;
            this.selectedPaymentRemainingType =
              this.apiData_id[0].payment.payment_type_remainding;
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
            source:
              this.apiData_id[0].Source !== null
                ? this.apiData_id[0].Source
                : this.apiData_id[0].get.Source,
            source_data:
              this.apiData_id[0].source_data !== null
                ? this.apiData_id[0].source_data
                : this.apiData_id[0].get.source_data,
            note:
              this.apiData_id[0].Note !== null
                ? this.apiData_id[0].Note
                : this.apiData_id[0].get.Note,
          };
          this.payment_deposits = this.apiData_id[0].payment.payment_deposit
            ? this.apiData_id[0].payment.payment_deposit.split(",")
            : [];
          this.payment_remaindings = this.apiData_id[0].payment
            .payment_remainding
            ? this.apiData_id[0].payment.payment_remainding.split(",")
            : [];
          this.After_imgs =
            this.apiData_id[0].After_img !== null &&
            this.apiData_id[0].After_img !== undefined &&
            this.apiData_id[0].After_img !== ""
              ? this.apiData_id[0].After_img.split(",")
              : this.apiData_id[0].get.After_img !== null &&
                this.apiData_id[0].get.After_img !== undefined &&
                this.apiData_id[0].get.After_img !== ""
              ? this.apiData_id[0].get.After_img.split(",")
              : [];

          this.Before_imgs =
            this.apiData_id[0].Before_img !== null &&
            this.apiData_id[0].Before_img !== undefined &&
            this.apiData_id[0].Before_img !== ""
              ? this.apiData_id[0].Before_img.split(",")
              : this.apiData_id[0].get.Before_img !== null &&
                this.apiData_id[0].get.Before_img !== undefined &&
                this.apiData_id[0].get.Before_img !== ""
              ? this.apiData_id[0].get.Before_img.split(",")
              : [];
          this.fetchApiData();
          this.fetchShowroomSchedule();
          this.calculateTotalSelectedServicesPrice();

        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },

    async fetchShowrooms() {
      await axios
        .get("/api/showrooms")
        .then((response) => {
          this.showrooms = response.data;
          this.showroomsnone = response.data;
        })
        .catch((error) => {
          console.error("Error fetching showrooms:", error);
        });
    },

    async fetchGroupServices() {
      await axios
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
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    },

    changeSelectedShowroom() {
      Promise.all([this.fetchApiData()]).then(() => {
        this.filterActiveDays();
      });

      this.updateArtistshowroom(this.selectedShowroom, null);

    },

    fetchArtists() {
      // Gọi API và cập nhật biến apiData với dữ liệu từ API
      axios
        .get(`/api/artist`)
        .then((response) => {
          this.artists = response.data;
          this.artistsnone = response.data;
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
      if (!this.selectedDate || !this.selectedShowroom) return;

      // Gửi yêu cầu API để lấy dữ liệu
      axios
        .get(
          `/api/date-active/${this.selectedDate}/${this.selectedShowroom}/${this.selectedArtist}`
        )
        .then((response) => {
          if (this.selectedStatus == "Unidentified") {
            this.isActive = true;
          } else {
            // Lấy giá trị active từ API
            this.isActive = response.data.active;
          }

          // Kết quả true hoặc false có thể được sử dụng tùy thuộc vào logic của bạn
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      this.showfilteredDays = true;
      this.filteredDays = this.apiData.filter(
        (schedule) =>
          schedule.date === this.selectedDate &&
          parseInt(schedule.ArtistID) === parseInt(this.selectedArtist) &&
          parseInt(schedule.id) !== parseInt(this.id)
      );
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

    checkTimeConflict() {
      
      this.filterActiveDays();

      this.checkSelectedDate();

      if (!this.startTime || !this.endTime) {
        this.isTimeConflict = false;
        return;
      }

      const selectedStartTime = new Date(`1970-01-01T${this.startTime}`);
      const selectedEndTime = new Date(`1970-01-01T${this.endTime}`);
      // ...
      // Kiểm tra xem thời gian bắt đầu và kết thúc nằm trong khoảng từ 8AM đến 8PM
      const isStartTimeValid =
        selectedStartTime.getHours() >= 8 && selectedStartTime.getHours() < 20;
      const isEndTimeValid =
        selectedEndTime.getHours() >= 8 && selectedEndTime.getHours() < 20;
      // Kiểm tra xung đột thời gian cho cả startTime và endTime
      const conflict = this.filteredDays.some((schedule) => {
        const startTime = new Date(`1970-01-01T${schedule.time}`);
        const endTime = new Date(`1970-01-01T${schedule.time_end}`);

        // Kiểm tra xem selectedStartTime và selectedEndTime nằm trong khoảng thời gian của lịch trình
        const isStartTimeInsideSchedule =
          selectedStartTime >= startTime && selectedStartTime < endTime;
        const isEndTimeInsideSchedule =
          selectedEndTime > startTime && selectedEndTime <= endTime;

        // Kiểm tra xem startTime và endTime của lịch trình nằm trong khoảng thời gian của selectedStartTime và selectedEndTime
        const isScheduleTimeInsideSelected =
          startTime >= selectedStartTime && endTime <= selectedEndTime;

        // Kiểm tra xem selectedStartTime và selectedEndTime hoặc startTime và endTime của lịch trình có trùng nhau không
        const isTimeEqual =
          selectedStartTime.getTime() === startTime.getTime() &&
          selectedEndTime.getTime() === endTime.getTime();

        return (
          isStartTimeInsideSchedule ||
          isEndTimeInsideSchedule ||
          isScheduleTimeInsideSelected ||
          isTimeEqual
        );
      });

      if (
        this.selectedStatus == "Unidentified" &&
        selectedStartTime < selectedEndTime
      ) {
        this.isTimeConflict = false;
        this.showAlert = false;
      } else if (
        conflict ||
        selectedStartTime >= selectedEndTime ||
        !isStartTimeValid ||
        !isEndTimeValid
      ) {
        this.isTimeConflict = true;
        this.showAlert = true;
        this.startTime = null;
        this.endTime = null;
      } else {
        this.isTimeConflict = false;
        this.showAlert = false;
      }
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
        /*        this.showWarning = true; */
        this.showWarning = false;
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
        this.selectedDepositPrice < 0 ||
        this.selectedDepositPrice > this.bookingvalue ||
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

      this.bookingvalue = serviceTotalPrice;

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
          this.updateRemainingValue();
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
    this.adminId = this.$root.adminId;

    this.artistId = this.$root.artistId;

    this.employeeId = this.$root.employeeId;

    this.manage_supers = this.$root.manage_supers;

    this.fetchApiData();
    this.fetchShowrooms();
    this.fetchServices();
    this.fetchArtistlevels();
    this.fetchShowroomSchedule();
    this.fetchArtists();
    this.fetchapiData_id();
    this.fetchGroupServices();
    this.fetchapiDataEmployee();
    this.fetchArtist();
    this.fetchapiDataParner();
    this.fetchArtistsShowrooms();


    this.updateArtistshowroom(this.selectedShowroom, null);
    if (this.approved == "approved" && this.employeeId !== null) {
      this.checkEmployee = true;
    }
  },
};
</script>
<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
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
  width: 170px;
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
  width: 50% !important;
  padding: 1rem;
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
</style>

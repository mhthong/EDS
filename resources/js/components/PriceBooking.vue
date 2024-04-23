<template>
  <div>
    <ul class="main__body__box-info">
      <li class="Price">
        <img
          :src="'/assets/images/total%20booking%20price.png'"
          alt=""
          srcset=""
        />
        <h6>Booking Value</h6>
        <h4>${{ this.servies_price }}</h4>
      </li>

      <li class="Price">
        <img :src="'/assets/images/Revenue.png'" alt="" srcset="" />
        <h6>Total Price</h6>
        <h4>${{ this.Total_price }}</h4>
      </li>
      <li class="Price">
        <img :src="'/assets/images/Deposit.png'" alt="" srcset="" />
        <h6>Deposit</h6>
        <h4>${{ this.Deposit_price }}</h4>
      </li>

      <li class="Price">
        <img :src="'/assets/images/Remaining.png'" alt="" srcset="" />
        <h6>Remaining</h6>
        <h4>${{ this.Remaining_price }}</h4>
      </li>

      <li class="Price">
        <img
          :src="'/assets/images/total%20booking%20price.png'"
          alt=""
          srcset=""
        />
        <h6>Upsell</h6>
        <h4>${{ this.upsale }}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
import axios, { Axios } from "axios";

export default {
  data() {
    return {
      id: "",
      currentURL: "",
      apiData_id: [],
      Total_price: "",
      Deposit_price: "",
      Remaining_price: "",
      servies_price: "",
      upsale:"",
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
  },

  watch: {},

  computed: {},

  methods: {
    fetchapiData_id() {
      // Gọi API và cập nhật biến apiData với dữ liệu từ API
      axios
        .get(`/api/data-bookings/${this.id}`)
        .then((response) => {
          this.apiData_id = response.data;
          this.Total_price = this.apiData_id[0].price.Total_price;
          this.Deposit_price = this.apiData_id[0].price.Deposit_price;
          this.Remaining_price = this.apiData_id[0].price.Remaining_price;
          this.servies_price = this.apiData_id[0].price.servies_price;
          this.upsale = this.apiData_id[0].price.upsale;
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },
  },

  mounted() {
    this.fetchapiData_id();
  },
};
</script>

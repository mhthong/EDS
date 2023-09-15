<template>
  <div>
    <ul class="main__body__box-info">
				<li>
          <i class="fa-solid fa-money-bill-trend-up" style="color: #ff6666;"></i>
					<h5>${{ this.Total_price }}</h5>
					<p>Total Price</p>
				</li>
				<li>
					<i class="ph-wallet-fill"></i>
					<h5>${{ this.Remaining_price }}</h5>
					<p>Remaining Price</p>
				</li>
				<li>
          <i class="ph-shopping-bag-fill"></i>
					<h5>${{ this.Deposit_price }}</h5>
					<p>Deposit Price</p>
				</li>
        <li>
					<i class="fa-brands fa-servicestack" style="color: #eab3e0;"></i>
					<h5>${{ this.servies_price }}</h5>
					<p>Booking Price</p>
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
      Total_price : "",
      Deposit_price : "",
      Remaining_price : "",
      servies_price: "",
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

  computed: {

  },

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
          this.servies_price = this.apiData_id[0].price.servies_price

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

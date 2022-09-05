<template>
  <div class="page-wrapper">
    <main class="main account">
      <Breadcrumb pageName="Address" />
      <div class="page-content mt-4 mb-10 pb-6">
        <div class="container">
          <div class="tab tab-vertical gutter-lg">
            <div class="tab-content col-lg-12 col-md-12">
              <div class="tab-pane active" id="address">
                <address-tab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
import AddressTab from "../account/AddressTab.vue";
export default {
  components: {
    AddressTab,
  },
  mounted() {
    if (!this.$auth.loggedIn) {
      this.$router.push({
        name: "auth",
      });
    }
  },
  async fetch() {},
  async asyncData() {
    return;
  },
  data() {
    return {
      coupon: "",
    };
  },
  mounted() {
    this.$store.dispatch("cart/updateCart");
  },
  computed: {
    totals() {
      return this.$store.state.cart.totals;
    },
    cartList() {
      return this.$store.state.cart.carts;
    },
    all_total_price() {
      return this.$store.getters["cart/totalAmount"];
    },
    totalCart() {
      return this.$store.getters["cart/totalCart"];
    },
  },
  methods: {
    setCoupon() {
      this.$axios
        .post("cart/set-coupon/", { code: this.coupon })
        .then((response) => {
          if (response.status == 200) {
            this.$toast.success("Successfuly Add Coupon", { duration: 3000 });
          } else {
            this.$toast.error("Error", { duration: 3000 });
          }
        })
        .catch((e) => {
          console.log(e);
          this.$toast.error("Error", { duration: 3000 });
        });
      this.$store.dispatch("cart/updateCart");
    },
    getStatus(status) {
      if (status == 0) return "Pending";
      if (status == 1) return "Confirmed";
      if (status == 2) return "Canceled";
    },
  },
};
</script>


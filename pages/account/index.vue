<template>
  <div class="page-wrapper">
    <main class="main account">
      <Breadcrumb pageName="Account" />
      <div class="page-content mt-4 mb-10 pb-6">
        <div class="container">
          <h2 class="title title-center mb-10">My Account</h2>
          <div class="tab tab-vertical gutter-lg">
            <ul class="nav nav-tabs mb-4 col-lg-3 col-md-4" role="tablist">
              <li class="nav-item">
                <a class="nav-link" href="#orders">Orders</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#address">Address</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#account">Account details</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login.html">Logout</a>
              </li>
            </ul>
            <div class="tab-content col-lg-9 col-md-8">
              <div class="tab-pane active" id="orders">
                <orders-tab />
              </div>
              <div class="tab-pane" id="address">
                <address-tab />
              </div>
              <div class="tab-pane" id="account">
                <account-tab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from "vue";
import AddressTab from "./AddressTab.vue";
import AccountTab from "./AccountTab.vue";
import OrdersTab from "./OrdersTab.vue";

export default Vue.extend({
  components: {
    AddressTab,
    AccountTab,
    OrdersTab,
  },
  head() {
    return {
      title: "account",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
    };
  },
  mounted() {
    // const Checkout = require("@payvision/checkout-library");
    // const options = {
    //   live: false,
    // };
    // const checkout = new Checkout(
    //   "{{CHECKOUT_ID}}",
    //   "checkout-container",
    //   options
    // );
    // checkout.render();
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 10000)
    // })
  },
  async asyncData() {
    return;
  },
  data() {
    return {
      selected: 0,
      countries: [],
      cities: [],
    };
  },
  methods: {
    handleUploading() {
      this.$toast.show("my message", { duration: 3000 });
    },
  },
});
</script>

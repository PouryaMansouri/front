<template>
  <div class="page-wrapper">
    <main class="main checkout">
      <div class="page-content pt-7 pb-10 mb-10">
        <BuyProcessWizardTab :active="'checkout'" />
        <div class="container mt-7">
          <div class="col-lg-12 main-content">
            <div class="row cols-2 cols-sm-3 product-wrapper">
              <div v-for="(item, index) in addresses" :key="index">
                <div class="product-wrap">
                  <AddressComponent :address="item" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: "checkout",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/vendor/fontawesome-free/css/all.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/vendor/animate/animate.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/vendor/magnific-popup/magnific-popup.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/vendor/sticky-icon/stickyicon.css",
        },
        { rel: "stylesheet", type: "text/css", href: "/css/style.min.css" },
      ],
      script: [
        {
          src: "/vendor/jquery/jquery.min.js",
          body: true,
        },
        {
          src: "/vendor/imagesloaded/imagesloaded.pkgd.min.js",
          body: true,
        },
        {
          src: "/vendor/magnific-popup/jquery.magnific-popup.min.js",
          body: true,
        },
        {
          src: "/js/main.min.js",
          body: true,
        },
        {
          src: "/vendor/sticky/sticky.min.js",
          body: true,
        },
        {
          src: "/vendor/elevatezoom/jquery.elevatezoom.min.js",
          body: true,
        },
      ],
    };
  },
  mounted() {
    if (!this.$auth.loggedIn) {
      this.$router.push({
        name: "auth",
      });
    }
  },
  async asyncData() {
    return;
  },
  data() {
    return {
      addresses: [],
    };
  },
  async fetch() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const address = await this.$axios.get("accounts/address/list/");
      this.addresses = address.data;
    },
  },
});
</script>

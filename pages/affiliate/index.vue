<template>
  <div class="page-wrapper">
    <main class="main">
      <div class="page-content wishlist-empty">
        <div class="container">
          <div class="main-content">
            <i class="d-icon-heart wishlist-icon"></i>
            <h2 class="wishlist-descri">Welcome to Affiliate</h2>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script >
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: "wishlist",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
    };
  },
  async asyncData() {
    return;
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    const affiliateCode = this.$router.currentRoute.query["affiliate_code"];
    this.$axios
      .post("affiliate/check/", { code: affiliateCode })
      .then((response) => {
        if (response.status == 200) {
          const link = response.data.link;
          this.$store.dispatch("affiliate/addAffiliate", affiliateCode);

          window.location.replace(link);
        }
      })
      .catch((e) => {});
  },
});
</script>

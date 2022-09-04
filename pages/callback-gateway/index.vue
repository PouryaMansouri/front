<template>
  <div class="page-wrapper">
    <main class="main">
      <div class="page-content wishlist-empty">
        <div class="container">
          <div class="main-content">
            <h2 v-if="success" class="wishlist-descri">Your Payment Done</h2>
            <h2 v-else class="wishlist-descri">Payment Fail</h2>
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
    const tc = this.$router.currentRoute.query["tc"];
    this.$axios
      .post("callback-gateway/", { tc })
      .then((response) => {
        if (response.status == 200) {
          const { id } = response.data;
          this.$router.push({ name: "order-details-id", params: { id } });
        }
      })
      .catch((e) => {});
  },
});
</script>

<template>
<div></div>
  <!-- <order-component :order="order" /> -->
</template>

<script>
import Vue from "vue";
import OrderComponent from "~/components/OrderComponent.vue";

export default Vue.extend({
  components: { OrderComponent },
  head() {
    return {
      title: "order details",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
    };
  },
  async asyncData({ params, $axios }) {
    const responses = await Promise.all([
      await $axios.get(`orders/order-detail/${params.id}/`),
    ]);
    console.log(responses[0].data);
    return {
      order: responses[0].data,
    };
  },
  data() {
    return {};
  },
});
</script>
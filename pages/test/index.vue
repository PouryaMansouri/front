<template>
  <div>
    <button @click="test">test</button>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  components: {},
  head() {
    return {
      title: "request page",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
    };
  },
  mounted() {},
  async asyncData() {
    return;
  },
  methods: {
    async test() {
      this.$store.dispatch("cart/addToCartWhenLogin");
    },
  },
  data() {
    return {
      askBody: {
        message: "",
        name: "",
        email: "",
        phone: "",
      },
    };
  },
});
</script>

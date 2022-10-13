<template>
  <div
    class="card border-success mb-3"
    style="max-width: 40rem; border: solid; padding: 10px"
  >
    <div class="card-body text-success">
      <p class="card-text">country: {{ address.country.name }}</p>
      <p class="card-text">city: {{ address.city.name }}</p>
      <p class="card-text">street: {{ address.street }}</p>
      <p class="card-text">street number: {{ address.street_number }}</p>
      <p class="card-text">zip code: {{ address.zip_code }}</p>
    </div>

    <button
      @click="createOrder(address.id)"
      style="width: 200px"
      class="btn btn-dark btn-rounded btn-order"
    >
      Checkout
    </button>
  </div>
</template>
<script>
export default {
  props: ["address"],
  data() {
    return {};
  },
  methods: {
    createOrder(id) {
      this.$axios
        .post("orders/create/", {
          address: id,
          affiliate_code: this.$cookies.get("affiliate_code"),
        })
        .then((response) => {
          if (response.status == 200) {
            this.$store.dispatch("cart/resetCart");
            this.$toast.success("Successful", { duration: 3000 });
            const { id } = response.data;
            this.$router.push({ name: "order-details-id", params: { id } });
          } else {
            this.$toast.error("Error", { duration: 3000 });
          }
        })
        .catch((e) => {
          Object.keys(e.response.data).forEach((element) => {
            this.$toast.error(e.response.data[element], { duration: 3000 });
          });
        });
    },
  },
  async fetch() {},
};
</script>

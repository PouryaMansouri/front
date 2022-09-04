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

    <button style="width: 200px" class="btn btn-dark btn-rounded btn-order">
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
  methods: {},
  async fetch() {},
};
</script>

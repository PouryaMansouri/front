<template>
  <div class="step-by pr-4 pl-4">
    <h3
      class="title title-simple title-step"
      :class="active == 'cart' ? 'active' : ''"
    >
      <NuxtLink to="/cart">1. Shopping Cart</NuxtLink>
    </h3>
    <h3
      class="title title-simple title-step"
      :class="active == 'checkout' ? 'active' : ''"
    >
      <NuxtLink to="/checkout">2. Checkout</NuxtLink>
    </h3>
    <h3
      class="title title-simple title-step"
      :class="active == 'order' ? 'active' : ''"
    >
      <NuxtLink to="/order">3. Order Complete</NuxtLink>
    </h3>
  </div>
</template>
<script>
export default {
  props: ["active"],
  data() {
    return {};
  },
  methods: {},
  async fetch() {},
};
</script>
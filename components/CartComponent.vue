<template>
  <div class="dropdown cart-dropdown type2 mr-0 mr-lg-2">
    <a href="#" class="cart-toggle label-block link">
      <div class="cart-label d-lg-show">
        <span class="cart-name">Shopping Cart:</span>
        <span class="cart-price">${{ all_total_price }}</span>
      </div>
      <i class="d-icon-bag"
        ><span class="cart-count">{{ totalCart }}</span></i
      >
    </a>
    <div class="dropdown-box">
      <div class="products scrollable">
        <div
          v-for="element in list"
          :key="element.item"
          class="product product-cart"
        >
          <figure class="product-media">
            <nuxt-link :to="'/product/' + element.slug"
              ><img :src="element.image" alt="product" width="80" height="88"
            /></nuxt-link>

            <button
              @click="removeFromCart(element.item)"
              class="btn btn-link btn-close"
            >
              <i class="fas fa-times"></i><span class="sr-only">Close</span>
            </button>
          </figure>
          <div class="product-detail">
            <a class="product-name">{{ element.name }}</a>
            <a class="product-name">shop:{{ element.shop }}</a>
            <div class="price-box">
              <span class="product-quantity">{{ element.quantity }}</span>
              <span class="product-price">${{ element.price }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Products  -->
      <div class="cart-total">
        <label>Subtotal:</label>
        <span class="price">${{ all_total_price }}</span>
      </div>
      <!-- End of Cart Total -->
      <div class="cart-action">
        <NuxtLink
          v-if="this.$auth.loggedIn"
          to="/cart"
          class="btn btn-dark btn-link"
          >View Cart</NuxtLink
        >
        <NuxtLink v-else to="/auth" class="btn btn-dark btn-link"
          >Login</NuxtLink
        >
      </div>
      <!-- End of Cart Action -->
    </div>
    <!-- End Dropdown Box -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      // list: [],
      // all_total_price: 0,
    };
  },
  methods: {
    removeFromCart(item) {
      this.$store.dispatch("cart/removeCart", item);
    },
  },
  computed: {
    list() {
      return this.$store.state.cart.carts;
    },
    all_total_price() {
      return this.$store.getters["cart/totalAmount"];
    },
    totalCart() {
      return this.$store.getters["cart/totalCart"];
    },
  },
  async fetch() {
    // const { data } = await this.$axios.get("cart/user-cart-detail/");
    // this.list = data;
    // this.all_total_price = data.all_total_price;
  },
};
</script>
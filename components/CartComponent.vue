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
        <div v-for="item in list" :key="item.id" class="product product-cart">
          <figure class="product-media">
            <a :href="'product/' + item.slug">
              <img :src="item.image" alt="product" width="80" height="88" />
            </a>
            <button
              @click="removeFromCart(item.id)"
              class="btn btn-link btn-close"
            >
              <i class="fas fa-times"></i><span class="sr-only">Close</span>
            </button>
          </figure>
          <div class="product-detail">
            <a :href="'product/' + item.product_slug" class="product-name">{{
              item.name
            }}</a>
            <div class="price-box">
              <span class="product-quantity">{{ item.quantity }}</span>
              <span class="product-price">${{ item.price }}</span>
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
        <NuxtLink to="/cart" class="btn btn-dark btn-link">View Cart</NuxtLink>
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
    removeFromCart(id) {
      console.log(id);
      this.$store.dispatch("cart/removeProductFromCart", id);
    },
  },
  computed: {
    list() {
      console.log(this.$store.state.cart.carts);
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
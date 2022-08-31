<template>
  <div class="dropdown wishlist wishlist-dropdown off-canvas">
    <a class="wishlist-toggle" title="wishlist">
      <i class="d-icon-heart"></i>
    </a>
    <div class="canvas-overlay"></div>
    <!-- End Wishlist Toggle -->
    <div class="dropdown-box scrollable">
      <div class="canvas-header">
        <h4 class="canvas-title">wishlist</h4>
        <a href="#" class="btn btn-dark btn-link btn-icon-right btn-close"
          >close<i class="d-icon-arrow-right"></i
          ><span class="sr-only">wishlist</span></a
        >
      </div>
      <div class="products scrollable">
        <div
          v-for="element in wishlist"
          :key="element.id"
          class="product product-wishlist"
        >
          <figure class="product-media">
            <nuxt-link :to="'/product/' + element.slug">
              <img
                :src="element.image"
                width="100"
                height="100"
                alt="product"
              />
            </nuxt-link>
            <button
              @click="
                $store.dispatch(
                  'wishlist/removeProductFromWishlist',
                  element.id
                )
              "
              class="btn btn-link btn-close"
            >
              <i class="fas fa-times"></i><span class="sr-only"></span>
            </button>
          </figure>
          <div class="product-detail">
            <a :href="'/product/' + element.slug" class="product-name">{{
              element.name
            }}</a>
            <div class="price-box">
              <span class="product-price">${{ element.min_price }}</span>
            </div>
          </div>
        </div>
        <!-- End of wishlist Product -->
      </div>
      <nuxt-link to="/wishlist" class="btn btn-dark wishlist-btn mt-4"
        ><span>Go To Wishlist</span></nuxt-link
      >
      <!-- End of Products  -->
    </div>
    <!-- End Dropdown Box -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    wishlist() {
      return this.$store.state.wishlist.wishlist;
    },
  },
  async fetch() {},
};
</script>

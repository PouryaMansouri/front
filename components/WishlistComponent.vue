<template>
  <div class="dropdown wishlist wishlist-dropdown off-canvas">
    <a href="wishlist" class="wishlist-toggle" title="wishlist">
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
          v-for="item in list"
          :key="item.id"
          class="product product-wishlist"
        >
          <figure class="product-media">
            <a href="product.html">
              <img
                src="images/wishlist/product-1.jpg"
                width="100"
                height="100"
                alt="product"
              />
            </a>
            <button class="btn btn-link btn-close">
              <i class="fas fa-times"></i><span class="sr-only">Close</span>
            </button>
          </figure>
          <div class="product-detail">
            <a href="product.html" class="product-name">Girl's Dark Bag</a>
            <div class="price-box">
              <span class="product-price">$84.00</span>
            </div>
          </div>
        </div>

        <!-- End of wishlist Product -->
      </div>
      <a href="wishlist.html" class="btn btn-dark wishlist-btn mt-4"
        ><span>Go To Wishlist</span></a
      >
      <!-- End of Products  -->
    </div>
    <!-- End Dropdown Box -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  async fetch() {
    // const { data } = await this.$axios.get("categories/navbar/", {
    //   isBasic: true,
    // });
    // this.navbarMenuList = data;
  },
};
</script>

<template>
  <div>
    <figure class="product-media">
      <a :href="'/product/' + product.slug">
        <img
          :src="product.image"
          alt="Blue Pinafore Denim Dress"
          width="280"
          height="315"
          style="background-color: #f2f3f5"
        />
      </a>
      <div class="product-label-group">
        <label v-if="product.product_type === 1" class="product-label label-new"
          >New</label
        >
        <label
          v-if="product.product_type === 2"
          class="product-label label-sale"
          >Hot</label
        >
      </div>
      <div class="product-action-vertical">
        <a
          @click="addToWishList(product.id)"
          class="btn-product-icon btn-wishlist"
          title="Add to wishlist"
          ><i class="d-icon-heart"></i
        ></a>
      </div>
    </figure>
    <div class="product-details">
      <div class="product-cat">
        <a :href="'/search?q=' + product.category.slug">{{
          product.category.name
        }}</a>
      </div>
      <h3 class="product-name">
        <a :href="'/product/' + product.slug">{{ product.name }}</a>
      </h3>
      <div class="product-price">$ {{ product.min_price }}</div>
      <div class="ratings-container">
        <div class="ratings-full">
          <span
            class="ratings"
            :style="'width: ' + product.star * 20 + '%'"
          ></span>
          <span class="tooltiptext tooltip-top"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  data() {
    return {};
  },
  methods: {},
  async fetch() {},
};
</script>

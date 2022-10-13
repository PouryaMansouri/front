<template>
  <div class="page-wrapper">
    <main class="main">
      <div v-if="wishlist.length != 0" class="page-content pt-10 pb-10 mb-2">
        <div class="container">
          <table class="shop-table wishlist-table mt-2 mb-4">
            <thead>
              <tr>
                <th class="product-name"><span>Product</span></th>
                <th></th>
                <th class="product-price"><span>Price</span></th>
                <!-- <th class="product-stock-status">
                  <span>Stock status</span>
                </th> -->
                <th class="product-add-to-cart"></th>
                <th class="product-remove"></th>
              </tr>
            </thead>
            <tbody class="wishlist-items-wrapper">
              <tr v-for="element in wishlist" :key="element.id">
                <td class="product-thumbnail">
                  <nuxt-link :to="'/product/' + element.slug">
                    <figure>
                      <img
                        :src="element.image"
                        width="100"
                        height="100"
                        alt="product"
                      />
                    </figure>
                  </nuxt-link>
                </td>
                <td class="product-name">
                  <a>{{ element.name }}</a>
                </td>
                <td class="product-price">
                  <span class="amount">${{ element.min_price }}</span>
                </td>
                <!-- <td class="product-stock-status">
                  <span class="wishlist-in-stock">{{
                    getStatus(element.status)
                  }}</span>
                </td> -->
                <!-- <td class="product-add-to-cart">
                  <a href="product.html" class="btn-product btn-primary"
                    ><span>Select options</span></a
                  >
                </td> -->
                <td class="product-remove">
                  <div>
                    <a
                      @click="
                        $store.dispatch(
                          'wishlist/removeProductFromWishlist',
                          element.id
                        )
                      "
                      class="remove"
                      title="Remove this product"
                      ><i class="fas fa-times"></i
                    ></a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else class="page-content wishlist-empty">
        <div class="container">
          <div class="main-content">
            <i class="d-icon-heart wishlist-icon"></i>
            <h2 class="wishlist-descri">No products added to the wishlist</h2>
            <a class="btn btn-primary btn-rounded" href="/shops"> GO SHOP </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: "wishlist",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
    };
  },
  async asyncData() {
    return;
  },
  data() {
    return {};
  },
  computed: {
    wishlist() {
      return this.$store.state.wishlist.wishlist;
    },
  },
  methods: {
    // getStatus(status){
      

    // }
  },
});
</script>

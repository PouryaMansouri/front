<template>
  <div class="page-wrapper">
    <div v-if="cartList.length !== 0" class="main cart">
      <div class="page-content pt-7 pb-10">
        <BuyProcessWizardTab :active="'cart'" />
        <div class="container mt-7 mb-2">
          <div class="row">
            <div class="col-lg-8 col-md-12 pr-lg-4">
              <table class="shop-table cart-table">
                <thead>
                  <tr>
                    <th><span>Image</span></th>
                    <th><span>Product</span></th>
                    <th><span>Shop</span></th>
                    <th><span>Quantity</span></th>
                    <th><span></span></th>
                    <th><span>Price</span></th>
                    <th><span>Total</span></th>
                    <th><span>Discount</span></th>
                    <th><span>Finish</span></th>
                    <th><span>Status</span></th>
                    <th><span></span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="element in cartList" :key="element.id">
                    <td class="product-thumbnail">
                      <figure>
                        <nuxt-link :to="'/product/' + element.slug">
                          <img
                            :src="element.image"
                            width="100"
                            height="100"
                            alt="product"
                          />
                        </nuxt-link>
                      </figure>
                    </td>
                    <td class="product-name">
                      <div class="product-name-section">
                        <a>{{ element.name }}</a>
                      </div>
                    </td>
                    <td class="product-name">
                      <div class="product-name-section">
                        <a>{{ element.shop }}</a>
                        <span class="amount">{{ element.color.name }}</span>
                        <span class="amount">{{ element.size.name }}</span>
                      </div>
                    </td>
                    <td class="product-quantity">
                      <div class="input-group">
                        <button
                          @click="
                            $store.commit('cart/editQuantityDown', element.item)
                          "
                          class="d-icon-minus"
                        ></button>
                        <input
                          v-model="element.quantity"
                          class="form-control"
                          type="number"
                          min="1"
                        />
                        <button
                          @click="
                            $store.commit('cart/editQuantityUp', element.item)
                          "
                          class="d-icon-plus"
                        ></button>
                      </div>
                    </td>
                    <td class="product-close">x</td>
                    <td class="product-price">
                      <span class="amount">${{ element.price }}</span>
                    </td>
                    <td class="product-price">
                      <span class="amount">${{ element.total_price }}</span>
                    </td>
                    <td class="product-price">
                      <span class="amount">${{ element.total_discount }}</span>
                    </td>
                    <td class="product-price">
                      <span class="amount">${{ element.final_price }}</span>
                    </td>
                    <td class="product-name">
                      <div class="product-name-section">
                        <a>{{ getStatus(element.status) }}</a>
                      </div>
                    </td>
                    <td class="product-close">
                      <a
                        @click="
                          $store.dispatch('cart/removeCart', element.item)
                        "
                        class="product-remove"
                        title="Remove this product"
                      >
                        <i class="fas fa-times"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="cart-actions mb-6 pt-4">
                <nuxt-link
                  to="/shops"
                  class="
                    btn btn-dark btn-md btn-rounded btn-icon-left
                    mr-4
                    mb-4
                  "
                  ><i class="d-icon-arrow-left"></i>Continue Shopping</nuxt-link
                >
                <button
                  @click="$store.dispatch('cart/updateCart')"
                  class="
                    btn btn-outline btn-dark btn-md btn-rounded btn-disabled
                  "
                >
                  Update Cart
                </button>
              </div>
              <div class="cart-coupon-box mb-8">
                <h4 class="title coupon-title text-uppercase ls-m">
                  Coupon Discount
                </h4>
                <input
                  type="text"
                  name="coupon_code"
                  class="input-text form-control text-grey ls-m mb-4"
                  id="coupon_code"
                  v-model="coupon"
                  placeholder="Enter coupon code here..."
                />
                <button
                  @click="setCoupon"
                  class="btn btn-md btn-dark btn-rounded btn-outline"
                >
                  Apply Coupon
                </button>
              </div>
            </div>
            <aside class="col-lg-4 sticky-sidebar-wrapper">
              <div class="sticky-sidebar" data-sticky-options="{'bottom': 20}">
                <div class="summary mb-4">
                  <h3 class="summary-title text-left">Cart Totals</h3>
                  <table class="shipping">
                    <tr class="summary-subtotal">
                      <td>
                        <h4 class="summary-subtitle">Subtotal</h4>
                      </td>
                      <td>
                        <p class="summary-subtotal-price">
                          ${{ totals.total_price }}
                        </p>
                      </td>
                    </tr>
                  </table>
                  <table class="shipping">
                    <tr class="summary-subtotal">
                      <td>
                        <h4 class="summary-subtitle">Discount</h4>
                      </td>
                      <td>
                        <p class="summary-subtotal-price">
                          ${{ totals.total_items_discount }}
                        </p>
                      </td>
                    </tr>
                  </table>
                  <table class="shipping">
                    <tr class="summary-subtotal">
                      <td>
                        <h4 class="summary-subtitle">Coupon Discount</h4>
                      </td>
                      <td>
                        <p class="summary-subtotal-price">
                          ${{ totals.coupon_discount }}
                        </p>
                      </td>
                    </tr>
                  </table>
                  <table class="total">
                    <tr class="summary-subtotal">
                      <td>
                        <h4 class="summary-subtitle">Total</h4>
                      </td>
                      <td>
                        <p class="summary-total-price ls-s">
                          ${{ totals.final_price }}
                        </p>
                      </td>
                    </tr>
                  </table>
                  <a
                    href="/checkout"
                    class="btn btn-dark btn-rounded btn-checkout"
                    >Proceed to checkout</a
                  >
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="main cart-page">
      <nav class="breadcrumb-nav">
        <div class="container">
          <ul class="breadcrumb">
            <li>
              <a href="/"><i class="d-icon-home"></i></a>
            </li>
            <li>cart</li>
          </ul>
        </div>
      </nav>
      <div class="page-content cart-empty">
        <div class="container">
          <div class="main-content">
            <i class="d-icon-bag cart-icon"></i>
            <h2 class="cart-descri">No products added to the cart</h2>
            <a class="btn btn-primary btn-rounded" href="/shops"> GO SHOP </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    if (!this.$auth.loggedIn) {
      this.$router.push({
        name: "auth",
      });
    }
  },
  async fetch() {},
  async asyncData() {
    return;
  },
  data() {
    return {
      coupon: "",
    };
  },
  computed: {
    totals() {
      return this.$store.state.cart.totals;
    },
    cartList() {
      return this.$store.state.cart.carts;
    },
    all_total_price() {
      return this.$store.getters["cart/totalAmount"];
    },
    totalCart() {
      return this.$store.getters["cart/totalCart"];
    },
  },
  methods: {
    setCoupon() {
      this.$axios
        .post("cart/set-coupon/", { code: this.coupon })
        .then((response) => {
          if (response.status == 200) {
            this.$toast.success("Successfuly Add Coupon", { duration: 3000 });
          } else {
            this.$toast.error("Error", { duration: 3000 });
          }
        })
        .catch((e) => {
          console.log(e);
          this.$toast.error("Error", { duration: 3000 });
        });
    },
    getStatus(status) {
      if (status == 0) return "Pending";
      if (status == 1) return "Confirmed";
      if (status == 2) return "Canceled";
    },
  },
};
</script>


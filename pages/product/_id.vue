<template>
  <div class="page-wrapper">
    <!-- <h1 class="d-none">Riode - Responsive eCommerce HTML Template</h1> -->
    <main class="main single-product">
      <div class="page-content mb-10">
        <div class="container-fluid">
          <div class="row gutter-lg">
            <div class="col-lg-12 col-xxl-10">
              <div class="product product-single row mb-4">
                <div class="col-lg-7">
                  <div class="product-gallery row cols-sm-2">
                    <figure
                      v-for="item in product.gallery"
                      :key="item.id"
                      class="product-image mb-4"
                    >
                      <img
                        :src="item.image"
                        :data-zoom-image="item.image"
                        alt="Blue Pinafore Denim Dress"
                        width="800"
                        height="900"
                      />
                      <a href="#" class="product-image-full"
                        ><i class="d-icon-zoom"></i
                      ></a>
                    </figure>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="product-details">
                    <h1 class="product-name pt-lg-2">
                      {{ product.name }}
                    </h1>

                    <div class="product-price">${{ productPrice }}</div>
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span
                          class="ratings"
                          :style="'width: ' + averageRating.total * 20 + '%'"
                        ></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a
                        href="#product-tab-reviews"
                        class="link-to-tab rating-reviews"
                        >( {{ comments.length }} reviews )</a
                      >
                    </div>
                    <p class="product-short-desc">
                      {{ product.description }}
                    </p>
                    <div class="product-form product-color">
                      <label>Color:</label>
                      <div id="step0" class="product-variations">
                        <a
                          :class="colorClicked(color.id) ? 'active' : ''"
                          v-for="color in product.color"
                          :key="color.id"
                          @click="colorSelect(color)"
                          class="color element"
                          data-src="/images/demos/demo7/products/big1.jpg"
                          :style="
                            'border: 1px solid; background-color: ' + color.code
                          "
                        ></a>
                      </div>
                    </div>
                    <div class="product-form product-size">
                      <label>Size:</label>
                      <div class="product-form-group">
                        <div
                          id="step1"
                          class="element"
                          :class="sizeClicked(size.id) ? 'active' : ''"
                          @click="sizeClick(size.id)"
                          style="padding: 5px"
                          v-for="size in productSize"
                          :key="size.id"
                        >
                          <button
                            @click="sizeSelect(size, productSize.color.name)"
                            :style="
                              'padding: 5px; border: 1px solid; border-color:' +
                              productSize.color.code
                            "
                          >
                            {{ size.name }}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="product-form product-size">
                      <label>Shop:</label>
                      <div class="product-form-group">
                        <div
                          id="step2"
                          class="element"
                          :class="shopClicked(shop.shop_id) ? 'active' : ''"
                          @click="shopClick(shop.shop_id)"
                          style="padding: 5px"
                          v-for="shop in productShop"
                          :key="shop.shop_id"
                        >
                          <button
                            @click="shopSelect(shop)"
                            :style="
                              'padding: 5px; border: 1px solid; border-color:' +
                              productSize.color.code
                            "
                          >
                            {{ shop.shop_name }}
                          </button>
                        </div>
                      </div>
                    </div>

                    <hr class="product-divider" />

                    <div class="product-form product-qty">
                      <div class="product-form-group">
                        <div class="input-group">
                          <button
                            @click="changeProductPick('minus')"
                            class="d-icon-minus"
                          ></button>
                          <input
                            v-model="productPick"
                            class="form-control"
                            type="number"
                            min="1"
                            :max="shop.quantity"
                          />
                          <button
                            @click="changeProductPick('plus')"
                            class="d-icon-plus"
                          ></button>
                        </div>
                        <button
                          id="step3"
                          @click="addToCart"
                          :class="addToCartActive ? 'btn-dark' : ''"
                          class="btn btn-rounded cart"
                        >
                          <i class="d-icon-bag"></i> Add To Cart
                        </button>
                      </div>
                    </div>

                    <hr class="product-divider mb-3" />

                    <div class="product-footer">
                      <div>
                        <button
                          @click="
                            $store.dispatch(
                              'wishlist/addProductToWishlist',
                              product
                            )
                          "
                          style="border: transparent"
                          class="btn-product btn-compare"
                        >
                          <i class="d-icon-heart"></i>Add To Wishlist
                        </button>
                        <span class="divider"></span>
                        <!-- <button
                          @click="addToCompare"
                          style="border: transparent"
                          class="btn-product btn-compare"
                        >
                          <i class="d-icon-random"></i>Add To Compare
                        </button> -->
                      </div>
                    </div>

                    <hr class="product-divider mb-3" />

                    <div class="accordion accordion-simple mb-4">
                      <div class="card border-no card-description">
                        <div class="card-header">
                          <a href="#collapse1-1" class="collapse"
                            >Description</a
                          >
                        </div>
                        <div id="collapse1-1" class="card-body expanded">
                          <div class="row mt-4">
                            <p class="mb-2">
                              {{ product.description }}
                            </p>
                            <div class="mb-4">
                              <h5
                                class="
                                  description-title
                                  mb-4
                                  font-weight-semi-bold
                                  ls-m
                                "
                              >
                                Features
                              </h5>
                              <ul>
                                <div
                                  v-for="item in product.product_features"
                                  :key="item.id"
                                >
                                  <span></span>
                                  {{ item.description }}
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card card-reviews">
                        <div class="card-header">
                          <a href="#collapse1-4" class="expand"
                            >Reviews ({{ comments.length }})</a
                          >
                        </div>
                        <div class="card-body collapsed" id="collapse1-4">
                          <div class="row">
                            <div class="col-12 mb-6">
                              <div class="avg-rating-container">
                                <mark>{{
                                  averageRating.total.toFixed(1)
                                }}</mark>
                                <div class="avg-rating">
                                  <span class="avg-rating-title"
                                    >Average Rating</span
                                  >
                                  <div class="ratings-container mb-0">
                                    <div class="ratings-full">
                                      <span
                                        class="ratings"
                                        :style="
                                          'width: ' +
                                          averageRating.total * 20 +
                                          '%'
                                        "
                                      ></span>
                                      <span
                                        class="tooltiptext tooltip-top"
                                      ></span>
                                    </div>
                                    <span class="rating-reviews"
                                      >({{ comments.length }} Reviews)</span
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="ratings-list mb-2">
                                <div class="ratings-item">
                                  <div class="ratings-container mb-0">
                                    <div class="ratings-full">
                                      <span
                                        class="ratings"
                                        style="width: 100%"
                                      ></span>
                                      <span
                                        class="tooltiptext tooltip-top"
                                      ></span>
                                    </div>
                                  </div>
                                  <div class="rating-percent">
                                    <span
                                      :style="
                                        'width: ' + averageRating.star5 + '%'
                                      "
                                    ></span>
                                  </div>
                                  <div class="progress-value">
                                    {{ averageRating.star5 }}%
                                  </div>
                                </div>
                                <div class="ratings-item">
                                  <div class="ratings-container mb-0">
                                    <div class="ratings-full">
                                      <span
                                        class="ratings"
                                        style="width: 80%"
                                      ></span>
                                      <span class="tooltiptext tooltip-top"
                                        >4.00</span
                                      >
                                    </div>
                                  </div>
                                  <div class="rating-percent">
                                    <span
                                      :style="
                                        'width: ' + averageRating.star4 + '%'
                                      "
                                    ></span>
                                  </div>
                                  <div class="progress-value">
                                    {{ averageRating.star4 }}%
                                  </div>
                                </div>
                                <div class="ratings-item">
                                  <div class="ratings-container mb-0">
                                    <div class="ratings-full">
                                      <span
                                        class="ratings"
                                        style="width: 60%"
                                      ></span>
                                      <span class="tooltiptext tooltip-top"
                                        >4.00</span
                                      >
                                    </div>
                                  </div>
                                  <div class="rating-percent">
                                    <span
                                      :style="
                                        'width: ' + averageRating.star3 + '%'
                                      "
                                    ></span>
                                  </div>
                                  <div class="progress-value">
                                    {{ averageRating.star3 }}%
                                  </div>
                                </div>
                                <div class="ratings-item">
                                  <div class="ratings-container mb-0">
                                    <div class="ratings-full">
                                      <span
                                        class="ratings"
                                        style="width: 40%"
                                      ></span>
                                      <span class="tooltiptext tooltip-top"
                                        >4.00</span
                                      >
                                    </div>
                                  </div>
                                  <div class="rating-percent">
                                    <span
                                      :style="
                                        'width: ' + averageRating.star2 + '%'
                                      "
                                    ></span>
                                  </div>
                                  <div class="progress-value">
                                    {{ averageRating.star2 }}%
                                  </div>
                                </div>
                                <div class="ratings-item">
                                  <div class="ratings-container mb-0">
                                    <div class="ratings-full">
                                      <span
                                        class="ratings"
                                        style="width: 20%"
                                      ></span>
                                      <span class="tooltiptext tooltip-top"
                                        >4.00</span
                                      >
                                    </div>
                                  </div>
                                  <div class="rating-percent">
                                    <span
                                      :style="
                                        'width: ' + averageRating.star1 + '%'
                                      "
                                    ></span>
                                  </div>
                                  <div class="progress-value">
                                    {{ averageRating.star1 }}%
                                  </div>
                                </div>
                              </div>
                              <a
                                class="
                                  btn btn-dark btn-rounded
                                  submit-review-toggle
                                "
                                >Submit Review</a
                              >
                            </div>
                            <div class="col-12 comments pt-2 pb-10 border-no">
                              <ul class="comments-list">
                                <li v-for="item in comments" :key="item.id">
                                  <div class="comment">
                                    <figure class="comment-media">
                                      <img
                                        v-if="item.avatar"
                                        :src="item.avatar"
                                        alt="avatar"
                                      />
                                    </figure>
                                    <div class="comment-body">
                                      <div
                                        class="comment-rating ratings-container"
                                      >
                                        <div class="ratings-full">
                                          <span
                                            class="ratings"
                                            :style="
                                              'width: ' + item.rate * 20 + '%'
                                            "
                                          ></span>
                                          <span
                                            class="tooltiptext tooltip-top"
                                          ></span>
                                        </div>
                                      </div>
                                      <div class="comment-user">
                                        <span class="comment-date"
                                          >by
                                          <span
                                            class="
                                              font-weight-semi-bold
                                              text-uppercase text-dark
                                            "
                                            >{{ item.nickname }}</span
                                          >
                                          on
                                          <span
                                            class="
                                              font-weight-semi-bold
                                              text-dark
                                            "
                                            >{{
                                              new Date(item.created_at)
                                                .toString()
                                                .split("GMT")[0]
                                            }}</span
                                          ></span
                                        >
                                      </div>

                                      <div class="comment-content mb-5">
                                        <p>
                                          {{ item.body }}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <!-- End Comments -->
                          <div class="review-form-section">
                            <div class="review-overlay"></div>
                            <div class="review-form-wrapper">
                              <div class="title-wrapper text-left">
                                <h3
                                  class="
                                    title title-simple
                                    text-left text-normal
                                  "
                                >
                                  Add a Review
                                </h3>
                                <p>
                                  Your email address will not be published.
                                  Required fields are marked
                                </p>
                              </div>
                              <div class="rating-form">
                                <label for="rating" class="text-dark"
                                  >Your rating
                                </label>
                                <span class="rating-stars selected">
                                  <a
                                    @click="comment.rate = 1"
                                    class="star-1 active"
                                    >1</a
                                  >
                                  <a @click="comment.rate = 2" class="star-2"
                                    >2</a
                                  >
                                  <a @click="comment.rate = 3" class="star-3"
                                    >3</a
                                  >
                                  <a @click="comment.rate = 4" class="star-4"
                                    >4</a
                                  >
                                  <a @click="comment.rate = 5" class="star-5"
                                    >5</a
                                  >
                                </span>
                              </div>
                              <div>
                                <input
                                  v-model="comment.email"
                                  id="email"
                                  cols="30"
                                  rows="6"
                                  class="form-control mb-4"
                                  placeholder="Email"
                                  required
                                />
                                <input
                                  v-model="comment.nickname"
                                  id="nickname"
                                  cols="30"
                                  rows="6"
                                  class="form-control mb-4"
                                  placeholder="Nick Name"
                                  required
                                />
                                <textarea
                                  v-model="comment.body"
                                  id="reply-message"
                                  cols="30"
                                  rows="6"
                                  class="form-control mb-4"
                                  placeholder="Comment"
                                  required
                                ></textarea>
                                <button
                                  @click="submitComment"
                                  class="btn btn-primary btn-rounded"
                                >
                                  Submit<i class="d-icon-arrow-right"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <!-- End Reply -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section
                v-if="product.related_products.length !== 0"
                class="pt-7 pb-1"
              >
                <h2 class="title title-simple ls-m">Related Products</h2>
                <div
                  class="
                    owl-carousel owl-theme
                    row
                    owl-nav-full
                    cols-lg-4 cols-md-3 cols-2
                  "
                  data-owl-options="{
                            'items': 4,
                            'nav': false,
                            'dots': true,
                            'loop': false,
                            'margin': 20,
                            'responsive': {
                                '0': {
                                    'items': 2
                                },
                                '768': {
                                    'items': 3
                                },
                                '992': {
                                    'items': 4,
                                    'dots': false,
                                    'nav': true
                                }
                            }
                        }"
                >
                  <div
                    v-for="(item, index) in relatedProductsList"
                    :key="index"
                  >
                    <product-component :product="item" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
    <v-tour name="myTour" :steps="steps" :options="myOptions"></v-tour>
  </div>
</template>
<script>
import ProductComponent from "~/components/ProductComponent.vue";
export default {
  components: { ProductComponent },
  head() {
    return {
      title: this.product.name,
      meta: [
        { hid: "og-type", property: "og:type", content: "website" },
        { hid: "og-title", property: "og:title", content: this.product.name },
        {
          hid: "og-desc",
          property: "og:description",
          content: this.product.description,
        },
      ],
    };
  },
  data() {
    return {
      addToCartActive: false,
      sizeId: 0,
      colorId: 0,
      shopId: 0,
      myOptions: {
        labels: {
          buttonSkip: "Skip",
          buttonPrevious: "Previous",
          buttonNext: "Next",
          buttonStop: "Finish",
        },
      },
      steps: [],
      steps0: [
        {
          target: "#step0",
          content: `Choose <strong>Color</strong> First`,
        },
      ],
      steps1: [
        {
          target: "#step1",
          content: `Choose <strong>Size</strong>`,
        },
      ],
      steps2: [
        {
          target: "#step2",
          content: `Choose <strong>Shop</strong>`,
        },
      ],
      stock: {},
      product: { stock_detail: {}, min_price: 0 },
      shop: { quantity: 0 },
      productQuantity: null,
      productSize: [],
      productShop: [],
      relatedProductsList: [],
      comments: [
        {
          rate: 0,
        },
      ],
      productPrice: 0,
      productPick: 0,
      comment: {
        object_id: 0,
        nickname: "",
        rate: 1,
        body: "",
      },
    };
  },
  computed: {},
  methods: {
    setStep(id) {
      if (id == 0) this.steps = this.steps0;
      if (id == 1) this.steps = this.steps1;
      if (id == 2) this.steps = this.steps2;
      this.$tours["myTour"].start();
    },
    changeProductPick(type) {
      if (this.shopId == 0) {
        if (this.colorId == 0) this.setStep(0);
        else if (this.sizeId == 0) this.setStep(1);
        else this.setStep(2);
      }
      if (
        type == "plus" &&
        this.shop.quantity > 0 &&
        this.productPick < this.shop.quantity
      )
        this.productPick = this.productPick + 1;

      if (type == "minus" && this.productPick > 1)
        this.productPick = this.productPick - 1;
    },
    colorSelect(color) {
      this.colorId = color.id;
      this.shop = { quantity: 0 };
      this.shopId = 0;
      this.sizeId = 0;
      this.productPick = 0;
      this.addToCartActive = false;

      this.productShop = [];
      const detail = this.product.stock_detail[color.name].color_data.data;
      this.productSize = Object.values(detail);
      this.productSize.color = color;
    },
    colorClicked(id) {
      return this.sizeId == id;
    },
    sizeClick(id) {
      this.sizeId = id;
    },
    sizeClicked(id) {
      return this.sizeId == id;
    },
    shopClick(id) {
      this.shopId = id;
    },
    shopClicked(id) {
      return this.shopId == id;
    },
    sizeSelect(sizeName, colorName) {
      this.shop = { quantity: 0 };
      this.shopId = 0;
      this.productPick = 0;
      this.addToCartActive = false;

      const detail =
        this.product.stock_detail[colorName].color_data.data[sizeName.name]
          .shop_data;
      this.productShop = Object.values(detail);
    },
    shopSelect(shop) {
      this.addToCartActive = true;
      this.shop = shop;
      this.productPrice = shop.price;
      this.productQuantity = shop.quantity;
    },
    addToCart() {
      if (this.shopId == 0) {
        if (this.colorId == 0) this.setStep(0);
        else if (this.sizeId == 0) this.setStep(1);
        else this.setStep(2);
      } else if (this.shop.quantity == 0 || this.productPick == 0) {
        this.$toast.error("Quantity Is Zero", {
          duration: 3000,
        });
        return;
      } else {
        this.$store.dispatch("cart/addProductToCart", {
          item: this.shop.stock_id_for_cart,
          price: this.shop.price,
          image: this.product.image,
          slug: this.product.slug,
          name: this.product.name,
          shop: this.shop.shop_name,
          count: this.productPick,
        });
        this.$toast.success("Cart Updated", {
          duration: 3000,
        });
      }
    },
    addToCompare() {
      // this.$store.dispatch("cart/addProductTo", { id: 2, price: 33 });
    },
    addToWishlist() {
      // this.$store.dispatch("cart/addProductToCart", { id: 2, price: 33 });
    },
    submitComment() {
      this.comment.object_id = this.product.id;
      this.$axios
        .post("comments/create-product/", this.comment)
        .then((response) => {
          if (response.status == 201) {
            this.$toast.success("Successful", { duration: 3000 });
            window.location.reload();
          }
        })
        .catch((e) => {
          this.$toast.error(JSON.stringify(e.response.data), {
            duration: 3000,
          });
        });
    },
  },
  mounted() {
    // this.$tours["myTour"].start();
  },
  async asyncData({ params, $axios }) {
    const responses = await Promise.all([
      await $axios.get(`products/details/${params.id}/`),
    ]);

    const product = responses[0].data;
    const comments = product.comments;


    let averageRating = {};
    averageRating.total = 0;
    averageRating.star5 = 0;
    averageRating.star4 = 0;
    averageRating.star3 = 0;
    averageRating.star2 = 0;
    averageRating.star1 = 0;

    if (comments.length != 0) {
      var rateSum = 0;
      for (let i = 0; i < comments.length; i++) {
        const element = comments[i];
        rateSum += element.rate;
        if (element.rate == 1) averageRating.star1++;
        if (element.rate == 2) averageRating.star2++;
        if (element.rate == 3) averageRating.star3++;
        if (element.rate == 4) averageRating.star4++;
        if (element.rate == 5) averageRating.star5++;
      }
      averageRating.total = rateSum / comments.length;
      averageRating.star1 = (averageRating.star1 / comments.length) * 100;
      averageRating.star2 = (averageRating.star2 / comments.length) * 100;
      averageRating.star3 = (averageRating.star3 / comments.length) * 100;
      averageRating.star4 = (averageRating.star4 / comments.length) * 100;
      averageRating.star5 = (averageRating.star5 / comments.length) * 100;
    }

    return {
      product,
      productPrice: product.min_price,
      relatedProductsList: product.related_products,
      comments,
      averageRating,
    };
  },
};
</script>

<style scoped>
.element:hover,
.element.active {
  box-shadow: 0 0.5em 0.5em -0.4em;
  background-color: rgb(200, 200, 200);
}
.cart.active {
  color: blue;
}
</style>

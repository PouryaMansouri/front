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
                          :style="
                            'width: ' +
                            Math.floor(averageRating.total) * 20 +
                            '%'
                          "
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
                      <div class="product-variations">
                        <a
                          v-for="color in product.color"
                          :key="color.id"
                          @click="colorSelect(color)"
                          class="color"
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
                          style="padding: 5px"
                          v-for="shop in productShop"
                          :key="shop.id"
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
                            class="quantity-minus d-icon-minus"
                          ></button>
                          <input
                            v-model="productPick"
                            class="quantity form-control"
                            type="number"
                            min="1"
                            :max="shop.quantity"
                          />
                          <button
                            @click="changeProductPick('plus')"
                            class="quantity-plus d-icon-plus"
                          ></button>
                        </div>
                        <button @click="addToCart" class="btn btn-rounded">
                          <i class="d-icon-bag"></i> Add To Cart
                        </button>
                      </div>
                    </div>

                    <hr class="product-divider mb-3" />

                    <div class="product-footer">
                      <div>
                        <button
                          @click="addToWishlist"
                          style="border: transparent"
                          class="btn-product btn-compare"
                        >
                          <i class="d-icon-heart"></i>Add To Wishlist
                        </button>
                        <span class="divider"></span>
                        <button
                          @click="addToCompare"
                          style="border: transparent"
                          class="btn-product btn-compare"
                        >
                          <i class="d-icon-random"></i>Add To Compare
                        </button>
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
                                  Math.floor(averageRating.total)
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
                                          Math.floor(averageRating.total) * 20 +
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
                                    <span style="width: 100%"></span>
                                  </div>
                                  <div class="progress-value">100%</div>
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
                                    <span style="width: 0%"></span>
                                  </div>
                                  <div class="progress-value">0%</div>
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
                                    <span style="width: 0%"></span>
                                  </div>
                                  <div class="progress-value">0%</div>
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
                                    <span style="width: 0%"></span>
                                  </div>
                                  <div class="progress-value">0%</div>
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
                                    <span style="width: 0%"></span>
                                  </div>
                                  <div class="progress-value">0%</div>
                                </div>
                              </div>
                              <a
                                class="
                                  btn btn-dark btn-rounded
                                  submit-review-toggle
                                "
                                href="#"
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
                                  Required fields are marked *
                                </p>
                              </div>
                              <div class="rating-form">
                                <label for="rating" class="text-dark"
                                  >Your rating *
                                </label>
                                <span class="rating-stars selected">
                                  <a class="star-1 active">1</a>
                                  <a class="star-2">2</a>
                                  <a class="star-3">3</a>
                                  <a class="star-4">4</a>
                                  <a class="star-5">5</a>
                                </span>

                                <select
                                  v-model="comment.rate"
                                  name="rating"
                                  id="rating"
                                  required=""
                                  style="display: none"
                                >
                                  <option value="">Rate…</option>
                                  <option value="5">Perfect</option>
                                  <option value="4">Good</option>
                                  <option value="3">Average</option>
                                  <option value="2">Not that bad</option>
                                  <option value="1">Very poor</option>
                                </select>
                              </div>
                              <div>
                                <input
                                  v-model="comment.email"
                                  id="email"
                                  cols="30"
                                  rows="6"
                                  class="form-control mb-4"
                                  placeholder="Email *"
                                  required
                                />
                                <input
                                  v-model="comment.nickname"
                                  id="nickname"
                                  cols="30"
                                  rows="6"
                                  class="form-control mb-4"
                                  placeholder="Nick Name *"
                                  required
                                />
                                <textarea
                                  v-model="comment.body"
                                  id="reply-message"
                                  cols="30"
                                  rows="6"
                                  class="form-control mb-4"
                                  placeholder="Comment *"
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
                  <div v-for="item in relatedProductsList" :key="item.id">
                    <product-component :product="item" />
                  </div>
                </div>
              </section>
              {{ shop }}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import ProductComponent from "~/components/ProductComponent.vue";
export default {
  components: { ProductComponent },
  computed: {
    addToCartDisabled() {
      return "h";
    },
  },
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
      productPick: 1,
      averageRating: {
        total: 0,
        star5: 0,
        star4: 0,
        star3: 0,
        star2: 0,
        star1: 0,
      },
      comment: {
        object_id: 0,
        nickname: "",
        rate: 1,
        body: "",
      },
    };
  },
  computed: {
    addToCartDisabled() {
      return this.stock;
    },
  },
  methods: {
    changeProductPick(type) {
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
      this.shop = { quantity: 0 };
      this.productPick = 0;

      this.productShop = [];
      const detail = this.product.stock_detail[color.name].color_data.data;
      this.productSize = Object.values(detail);
      this.productSize.color = color;
    },
    sizeSelect(sizeName, colorName) {
      this.shop = { quantity: 0 };
      this.productPick = 0;

      const detail =
        this.product.stock_detail[colorName].color_data.data[sizeName.name]
          .shop_data;
      this.productShop = Object.values(detail);
    },
    shopSelect(shop) {
      this.shop = shop;
      this.productPrice = shop.price;
      this.productQuantity = shop.quantity;
    },
    addToCart() {
      if (this.shop.quantity == 0 || this.productPick == 0) {
        this.$toast.error("Quantity Is Zero", {
          duration: 3000,
        });
        return;
      }
      this.$store.dispatch("cart/addProductToCart", {
        id: this.shop.stock_id_for_cart,
        price: this.shop.price,
        image: this.product.image,
        slug: this.product.slug,
        name: this.product.name,
        count: this.productPick,
      });
      this.$toast.success("Product Successfully Added To Cart", {
        duration: 3000,
      });
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
          this.$toast.error("Not Submited", { duration: 3000 });
        });
    },
  },
  async asyncData({ params, $axios }) {
    const responses = await Promise.all([
      await $axios.get(`products/details/${params.id}/`),
    ]);

    const product = responses[0].data;
    const comments = product.comments;
    let averageRating = {};

    if (comments != []) {
      var rateSum = 0;
      for (let i = 0; i < comments.length; i++) {
        const element = comments[i];
        rateSum += element.rate;
      }
      averageRating.total = rateSum / comments.length;
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

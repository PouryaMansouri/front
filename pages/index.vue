<template>
  <div class="home">
    <div class="page-wrapper">
      <h1 class="d-none">Sarar - UAE branch in United Arabic Emirates</h1>
      <main class="main demo2-cls">
        <div class="page-content">
          <div class="container">
            <section class="intro-section">
              <div class="row">
                <div class="col-12 mb-4">
                  <div
                    class="
                      owl-carousel owl-theme
                      row
                      owl-dot-inner owl-dot-white
                      intro-slider
                      animation-slider
                      cols-1
                      gutter-no
                    "
                    data-owl-options="{
                                    'nav': false,
                                    'dots': true,
                                    'loop': true,
                                    'items': 1,
                                    'autoplay': false
                                }"
                  >
                    <div
                      class="
                        banner banner-fixed
                        intro-slide1
                        content-center content-middle
                      "
                      style="background-color: #444342"
                    >
                      <figure>
                        <img
                          :src="mainPoster.image_1"
                          alt="intro-banner"
                          width="1180"
                          height="600"
                          style="background-color: #444342"
                        />
                      </figure>
                      <div class="banner-content">
                        <h4
                          class="
                            banner-subtitle
                            font-weight-semi-bold
                            text-white
                            ls-normal
                            lh-1
                            mb-0
                            text-uppercase text-left
                            slide-animate
                          "
                          data-animation-options="{'name': 'fadeInRightShorter', 'duration': '1.2s', 'delay': '.3s'}"
                        >
                          {{ mainPoster.title_1 }}
                        </h4>
                        <h2
                          class="
                            banner-title
                            text-uppercase text-white
                            slide-animate
                          "
                          data-animation-options="{'name': 'fadeInRightShorter', 'duration': '1.2s', 'delay': '.3s'}"
                        >
                          {{ mainPoster.description_1 }}
                        </h2>
                      </div>
                    </div>

                    <div class="intro-slide2 banner banner-fixed">
                      <figure>
                        <img
                          :src="mainPoster.image_2"
                          alt="banner"
                          width="1180"
                          height="600"
                          style="background-color: #686868"
                        />
                      </figure>
                      <div class="banner-content y-50">
                        <h4
                          class="
                            banner-subtitle
                            font-weight-normal
                            lh-1
                            ls-m
                            slide-animate
                          "
                          data-animation-options="{'name': 'fadeInDownShorter', 'duration': '1.2s', 'delay': '.5s'}"
                        >
                          {{ mainPoster.title_2 }}
                        </h4>
                        <h3
                          class="
                            banner-title
                            ls-l
                            text-white text-uppercase
                            font-weight-bold
                            lh-1
                            slide-animate
                          "
                          data-animation-options="{'name': 'blurIn', 'duration': '1.4s', 'delay': '.1s'}"
                        >
                          {{ mainPoster.description_2 }}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  v-for="(item, index) in topCartList"
                  :key="index"
                  class="col-md-6 mb-4"
                >
                  <div
                    class="
                      banner banner-fixed
                      overlay-zoom
                      intro-banner intro-banner1
                      content-middle
                      appear-animate
                    "
                    data-animation-options="{
                                    'name': 'fadeInUpShorter',
                                    'delay': '.3s'
                                }"
                  >
                    <figure>
                      <img
                        :src="item.image"
                        width="580"
                        height="249"
                        alt="banner"
                        style="background-color: #eca5a9"
                      />
                    </figure>
                    <div class="banner-content">
                      <h4
                        class="
                          banner-subtitle
                          ls-normal
                          text-white text-uppercase
                          font-weight-normal
                          lh-1
                        "
                      >
                        {{ item.title }}
                      </h4>
                      <h3
                        class="banner-title text-white font-weight-bold ls-md"
                      >
                        {{ item.description }}
                      </h3>
                      <a
                        class="
                          btn btn-white btn-link btn-underline
                          font-weight-semi-bold
                        "
                        >{{ item.link_text }}<i class="d-icon-arrow-right"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="mt-10 pt-3 mb-6">
              <h2 class="title title-simple title-center ls-m">Best Selling</h2>

              <div class="product-wrapper row">
                <div
                  v-for="(item, index) in bestSellingList"
                  :key="index"
                  class="col-lg-3 col-md-4 col-6 mb-4"
                >
                  <router-link :key="item.slug" :to="'/product/' + item.slug">
                    <div
                      class="product appear-animate"
                      data-animation-options="{
                                    'name': 'fadeInLeftShorter',
                                    'delay': '.4s'
                                }"
                    >
                      <figure class="product-media">
                        <a>
                          <img
                            :src="item.image"
                            :alt="item.title"
                            width="280"
                            height="315"
                            style="background-color: #f2f3f5"
                          />
                        </a>
                        <div class="product-label-group">
                          <label class="product-label label-new">new</label>
                        </div>
                        <div class="product-action-vertical">
                          <a
                            class="btn-product-icon btn-cart"
                            data-toggle="modal"
                            data-target="#addCartModal"
                            title="Add to cart"
                            ><i class="d-icon-bag"></i
                          ></a>
                          <a
                            class="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                            ><i class="d-icon-heart"></i
                          ></a>
                        </div>
                        <div class="product-action">
                          <a
                            class="btn-product btn-quickview"
                            title="Quick View"
                            >Quick View</a
                          >
                        </div>
                      </figure>
                      <div class="product-details">
                        <div class="product-cat">
                          <a :href="item.category.slug">{{
                            item.category.name
                          }}</a>
                        </div>
                        <h3 class="product-name">
                          <a>{{ item.title }}</a>
                        </h3>
                        <div class="product-price">
                          <span class="price">{{ item.min_price }}</span>
                        </div>
                        <div class="ratings-container">
                          <div class="ratings-full">
                            <span
                              class="ratings"
                              :style="'width: ' + item.star * 20 + '%'"
                            ></span>
                            <span class="tooltiptext tooltip-top"></span>
                          </div>
                          <a class="rating-reviews">( 12 reviews )</a>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </section>
            <section
              class="banner banner-sale mt-10 mb-10 appear-animate"
              data-animation-options="{'name': 'fadeIn'}"
              :style="
                'background-image: url(' +
                middleBanner.image +
                '); background-color: #1f272b;'
              "
            >
              <div
                class="banner-content appear-animate"
                data-animation-options="{'name': 'fadeInUpShorter','duration': '1s'}"
              >
                <h4
                  class="
                    banner-subtitle
                    text-uppercase text-white
                    font-weight-normal
                    lh-1
                    ls-m
                    mb-0
                  "
                >
                  {{ middleBanner.title }}
                </h4>
                <hr class="divider mb-2" />
                <h3 class="banner-title text-uppercase text-white lh-1 mb-0">
                  {{ middleBanner.description }}
                </h3>
              </div>
            </section>

            <section class="pt-7 pb-1">
              <h2 class="title title-simple ls-m">Our Featured</h2>
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
                  v-for="(item, index) in ourFeaturedList"
                  :key="index"
                  class="product appear-animate"
                  data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.2s'
                            }"
                >
                  <router-link :to="'/product/' + item.slug">
                    <figure class="product-media">
                      <a>
                        <img
                          :src="item.image"
                          :key="item.slug"
                          width="280"
                          height="315"
                          style="background-color: #f2f3f5"
                        />
                      </a>
                      <div class="product-action-vertical">
                        <a
                          class="btn-product-icon btn-cart"
                          data-toggle="modal"
                          data-target="#addCartModal"
                          title="Add to cart"
                          ><i class="d-icon-bag"></i
                        ></a>
                        <a
                          class="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                          ><i class="d-icon-heart"></i
                        ></a>
                      </div>
                      <div class="product-action">
                        <a class="btn-product btn-quickview" title="Quick View"
                          >Quick View</a
                        >
                      </div>
                    </figure>
                  </router-link>
                  <div class="product-details">
                    <div class="product-cat">
                      <a :href="item.category.slug">{{ item.category.name }}</a>
                    </div>
                    <h3 class="product-name">
                      <a>{{ item.title }}</a>
                    </h3>
                    <div class="product-price">
                      <span class="price">{{ item.min_price }}</span>
                    </div>
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span
                          class="ratings"
                          :style="'width: ' + item.star * 20 + '%'"
                        ></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a class="rating-reviews">( 6 reviews )</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  computed: {
    access() {
      return this.$store.state;
    },
  },
  components: {},
  head() {
    return {
      title: "main",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get("/landing/all-data/");

    return {
      mainPoster: data.main_poster,
      topCartList: data.main_top_cart,
      middleBanner: data.middle_banner,
      bestSellingList: data.best_sells_in_month,
      ourFeaturedList: data.new_product,
    };
  },
  data() {
    return {
      mainPoster: {},
      topCartList: [],
      middleBanner: {},
      bestSellingList: [],
      ourFeaturedList: [],
    };
  },
});
</script>

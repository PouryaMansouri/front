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
                          :src="landingMain.image_1"
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
                          {{ landingMain.title_1 }}
                        </h4>
                        <h2
                          class="
                            banner-title
                            text-uppercase text-white
                            slide-animate
                          "
                          data-animation-options="{'name': 'fadeInRightShorter', 'duration': '1.2s', 'delay': '.3s'}"
                        >
                          {{ landingMain.description_1 }}
                        </h2>
                        <!-- <h5
                        class="
                          font-weight-normal
                          text-white
                          lh-1
                          ls-normal
                          text-right
                          mb-1
                          slide-animate
                        "
                        data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1s', 'delay': '1s'}"
                      >
                        Start at
                        <span class="text-secondary font-weight-bold"
                          >$19.99</span
                        >
                      </h5> -->
                      </div>
                    </div>

                    <div class="intro-slide2 banner banner-fixed">
                      <figure>
                        <img
                          :src="landingMain.image_2"
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
                          {{ landingMain.title_2 }}
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
                          {{ landingMain.description_2 }}
                        </h3>
                        <!-- <h5
                        class="
                          font-weight-normal
                          text-white text-uppercase
                          lh-1
                          ls-m
                          mb-1
                          slide-animate
                        "
                        data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1s', 'delay': '.7s'}"
                      >
                        sale Up to
                        <span class="text-secondary font-weight-bold"
                          >30% Off</span
                        >
                      </h5>
                      <p
                        class="font-weight-normal ls-s mb-7 slide-animate"
                        data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1s', 'delay': '.9s'}"
                      >
                        Get Free Shipping on all orders over $99.00
                      </p>
                      <a
                        href="demo2-shop.html"
                        class="btn btn-white btn-rounded slide-animate"
                        data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1.2s', 'delay': '1.1s'}"
                        >Shop now</a
                      > -->
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
                  <div
                    class="product appear-animate"
                    data-animation-options="{
                                    'name': 'fadeInLeftShorter',
                                    'delay': '.4s'
                                }"
                  >
                    <router-link :to="'/product/' + item.id">
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
                    </router-link>

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
                </div>
                <!-- <div class="col-lg-3 col-md-4 col-6 mb-4">
                <div
                  class="product appear-animate"
                  data-animation-options="{
                                    'name': 'fadeInLeftShorter',
                                    'delay': '.2s'
                                }"
                >
                  <figure class="product-media">
                    <a href="demo2-product.html">
                      <img
                        src="images/demos/demo2/products/2.jpg"
                        alt="Blue Pinafore Denim Dress"
                        width="280"
                        height="315"
                        style="background-color: #f2f3f5"
                      />
                    </a>
                    <div class="product-label-group">
                      <label class="product-label label-sale">27% off</label>
                    </div>
                    <div class="product-action-vertical">
                      <a
                        href="#"
                        class="btn-product-icon btn-cart"
                        data-toggle="modal"
                        data-target="#addCartModal"
                        title="Add to cart"
                        ><i class="d-icon-bag"></i
                      ></a>
                      <a
                        href="#"
                        class="btn-product-icon btn-wishlist"
                        title="Add to wishlist"
                        ><i class="d-icon-heart"></i
                      ></a>
                    </div>
                    <div class="product-action">
                      <a
                        href="#"
                        class="btn-product btn-quickview"
                        title="Quick View"
                        >Quick View</a
                      >
                    </div>
                  </figure>
                  <div class="product-details">
                    <div class="product-cat">
                      <a href="demo2-shop.html">Clothing</a>
                    </div>
                    <h3 class="product-name">
                      <a href="demo2-product.html">Cotton-padded Clothing</a>
                    </h3>
                    <div class="product-price">
                      <ins class="new-price">$125.99</ins
                      ><del class="old-price">$160.99</del>
                    </div>
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span class="ratings" style="width: 60%"></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="demo2-product.html" class="rating-reviews"
                        >( 8 reviews )</a
                      >
                    </div>
                  </div>
                </div>
              </div> -->
              </div>
            </section>

            <section
              class="pt-md-2 pb-md-6 category-section appear-animate"
              data-animation-options="{'name': 'fadeIn'}"
            >
              <h2 class="title title-simple ls-m">Top Categories</h2>
              <div class="row grid">
                <div class="grid-item col-md-6 height-x2">
                  <div
                    class="
                      banner banner-fixed
                      content-middle content-center
                      overlay-dark
                    "
                  >
                    <a>
                      <figure>
                        <img
                          :src="topCategories.image_part1"
                          alt="category"
                          width="585"
                          height="397"
                          style="background-color: #eef0f1"
                        />
                      </figure>
                    </a>
                    <div
                      class="
                        banner-content
                        text-center
                        w-100
                        h-100
                        d-flex
                        flex-column
                      "
                    >
                      <h3 class="banner-title text-uppercase ls-s mb-0"></h3>
                      <h4
                        class="
                          banner-subtitle
                          flex-1
                          font-weight-normal
                          text-capitalize text-body
                          ls-md
                          lh-1
                          mb-0
                        "
                      ></h4>
                      <div class="btn-group">
                        <a
                          class="
                            btn btn-white btn-rounded
                            font-weight-semi-bold
                          "
                          >{{ topCategories.category_part1_1.name }}</a
                        >
                        <a
                          class="
                            btn btn-white btn-rounded
                            font-weight-semi-bold
                          "
                          >{{ topCategories.category_part1_2.name }}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid-item col-sm-6 height-x1">
                  <div
                    class="
                      category category-light category-absolute
                      overlay-dark
                    "
                  >
                    <a>
                      <figure class="category-media">
                        <img
                          :src="topCategories.image_part2"
                          alt="category"
                          width="585"
                          height="205"
                          style="background-color: #c8ced4"
                        />
                      </figure>
                    </a>
                    <div class="category-content">
                      <h4 class="category-name">
                        <a>{{ topCategories.category_part2.name }}</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="grid-item col-sm-6 height-x1">
                  <div
                    class="
                      category category-light category-absolute
                      overlay-dark
                    "
                  >
                    <a>
                      <figure class="category-media">
                        <img
                          :src="topCategories.image_part3"
                          alt="category"
                          width="585"
                          height="397"
                          style="background-color: #ebedef"
                        />
                      </figure>
                    </a>
                    <div class="category-content">
                      <h4 class="category-name">
                        <a>{{ topCategories.category_part3.name }}</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-1 grid-space"></div>
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
                <!-- <div class="price-rotated">
                <div
                  class="
                    banner-price-info
                    d-flex
                    align-items-center
                    justify-content-center
                    skrollr
                  "
                  data-options='{"data-bottom-top":"transform: translate(0, 0) scale(1.6); transform-origin: center;", "data-center":"transform: translate(0, 0) scale(1);"}'
                  data-animation-options="{'name': 'fadeIn', 'duration': '1.2s', 'delay': '.2s'}"
                >
                  <h5 class="text-uppercase text-white ls-l mb-0">
                    At Up To<br /><span class="text-secondary ls-l">50%</span>
                    Off
                  </h5>
                </div>
              </div> -->
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
                          alt="Blue Pinafore Denim Dress"
                          width="280"
                          height="315"
                          style="background-color: #f2f3f5"
                        />
                      </a>
                      <!-- <div class="product-label-group">
                        <label class="product-label label-sale">35% Off</label>
                      </div> -->
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

            <section class="service-list mt-10">
              <div
                class="
                  owl-carousel owl-theme
                  row
                  cols-lg-4 cols-md-3 cols-sm-2 cols-1
                "
                data-owl-options="{
                            'items': 4,
                            'nav': false,
                            'dots': false,
                            'autoplay': true,
                            'autoplayTimeout': 7000,
                            'margin': 20,
                            'responsive': {
                                '0': {
                                    'items': 1
                                },
                                '576': {
                                    'items': 2
                                },
                                '768': {
                                    'items': 3
                                },
                                '992': {
                                    'items': 4,
                                    'autoplay': false
                                }
                            }
                        }"
              >
                <div
                  class="icon-box appear-animate"
                  data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.2s'
                            }"
                >
                  <div class="icon-box-content">
                    <h3
                      class="
                        icon-box-title
                        font-weight-bold
                        text-capitalize
                        ls-normal
                        mb-0
                      "
                    >
                      Free delivery
                    </h3>
                    <p class="text-primary">When You Spend $80 or More</p>
                  </div>
                </div>

                <div
                  class="icon-box appear-animate"
                  data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.3s'
                            }"
                >
                  <div class="icon-box-content">
                    <h3
                      class="
                        icon-box-title
                        font-weight-bold
                        text-capitalize
                        ls-normal
                        mb-0
                      "
                    >
                      Tracked delivery
                    </h3>
                    <p class="text-primary">Only $6 Standard 6-10 Days</p>
                  </div>
                </div>

                <div
                  class="icon-box appear-animate"
                  data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.4s'
                            }"
                >
                  <div class="icon-box-content">
                    <h3
                      class="
                        icon-box-title
                        font-weight-bold
                        text-capitalize
                        ls-normal
                        mb-0
                      "
                    >
                      Need it in a hurry
                    </h3>
                    <p class="text-primary">
                      You can Express Shipping in 5 Days
                    </p>
                  </div>
                </div>

                <div
                  class="icon-box appear-animate"
                  data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.5s'
                            }"
                >
                  <div class="icon-box-content">
                    <h3
                      class="
                        icon-box-title
                        font-weight-bold
                        text-capitalize
                        ls-normal
                        mb-0
                      "
                    >
                      30 - Day returns
                    </h3>
                    <p class="text-primary">Return Most Items Within 30 Days</p>
                  </div>
                </div>
              </div>
            </section>

            <section
              class="instagram-section mt-10 pt-7 pb-8 mb-10 appear-animate"
              data-animation-options="{
                        'delay': '.2s',
                        'duration': '.5s'
                    }"
            >
              <h2 class="title title-simple">Our Instagram</h2>
              <div
                class="
                  owl-carousel owl-theme
                  row
                  cols-xl-5 cols-lg-4 cols-sm-3 cols-2
                "
                data-owl-options="{
                            'items': 5,
                            'nav': false,
                            'dots': false,
                            'margin': 20,
                            'autoplay': true,
                            'responsive': {
                                '0': {
                                    'items': 2
                                },
                                '576': {
                                    'items': 3
                                },
                                '992': {
                                    'items': 4
                                },
                                '1200': {
                                    'items': 5
                                }
                            }
                        }"
              >
                <figure class="instagram">
                  <a href="#">
                    <img
                      src="/images/demos/demo2/instagram/1.jpg"
                      alt="Instagram"
                      width="220"
                      height="220"
                    />
                  </a>
                </figure>
                <figure class="instagram">
                  <a href="#">
                    <img
                      src="/images/demos/demo2/instagram/2.jpg"
                      alt="Instagram"
                      width="220"
                      height="220"
                    />
                  </a>
                </figure>
                <figure class="instagram">
                  <a href="#">
                    <img
                      src="/images/demos/demo2/instagram/3.jpg"
                      alt="Instagram"
                      width="220"
                      height="220"
                    />
                  </a>
                </figure>
                <figure class="instagram">
                  <a href="#">
                    <img
                      src="/images/demos/demo2/instagram/4.jpg"
                      alt="Instagram"
                      width="220"
                      height="220"
                    />
                  </a>
                </figure>
                <figure class="instagram">
                  <a href="#">
                    <img
                      src="/images/demos/demo2/instagram/5.jpg"
                      alt="Instagram"
                      width="220"
                      height="220"
                    />
                  </a>
                </figure>
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
    const responses = await Promise.all([
      await $axios.get("landing/main/", { isBasic: true }),
      await $axios.get("landing/main/cart/top/", { isBasic: true }),
      await $axios.get("landing/main/middle-banner/", { isBasic: true }),
      await $axios.get("landing/main/best-selling-product/", { isBasic: true }),
      await $axios.get("landing/new-product/", { isBasic: true }),
      await $axios.get("categories/top/", { isBasic: true }),
    ]);

    return {
      landingMain: responses[0].data,
      topCartList: responses[1].data,
      middleBanner: responses[2].data,
      bestSellingList: responses[3].data,
      ourFeaturedList: responses[4].data,
      topCategories: responses[5].data,
    };
  },
  data() {
    return {
      bestSellingList: [],
      topCartList: [],
      middleBanner: {},
      ourFeaturedList: [],
      landingMain: {},
      middleBanner: [],
      topCategories: {
        title: "Top categories",
        category_part1_1: {
          id: 1,
          name: "",
          slug: "",
        },
        category_part1_2: {
          id: 1,
          name: "",
          slug: "",
        },
        image_part1: "",
        category_part2: {
          id: 1,
          name: "",
          slug: "",
        },
        image_part2: "",
        category_part3: {
          id: 1,
          name: "",
          slug: "",
        },
        image_part3: "",
      },
      bestSellingList: [],
      topCartList: [],
      ourFeaturedList: [],
    };
  },
});
</script>

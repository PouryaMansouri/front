<template>
  <div class="page-wrapper">
    <main class="main">
      <div
        class="page-header"
        style="
          background-image: url('images/shop/page-header-back.jpg');
          background-color: #3c63a4;
        "
      >
        <h1 class="page-title">shop</h1>
        <!-- <ul class="breadcrumb">
          <li>
            <a href="demo1.html"><i class="d-icon-home"></i></a>
          </li>
          <li class="delimiter">/</li>
          <li><a href="shop.html">Categories</a></li>
          <li class="delimiter">/</li>
          <li>With Bottom Block</li>
        </ul> -->
      </div>
      <!-- End PageHeader -->
      <div class="page-content mb-10 pb-6">
        <div class="container">
          <div class="row gutter-lg main-content-wrap">
            <aside
              class="
                col-lg-3
                sidebar sidebar-fixed sidebar-toggle-remain
                shop-sidebar
                sticky-sidebar-wrapper
              "
            >
              <div class="sidebar-overlay"></div>
              <a class="sidebar-close" href="#"><i class="d-icon-times"></i></a>
              <div class="sidebar-content">
                <div class="sticky-sidebar" data-sticky-options="{'top': 10}">
                  <div class="widget widget-collapsible">
                    <h3 class="widget-title">All Categories</h3>
                    <ul class="widget-body filter-items search-ul">
                      <li v-for="item in filterData.categories" :key="item.id">
                        <a>{{ item.name }}</a>
                        <ul>
                          <li
                            v-for="subItem in item.subcategories"
                            :key="subItem.id"
                          >
                            <a>{{ subItem.name }}</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div class="widget widget-collapsible">
                    <h3 class="widget-title">Filter by Price</h3>
                    <!-- <div class="widget-body mt-3">
                        <div class="filter-price-slider"></div>
                        <div class="filter-actions">
                          <Slider v-model="value" />
                          <div class="filter-price-text mb-4">
                            Price:
                            <span class="filter-price-range">${{ 10 }}</span>
                            -
                            <span class="filter-price-range">${{ 20 }}</span>
                          </div>
                          <button
                            type="submit"
                            class="btn btn-dark btn-filter btn-rounded"
                          >
                            Filter
                          </button>
                        </div>
                      </div> -->
                    <vue-slider
                      v-model="value"
                      :min="filterData.min_price"
                      :max="filterData.max_price"
                      :tooltip="'always'"
                      :tooltip-formatter="formatter"
                      :tooltip-placement="['top', 'top']"
                    ></vue-slider>
                    <div class="mb-4">
                      Price:
                      <span>${{ value[0] }}</span>
                      -
                      <span>${{ value[1] }}</span>
                    </div>
                  </div>
                  <div class="widget widget-collapsible">
                    <h3 class="widget-title">Size</h3>
                    <ul class="widget-body filter-items">
                      <li v-for="item in filterData.sizes" :key="item.id">
                        <a>{{ item.name }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget widget-collapsible">
                    <h3 class="widget-title">Color</h3>
                    <ul class="widget-body filter-items">
                      <li v-for="item in filterData.colors" :key="item.id">
                        <a>{{ item.name }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget widget-collapsible">
                    <h3 class="widget-title">Brands</h3>
                    <ul class="widget-body filter-items">
                      <li v-for="item in filterData.brands" :key="item.id">
                        <a>{{ item.title }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
            <div class="col-lg-9 main-content">
              <nav class="toolbox sticky-toolbox sticky-content fix-top">
                
              </nav>
              <div class="row cols-2 cols-sm-3 product-wrapper">
                <div v-for="(item, index) in productList" :key="index">
                  <div class="product-wrap">
                    <div class="product">
                      <router-link :to="'/product/' + item.slug">
                        <figure class="product-media">
                          <a>
                            <img
                              :src="item.image"
                              alt="product"
                              width="280"
                              height="315"
                            />
                          </a>
                          <!-- <div class="product-label-group">
                            <label class="product-label label-new">new</label>
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
                          <a>{{ item.name }}</a>
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
                </div>
              </div>
              
            </div>
          </div>
          <div v-if="newTrendingList.length !==0" class="bottom-block">
            <section class="pt-7 pb-1">
              <h2 class="title title-simple ls-m">Today's New Trending</h2>
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
                <div v-for="(item, index) in newTrendingList" :key="index">
                  <div
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
                        <a class="rating-reviews">( 6 reviews )</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from "vue";
import VueSlider from "vue-slider-component/dist-css/vue-slider-component.umd.min.js";
import "vue-slider-component/dist-css/vue-slider-component.css";
import "vue-slider-component/theme/default.css";

export default Vue.extend({
  components: { VueSlider },
  head() {
    return {
      title: this.shop.name,
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
    };
  },
  async asyncData({ params, $axios }) {
    const responses = await Promise.all([
      await $axios.get("products/data-for-filter/"),
      await $axios.get(`shops/${params.id}/`),
    ]);
    return {
      shop: responses[1].data,
      productList: responses[1].data.shop_products,
      filterData: responses[0].data,
      value: [responses[0].data.min_price, responses[0].data.max_price],
    };
  },
  data() {
    return {
      formatter: (v) => `$${("" + v).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
      productList: [],
      filterData: {
        colors: [],
        sizes: [],
        brands: [],
        categories: [],
        min_price: 0,
        max_price: 0,
      },
      value: [0, 0],
      newTrendingList: [],
    };
  },
});
</script>
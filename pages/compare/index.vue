<template>
  <div class="home page-wrapper">
    <div v-if="compareList.length !== 0" class="main compare-page">
      <nav class="breadcrumb-nav">
        <div class="container">
          <ul class="breadcrumb">
            <li>
              <a href="demo1.html"><i class="d-icon-home"></i></a>
            </li>
            <li>Compare</li>
          </ul>
        </div>
      </nav>
      <div class="page-content compare-default">
        <div class="container riode-compare-table">
          <div class="compare-row compare-basic">
            <div class="compare-col compare-field">Products</div>
            <div
              v-for="item in compareList"
              :key="item.id"
              class="compare-col compare-value"
              data-title
            >
              <div class="product product-classic text-center">
                <figure class="product-media">
                  <a :href="'/product/'+item.slug">
                    <img
                      :src="item.image"
                      alt="product"
                      width="280"
                      height="315"
                    />
                  </a>
                  <div class="product-label-group">
                    <!-- <label class="product-label label-sale">25% Off</label> -->
                  </div>
                </figure>
                <div class="product-details">
                  <div class="product-action">
                    <a
                      href="#"
                      class="btn-product-icon btn-left btn-moving to-left"
                      title="Exchange left"
                      ><i class="d-icon-angle-left"></i
                    ></a>
                    <a
                      href="#"
                      class="btn-product-icon btn-default btn-cart"
                      title="Add to cart"
                      data-toggle="modal"
                      data-target="#addCartModal"
                      ><i class="d-icon-bag"></i
                    ></a>
                    <a
                      href="#"
                      class="btn-product-icon btn-default btn-wishlist"
                      title="Add to wishlist"
                      ><i class="d-icon-heart"></i
                    ></a>
                    <a
                      href="#"
                      class="btn-product-icon btn-default"
                      title="Add to close"
                      ><i class="d-icon-close"></i
                    ></a>
                    <a
                      href="#"
                      class="btn-product-icon btn-right btn-moving to-right"
                      title="Exchange right"
                      ><i class="d-icon-angle-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="compare-row compare-title">
            <div class="compare-col compare-field">Title</div>
            <div class="compare-col compare-value" data-title="Title">
              <a href="product.html">Grey Shoes</a>
            </div>
            <div class="compare-col compare-value" data-title="Title">
              <a href="product.html">Modern wrist watch </a>
            </div>
            <div class="compare-col compare-value" data-title="Title">
              <a href="product.html">Brown Shoes</a>
            </div>
            <div class="compare-col compare-value" data-title="Title">
              <a href="product.html">Mordern Bag</a>
            </div>
          </div>
          <div class="compare-row compare-price">
            <div class="compare-col compare-field">Price</div>
            <div class="compare-col compare-value" data-title="Price">
              <div class="product-price">
                <ins class="new-price">$199.99</ins
                ><del class="old-price">$210.00</del>
              </div>
            </div>
            <div class="compare-col compare-value" data-title="Price">
              <div class="product-price">
                <ins class="new-price">$98.00 - $99.00</ins>
              </div>
            </div>
            <div class="compare-col compare-value" data-title="Price">
              <div class="product-price">
                <ins class="new-price">$98.00 - $129.00</ins>
              </div>
            </div>
            <div class="compare-col compare-value" data-title="Price">
              <div class="product-price">
                <ins class="new-price">$98.00</ins
                ><del class="old-price">$210.00</del>
              </div>
            </div>
          </div>
          <div class="compare-row compare-type">
            <div class="compare-col compare-field">Type</div>
            <div class="compare-col compare-value" data-title="Type">
              Simple Product
            </div>
            <div class="compare-col compare-value" data-title="Type">
              Variable Product
            </div>
            <div class="compare-col compare-value" data-title="Type">
              Simple Product
            </div>
            <div class="compare-col compare-value" data-title="Type">
              Simple Product
            </div>
          </div>
          <div class="compare-row compare-availability">
            <div class="compare-col compare-field">Availability</div>
            <div class="compare-col compare-value" data-title="Availability">
              <p class="stock">51 in stock</p>
            </div>
            <div class="compare-col compare-value" data-title="Availability">
              <p class="stock in-stock">In stock</p>
            </div>
            <div class="compare-col compare-value" data-title="Availability">
              <p class="stock">52 in stock</p>
            </div>
            <div class="compare-col compare-value" data-title="Availability">
              <p class="stock">63 in stock</p>
            </div>
          </div>
          <div class="compare-row compare-description">
            <div class="compare-col compare-field">Description</div>
            <div class="compare-col compare-value" data-title="Description">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol
              faucibus adipiscing.
            </div>
            <div class="compare-col compare-value" data-title="Description">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol
              faucibus adipiscing.
            </div>
            <div class="compare-col compare-value" data-title="Description">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol
              faucibus adipiscing.
            </div>
            <div class="compare-col compare-value" data-title="Description">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol
              faucibus adipiscing.
            </div>
          </div>
          <div class="compare-row compare-rating">
            <div class="compare-col compare-field">Ratings & Reviews</div>
            <div
              class="compare-col compare-value"
              data-title="Ratings & Reveiews"
            >
              <div class="ratings-container">
                <div class="ratings-full">
                  <span class="ratings" style="width: 60%"></span>
                  <span class="tooltiptext tooltip-top"></span>
                </div>
                <a href="product.html" class="rating-reviews">( 3 reviews )</a>
              </div>
            </div>
            <div
              class="compare-col compare-value"
              data-title="Ratings & Reveiews"
            >
              <div class="ratings-container">
                <div class="ratings-full">
                  <span class="ratings" style="width: 100%"></span>
                  <span class="tooltiptext tooltip-top"></span>
                </div>
                <a href="product.html" class="rating-reviews">( 6 reviews )</a>
              </div>
            </div>
            <div
              class="compare-col compare-value"
              data-title="Ratings & Reveiews"
            >
              <div class="ratings-container">
                <div class="ratings-full">
                  <span class="ratings" style="width: 40%"></span>
                  <span class="tooltiptext tooltip-top"></span>
                </div>
                <a href="product.html" class="rating-reviews">( 6 reviews )</a>
              </div>
            </div>
            <div
              class="compare-col compare-value"
              data-title="Ratings & Reveiews"
            >
              <div class="ratings-container">
                <div class="ratings-full">
                  <span class="ratings" style="width: 100%"></span>
                  <span class="tooltiptext tooltip-top"></span>
                </div>
                <a href="product.html" class="rating-reviews">( 11 reviews )</a>
              </div>
            </div>
          </div>
          <div class="compare-row compare-sku">
            <div class="compare-col compare-field">SKU</div>
            <div class="compare-col compare-value" data-title="Sku">
              12345563
            </div>
            <div class="compare-col compare-value" data-title="Sku">
              1234567893-2
            </div>
            <div class="compare-col compare-value" data-title="Sku">
              12345684-2
            </div>
            <div class="compare-col compare-value" data-title="Sku">
              12345683-1
            </div>
          </div>
          <div class="compare-row compare-pa_brands">
            <div class="compare-col compare-field">Brands</div>
            <div class="compare-col compare-value" data-title="Brands">
              SkillStar, SLS
            </div>
            <div class="compare-col compare-value" data-title="Brands">
              Comedy, SLS
            </div>
            <div class="compare-col compare-value" data-title="Brands">
              Comedy, RightCheck
            </div>
            <div class="compare-col compare-value" data-title="Brands">
              SkillStar, SLS
            </div>
          </div>
          <div class="compare-row compare-pa_color">
            <div class="compare-col compare-field">Color</div>
            <div class="compare-col compare-value" data-title="Color">
              Blue, Green
            </div>
            <div class="compare-col compare-value" data-title="Color">
              Black, Brown
            </div>
            <div class="compare-col compare-value" data-title="Color">
              Black, Green
            </div>
            <div class="compare-col compare-value" data-title="Color">
              Blue, Green
            </div>
          </div>
          <div class="compare-row compare-pa_size">
            <div class="compare-col compare-field">Size</div>
            <div class="compare-col compare-value" data-title="Size">
              Large, Medium, Small
            </div>
            <div class="compare-col compare-value" data-title="Size">
              Extra Large, Large
            </div>
            <div class="compare-col compare-value" data-title="Size">
              Large, Medium
            </div>
            <div class="compare-col compare-value" data-title="Size">
              Large, Medium
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="page-content compare-empty">
      <div class="container">
        <div class="main-content">
          <i class="d-icon-compare compare-icon"></i>
          <h2 class="compare-descri">No products added to the compare</h2>
          <a class="btn btn-primary btn-rounded" href="/shops"> GO SHOP </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: "compare",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/vendor/fontawesome-free/css/all.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/vendor/animate/animate.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/vendor/magnific-popup/magnific-popup.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/vendor/sticky-icon/stickyicon.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/vendor/owl-carousel/owl.carousel.min.css",
        },
        { rel: "stylesheet", type: "text/css", href: "/css/style.min.css" },
      ],
      script: [
        {
          src: "/vendor/jquery/jquery.min.js",
          body: true,
        },
        {
          src: "/vendor/imagesloaded/imagesloaded.pkgd.min.js",
          body: true,
        },
        {
          src: "/vendor/magnific-popup/jquery.magnific-popup.min.js",
          body: true,
        },
        {
          src: "/vendor/owl-carousel/owl.carousel.min.js",
          body: true,
        },
        {
          src: "/vendor/compare/compare.min.js",
          body: true,
        },
        {
          src: "/js/main.min.js",
          body: true,
        },
      ],
    };
  },
  async asyncData() {
    return;
  },
  data() {
    return {
      compareList: [{}],
    };
  },
  methods: {},
});
</script>

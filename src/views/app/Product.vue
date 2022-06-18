<template>
  <div class="page-wrapper">
    <h1 class="d-none">Riode - Responsive eCommerce HTML Template</h1>
    <header class="header">
      <div class="header-middle sticky-header fix-top sticky-content">
        <div class="container-fluid">
          <div class="header-left">
            <a href="#" class="mobile-menu-toggle">
              <i class="d-icon-bars2"></i>
            </a>
            <a href="demo7.html" class="logo">
              <img
                src="/images/demos/demo7/logo.png"
                alt="logo"
                width="154"
                height="43"
              />
            </a>
            <!-- End of Logo -->
          </div>
          <div class="header-center">
            <nav class="main-nav ml-0 mr-0">
              <ul class="menu">
                <menu-component></menu-component>
              </ul>
            </nav>
            <!-- End of Divider -->
          </div>
          <div class="header-right">
            <div class="header-search hs-toggle">
              <a href="#" class="search-toggle">
                <i class="d-icon-search"></i>
              </a>
              <form action="#" class="input-wrapper">
                <input
                  type="text"
                  class="form-control"
                  name="search"
                  autocomplete="off"
                  placeholder="Search your keyword..."
                  required
                />
                <button class="btn btn-search" type="submit">
                  <i class="d-icon-search"></i>
                </button>
              </form>
            </div>
            <!-- End of Header Search -->
            <a
              class="login-link"
              href="ajax/login.html"
              data-toggle="login-modal"
              ><i class="d-icon-user"></i
            ></a>

            <div
              class="
                dropdown
                wishlist wishlist-dropdown
                off-canvas
                mr-4
                d-lg-show
              "
            >
              <a href="wishlist.html" class="wishlist-toggle">
                <i class="d-icon-heart"></i>
              </a>
              <div class="canvas-overlay"></div>
              <!-- End Wishlist Toggle -->
              <div class="dropdown-box scrollable">
                <div class="canvas-header">
                  <h4 class="canvas-title">wishlist</h4>
                  <a
                    href="#"
                    class="btn btn-dark btn-link btn-icon-right btn-close"
                    >close<i class="d-icon-arrow-right"></i
                    ><span class="sr-only">wishlist</span></a
                  >
                </div>
                <div class="products scrollable">
                  <div class="product product-wishlist">
                    <figure class="product-media">
                      <a href="product.html">
                        <img
                          src="/images/wishlist/product-1.jpg"
                          width="100"
                          height="100"
                          alt="product"
                        />
                      </a>
                      <button class="btn btn-link btn-close">
                        <i class="fas fa-times"></i
                        ><span class="sr-only">Close</span>
                      </button>
                    </figure>
                    <div class="product-detail">
                      <a href="product.html" class="product-name"
                        >Girl's Dark Bag</a
                      >
                      <div class="price-box">
                        <span class="product-price">$84.00</span>
                      </div>
                    </div>
                  </div>
                  <!-- End of wishlist Product -->
                  <div class="product product-wishlist">
                    <figure class="product-media">
                      <a href="product.html">
                        <img
                          src="/images/wishlist/product-2.jpg"
                          width="100"
                          height="100"
                          alt="product"
                        />
                      </a>
                      <button class="btn btn-link btn-close">
                        <i class="fas fa-times"></i
                        ><span class="sr-only">Close</span>
                      </button>
                    </figure>
                    <div class="product-detail">
                      <a href="product.html" class="product-name"
                        >Women's Fashional Comforter
                      </a>
                      <div class="price-box">
                        <span class="product-price">$84.00</span>
                      </div>
                    </div>
                  </div>
                  <!-- End of wishlist Product -->
                  <div class="product product-wishlist">
                    <figure class="product-media">
                      <a href="product.html">
                        <img
                          src="/images/wishlist/product-3.jpg"
                          width="100"
                          height="100"
                          alt="product"
                        />
                      </a>
                      <button class="btn btn-link btn-close">
                        <i class="fas fa-times"></i
                        ><span class="sr-only">Close</span>
                      </button>
                    </figure>
                    <div class="product-detail">
                      <a href="product.html" class="product-name"
                        >Wide Knickerbockers</a
                      >
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

            <div class="dropdown cart-dropdown type2 mr-0 mr-lg-2">
              <a href="#" class="cart-toggle link">
                <i class="d-icon-bag"><span class="cart-count">2</span></i>
              </a>
              <!-- End Cart Toggle -->
              <div class="dropdown-box">
                <div class="products scrollable">
                  <div class="product product-cart">
                    <figure class="product-media">
                      <a href="demo7-product.html">
                        <img
                          src="/images/cart/product-1.jpg"
                          alt="product"
                          width="80"
                          height="88"
                        />
                      </a>
                      <button class="btn btn-link btn-close">
                        <i class="fas fa-times"></i>
                      </button>
                    </figure>
                    <div class="product-detail">
                      <a href="demo7-product.html" class="product-name"
                        >Riode White Trends</a
                      >
                      <div class="price-box">
                        <span class="product-quantity">1</span>
                        <span class="product-price">$21.00</span>
                      </div>
                    </div>
                  </div>
                  <!-- End of Cart Product -->
                  <div class="product product-cart">
                    <figure class="product-media">
                      <a href="demo7-product.html">
                        <img
                          src="/images/cart/product-2.jpg"
                          alt="product"
                          width="80"
                          height="88"
                        />
                      </a>
                      <button class="btn btn-link btn-close">
                        <i class="fas fa-times"></i>
                      </button>
                    </figure>
                    <div class="product-detail">
                      <a href="demo7-product.html" class="product-name"
                        >Dark Blue Women’s Leomora Hat</a
                      >
                      <div class="price-box">
                        <span class="product-quantity">1</span>
                        <span class="product-price">$118.00</span>
                      </div>
                    </div>
                  </div>
                  <!-- End of Cart Product -->
                </div>
                <!-- End of Products  -->
                <div class="cart-total">
                  <label>Subtotal:</label>
                  <span class="price">$139.00</span>
                </div>
                <!-- End of Cart Total -->
                <div class="cart-action">
                  <a href="cart.html" class="btn btn-dark btn-link"
                    >View Cart</a
                  >
                  <a href="checkout.html" class="btn btn-dark"
                    ><span>Go To Checkout</span></a
                  >
                </div>
                <!-- End of Cart Action -->
              </div>
              <!-- End Dropdown Box -->
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End of Header -->
    <main class="main single-product">
      <div class="page-content mb-10">
        <div class="container-fluid">
          <div class="product-navigation">
            <ul class="breadcrumb breadcrumb-lg">
              <li>
                <a href="demo7.html"><i class="d-icon-home"></i></a>
              </li>
              <li><a href="#" class="active">Products</a></li>
              <li>Detail</li>
            </ul>
            <ul class="product-nav">
              <li class="product-nav-prev">
                <a href="#">
                  <i class="d-icon-arrow-left"></i> Prev
                  <span class="product-nav-popup">
                    <img
                      src="/images/product/product-thumb-prev.jpg"
                      alt="product thumbnail"
                      width="110"
                      height="123"
                    />
                    <span class="product-name">Sed egtas Dnte Comfort</span>
                  </span>
                </a>
              </li>
              <li class="product-nav-next">
                <a href="#">
                  Next <i class="d-icon-arrow-right"></i>
                  <span class="product-nav-popup">
                    <img
                      src="/images/product/product-thumb-next.jpg"
                      alt="product thumbnail"
                      width="110"
                      height="123"
                    />
                    <span class="product-name">Sed egtas Dnte Comfort</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="row gutter-lg">
            <aside
              class="
                col-lg-3 col-xxl-2
                right-sidebar
                sidebar-fixed
                sticky-sidebar-wrapper
              "
            >
              <div class="sidebar-overlay">
                <a class="sidebar-close" href="#"
                  ><i class="d-icon-times"></i
                ></a>
              </div>
              <a href="#" class="sidebar-toggle"
                ><i class="fas fa-chevron-left"></i
              ></a>
              <div class="sidebar-content">
                <div class="sticky-sidebar">
                  <div class="service-list mb-4">
                    <div class="icon-box icon-box-side icon-box3">
                      <span class="icon-box-icon">
                        <i class="d-icon-secure"></i>
                      </span>
                      <div class="icon-box-content">
                        <h4 class="icon-box-title">Secured Payment</h4>
                        <p>We ensure secure payment!</p>
                      </div>
                    </div>
                    <div class="icon-box icon-box-side icon-box1">
                      <span class="icon-box-icon">
                        <i class="d-icon-truck"></i>
                      </span>
                      <div class="icon-box-content">
                        <h4 class="icon-box-title">Free Shipping</h4>
                        <p>On all US orders above $99</p>
                      </div>
                    </div>
                    <div class="icon-box icon-box-side icon-box2">
                      <span class="icon-box-icon">
                        <i class="d-icon-money"></i>
                      </span>
                      <div class="icon-box-content">
                        <h4 class="icon-box-title">Money Back guarantee</h4>
                        <p>Any back within 30 days</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="
                      product-banner
                      banner banner-fixed
                      overlay-zoom overlay-dark
                      mb-4
                    "
                  >
                    <figure>
                      <img
                        src="/images/demos/demo7/product/banner.jpg"
                        width="280"
                        height="312"
                        alt="banner"
                      />
                    </figure>
                    <div
                      class="
                        banner-price-info
                        font-weight-bold
                        text-white text-uppercase
                        ls-m
                      "
                    >
                      20-22<sup>th</sup> April
                    </div>
                    <div class="banner-content text-center mt-1">
                      <h4
                        class="
                          banner-subtitle
                          d-inline-block
                          bg-primary
                          text-uppercase
                          ls-m
                          font-weight-semi-bold
                          text-dark
                          mb-0
                        "
                      >
                        Ultimate Sale
                      </h4>
                      <h3
                        class="
                          banner-title
                          ls-l
                          text-uppercase text-white
                          font-weight-bold
                          mb-0
                        "
                      >
                        Up to 70%
                      </h3>
                      <p class="mb-4 font-primary text-white lh-1 ls-m">
                        Discount Selected Items
                      </p>
                      <a href="#" class="btn btn-white btn-link btn-underline"
                        >Shop now<i class="d-icon-arrow-right"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div class="col-lg-9 col-xxl-10">
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
                    <div class="product-meta mb-3">
                      SKU: <span class="product-sku">12345670</span> BRAND:
                      <span class="product-brand">The Northland</span>
                    </div>
                    <div class="product-price">${{ productPrice }}</div>
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span
                          class="ratings"
                          :style="'width: ' + product.star * 20 + '%'"
                        ></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a
                        href="#product-tab-reviews"
                        class="link-to-tab rating-reviews"
                        >( 6 reviews )</a
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
                          @click="colorSelect(color.name)"
                          class="color"
                          data-src="/images/demos/demo7/products/big1.jpg"
                          :style="'background-color: ' + color.code"
                        ></a>
                      </div>
                    </div>
                    <div class="product-form product-size">
                      <label>Size:</label>
                      <div class="product-form-group">
                        <div class="product-variations">
                          <a
                            class="size"
                            v-for="size in productSize"
                            :key="size.id"
                            @click="sizeSelect(size)"
                            >{{ size.name }}</a
                          >
                        </div>
                        <!-- <a href="#" class="product-variation-clean"
                          >Clean All</a
                        > -->
                      </div>
                    </div>
                    <!-- <div>
                      <span>{{ productPrice }}</span>
                    </div> -->

                    <hr class="product-divider" />

                    <div class="product-form product-qty">
                      <div class="product-form-group">
                        <div class="input-group">
                          <button class="quantity-minus d-icon-minus"></button>
                          <input
                            class="quantity form-control"
                            type="number"
                            min="1"
                            :max="productQuantity"
                          />
                          <button class="quantity-plus d-icon-plus"></button>
                        </div>
                        <button class="btn-product btn-cart">
                          <i class="d-icon-bag"></i>Add To Cart
                        </button>
                      </div>
                    </div>

                    <hr class="product-divider mb-3" />

                    <div class="product-footer">
                      <div class="social-links mr-2">
                        <a
                          href="#"
                          class="social-link social-facebook fab fa-facebook-f"
                        ></a>
                        <a
                          href="#"
                          class="social-link social-twitter fab fa-twitter"
                        ></a>
                        <a
                          href="#"
                          class="
                            social-link social-pinterest
                            fab
                            fa-pinterest-p
                          "
                        ></a>
                      </div>
                      <div class="product-action">
                        <a href="#" class="btn-product btn-wishlist"
                          ><i class="d-icon-heart"></i>Add To Wishlist</a
                        >
                        <span class="divider"></span>
                        <a href="#" class="btn-product btn-compare"
                          ><i class="d-icon-random"></i>Add To Compare</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section>
                <h2
                  class="title title-simple title-center text-capitalize mb-4"
                >
                  Related Products
                </h2>

                <div
                  class="
                    owl-carousel owl-theme owl-nav-full
                    row
                    cols-2 cols-md-3 cols-lg-4
                  "
                  data-owl-options="{
								'items': 5,
								'nav': false,
								'loop': false,
								'dots': true,
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
										'dots': false
									}
								}
							}"
                >
                  <div class="product text-center">
                    <figure class="product-media">
                      <a href="demo7-product.html">
                        <img
                          src="/images/demos/demo7/shop/1.jpg"
                          alt="product"
                          width="280"
                          height="315"
                        />
                      </a>
                      <div class="product-label-group">
                        <label class="product-label label-new">new</label>
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
                        <a href="demo7-shop.html">Shoes</a>
                      </div>
                      <h3 class="product-name">
                        <a href="demo7-product.html">Fashion Football Boots</a>
                      </h3>
                      <div class="product-price">
                        <ins class="new-price">$199.00</ins
                        ><del class="old-price">$210.00</del>
                      </div>
                      <div class="ratings-container">
                        <div class="ratings-full">
                          <span class="ratings" style="width: 100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                        </div>
                        <a href="demo7-product.html" class="rating-reviews"
                          >( <span class="review-count">6</span> reviews )</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="product text-center">
                    <figure class="product-media">
                      <a href="demo7-product.html">
                        <img
                          src="/images/demos/demo7/shop/2.jpg"
                          alt="product"
                          width="280"
                          height="315"
                        />
                      </a>
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
                        <a href="demo7-shop.html">Shoes</a>
                      </div>
                      <h3 class="product-name">
                        <a href="demo7-product.html"
                          >Fashion White Training Shoes</a
                        >
                      </h3>
                      <div class="product-price">
                        <span class="price">$35.00</span>
                      </div>
                      <div class="ratings-container">
                        <div class="ratings-full">
                          <span class="ratings" style="width: 100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                        </div>
                        <a href="demo7-product.html" class="rating-reviews"
                          >( <span class="review-count">6</span> reviews )</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="product text-center">
                    <figure class="product-media">
                      <a href="demo7-product.html">
                        <img
                          src="/images/demos/demo7/shop/3.jpg"
                          alt="product"
                          width="280"
                          height="315"
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
                        <a href="demo7-shop.html">Clothing</a>
                      </div>
                      <h3 class="product-name">
                        <a href="demo7-product.html"
                          >Women's Fashion Sportswear</a
                        >
                      </h3>
                      <div class="product-price">
                        <span class="price">$19.00</span>
                      </div>
                      <div class="ratings-container">
                        <div class="ratings-full">
                          <span class="ratings" style="width: 100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                        </div>
                        <a href="demo7-product.html" class="rating-reviews"
                          >( <span class="review-count">6</span> reviews )</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="product text-center">
                    <figure class="product-media">
                      <a href="demo7-product.html">
                        <img
                          src="/images/demos/demo7/shop/4.jpg"
                          alt="product"
                          width="280"
                          height="315"
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
                        <a href="demo7-shop.html">Shoes</a>
                      </div>
                      <h3 class="product-name">
                        <a href="demo7-product.html"
                          >Skyblue Basketball Boots</a
                        >
                      </h3>
                      <div class="product-price">
                        <span class="price">$19.00</span>
                      </div>
                      <div class="ratings-container">
                        <div class="ratings-full">
                          <span class="ratings" style="width: 100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                        </div>
                        <a href="demo7-product.html" class="rating-reviews"
                          >( <span class="review-count">6</span> reviews )</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="product shadow-media text-center">
                    <figure class="product-media">
                      <a href="demo7-product.html">
                        <img
                          src="/images/demos/demo7/shop/5.jpg"
                          alt="product"
                          width="280"
                          height="315"
                        />
                      </a>
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
                        <a href="demo7-shop.html">categories</a>
                      </div>
                      <h3 class="product-name">
                        <a href="demo7-product.html"
                          >Fashion Nike Training Shoes</a
                        >
                      </h3>
                      <div class="product-price">
                        <ins class="new-price">$98.00</ins
                        ><del class="old-price">$210.00</del>
                      </div>
                      <div class="ratings-container">
                        <div class="ratings-full">
                          <span class="ratings" style="width: 100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                        </div>
                        <a href="demo7-product.html" class="rating-reviews"
                          >( <span class="review-count">6</span> reviews )</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- End Main -->
    <footer
      class="footer appear-animate"
      data-animation-options="{ 'delay': '.2s' }"
    >
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="widget widget-about">
                <a href="demo7.html" class="logo-footer mb-5">
                  <img
                    src="/images/demos/demo7/footer-logo.png"
                    alt="logo-footer"
                    width="154"
                    height="43"
                  />
                </a>
                <div class="widget-body">
                  <p>
                    Fringilla urna porttitor rhoncus dolor purus<br />
                    luctus venenatis lectus magna fringilla diam<br />
                    maecenas ultricies mi eget mauris.
                  </p>
                  <a href="mailto:mail@riode.com">Riode@example.com</a>
                </div>
              </div>
              <!-- End of Widget -->
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="widget">
                <h4 class="widget-title">Account</h4>
                <ul class="widget-body">
                  <li><a href="account.html">My Account</a></li>
                  <li><a href="#">Our Guarantees</a></li>
                  <li><a href="#">Terms And Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Intellectual Property Claims</a></li>
                  <li><a href="#">Site Map</a></li>
                </ul>
              </div>
              <!-- End of Widget -->
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="widget mb-6 mb-sm-0">
                <h4 class="widget-title">Get Help</h4>
                <ul class="widget-body">
                  <li><a href="#">Shipping &amp; Delivery</a></li>
                  <li><a href="#">Order Status</a></li>
                  <li><a href="#">Brand</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Payment Options</a></li>
                  <li><a href="contact-us.html">Contact Us</a></li>
                </ul>
              </div>
              <!-- End of Widget -->
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="widget">
                <h4 class="widget-title text-normal">
                  Subscribe to Our Newsletter
                </h4>
                <div class="widget-body widget-newsletter">
                  <form action="#" class="input-wrapper input-wrapper-inline">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Email address here..."
                      required
                    />
                    <button
                      class="btn btn-primary btn-sm btn-icon-right btn-rounded"
                      type="submit"
                    >
                      subscribe<i class="d-icon-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div class="footer-info">
                <figure class="payment">
                  <img
                    src="/images/demos/demo4/payment.png"
                    alt="payment"
                    width="135"
                    height="24"
                  />
                </figure>
                <div class="social-links">
                  <a
                    href="#"
                    class="social-link social-facebook fab fa-facebook-f"
                  ></a>
                  <a
                    href="#"
                    class="social-link social-twitter fab fa-twitter"
                  ></a>
                  <a
                    href="#"
                    class="social-link social-linkedin fab fa-linkedin-in"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of FooterMiddle -->
      <div class="footer-bottom d-block text-center">
        <p class="copyright">
          Riode eCommerce &copy; 2021. All Rights Reserved
        </p>
      </div>
      <!-- End of FooterBottom -->
    </footer>
    <!-- End of Footer -->
  </div>
  <!-- Sticky Footer -->
  <div class="sticky-footer sticky-content fix-bottom">
    <a href="demo7.html" class="sticky-link">
      <i class="d-icon-home"></i>
      <span>Home</span>
    </a>
    <a href="demo7-shop.html" class="sticky-link">
      <i class="d-icon-volume"></i>
      <span>Categories</span>
    </a>
    <a href="wishlist.html" class="sticky-link">
      <i class="d-icon-heart"></i>
      <span>Wishlist</span>
    </a>
    <a href="account.html" class="sticky-link">
      <i class="d-icon-user"></i>
      <span>Account</span>
    </a>
    <div class="header-search hs-toggle dir-up">
      <a href="#" class="search-toggle sticky-link">
        <i class="d-icon-search"></i>
        <span>Search</span>
      </a>
      <form action="#" class="input-wrapper">
        <input
          type="text"
          class="form-control"
          name="search"
          autocomplete="off"
          placeholder="Search your keyword..."
          required
        />
        <button class="btn btn-search" type="submit">
          <i class="d-icon-search"></i>
        </button>
      </form>
    </div>
  </div>
  <!-- Scroll Top -->
  <a id="scroll-top" href="#top" title="Top" role="button" class="scroll-top"
    ><i class="d-icon-arrow-up"></i
  ></a>

  <!-- Root element of PhotoSwipe. Must have class pswp. -->
  <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <!-- Background of PhotoSwipe. It's a separate element as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>

    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">
      <!-- Container that holds slides.
			PhotoSwipe keeps only 3 of them in the DOM to save memory.
			Don't modify these 3 pswp__item elements, data is added later on. -->
      <div class="pswp__container">
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
      </div>

      <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
      <div class="pswp__ui pswp__ui--hidden">
        <div class="pswp__top-bar">
          <!--  Controls are self-explanatory. Order can be changed. -->

          <div class="pswp__counter"></div>

          <button
            class="pswp__button pswp__button--close"
            aria-label="Close (Esc)"
          ></button>
          <button
            class="pswp__button pswp__button--zoom"
            aria-label="Zoom in/out"
          ></button>

          <div class="pswp__preloader">
            <div class="loading-spin"></div>
          </div>
        </div>

        <div
          class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
        >
          <div class="pswp__share-tooltip"></div>
        </div>

        <button
          class="pswp__button--arrow--left"
          aria-label="Previous (arrow left)"
        ></button>
        <button
          class="pswp__button--arrow--right"
          aria-label="Next (arrow right)"
        ></button>

        <div class="pswp__caption">
          <div class="pswp__caption__center"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- MobileMenu -->
  <div class="mobile-menu-wrapper">
    <div class="mobile-menu-overlay"></div>
    <!-- End Overlay -->
    <a class="mobile-menu-close" href="#"><i class="d-icon-times"></i></a>
    <!-- End CloseButton -->
    <div class="mobile-menu-container scrollable">
      <form action="#" class="input-wrapper">
        <input
          type="text"
          class="form-control"
          name="search"
          autocomplete="off"
          placeholder="Search your keyword..."
          required
        />
        <button class="btn btn-search" type="submit">
          <i class="d-icon-search"></i>
        </button>
      </form>
      <!-- End Search Form -->
      <ul class="mobile-menu mmenu-anim">
        <menu-component></menu-component>
      </ul>
      <!-- End MobileMenu -->
    </div>
  </div>
</template>
<script lang="ts">
import MenuComponent from "@/components/MenuComponent.vue";
import ApiService from "@/core/services/ApiService";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "productPage",
  components: { MenuComponent },
  methods: {},
  data: () => ({}),
  props: {},
  setup() {
    const product = ref({ stock_detail: {}, min_price: 0 });
    const productId = ref();
    const route = useRoute();
    const productQuantity = ref();
    const productSize = ref([]);
    const productPrice = ref(0);

    onMounted(() => {
      productId.value = route.params.id;

      ApiService.get(`products/${productId.value}`)
        .then((response) => {
          product.value = response.data;
          productPrice.value = product.value.min_price;
        })
        .catch((e) => {
          console.log(e);
        });
    });

    const colorSelect = (name) => {
      const detail = product.value.stock_detail[name].color_data.data;
      productSize.value = Object.values(detail);
    };

    const sizeSelect = (size) => {
      console.log(size);

      productQuantity.value = size.quantity;
      productPrice.value = size.price;
    };

    return {
      product,
      productId,
      colorSelect,
      sizeSelect,
      productQuantity,
      productSize,
      productPrice,
    };
  },
});
</script>
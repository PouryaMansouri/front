<template>
  <div>
    <div class="page-wrapper">
      <header class="header">
        <div class="header-top">
          <div class="container">
            <div class="header-left">
              <p class="welcome-msg">
                Welcome to Riode store message or remove it!
              </p>
            </div>
            <div class="header-right">
              <div class="dropdown">
                <a href="#currency">USD</a>
                <ul class="dropdown-box">
                  <li><a href="#USD">USD</a></li>
                  <li><a href="#EUR">EUR</a></li>
                </ul>
              </div>
              <!-- End DropDown Menu -->
              <div class="dropdown ml-5">
                <a href="#language">ENG</a>
                <ul class="dropdown-box">
                  <li>
                    <a href="#USD">ENG</a>
                  </li>
                  <li>
                    <a href="#EUR">FRH</a>
                  </li>
                </ul>
              </div>
              <!-- End DropDown Menu -->
              <span class="divider"></span>
              <a href="contact-us.html" class="contact d-lg-show"
                ><i class="d-icon-map"></i>Contact</a
              >
              <a href="#" class="help d-lg-show"
                ><i class="d-icon-info"></i> Need Help</a
              >
              <a
                class="login-link"
                href="ajax/login.html"
                data-toggle="login-modal"
                ><i class="d-icon-user"></i>Sign in</a
              >
              <span class="delimiter">/</span>
              <a
                class="register-link ml-0"
                href="ajax/login.html"
                data-toggle="login-modal"
                >Register</a
              >
              <!-- End of Login -->
            </div>
          </div>
        </div>
        <!-- End HeaderTop -->
        <div class="header-middle sticky-header fix-top sticky-content">
          <div class="container">
            <div class="header-left">
              <a href="#" class="mobile-menu-toggle">
                <i class="d-icon-bars2"></i>
              </a>
              <a href="demo1.html" class="logo">
                <img src="images/logo.png" alt="logo" width="153" height="44" />
              </a>
              <!-- End Logo -->

              <div class="header-search hs-simple">
                <form action="#" class="input-wrapper">
                  <input
                    type="text"
                    class="form-control"
                    name="search"
                    autocomplete="off"
                    placeholder="Search..."
                    required
                  />
                  <button class="btn btn-search" type="submit">
                    <i class="d-icon-search"></i>
                  </button>
                </form>
              </div>
              <!-- End Header Search -->
            </div>
            <div class="header-right">
              <a href="tel:#" class="icon-box icon-box-side">
                <div class="icon-box-icon mr-0 mr-lg-2">
                  <i class="d-icon-phone"></i>
                </div>
                <div class="icon-box-content d-lg-show">
                  <h4 class="icon-box-title">Call Us Now:</h4>
                  <p>0(800) 123-456</p>
                </div>
              </a>
              <span class="divider"></span>
              <div class="dropdown wishlist wishlist-dropdown off-canvas">
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
                            src="images/wishlist/product-1.jpg"
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
                            src="images/wishlist/product-2.jpg"
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
                            src="images/wishlist/product-3.jpg"
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
              <span class="divider"></span>
              <div class="dropdown cart-dropdown type2 mr-0 mr-lg-2">
                <a href="#" class="cart-toggle label-block link">
                  <div class="cart-label d-lg-show">
                    <span class="cart-name">Shopping Cart:</span>
                    <span class="cart-price">$0.00</span>
                  </div>
                  <i class="d-icon-bag"><span class="cart-count">2</span></i>
                </a>
                <!-- End Cart Toggle -->
                <div class="dropdown-box">
                  <div class="products scrollable">
                    <div class="product product-cart">
                      <figure class="product-media">
                        <a href="#">
                          <img
                            src="images/cart/product-1.jpg"
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
                        <a href="product.html" class="product-name"
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
                        <a href="#">
                          <img
                            src="images/cart/product-2.jpg"
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
                        <a href="product.html" class="product-name"
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
              <div class="header-search hs-toggle mobile-search">
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
            </div>
          </div>
        </div>

        <div class="header-bottom d-lg-show">
          <div class="container">
            <div class="header-left">
              <nav class="main-nav">
                <ul class="menu">
                  <menu-component></menu-component>
                </ul>
              </nav>
            </div>
            <div class="header-right">
              <a href="#"><i class="d-icon-card"></i>Special Offers</a>
              <a href="https://d-themes.com/buynow/riodehtml" class="ml-6"
                >Buy Riode!</a
              >
            </div>
          </div>
        </div>
      </header>
      <!-- End Header -->
      <main class="main">
        <div
          class="page-header"
          style="
            background-image: url('images/shop/page-header-back.jpg');
            background-color: #3c63a4;
          "
        >
          <h3 class="page-subtitle">Riode</h3>
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
                <a class="sidebar-close" href="#"
                  ><i class="d-icon-times"></i
                ></a>
                <div class="sidebar-content">
                  <div class="sticky-sidebar" data-sticky-options="{'top': 10}">
                    <div class="filter-actions mb-4">
                      <a
                        href="#"
                        class="
                          sidebar-toggle-btn
                          toggle-remain
                          btn btn-outline btn-primary btn-rounded btn-icon-right
                        "
                        >Filter<i class="d-icon-arrow-left"></i
                      ></a>
                      <a href="#" class="filter-clean">Clean All</a>
                    </div>
                    <div class="widget widget-collapsible">
                      <h3 class="widget-title">All Categories</h3>
                      <ul class="widget-body filter-items search-ul">
                        <li
                          v-for="item in filterData.categories"
                          :key="item.id"
                        >
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
                  <div class="toolbox-left">
                    <a
                      href="#"
                      class="
                        toolbox-item
                        left-sidebar-toggle
                        btn btn-outline btn-primary btn-rounded btn-icon-right
                        d-lg-none
                      "
                      >Filter<i class="d-icon-arrow-right"></i
                    ></a>
                    <div class="toolbox-item toolbox-sort select-box text-dark">
                      <label>Sort By :</label>
                      <select name="orderby" class="form-control">
                        <option value="default">Default</option>
                        <option value="popularity" selected="selected">
                          Most Popular
                        </option>
                        <option value="rating">Average rating</option>
                        <option value="date">Latest</option>
                        <option value="price-low">
                          Sort forward price low
                        </option>
                        <option value="price-high">
                          Sort forward price high
                        </option>
                        <option value="">Clear custom sort</option>
                      </select>
                    </div>
                  </div>
                  <div class="toolbox-right">
                    <div class="toolbox-item toolbox-show select-box text-dark">
                      <label>Show :</label>
                      <select name="count" class="form-control">
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="36">36</option>
                      </select>
                    </div>
                    <div class="toolbox-item toolbox-layout mr-lg-0">
                      <a
                        href="shop-list-mode.html"
                        class="d-icon-mode-list btn-layout"
                      ></a>
                      <a
                        href="shop.html"
                        class="d-icon-mode-grid btn-layout active"
                      ></a>
                    </div>
                  </div>
                </nav>
                <div class="row cols-2 cols-sm-3 product-wrapper">
                  <div v-for="(item, index) in productList" :key="index">
                    <div class="product-wrap">
                      <div class="product">
                        <router-link :to="'/product/' + item.id">
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
                <nav class="toolbox toolbox-pagination">
                  <!-- <p class="show-info">Showing <span>12 of 56</span> Products</p> -->
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <a
                        class="page-link page-link-prev"
                        aria-label="Previous"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        <i class="d-icon-arrow-left"></i>Prev
                      </a>
                    </li>

                    <li class="page-item">
                      <a class="page-link page-link-next" aria-label="Next">
                        Next<i class="d-icon-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="bottom-block">
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
                      <router-link :to="'/product/' + item.id">
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
      <!-- End Main -->
      <footer class="footer">
        <div class="container">
          <div class="footer-top">
            <div class="row align-items-center">
              <div class="col-lg-3">
                <a href="demo1.html" class="logo-footer">
                  <img
                    src="images/logo-footer.png"
                    alt="logo-footer"
                    width="154"
                    height="43"
                  />
                </a>
                <!-- End FooterLogo -->
              </div>
              <div class="col-lg-9">
                <div
                  class="
                    widget widget-newsletter
                    form-wrapper form-wrapper-inline
                  "
                >
                  <div class="newsletter-info mx-auto mr-lg-2 ml-lg-4">
                    <h4 class="widget-title">Subscribe to our Newsletter</h4>
                    <p>Get all the latest information, Sales and Offers.</p>
                  </div>
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
                      class="btn btn-primary btn-rounded btn-md ml-2"
                      type="submit"
                    >
                      subscribe<i class="d-icon-arrow-right"></i>
                    </button>
                  </form>
                </div>
                <!-- End Newsletter -->
              </div>
            </div>
          </div>
          <!-- End FooterTop -->
          <div class="footer-middle">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="widget widget-info">
                  <h4 class="widget-title">Contact Info</h4>
                  <ul class="widget-body">
                    <li>
                      <label>Phone:</label>
                      <a href="tel:#">Toll Free (123) 456-7890</a>
                    </li>
                    <li>
                      <label>Email:</label>
                      <a href="mailto:mail@riode.com">mail@riode.com</a>
                    </li>
                    <li>
                      <label>Address:</label>
                      <a href="#">123 Street Name, City, England</a>
                    </li>
                    <li>
                      <label>WORKING DAYS / HOURS:</label>
                    </li>
                    <li>
                      <a href="#">Mon - Sun / 9:00 AM - 8:00 PM</a>
                    </li>
                  </ul>
                </div>
                <!-- End Widget -->
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="widget ml-lg-4">
                  <h4 class="widget-title">My Account</h4>
                  <ul class="widget-body">
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="#">Order History</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                    <li>
                      <a href="#">Custom Service</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Condition</a>
                    </li>
                  </ul>
                </div>
                <!-- End Widget -->
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="widget ml-lg-4">
                  <h4 class="widget-title">Contact Info</h4>
                  <ul class="widget-body">
                    <li>
                      <a href="#">Sign in</a>
                    </li>
                    <li>
                      <a href="cart.html">View Cart</a>
                    </li>
                    <li>
                      <a href="wishlist.html">My Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Track My Order</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                  </ul>
                </div>
                <!-- End Widget -->
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="widget widget-instagram">
                  <h4 class="widget-title">Instagram</h4>
                  <figure class="widget-body row">
                    <div class="col-3">
                      <img
                        src="images/instagram/01.jpg"
                        alt="instagram 1"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="col-3">
                      <img
                        src="images/instagram/02.jpg"
                        alt="instagram 2"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="col-3">
                      <img
                        src="images/instagram/03.jpg"
                        alt="instagram 3"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="col-3">
                      <img
                        src="images/instagram/04.jpg"
                        alt="instagram 4"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="col-3">
                      <img
                        src="images/instagram/05.jpg"
                        alt="instagram 5"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="col-3">
                      <img
                        src="images/instagram/06.jpg"
                        alt="instagram 6"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="col-3">
                      <img
                        src="images/instagram/07.jpg"
                        alt="instagram 7"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="col-3">
                      <img
                        src="images/instagram/08.jpg"
                        alt="instagram 8"
                        width="64"
                        height="64"
                      />
                    </div>
                  </figure>
                </div>
                <!-- End Instagram -->
              </div>
            </div>
          </div>
          <!-- End FooterMiddle -->
          <div class="footer-bottom">
            <div class="footer-left">
              <figure class="payment">
                <img
                  src="images/payment.png"
                  alt="payment"
                  width="159"
                  height="29"
                />
              </figure>
            </div>
            <div class="footer-center">
              <p class="copyright">
                Riode eCommerce &copy; 2021. All Rights Reserved
              </p>
            </div>
            <div class="footer-right">
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
          <!-- End FooterBottom -->
        </div>
      </footer>
      <!-- End Footer -->
    </div>
    <!-- Sticky Footer -->
    <div class="sticky-footer sticky-content fix-bottom">
      <a href="demo1.html" class="sticky-link">
        <i class="d-icon-home"></i>
        <span>Home</span>
      </a>
      <a href="shop.html" class="sticky-link">
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
  </div>
</template>

<script>
import Vue from "vue";
import VueSlider from "vue-slider-component/dist-css/vue-slider-component.umd.min.js";
import "vue-slider-component/dist-css/vue-slider-component.css";
import "vue-slider-component/theme/default.css";
import MenuComponent from "~/components/MenuComponent.vue";

export default Vue.extend({
  components: { MenuComponent, VueSlider },
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
      await $axios.get("products/data-for-filter/", { isBasic: true }),
      await $axios.get("products/", { isBasic: true }),
      await $axios.get("landing/new-product/", { isBasic: true }),
    ]);

    return {
      filterData: responses[0].data,
      productList: responses[1].data.results,
      newTrendingList: responses[2].data,
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

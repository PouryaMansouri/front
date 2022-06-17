<template>
  <div class="page-wrapper">
    <h1 class="d-none">Sarar - UAE branch in United Arabic Emirates</h1>
    <header class="header">
      <div class="header-top">
        <div class="container">
          <div class="header-left">
            <p class="welcome-msg">Welcome to Sarar From UAE!</p>
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
            <a href="demo2.html" class="logo">
              <img
                src="images/demos/demo2/logo.png"
                alt="logo"
                width="153"
                height="44"
              />
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
                <button
                  class="btn btn-search"
                  type="submit"
                  title="submit-button"
                >
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
              <a href="wishlist.html" class="wishlist-toggle" title="wishlist">
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
              <div class="dropdown-box">
                <div class="products scrollable">
                  <div class="product product-cart">
                    <figure class="product-media">
                      <a href="product.html">
                        <img
                          src="images/cart/product-1.jpg"
                          alt="product"
                          width="80"
                          height="88"
                        />
                      </a>
                      <button class="btn btn-link btn-close">
                        <i class="fas fa-times"></i
                        ><span class="sr-only">Close</span>
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
                      <a href="product.html">
                        <img
                          src="images/cart/product-2.jpg"
                          alt="product"
                          width="80"
                          height="88"
                        />
                      </a>
                      <button class="btn btn-link btn-close">
                        <i class="fas fa-times"></i
                        ><span class="sr-only">Close</span>
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
                <button
                  class="btn btn-search"
                  type="submit"
                  title="submit-button"
                >
                  <i class="d-icon-search"></i>
                </button>
              </form>
            </div>
            <!-- End of Header Search -->
          </div>
        </div>
      </div>

      <!-- Menu balaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->

      <div class="header-bottom d-lg-show">
        <div class="container">
          <div class="header-left">
            <nav class="main-nav">
              <ul class="menu menu-active-underline">
                <li class="active">
                  <a href="demo2.html">Home</a>
                </li>
                <li>
                  <a href="demo2-shop.html">Men</a>
                  <div class="megamenu">
                    <div class="row">
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 1</h4>
                        <ul>
                          <li>
                            <a href="shop-classic-filter.html"
                              >Classic Filter</a
                            >
                          </li>
                          <li>
                            <a href="shop-left-toggle-sidebar.html"
                              >Left Toggle Filter</a
                            >
                          </li>
                          <li>
                            <a href="shop-right-toggle-sidebar.html"
                              >Right Toggle Sidebar</a
                            >
                          </li>
                          <li>
                            <a href="shop-horizontal-filter.html"
                              >Horizontal Filter
                            </a>
                          </li>
                          <li>
                            <a href="shop-navigation-filter.html"
                              >Navigation Filter</a
                            >
                          </li>

                          <li>
                            <a href="shop-off-canvas-filter.html"
                              >Off-Canvas Filter
                            </a>
                          </li>
                          <li><a href="shop-top-banner.html">Top Banner</a></li>
                          <li>
                            <a href="shop-inner-top-banner.html"
                              >Inner Top Banner</a
                            >
                          </li>
                          <li>
                            <a href="shop-with-bottom-block.html"
                              >With Bottom Block</a
                            >
                          </li>
                          <li>
                            <a href="shop-category-in-page-header.html"
                              >Category In Page Header</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 2</h4>
                        <ul>
                          <li>
                            <a href="shop-grid-3cols.html">3 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-4cols.html">4 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-5cols.html">5 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-6cols.html">6 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-7cols.html">7 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-8cols.html">8 Columns Mode</a>
                          </li>
                          <li><a href="shop-list-mode.html">List Mode</a></li>
                          <li><a href="shop-pagination.html">Pagination</a></li>
                          <li>
                            <a href="shop-infinite-ajaxscroll.html"
                              >Infinite Ajaxscroll
                            </a>
                          </li>
                          <li>
                            <a href="shop-loadmore-button.html"
                              >Loadmore Button</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 3</h4>
                        <ul>
                          <li>
                            <a href="shop-category-grid-shop.html"
                              >Category Grid Shop</a
                            >
                          </li>
                          <li>
                            <a href="shop-category+products.html"
                              >Category + Products</a
                            >
                          </li>
                          <li>
                            <a href="shop-default-1.html">Shop Default 1 </a>
                          </li>
                          <li>
                            <a href="shop-default-2.html">Shop Default 2</a>
                          </li>
                          <li>
                            <a href="shop-default-3.html">Shop Default 3</a>
                          </li>
                          <li>
                            <a href="shop-default-4.html">Shop Default 4</a>
                          </li>
                          <li>
                            <a href="shop-default-5.html">Shop Default 5</a>
                          </li>
                          <li>
                            <a href="shop-default-6.html">Shop Default 6</a>
                          </li>
                          <li>
                            <a href="shop-default-7.html">Shop Default 7</a>
                          </li>
                          <li>
                            <a href="shop-default-8.html">Shop Default 8</a>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="
                          col-6 col-sm-4 col-md-4 col-lg-3
                          menu-banner menu-banner1
                          banner banner-fixed
                        "
                      >
                        <figure>
                          <img
                            src="images/menu/banner-1.jpg"
                            alt="Menu banner"
                            width="221"
                            height="330"
                          />
                        </figure>
                        <div class="banner-content y-50">
                          <h4
                            class="
                              banner-subtitle
                              font-weight-bold
                              text-primary
                              ls-m
                            "
                          >
                            Sale.
                          </h4>
                          <h3 class="banner-title font-weight-bold">
                            <span class="text-uppercase">Up to</span>70% Off
                          </h3>
                          <a
                            href="demo2-shop.html"
                            class="btn btn-link btn-underline"
                            >shop now<i class="d-icon-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                      <!-- End Megamenu -->
                    </div>
                  </div>
                </li>

                <li>
                  <a href="demo2-shop.html">Women</a>
                  <div class="megamenu">
                    <div class="row">
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 1</h4>
                        <ul>
                          <li>
                            <a href="shop-classic-filter.html"
                              >Classic Filter</a
                            >
                          </li>
                          <li>
                            <a href="shop-left-toggle-sidebar.html"
                              >Left Toggle Filter</a
                            >
                          </li>
                          <li>
                            <a href="shop-right-toggle-sidebar.html"
                              >Right Toggle Sidebar</a
                            >
                          </li>
                          <li>
                            <a href="shop-horizontal-filter.html"
                              >Horizontal Filter
                            </a>
                          </li>
                          <li>
                            <a href="shop-navigation-filter.html"
                              >Navigation Filter</a
                            >
                          </li>

                          <li>
                            <a href="shop-off-canvas-filter.html"
                              >Off-Canvas Filter
                            </a>
                          </li>
                          <li><a href="shop-top-banner.html">Top Banner</a></li>
                          <li>
                            <a href="shop-inner-top-banner.html"
                              >Inner Top Banner</a
                            >
                          </li>
                          <li>
                            <a href="shop-with-bottom-block.html"
                              >With Bottom Block</a
                            >
                          </li>
                          <li>
                            <a href="shop-category-in-page-header.html"
                              >Category In Page Header</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 2</h4>
                        <ul>
                          <li>
                            <a href="shop-grid-3cols.html">3 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-4cols.html">4 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-5cols.html">5 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-6cols.html">6 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-7cols.html">7 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-8cols.html">8 Columns Mode</a>
                          </li>
                          <li><a href="shop-list-mode.html">List Mode</a></li>
                          <li><a href="shop-pagination.html">Pagination</a></li>
                          <li>
                            <a href="shop-infinite-ajaxscroll.html"
                              >Infinite Ajaxscroll
                            </a>
                          </li>
                          <li>
                            <a href="shop-loadmore-button.html"
                              >Loadmore Button</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 3</h4>
                        <ul>
                          <li>
                            <a href="shop-category-grid-shop.html"
                              >Category Grid Shop</a
                            >
                          </li>
                          <li>
                            <a href="shop-category+products.html"
                              >Category + Products</a
                            >
                          </li>
                          <li>
                            <a href="shop-default-1.html">Shop Default 1 </a>
                          </li>
                          <li>
                            <a href="shop-default-2.html">Shop Default 2</a>
                          </li>
                          <li>
                            <a href="shop-default-3.html">Shop Default 3</a>
                          </li>
                          <li>
                            <a href="shop-default-4.html">Shop Default 4</a>
                          </li>
                          <li>
                            <a href="shop-default-5.html">Shop Default 5</a>
                          </li>
                          <li>
                            <a href="shop-default-6.html">Shop Default 6</a>
                          </li>
                          <li>
                            <a href="shop-default-7.html">Shop Default 7</a>
                          </li>
                          <li>
                            <a href="shop-default-8.html">Shop Default 8</a>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="
                          col-6 col-sm-4 col-md-4 col-lg-3
                          menu-banner menu-banner1
                          banner banner-fixed
                        "
                      >
                        <figure>
                          <img
                            src="images/menu/banner-1.jpg"
                            alt="Menu banner"
                            width="221"
                            height="330"
                          />
                        </figure>
                        <div class="banner-content y-50">
                          <h4
                            class="
                              banner-subtitle
                              font-weight-bold
                              text-primary
                              ls-m
                            "
                          >
                            Sale.
                          </h4>
                          <h3 class="banner-title font-weight-bold">
                            <span class="text-uppercase">Up to</span>70% Off
                          </h3>
                          <a
                            href="demo2-shop.html"
                            class="btn btn-link btn-underline"
                            >shop now<i class="d-icon-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                      <!-- End Megamenu -->
                    </div>
                  </div>
                </li>

                <li>
                  <a href="demo2-shop.html">Accessories</a>
                  <div class="megamenu">
                    <div class="row">
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 1</h4>
                        <ul>
                          <li>
                            <a href="shop-classic-filter.html"
                              >Classic Filter</a
                            >
                          </li>
                          <li>
                            <a href="shop-left-toggle-sidebar.html"
                              >Left Toggle Filter</a
                            >
                          </li>
                          <li>
                            <a href="shop-right-toggle-sidebar.html"
                              >Right Toggle Sidebar</a
                            >
                          </li>
                          <li>
                            <a href="shop-horizontal-filter.html"
                              >Horizontal Filter
                            </a>
                          </li>
                          <li>
                            <a href="shop-navigation-filter.html"
                              >Navigation Filter</a
                            >
                          </li>

                          <li>
                            <a href="shop-off-canvas-filter.html"
                              >Off-Canvas Filter
                            </a>
                          </li>
                          <li><a href="shop-top-banner.html">Top Banner</a></li>
                          <li>
                            <a href="shop-inner-top-banner.html"
                              >Inner Top Banner</a
                            >
                          </li>
                          <li>
                            <a href="shop-with-bottom-block.html"
                              >With Bottom Block</a
                            >
                          </li>
                          <li>
                            <a href="shop-category-in-page-header.html"
                              >Category In Page Header</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 2</h4>
                        <ul>
                          <li>
                            <a href="shop-grid-3cols.html">3 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-4cols.html">4 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-5cols.html">5 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-6cols.html">6 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-7cols.html">7 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-8cols.html">8 Columns Mode</a>
                          </li>
                          <li><a href="shop-list-mode.html">List Mode</a></li>
                          <li><a href="shop-pagination.html">Pagination</a></li>
                          <li>
                            <a href="shop-infinite-ajaxscroll.html"
                              >Infinite Ajaxscroll
                            </a>
                          </li>
                          <li>
                            <a href="shop-loadmore-button.html"
                              >Loadmore Button</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 3</h4>
                        <ul>
                          <li>
                            <a href="shop-category-grid-shop.html"
                              >Category Grid Shop</a
                            >
                          </li>
                          <li>
                            <a href="shop-category+products.html"
                              >Category + Products</a
                            >
                          </li>
                          <li>
                            <a href="shop-default-1.html">Shop Default 1 </a>
                          </li>
                          <li>
                            <a href="shop-default-2.html">Shop Default 2</a>
                          </li>
                          <li>
                            <a href="shop-default-3.html">Shop Default 3</a>
                          </li>
                          <li>
                            <a href="shop-default-4.html">Shop Default 4</a>
                          </li>
                          <li>
                            <a href="shop-default-5.html">Shop Default 5</a>
                          </li>
                          <li>
                            <a href="shop-default-6.html">Shop Default 6</a>
                          </li>
                          <li>
                            <a href="shop-default-7.html">Shop Default 7</a>
                          </li>
                          <li>
                            <a href="shop-default-8.html">Shop Default 8</a>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="
                          col-6 col-sm-4 col-md-4 col-lg-3
                          menu-banner menu-banner1
                          banner banner-fixed
                        "
                      >
                        <figure>
                          <img
                            src="images/menu/banner-1.jpg"
                            alt="Menu banner"
                            width="221"
                            height="330"
                          />
                        </figure>
                        <div class="banner-content y-50">
                          <h4
                            class="
                              banner-subtitle
                              font-weight-bold
                              text-primary
                              ls-m
                            "
                          >
                            Sale.
                          </h4>
                          <h3 class="banner-title font-weight-bold">
                            <span class="text-uppercase">Up to</span>70% Off
                          </h3>
                          <a
                            href="demo2-shop.html"
                            class="btn btn-link btn-underline"
                            >shop now<i class="d-icon-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                      <!-- End Megamenu -->
                    </div>
                  </div>
                </li>

                <li>
                  <a href="demo2-shop.html">Scarf</a>
                  <div class="megamenu">
                    <div class="row">
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 1</h4>
                        <ul>
                          <li>
                            <a href="shop-classic-filter.html"
                              >Classic Filter</a
                            >
                          </li>
                          <li>
                            <a href="shop-left-toggle-sidebar.html"
                              >Left Toggle Filter</a
                            >
                          </li>
                          <li>
                            <a href="shop-right-toggle-sidebar.html"
                              >Right Toggle Sidebar</a
                            >
                          </li>
                          <li>
                            <a href="shop-horizontal-filter.html"
                              >Horizontal Filter
                            </a>
                          </li>
                          <li>
                            <a href="shop-navigation-filter.html"
                              >Navigation Filter</a
                            >
                          </li>

                          <li>
                            <a href="shop-off-canvas-filter.html"
                              >Off-Canvas Filter
                            </a>
                          </li>
                          <li><a href="shop-top-banner.html">Top Banner</a></li>
                          <li>
                            <a href="shop-inner-top-banner.html"
                              >Inner Top Banner</a
                            >
                          </li>
                          <li>
                            <a href="shop-with-bottom-block.html"
                              >With Bottom Block</a
                            >
                          </li>
                          <li>
                            <a href="shop-category-in-page-header.html"
                              >Category In Page Header</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 2</h4>
                        <ul>
                          <li>
                            <a href="shop-grid-3cols.html">3 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-4cols.html">4 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-5cols.html">5 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-6cols.html">6 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-7cols.html">7 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-8cols.html">8 Columns Mode</a>
                          </li>
                          <li><a href="shop-list-mode.html">List Mode</a></li>
                          <li><a href="shop-pagination.html">Pagination</a></li>
                          <li>
                            <a href="shop-infinite-ajaxscroll.html"
                              >Infinite Ajaxscroll
                            </a>
                          </li>
                          <li>
                            <a href="shop-loadmore-button.html"
                              >Loadmore Button</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 3</h4>
                        <ul>
                          <li>
                            <a href="shop-category-grid-shop.html"
                              >Category Grid Shop</a
                            >
                          </li>
                          <li>
                            <a href="shop-category+products.html"
                              >Category + Products</a
                            >
                          </li>
                          <li>
                            <a href="shop-default-1.html">Shop Default 1 </a>
                          </li>
                          <li>
                            <a href="shop-default-2.html">Shop Default 2</a>
                          </li>
                          <li>
                            <a href="shop-default-3.html">Shop Default 3</a>
                          </li>
                          <li>
                            <a href="shop-default-4.html">Shop Default 4</a>
                          </li>
                          <li>
                            <a href="shop-default-5.html">Shop Default 5</a>
                          </li>
                          <li>
                            <a href="shop-default-6.html">Shop Default 6</a>
                          </li>
                          <li>
                            <a href="shop-default-7.html">Shop Default 7</a>
                          </li>
                          <li>
                            <a href="shop-default-8.html">Shop Default 8</a>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="
                          col-6 col-sm-4 col-md-4 col-lg-3
                          menu-banner menu-banner1
                          banner banner-fixed
                        "
                      >
                        <figure>
                          <img
                            src="images/menu/banner-1.jpg"
                            alt="Menu banner"
                            width="221"
                            height="330"
                          />
                        </figure>
                        <div class="banner-content y-50">
                          <h4
                            class="
                              banner-subtitle
                              font-weight-bold
                              text-primary
                              ls-m
                            "
                          >
                            Sale.
                          </h4>
                          <h3 class="banner-title font-weight-bold">
                            <span class="text-uppercase">Up to</span>70% Off
                          </h3>
                          <a
                            href="demo2-shop.html"
                            class="btn btn-link btn-underline"
                            >shop now<i class="d-icon-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                      <!-- End Megamenu -->
                    </div>
                  </div>
                </li>

                <li>
                  <a href="demo2-shop.html">Invitations suits</a>
                  <div class="megamenu">
                    <div class="row">
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 1</h4>
                        <ul>
                          <li>
                            <a href="shop-classic-filter.html"
                              >Classic Filter</a
                            >
                          </li>
                          <li>
                            <a href="shop-left-toggle-sidebar.html"
                              >Left Toggle Filter</a
                            >
                          </li>
                          <li>
                            <a href="shop-right-toggle-sidebar.html"
                              >Right Toggle Sidebar</a
                            >
                          </li>
                          <li>
                            <a href="shop-horizontal-filter.html"
                              >Horizontal Filter
                            </a>
                          </li>
                          <li>
                            <a href="shop-navigation-filter.html"
                              >Navigation Filter</a
                            >
                          </li>

                          <li>
                            <a href="shop-off-canvas-filter.html"
                              >Off-Canvas Filter
                            </a>
                          </li>
                          <li><a href="shop-top-banner.html">Top Banner</a></li>
                          <li>
                            <a href="shop-inner-top-banner.html"
                              >Inner Top Banner</a
                            >
                          </li>
                          <li>
                            <a href="shop-with-bottom-block.html"
                              >With Bottom Block</a
                            >
                          </li>
                          <li>
                            <a href="shop-category-in-page-header.html"
                              >Category In Page Header</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 2</h4>
                        <ul>
                          <li>
                            <a href="shop-grid-3cols.html">3 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-4cols.html">4 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-5cols.html">5 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-6cols.html">6 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-7cols.html">7 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-8cols.html">8 Columns Mode</a>
                          </li>
                          <li><a href="shop-list-mode.html">List Mode</a></li>
                          <li><a href="shop-pagination.html">Pagination</a></li>
                          <li>
                            <a href="shop-infinite-ajaxscroll.html"
                              >Infinite Ajaxscroll
                            </a>
                          </li>
                          <li>
                            <a href="shop-loadmore-button.html"
                              >Loadmore Button</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 3</h4>
                        <ul>
                          <li>
                            <a href="shop-category-grid-shop.html"
                              >Category Grid Shop</a
                            >
                          </li>
                          <li>
                            <a href="shop-category+products.html"
                              >Category + Products</a
                            >
                          </li>
                          <li>
                            <a href="shop-default-1.html">Shop Default 1 </a>
                          </li>
                          <li>
                            <a href="shop-default-2.html">Shop Default 2</a>
                          </li>
                          <li>
                            <a href="shop-default-3.html">Shop Default 3</a>
                          </li>
                          <li>
                            <a href="shop-default-4.html">Shop Default 4</a>
                          </li>
                          <li>
                            <a href="shop-default-5.html">Shop Default 5</a>
                          </li>
                          <li>
                            <a href="shop-default-6.html">Shop Default 6</a>
                          </li>
                          <li>
                            <a href="shop-default-7.html">Shop Default 7</a>
                          </li>
                          <li>
                            <a href="shop-default-8.html">Shop Default 8</a>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="
                          col-6 col-sm-4 col-md-4 col-lg-3
                          menu-banner menu-banner1
                          banner banner-fixed
                        "
                      >
                        <figure>
                          <img
                            src="images/menu/banner-1.jpg"
                            alt="Menu banner"
                            width="221"
                            height="330"
                          />
                        </figure>
                        <div class="banner-content y-50">
                          <h4
                            class="
                              banner-subtitle
                              font-weight-bold
                              text-primary
                              ls-m
                            "
                          >
                            Sale.
                          </h4>
                          <h3 class="banner-title font-weight-bold">
                            <span class="text-uppercase">Up to</span>70% Off
                          </h3>
                          <a
                            href="demo2-shop.html"
                            class="btn btn-link btn-underline"
                            >shop now<i class="d-icon-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                      <!-- End Megamenu -->
                    </div>
                  </div>
                </li>
                <li>
                  <a href="demo2-shop.html">Toxedo / Groom Suit</a>
                  <div class="megamenu">
                    <div class="row">
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 1</h4>
                        <ul>
                          <li>
                            <a href="shop-classic-filter.html"
                              >Classic Filter</a
                            >
                          </li>
                          <li>
                            <a href="shop-left-toggle-sidebar.html"
                              >Left Toggle Filter</a
                            >
                          </li>
                          <li>
                            <a href="shop-right-toggle-sidebar.html"
                              >Right Toggle Sidebar</a
                            >
                          </li>
                          <li>
                            <a href="shop-horizontal-filter.html"
                              >Horizontal Filter
                            </a>
                          </li>
                          <li>
                            <a href="shop-navigation-filter.html"
                              >Navigation Filter</a
                            >
                          </li>

                          <li>
                            <a href="shop-off-canvas-filter.html"
                              >Off-Canvas Filter
                            </a>
                          </li>
                          <li><a href="shop-top-banner.html">Top Banner</a></li>
                          <li>
                            <a href="shop-inner-top-banner.html"
                              >Inner Top Banner</a
                            >
                          </li>
                          <li>
                            <a href="shop-with-bottom-block.html"
                              >With Bottom Block</a
                            >
                          </li>
                          <li>
                            <a href="shop-category-in-page-header.html"
                              >Category In Page Header</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 2</h4>
                        <ul>
                          <li>
                            <a href="shop-grid-3cols.html">3 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-4cols.html">4 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-5cols.html">5 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-6cols.html">6 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-7cols.html">7 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-8cols.html">8 Columns Mode</a>
                          </li>
                          <li><a href="shop-list-mode.html">List Mode</a></li>
                          <li><a href="shop-pagination.html">Pagination</a></li>
                          <li>
                            <a href="shop-infinite-ajaxscroll.html"
                              >Infinite Ajaxscroll
                            </a>
                          </li>
                          <li>
                            <a href="shop-loadmore-button.html"
                              >Loadmore Button</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 3</h4>
                        <ul>
                          <li>
                            <a href="shop-category-grid-shop.html"
                              >Category Grid Shop</a
                            >
                          </li>
                          <li>
                            <a href="shop-category+products.html"
                              >Category + Products</a
                            >
                          </li>
                          <li>
                            <a href="shop-default-1.html">Shop Default 1 </a>
                          </li>
                          <li>
                            <a href="shop-default-2.html">Shop Default 2</a>
                          </li>
                          <li>
                            <a href="shop-default-3.html">Shop Default 3</a>
                          </li>
                          <li>
                            <a href="shop-default-4.html">Shop Default 4</a>
                          </li>
                          <li>
                            <a href="shop-default-5.html">Shop Default 5</a>
                          </li>
                          <li>
                            <a href="shop-default-6.html">Shop Default 6</a>
                          </li>
                          <li>
                            <a href="shop-default-7.html">Shop Default 7</a>
                          </li>
                          <li>
                            <a href="shop-default-8.html">Shop Default 8</a>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="
                          col-6 col-sm-4 col-md-4 col-lg-3
                          menu-banner menu-banner1
                          banner banner-fixed
                        "
                      >
                        <figure>
                          <img
                            src="images/menu/banner-1.jpg"
                            alt="Menu banner"
                            width="221"
                            height="330"
                          />
                        </figure>
                        <div class="banner-content y-50">
                          <h4
                            class="
                              banner-subtitle
                              font-weight-bold
                              text-primary
                              ls-m
                            "
                          >
                            Sale.
                          </h4>
                          <h3 class="banner-title font-weight-bold">
                            <span class="text-uppercase">Up to</span>70% Off
                          </h3>
                          <a
                            href="demo2-shop.html"
                            class="btn btn-link btn-underline"
                            >shop now<i class="d-icon-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                      <!-- End Megamenu -->
                    </div>
                  </div>
                </li>

                <li>
                  <a href="demo2-shop.html">Men Beach Group</a>
                  <div class="megamenu">
                    <div class="row">
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 1</h4>
                        <ul>
                          <li>
                            <a href="shop-classic-filter.html"
                              >Classic Filter</a
                            >
                          </li>
                          <li>
                            <a href="shop-left-toggle-sidebar.html"
                              >Left Toggle Filter</a
                            >
                          </li>
                          <li>
                            <a href="shop-right-toggle-sidebar.html"
                              >Right Toggle Sidebar</a
                            >
                          </li>
                          <li>
                            <a href="shop-horizontal-filter.html"
                              >Horizontal Filter
                            </a>
                          </li>
                          <li>
                            <a href="shop-navigation-filter.html"
                              >Navigation Filter</a
                            >
                          </li>

                          <li>
                            <a href="shop-off-canvas-filter.html"
                              >Off-Canvas Filter
                            </a>
                          </li>
                          <li><a href="shop-top-banner.html">Top Banner</a></li>
                          <li>
                            <a href="shop-inner-top-banner.html"
                              >Inner Top Banner</a
                            >
                          </li>
                          <li>
                            <a href="shop-with-bottom-block.html"
                              >With Bottom Block</a
                            >
                          </li>
                          <li>
                            <a href="shop-category-in-page-header.html"
                              >Category In Page Header</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 2</h4>
                        <ul>
                          <li>
                            <a href="shop-grid-3cols.html">3 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-4cols.html">4 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-5cols.html">5 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-6cols.html">6 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-7cols.html">7 Columns Mode</a>
                          </li>
                          <li>
                            <a href="shop-grid-8cols.html">8 Columns Mode</a>
                          </li>
                          <li><a href="shop-list-mode.html">List Mode</a></li>
                          <li><a href="shop-pagination.html">Pagination</a></li>
                          <li>
                            <a href="shop-infinite-ajaxscroll.html"
                              >Infinite Ajaxscroll
                            </a>
                          </li>
                          <li>
                            <a href="shop-loadmore-button.html"
                              >Loadmore Button</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                        <h4 class="menu-title">Variations 3</h4>
                        <ul>
                          <li>
                            <a href="shop-category-grid-shop.html"
                              >Category Grid Shop</a
                            >
                          </li>
                          <li>
                            <a href="shop-category+products.html"
                              >Category + Products</a
                            >
                          </li>
                          <li>
                            <a href="shop-default-1.html">Shop Default 1 </a>
                          </li>
                          <li>
                            <a href="shop-default-2.html">Shop Default 2</a>
                          </li>
                          <li>
                            <a href="shop-default-3.html">Shop Default 3</a>
                          </li>
                          <li>
                            <a href="shop-default-4.html">Shop Default 4</a>
                          </li>
                          <li>
                            <a href="shop-default-5.html">Shop Default 5</a>
                          </li>
                          <li>
                            <a href="shop-default-6.html">Shop Default 6</a>
                          </li>
                          <li>
                            <a href="shop-default-7.html">Shop Default 7</a>
                          </li>
                          <li>
                            <a href="shop-default-8.html">Shop Default 8</a>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="
                          col-6 col-sm-4 col-md-4 col-lg-3
                          menu-banner menu-banner1
                          banner banner-fixed
                        "
                      >
                        <figure>
                          <img
                            src="images/menu/banner-1.jpg"
                            alt="Menu banner"
                            width="221"
                            height="330"
                          />
                        </figure>
                        <div class="banner-content y-50">
                          <h4
                            class="
                              banner-subtitle
                              font-weight-bold
                              text-primary
                              ls-m
                            "
                          >
                            Sale.
                          </h4>
                          <h3 class="banner-title font-weight-bold">
                            <span class="text-uppercase">Up to</span>70% Off
                          </h3>
                          <a
                            href="demo2-shop.html"
                            class="btn btn-link btn-underline"
                            >shop now<i class="d-icon-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                      <!-- End Megamenu -->
                    </div>
                  </div>
                </li>

                <li>
                  <a href="demo2-product.html">Products</a>
                  <div class="megamenu">
                    <div class="row">
                      <div class="col-6 col-sm-4 col-md-3">
                        <h4 class="menu-title">Product Pages</h4>
                        <ul>
                          <li>
                            <a href="product-simple.html">Simple Product</a>
                          </li>
                          <li>
                            <a href="product-featured.html"
                              >Featured &amp; On Sale</a
                            >
                          </li>
                          <li><a href="product.html">Variable Product</a></li>
                          <li>
                            <a href="product-variable-swatch.html"
                              >Variation Swatch Product</a
                            >
                          </li>
                          <li>
                            <a href="product-grouped.html">Grouped Product </a>
                          </li>
                          <li>
                            <a href="product-external.html">External Product</a>
                          </li>
                          <li>
                            <a href="product-in-stock.html">In Stock Product</a>
                          </li>
                          <li>
                            <a href="product-out-stock.html"
                              >Out of Stock Product</a
                            >
                          </li>
                          <li>
                            <a href="product-upsell.html">Upsell Products</a>
                          </li>
                          <li>
                            <a href="product-cross-sell.html"
                              >Cross Sell Products</a
                            >
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-3">
                        <h4 class="menu-title">Product Layouts</h4>
                        <ul>
                          <li>
                            <a href="product-vertical.html">Vertical Thumb</a>
                          </li>
                          <li>
                            <a href="product-horizontal.html"
                              >Horizontal Thumb</a
                            >
                          </li>
                          <li>
                            <a href="product-gallery.html">Gallery Type</a>
                          </li>
                          <li><a href="product-grid.html">Grid Images</a></li>
                          <li>
                            <a href="product-masonry.html">Masonry Images</a>
                          </li>
                          <li><a href="product-sticky.html">Sticky Info</a></li>
                          <li>
                            <a href="product-sticky-both.html"
                              >Left & Right Sticky</a
                            >
                          </li>
                          <li>
                            <a href="product-left-sidebar.html"
                              >With Left Sidebar</a
                            >
                          </li>
                          <li>
                            <a href="product-right-sidebar.html"
                              >With Right Sidebar</a
                            >
                          </li>
                          <li>
                            <a href="product-full.html">Full Width Layout </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-6 col-sm-4 col-md-3">
                        <h4 class="menu-title">Product Features</h4>
                        <ul>
                          <li>
                            <a href="product-sale.html">Sale Countdown</a>
                          </li>
                          <li>
                            <a href="product-hurryup.html"
                              >Hurry Up Notification
                            </a>
                          </li>
                          <li>
                            <a href="product-attribute-guide.html"
                              >Attribute Guide
                            </a>
                          </li>
                          <li>
                            <a href="product-sticky-cart.html"
                              >Add Cart Sticky</a
                            >
                          </li>
                          <li>
                            <a href="product-thumbnail-label.html"
                              >Labels on Thumbnail</a
                            >
                          </li>
                          <li>
                            <a href="product-more-description.html"
                              >More Description Tabs</a
                            >
                          </li>
                          <li>
                            <a href="product-accordion-data.html"
                              >Data In Accordion</a
                            >
                          </li>
                          <li>
                            <a href="product-tabinside.html">Data Inside</a>
                          </li>
                          <li>
                            <a href="product-video.html">Video Thumbnail </a>
                          </li>
                          <li>
                            <a href="product-360-degree.html"
                              >360 Degree Thumbnail
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="
                          col-6 col-sm-4 col-md-3
                          menu-banner menu-banner2
                          banner banner-fixed
                        "
                      >
                        <figure>
                          <img
                            src="images/menu/banner-2.jpg"
                            alt="Menu banner"
                            width="221"
                            height="330"
                          />
                        </figure>
                        <div class="banner-content x-50 text-center">
                          <h3 class="banner-title text-white text-uppercase">
                            Sunglasses
                          </h3>
                          <h4
                            class="
                              banner-subtitle
                              font-weight-bold
                              text-white
                              mb-0
                            "
                          >
                            $23.00 - $120.00
                          </h4>
                        </div>
                      </div>
                      <!-- End MegaMenu -->
                    </div>
                  </div>
                </li>

                <li>
                  <a href="blog-classic.html">Blog</a>
                  <ul>
                    <li><a href="blog-classic.html">Classic</a></li>
                    <li><a href="blog-listing.html">Listing</a></li>
                    <li>
                      <a href="#">Grid</a>
                      <ul>
                        <li>
                          <a href="blog-grid-2col.html">Grid 2 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-3col.html">Grid 3 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-4col.html">Grid 4 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-sidebar.html">Grid sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Masonry</a>
                      <ul>
                        <li>
                          <a href="blog-masonry-2col.html">Masonry 2 columns</a>
                        </li>
                        <li>
                          <a href="blog-masonry-3col.html">Masonry 3 columns</a>
                        </li>
                        <li>
                          <a href="blog-masonry-4col.html">Masonry 4 columns</a>
                        </li>
                        <li>
                          <a href="blog-masonry-sidebar.html"
                            >Masonry sidebar</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Mask</a>
                      <ul>
                        <li>
                          <a href="blog-mask-grid.html">Blog mask grid</a>
                        </li>
                        <li>
                          <a href="blog-mask-masonry.html">Blog mask masonry</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="post-single.html">Single Post</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- End Header -->
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
                        src="images/demos/demo2/slides/1.jpg"
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
                        Men’s wear
                      </h4>
                      <h2
                        class="
                          banner-title
                          text-uppercase text-white
                          slide-animate
                        "
                        data-animation-options="{'name': 'fadeInRightShorter', 'duration': '1.2s', 'delay': '.3s'}"
                      >
                        Collection
                      </h2>
                      <h5
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
                      </h5>
                    </div>
                  </div>

                  <div class="intro-slide2 banner banner-fixed">
                    <figure>
                      <img
                        src="images/demos/demo2/slides/2.jpg"
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
                        Lifestyle collection
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
                        For Women’s
                      </h3>
                      <h5
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
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-4">
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
                      src="images/demos/demo2/banners/1.jpg"
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
                      New Arrivals
                    </h4>
                    <h3 class="banner-title text-white font-weight-bold ls-md">
                      Women's Sale
                    </h3>
                    <a
                      href="demo2-shop.html"
                      class="
                        btn btn-white btn-link btn-underline
                        font-weight-semi-bold
                      "
                      >Shop Now<i class="d-icon-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-4">
                <div
                  class="
                    banner banner-fixed
                    overlay-zoom
                    intro-banner intro-banner2
                    content-middle
                    appear-animate
                  "
                  data-animation-options="{
                                    'name': 'fadeInUpShorter',
                                    'delay': '.5s'
                                }"
                >
                  <figure>
                    <img
                      src="images/demos/demo2/banners/2.jpg"
                      width="580"
                      height="249"
                      alt="banner"
                      style="background-color: #494442"
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
                      Trending
                    </h4>
                    <h3 class="banner-title text-white font-weight-bold ls-md">
                      New Sneaker
                    </h3>
                    <a
                      href="demo2-shop.html"
                      class="
                        btn btn-white btn-link btn-underline btn-white
                        font-weight-semi-bold
                      "
                      >Shop Now<i class="d-icon-arrow-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="mt-10 pt-3 mb-6">
            <h2 class="title title-simple title-center ls-m">Best Selling</h2>

            <div class="product-wrapper row">
              <div class="col-lg-3 col-md-4 col-6 mb-4">
                <div
                  class="product appear-animate"
                  data-animation-options="{
                                    'name': 'fadeInLeftShorter',
                                    'delay': '.4s'
                                }"
                >
                  <figure class="product-media">
                    <a href="demo2-product.html">
                      <img
                        src="images/demos/demo2/products/1.jpg"
                        alt="Blue Pinafore Denim Dress"
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
                      <a href="demo2-shop.html">Women</a>
                    </div>
                    <h3 class="product-name">
                      <a href="demo2-product.html">Comfortable Brown Scart</a>
                    </h3>
                    <div class="product-price">
                      <span class="price">$140.00</span>
                    </div>
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span class="ratings" style="width: 100%"></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="demo2-product.html" class="rating-reviews"
                        >( 12 reviews )</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mb-4">
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
              </div>
              <div class="col-lg-3 col-md-4 col-6 mb-4">
                <div
                  class="product appear-animate"
                  data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'delay': '.2s'
                                }"
                >
                  <figure class="product-media">
                    <a href="demo2-product.html">
                      <img
                        src="images/demos/demo2/products/3.jpg"
                        alt="Blue Pinafore Denim Dress"
                        width="280"
                        height="315"
                        style="background-color: #f2f3f5"
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
                      <a href="demo2-shop.html">Shoes</a>
                    </div>
                    <h3 class="product-name">
                      <a href="demo2-product.html">Season Sports Sneaker</a>
                    </h3>
                    <div class="product-price">
                      <span class="price">$78.64</span>
                    </div>
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span class="ratings" style="width: 40%"></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="demo2-product.html" class="rating-reviews"
                        >( 2 reviews )</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mb-4">
                <div
                  class="product appear-animate"
                  data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'delay': '.4s'
                                }"
                >
                  <figure class="product-media">
                    <a href="demo2-product.html">
                      <img
                        src="images/demos/demo2/products/4.jpg"
                        alt="Blue Pinafore Denim Dress"
                        width="280"
                        height="315"
                        style="background-color: #f2f3f5"
                      />
                    </a>
                    <div class="product-label-group">
                      <label class="product-label label-new">New</label>
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
                      <a href="demo2-product.html">Women Red Fur Overcoat</a>
                    </h3>
                    <div class="product-price">
                      <span class="price">$184.00</span>
                    </div>
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span class="ratings" style="width: 80%"></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="demo2-product.html" class="rating-reviews"
                        >( 6 reviews )</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mb-4">
                <div
                  class="product appear-animate"
                  data-animation-options="{
                                    'name': 'fadeInLeftShorter',
                                    'delay': '.4s'
                                }"
                >
                  <figure class="product-media">
                    <a href="demo2-product.html">
                      <img
                        src="images/demos/demo2/products/5.jpg"
                        alt="Blue Pinafore Denim Dress"
                        width="280"
                        height="315"
                        style="background-color: #f2f3f5"
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
                      <a href="demo2-shop.html">Women</a>
                    </div>
                    <h3 class="product-name">
                      <a href="demo2-product.html">Hempen Hood a Mourner</a>
                    </h3>
                    <div class="product-price">
                      <span class="price">$93.24</span>
                    </div>
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span class="ratings" style="width: 40%"></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="demo2-product.html" class="rating-reviews"
                        >( 9 reviews )</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mb-4">
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
                        src="images/demos/demo2/products/6.jpg"
                        alt="Blue Pinafore Denim Dress"
                        width="280"
                        height="315"
                        style="background-color: #f2f3f5"
                      />
                    </a>
                    <div class="product-label-group">
                      <label class="product-label label-new">New</label>
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
                      <a href="demo2-shop.html">Bags & Backpacks</a>
                    </div>
                    <h3 class="product-name">
                      <a href="demo2-product.html">Women's Season Handbag</a>
                    </h3>
                    <div class="product-price">
                      <span class="price">$61.35</span>
                    </div>
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span class="ratings" style="width: 80%"></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="demo2-product.html" class="rating-reviews"
                        >( 63 reviews )</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mb-4">
                <div
                  class="product appear-animate"
                  data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'delay': '.2s'
                                }"
                >
                  <figure class="product-media">
                    <a href="demo2-product.html">
                      <img
                        src="images/demos/demo2/products/7.jpg"
                        alt="Blue Pinafore Denim Dress"
                        width="280"
                        height="315"
                        style="background-color: #f2f3f5"
                      />
                    </a>
                    <div class="product-label-group">
                      <label class="product-label label-sale">13% off</label>
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
                      <a href="demo2-shop.html">Shoes</a>
                    </div>
                    <h3 class="product-name">
                      <a href="demo2-product.html"
                        >Converse Blue Trainaing Shoes</a
                      >
                    </h3>
                    <div class="product-price">
                      <ins class="new-price">$347.23</ins
                      ><del class="old-price">$386.23</del>
                    </div>
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span class="ratings" style="width: 40%"></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="demo2-product.html" class="rating-reviews"
                        >( 14 reviews )</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 mb-4">
                <div
                  class="product appear-animate"
                  data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'delay': '.4s'
                                }"
                >
                  <figure class="product-media">
                    <a href="demo2-product.html">
                      <img
                        src="images/demos/demo2/products/8.jpg"
                        alt="Blue Pinafore Denim Dress"
                        width="280"
                        height="315"
                        style="background-color: #f2f3f5"
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
                      <a href="demo2-shop.html">Bags & Backpacks</a>
                    </div>
                    <h3 class="product-name">
                      <a href="demo2-product.html">A Dress-Suit Valise</a>
                    </h3>
                    <div class="product-price">
                      <span class="price">$78.23</span>
                    </div>
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span class="ratings" style="width: 100%"></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="demo2-product.html" class="rating-reviews"
                        >( 53 reviews )</a
                      >
                    </div>
                  </div>
                </div>
              </div>
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
                  <a href="demo2-shop.html">
                    <figure>
                      <img
                        src="images/demos/demo2/category/1.jpg"
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
                    <h3 class="banner-title text-uppercase ls-s mb-0">
                      Padded Clothes
                    </h3>
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
                    >
                      Collection
                    </h4>
                    <div class="btn-group">
                      <a
                        href="demo2-shop.html"
                        class="btn btn-white btn-rounded font-weight-semi-bold"
                        >Women’s</a
                      >
                      <a
                        href="demo2-shop.html"
                        class="btn btn-white btn-rounded font-weight-semi-bold"
                        >Men's</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid-item col-sm-6 height-x1">
                <div
                  class="category category-light category-absolute overlay-dark"
                >
                  <a href="demo2-shop.html">
                    <figure class="category-media">
                      <img
                        src="images/demos/demo2/category/2.jpg"
                        alt="category"
                        width="585"
                        height="205"
                        style="background-color: #c8ced4"
                      />
                    </figure>
                  </a>
                  <div class="category-content">
                    <h4 class="category-name">
                      <a href="demo2-shop.html">Women’s T-Shirt</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="grid-item col-sm-6 height-x1">
                <div
                  class="category category-light category-absolute overlay-dark"
                >
                  <a href="demo2-shop.html">
                    <figure class="category-media">
                      <img
                        src="images/demos/demo2/category/3.jpg"
                        alt="category"
                        width="585"
                        height="397"
                        style="background-color: #ebedef"
                      />
                    </figure>
                  </a>
                  <div class="category-content">
                    <h4 class="category-name">
                      <a href="demo2-shop.html">Sports & Outdoors</a>
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
            style="
              background-image: url(images/demos/demo2/banners/3.jpg);
              background-color: #1f272b;
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
                End Of Season
              </h4>
              <hr class="divider mb-2" />
              <h3 class="banner-title text-uppercase text-white lh-1 mb-0">
                Sale
              </h3>
              <div class="price-rotated">
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
              </div>
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
                class="product appear-animate"
                data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.2s'
                            }"
              >
                <figure class="product-media">
                  <a href="demo2-product.html">
                    <img
                      src="images/demos/demo2/products/9.jpg"
                      alt="Blue Pinafore Denim Dress"
                      width="280"
                      height="315"
                      style="background-color: #f2f3f5"
                    />
                  </a>
                  <div class="product-label-group">
                    <label class="product-label label-sale">35% Off</label>
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
                    <a href="demo2-shop.html">Accessories</a>
                  </div>
                  <h3 class="product-name">
                    <a href="demo2-product.html">Hand Electric Cell</a>
                  </h3>
                  <div class="product-price">
                    <ins class="new-price">$26.00</ins
                    ><del class="old-price">$38.00</del>
                  </div>
                  <div class="ratings-container">
                    <div class="ratings-full">
                      <span class="ratings" style="width: 100%"></span>
                      <span class="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="demo2-product.html" class="rating-reviews"
                      >( 6 reviews )</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="product appear-animate"
                data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.3s'
                            }"
              >
                <figure class="product-media">
                  <a href="demo2-product.html">
                    <img
                      src="images/demos/demo2/products/10.jpg"
                      alt="Blue Pinafore Denim Dress"
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
                    <a href="demo2-shop.html">Shoes</a>
                  </div>
                  <h3 class="product-name">
                    <a href="demo2-product.html">Season Sports Blue Sneaker</a>
                  </h3>
                  <div class="product-price">
                    <span class="price">$119.58</span>
                  </div>
                  <div class="ratings-container">
                    <div class="ratings-full">
                      <span class="ratings" style="width: 80%"></span>
                      <span class="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="demo2-product.html" class="rating-reviews"
                      >( 52 reviews )</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="product appear-animate"
                data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.4s'
                            }"
              >
                <figure class="product-media">
                  <a href="demo2-product.html">
                    <img
                      src="images/demos/demo2/products/11.jpg"
                      alt="Blue Pinafore Denim Dress"
                      width="280"
                      height="315"
                      style="background-color: #f2f3f5"
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
                    <a href="demo2-shop.html">Women</a>
                  </div>
                  <h3 class="product-name">
                    <a href="demo2-product.html">Hempen Hood a Mourner</a>
                  </h3>
                  <div class="product-price">
                    <span class="price">$43.26</span>
                  </div>
                  <div class="ratings-container">
                    <div class="ratings-full">
                      <span class="ratings" style="width: 40%"></span>
                      <span class="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="demo2-product.html" class="rating-reviews"
                      >( 62 reviews )</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="product appear-animate"
                data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.5s'
                            }"
              >
                <figure class="product-media">
                  <a href="demo2-product.html">
                    <img
                      src="images/demos/demo2/products/12.jpg"
                      alt="Blue Pinafore Denim Dress"
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
                    <a href="demo2-shop.html">Bags & Backpacks</a>
                  </div>
                  <h3 class="product-name">
                    <a href="demo2-product.html">Women’s Fashion Handbag</a>
                  </h3>
                  <div class="product-price">
                    <span class="price">$184.00</span>
                  </div>
                  <div class="ratings-container">
                    <div class="ratings-full">
                      <span class="ratings" style="width: 80%"></span>
                      <span class="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="demo2-product.html" class="rating-reviews"
                      >( 23 reviews )</a
                    >
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
                  <p class="text-primary">You can Express Shipping in 5 Days</p>
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
                    src="images/demos/demo2/instagram/1.jpg"
                    alt="Instagram"
                    width="220"
                    height="220"
                  />
                </a>
              </figure>
              <figure class="instagram">
                <a href="#">
                  <img
                    src="images/demos/demo2/instagram/2.jpg"
                    alt="Instagram"
                    width="220"
                    height="220"
                  />
                </a>
              </figure>
              <figure class="instagram">
                <a href="#">
                  <img
                    src="images/demos/demo2/instagram/3.jpg"
                    alt="Instagram"
                    width="220"
                    height="220"
                  />
                </a>
              </figure>
              <figure class="instagram">
                <a href="#">
                  <img
                    src="images/demos/demo2/instagram/4.jpg"
                    alt="Instagram"
                    width="220"
                    height="220"
                  />
                </a>
              </figure>
              <figure class="instagram">
                <a href="#">
                  <img
                    src="images/demos/demo2/instagram/5.jpg"
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
    <!-- End of Main -->

    <footer class="footer appear-animate">
      <div class="container">
        <div class="footer-middle">
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <div class="widget widget-about">
                <a href="demo2.html" class="logo-footer mb-4">
                  <img
                    src="images/demos/demo2/logo-footer.png"
                    alt="logo-footer"
                    width="150"
                    height="43"
                  />
                </a>
                <div class="widget-body">
                  <p class="ls-s">
                    Fringilla urna porttitor rhoncus dolor purus<br />
                    luctus venenatis lectus magna fringilla diam<br />
                    maecenas ultricies mi eget mauris.
                  </p>
                  <a href="mailto:mail@riode.com">Riode@example.com</a>
                </div>
              </div>
              <!-- End of Widget -->
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-4 col-sm-4">
                  <div class="widget">
                    <h4 class="widget-title">About Us</h4>
                    <ul class="widget-body">
                      <li><a href="about-us.html">About Us</a></li>
                      <li><a href="#">Order History</a></li>
                      <li><a href="#">Returns</a></li>
                      <li><a href="#">Custom Service</a></li>
                      <li><a href="#">Terms &amp; Condition</a></li>
                    </ul>
                  </div>
                  <!-- End of Widget -->
                </div>
                <div class="col-lg-4 col-sm-4">
                  <div class="widget">
                    <h4 class="widget-title">Customer Service</h4>
                    <ul class="widget-body">
                      <li><a href="#">Payment Methods</a></li>
                      <li><a href="#">Money-back Guarantee!</a></li>
                      <li><a href="#">Returns</a></li>
                      <li><a href="#">Shipping</a></li>
                      <li><a href="#">Terms and Conditions</a></li>
                    </ul>
                  </div>
                  <!-- End of Widget -->
                </div>
                <div class="col-lg-4 col-sm-4">
                  <div class="widget">
                    <h4 class="widget-title">My Account</h4>
                    <ul class="widget-body">
                      <li><a href="#">Sign In</a></li>
                      <li><a href="cart.html">View Cart</a></li>
                      <li><a href="wishlist.html">My Wishlist</a></li>
                      <li><a href="#">Track My Order</a></li>
                      <li><a href="#">Help</a></li>
                    </ul>
                  </div>
                  <!-- End of Widget -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End of FooterMiddle -->
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
                title="social-link"
                class="social-link social-facebook fab fa-facebook-f"
              ></a>
              <a
                href="#"
                title="social-link"
                class="social-link social-twitter fab fa-twitter"
              ></a>
              <a
                href="#"
                title="social-link"
                class="social-link social-linkedin fab fa-linkedin-in"
              ></a>
            </div>
          </div>
        </div>
        <!-- End of FooterBottom -->
      </div>
    </footer>
    <!-- End of Footer -->
  </div>

  <!-- Sticky Footer -->
  <div class="sticky-footer sticky-content fix-bottom">
    <a href="demo2.html" class="sticky-link">
      <i class="d-icon-home"></i>
      <span>Home</span>
    </a>
    <a href="demo2-shop.html" class="sticky-link">
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
        <button class="btn btn-search" type="submit" title="submit-button">
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
    <!-- End of Overlay -->
    <a class="mobile-menu-close" href="#"><i class="d-icon-times"></i></a>
    <!-- End of CloseButton -->
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
        <button class="btn btn-search" type="submit" title="submit-button">
          <i class="d-icon-search"></i>
        </button>
      </form>
      <!-- End of Search Form -->
      <ul class="mobile-menu mmenu-anim">
        <li>
          <a href="demo2.html">Home</a>
        </li>
        <li>
          <a href="demo2-shop.html">Categories</a>
          <ul>
            <li>
              <a href="#"> Variations 1 </a>
              <ul>
                <li><a href="shop-classic-filter.html">Classic Filter</a></li>
                <li>
                  <a href="shop-left-toggle-sidebar.html">Left Toggle Filter</a>
                </li>
                <li>
                  <a href="shop-right-toggle-sidebar.html"
                    >Right Toggle Sidebar</a
                  >
                </li>
                <li>
                  <a href="shop-horizontal-filter.html">Horizontal Filter </a>
                </li>
                <li>
                  <a href="shop-navigation-filter.html">Navigation Filter</a>
                </li>

                <li>
                  <a href="shop-off-canvas-filter.html">Off-Canvas Filter </a>
                </li>
                <li><a href="shop-top-banner.html">Top Banner</a></li>
                <li>
                  <a href="shop-inner-top-banner.html">Inner Top Banner</a>
                </li>
                <li>
                  <a href="shop-with-bottom-block.html">With Bottom Block</a>
                </li>
                <li>
                  <a href="shop-category-in-page-header.html"
                    >Category In Page Header</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="#"> Variations 2 </a>
              <ul>
                <li><a href="shop-grid-3cols.html">3 Columns Mode</a></li>
                <li><a href="shop-grid-4cols.html">4 Columns Mode</a></li>
                <li><a href="shop-grid-5cols.html">5 Columns Mode</a></li>
                <li><a href="shop-grid-6cols.html">6 Columns Mode</a></li>
                <li><a href="shop-grid-7cols.html">7 Columns Mode</a></li>
                <li><a href="shop-grid-8cols.html">8 Columns Mode</a></li>
                <li><a href="shop-list-mode.html">List Mode</a></li>
                <li><a href="shop-pagination.html">Pagination</a></li>
                <li>
                  <a href="shop-infinite-ajaxscroll.html"
                    >Infinite Ajaxscroll
                  </a>
                </li>
                <li><a href="shop-loadmore-button.html">Loadmore Button</a></li>
              </ul>
            </li>
            <li>
              <a href="#"> Variations 3 </a>
              <ul>
                <li>
                  <a href="shop-category-grid-shop.html">Category Grid Shop</a>
                </li>
                <li>
                  <a href="shop-category+products.html">Category + Products</a>
                </li>
                <li><a href="shop-default-1.html">Shop Default 1 </a></li>
                <li><a href="shop-default-2.html">Shop Default 2</a></li>
                <li><a href="shop-default-3.html">Shop Default 3</a></li>
                <li><a href="shop-default-4.html">Shop Default 4</a></li>
                <li><a href="shop-default-5.html">Shop Default 5</a></li>
                <li><a href="shop-default-6.html">Shop Default 6</a></li>
                <li><a href="shop-default-7.html">Shop Default 7</a></li>
                <li><a href="shop-default-8.html">Shop Default 8</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="demo2-product.html">Products</a>
          <ul>
            <li>
              <a href="#">Product Pages</a>
              <ul>
                <li><a href="product-simple.html">Simple Product</a></li>
                <li>
                  <a href="product-featured.html">Featured &amp; On Sale</a>
                </li>
                <li><a href="product.html">Variable Product</a></li>
                <li>
                  <a href="product-variable-swatch.html"
                    >Variation Swatch Product</a
                  >
                </li>
                <li><a href="product-grouped.html">Grouped Product </a></li>
                <li><a href="product-external.html">External Product</a></li>
                <li><a href="product-in-stock.html">In Stock Product</a></li>
                <li>
                  <a href="product-out-stock.html">Out of Stock Product</a>
                </li>
                <li><a href="product-upsell.html">Upsell Products</a></li>
                <li>
                  <a href="product-cross-sell.html">Cross Sell Products</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Product Layouts</a>
              <ul>
                <li><a href="product-vertical.html">Vertical Thumb</a></li>
                <li><a href="product-horizontal.html">Horizontal Thumb</a></li>
                <li><a href="product-gallery.html">Gallery Type</a></li>
                <li><a href="product-grid.html">Grid Images</a></li>
                <li><a href="product-masonry.html">Masonry Images</a></li>
                <li><a href="product-sticky.html">Sticky Info</a></li>
                <li>
                  <a href="product-sticky-both.html">Left & Right Sticky</a>
                </li>
                <li>
                  <a href="product-left-sidebar.html">With Left Sidebar</a>
                </li>
                <li>
                  <a href="product-right-sidebar.html">With Right Sidebar</a>
                </li>
                <li><a href="product-full.html">Full Width Layout </a></li>
              </ul>
            </li>
            <li>
              <a href="#">Product Features</a>
              <ul>
                <li><a href="product-sale.html">Sale Countdown</a></li>
                <li>
                  <a href="product-hurryup.html">Hurry Up Notification </a>
                </li>
                <li>
                  <a href="product-attribute-guide.html">Attribute Guide </a>
                </li>
                <li><a href="product-sticky-cart.html">Add Cart Sticky</a></li>
                <li>
                  <a href="product-thumbnail-label.html">Labels on Thumbnail</a>
                </li>
                <li>
                  <a href="product-more-description.html"
                    >More Description Tabs</a
                  >
                </li>
                <li>
                  <a href="product-accordion-data.html">Data In Accordion</a>
                </li>
                <li><a href="product-tabinside.html">Data Inside</a></li>
                <li><a href="product-video.html">Video Thumbnail </a></li>
                <li>
                  <a href="product-360-degree.html">360 Degree Thumbnail </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Pages</a>
          <ul>
            <li><a href="about-us.html">About</a></li>
            <li><a href="contact-us.html">Contact Us</a></li>
            <li><a href="account.html">Login</a></li>
            <li><a href="faq.html">FAQs</a></li>
            <li>
              <a href="error-404.html">Error 404</a>
              <ul>
                <li><a href="error-404.html">Error 404-1</a></li>
                <li><a href="error-404-1.html">Error 404-2</a></li>
                <li><a href="error-404-2.html">Error 404-3</a></li>
                <li><a href="error-404-3.html">Error 404-4</a></li>
              </ul>
            </li>
            <li><a href="coming-soon.html">Coming Soon</a></li>
          </ul>
        </li>
        <li>
          <a href="blog-classic.html">Blog</a>
          <ul>
            <li><a href="blog-classic.html">Classic</a></li>
            <li><a href="blog-listing.html">Listing</a></li>
            <li>
              <a href="#">Grid</a>
              <ul>
                <li><a href="blog-grid-2col.html">Grid 2 columns</a></li>
                <li><a href="blog-grid-3col.html">Grid 3 columns</a></li>
                <li><a href="blog-grid-4col.html">Grid 4 columns</a></li>
                <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Masonry</a>
              <ul>
                <li><a href="blog-masonry-2col.html">Masonry 2 columns</a></li>
                <li><a href="blog-masonry-3col.html">Masonry 3 columns</a></li>
                <li><a href="blog-masonry-4col.html">Masonry 4 columns</a></li>
                <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Mask</a>
              <ul>
                <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
              </ul>
            </li>
            <li>
              <a href="post-single.html">Single Post</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="element.html">Elements</a>
          <ul>
            <li>
              <a href="#">Elements 1</a>
              <ul>
                <li><a href="element-accordions.html">Accordions</a></li>
                <li>
                  <a href="element-alerts.html">Alert &amp; Notification</a>
                </li>

                <li><a href="element-banner-effect.html">Banner Effect </a></li>
                <li><a href="element-banner.html">Banner </a></li>
                <li><a href="element-blog-posts.html">Blog Posts</a></li>
                <li><a href="element-breadcrumb.html">Breadcrumb </a></li>
                <li><a href="element-buttons.html">Buttons</a></li>
                <li><a href="element-cta.html">Call to Action</a></li>
                <li><a href="element-countdown.html">Countdown </a></li>
              </ul>
            </li>
            <li>
              <a href="#">Elements 2</a>
              <ul>
                <li><a href="element-counter.html">Counter </a></li>
                <li><a href="element-creative-grid.html">Creative Grid </a></li>
                <li><a href="element-animation.html">Entrance Effect </a></li>
                <li><a href="element-floating.html">Floating </a></li>
                <li><a href="element-hotspot.html">Hotspot </a></li>
                <li><a href="element-icon-boxes.html">Icon Boxes</a></li>
                <li><a href="element-icons.html">Icons</a></li>
                <li><a href="element-image-box.html">Image box </a></li>
                <li><a href="element-instagrams.html">Instagrams</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Elements 3</a>
              <ul>
                <li><a href="element-categories.html">Product Category</a></li>
                <li><a href="element-products.html">Products</a></li>
                <li>
                  <a href="element-product-banner.html">Products + Banner </a>
                </li>
                <li>
                  <a href="element-product-grid.html">Products + Grid </a>
                </li>
                <li>
                  <a href="element-product-single.html">Product Single </a>
                </li>
                <li><a href="element-product-tab.html">Products + Tab </a></li>
                <li>
                  <a href="element-single-product.html">Single Product </a>
                </li>
                <li><a href="element-slider.html">Slider </a></li>
                <li><a href="element-social-link.html">Social Icons </a></li>
              </ul>
            </li>
            <li>
              <a href="#">Elements 4</a>
              <ul>
                <li><a href="element-subcategory.html">Subcategory </a></li>
                <li><a href="element-svg-floating.html">Svg Floating </a></li>
                <li><a href="element-tabs.html">Tabs</a></li>
                <li><a href="element-testimonials.html">Testimonials </a></li>
                <li><a href="element-titles.html">Title</a></li>
                <li><a href="element-typography.html">Typography</a></li>
                <li><a href="element-vendor.html">Vendor </a></li>
                <li><a href="element-video.html">Video </a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="https://d-themes.com/buynow/riodehtml">Buy Riode!</a></li>
      </ul>
      <!-- End of MobileMenu -->
    </div>
  </div>

  <!-- newsletter-popup default -->
  <div
    class="newsletter-popup newsletter-pop1 mfp-hide"
    id="newsletter-popup"
    style="background-image: url(images/newsletter-popup.jpg)"
  >
    <div class="newsletter-content">
      <h4 class="text-uppercase text-dark">
        Up to <span class="text-primary">20% Off</span>
      </h4>
      <h2 class="font-weight-semi-bold">Sign up to <span>RIODE</span></h2>
      <p class="text-grey">
        Subscribe to the Riode eCommerce newsletter to receive timely updates
        from your favorite products.
      </p>
      <form
        action="#"
        method="get"
        class="input-wrapper input-wrapper-inline input-wrapper-round"
      >
        <input
          type="email"
          class="form-control email"
          name="email"
          id="email2"
          placeholder="Email address here..."
          required=""
        />
        <button class="btn btn-dark" type="submit">SUBMIT</button>
      </form>
      <div class="form-checkbox justify-content-center">
        <input
          type="checkbox"
          class="custom-checkbox"
          id="hide-newsletter-popup"
          name="hide-newsletter-popup"
          required
        />
        <label for="hide-newsletter-popup">Don't show this popup again</label>
      </div>
    </div>
  </div>

  <!-- sticky icons-->
  <div class="sticky-icons-wrapper">
    <div class="sticky-icon-links">
      <ul>
        <li>
          <a href="#" class="demo-toggle"
            ><i class="fas fa-home"></i><span>Demos</span></a
          >
        </li>
        <li>
          <a href="documentation.html"
            ><i class="fas fa-info-circle"></i><span>Documentation</span></a
          >
        </li>
        <li>
          <a href="https://themeforest.net/downloads/"
            ><i class="fas fa-star"></i><span>Reviews</span></a
          >
        </li>
        <li>
          <a href="https://d-themes.com/buynow/riodehtml"
            ><i class="fas fa-shopping-cart"></i><span>Buy now!</span></a
          >
        </li>
      </ul>
    </div>
    <div class="demos-list">
      <div class="demos-overlay"></div>
      <a class="demos-close" href="#"><i class="close-icon"></i></a>
      <div class="demos-content scrollable scrollable-light">
        <h3 class="demos-title">Demos</h3>
        <div class="demos"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "mainPage",
  components: {},
  methods: {},
  data: () => ({}),
  props: {},
  setup() {
    return {};
  },
});
</script>
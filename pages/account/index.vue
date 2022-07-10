<template>
  <div>
    <div class="page-wrapper">
      <header class="header header-border">
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
              <div class="dropdown cart-dropdown type2 off-canvas mr-0 mr-lg-2">
                <a href="#" class="cart-toggle label-block link">
                  <div class="cart-label d-lg-show">
                    <span class="cart-name">Shopping Cart:</span>
                    <span class="cart-price">$0.00</span>
                  </div>
                  <i class="d-icon-bag"><span class="cart-count">2</span></i>
                </a>
                <div class="canvas-overlay"></div>
                <!-- End Cart Toggle -->
                <div class="dropdown-box">
                  <div class="canvas-header">
                    <h4 class="canvas-title">Shopping Cart</h4>
                    <a
                      href="#"
                      class="btn btn-dark btn-link btn-icon-right btn-close"
                      >close<i class="d-icon-arrow-right"></i
                      ><span class="sr-only">Cart</span></a
                    >
                  </div>
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
            </div>
          </div>
        </div>

        <div class="header-bottom d-lg-show">
          <div class="container">
            <div class="header-left">
              <nav class="main-nav">
                <menu-component :ulclass="'menu'"></menu-component>
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
      <main class="main account">
        <nav class="breadcrumb-nav">
          <div class="container">
            <ul class="breadcrumb">
              <li>
                <a href="demo1.html"><i class="d-icon-home"></i></a>
              </li>
              <li>Account</li>
            </ul>
          </div>
        </nav>
        <div class="page-content mt-4 mb-10 pb-6">
          <div class="container">
            <h2 class="title title-center mb-10">My Account</h2>
            <div class="tab tab-vertical gutter-lg">
              <ul class="nav nav-tabs mb-4 col-lg-3 col-md-4" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" href="#dashboard">Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#orders">Orders</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#downloads">Downloads</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#address">Address</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#account">Account details</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="login.html">Logout</a>
                </li>
              </ul>
              <div class="tab-content col-lg-9 col-md-8">
                <div class="tab-pane active" id="dashboard">
                  <p class="mb-0">
                    Hello <span>User</span> (not <span>User</span>?
                    <a href="#" class="text-primary">Log out</a>)
                  </p>
                  <p class="mb-8">
                    From your account dashboard you can view your
                    <a href="#orders" class="link-to-tab text-primary"
                      >recent orders, manage your shipping and billing
                      addresses,<br />and edit your password and account
                      details</a
                    >.
                  </p>
                  <a href="shop.html" class="btn btn-dark btn-rounded"
                    >Go To Shop<i class="d-icon-arrow-right"></i
                  ></a>
                </div>
                <div class="tab-pane" id="orders">
                  <table class="order-table">
                    <thead>
                      <tr>
                        <th class="pl-2">Order</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th class="pr-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="order-number"><a href="#">#3596</a></td>
                        <td class="order-date">
                          <span>February 24, 2021</span>
                        </td>
                        <td class="order-status"><span>On hold</span></td>
                        <td class="order-total">
                          <span>$900.00 for 5 items</span>
                        </td>
                        <td class="order-action">
                          <a
                            href="#"
                            class="btn btn-primary btn-link btn-underline"
                            >View</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="order-number"><a href="#">#3593</a></td>
                        <td class="order-date">
                          <span>February 21, 2021</span>
                        </td>
                        <td class="order-status"><span>On hold</span></td>
                        <td class="order-total">
                          <span>$290.00 for 2 items</span>
                        </td>
                        <td class="order-action">
                          <a
                            href="#"
                            class="btn btn-primary btn-link btn-underline"
                            >View</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="order-number"><a href="#">#2547</a></td>
                        <td class="order-date"><span>January 4, 2021</span></td>
                        <td class="order-status"><span>On hold</span></td>
                        <td class="order-total">
                          <span>$480.00 for 8 items</span>
                        </td>
                        <td class="order-action">
                          <a
                            href="#"
                            class="btn btn-primary btn-link btn-underline"
                            >View</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="order-number"><a href="#">#2549</a></td>
                        <td class="order-date">
                          <span>January 19, 2021</span>
                        </td>
                        <td class="order-status"><span>On hold</span></td>
                        <td class="order-total">
                          <span>$680.00 for 5 items</span>
                        </td>
                        <td class="order-action">
                          <a
                            href="#"
                            class="btn btn-primary btn-link btn-underline"
                            >View</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="order-number"><a href="#">#4523</a></td>
                        <td class="order-date"><span>Jun 6, 2021</span></td>
                        <td class="order-status"><span>On hold</span></td>
                        <td class="order-total">
                          <span>$564.00 for 3 items</span>
                        </td>
                        <td class="order-action">
                          <a
                            href="#"
                            class="btn btn-primary btn-link btn-underline"
                            >View</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="order-number"><a href="#">#4526</a></td>
                        <td class="order-date"><span>Jun 19, 2021</span></td>
                        <td class="order-status"><span>On hold</span></td>
                        <td class="order-total">
                          <span>$123.00 for 8 items</span>
                        </td>
                        <td class="order-action">
                          <a
                            href="#"
                            class="btn btn-primary btn-link btn-underline"
                            >View</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="tab-pane" id="downloads">
                  <p class="mb-4 text-body">No downloads available yet.</p>
                  <a href="#" class="btn btn-primary btn-link btn-underline"
                    >Browser Products<i class="d-icon-arrow-right"></i
                  ></a>
                </div>
                <div class="tab-pane" id="address">
                  <p class="mb-2">
                    The following addresses will be used on the checkout page by
                    default.
                  </p>
                  <div class="row">
                    <div class="col-sm-6 mb-4">
                      <div class="card card-address">
                        <div class="card-body">
                          <h5 class="card-title text-uppercase">
                            Billing Address
                          </h5>
                          <p>
                            John Doe<br />
                            Riode Company<br />
                            Steven street<br />
                            El Carjon, CA 92020
                          </p>
                          <a
                            href="#"
                            class="btn btn-link btn-secondary btn-underline"
                            >Edit <i class="far fa-edit"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-4">
                      <div class="card card-address">
                        <div class="card-body">
                          <h5 class="card-title text-uppercase">
                            Shipping Address
                          </h5>
                          <p>You have not set up this type of address yet.</p>
                          <a
                            href="#"
                            class="btn btn-link btn-secondary btn-underline"
                            >Edit <i class="far fa-edit"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="account">
                  <form action="#" class="form">
                    <div class="row">
                      <div class="col-sm-6">
                        <label>First Name *</label>
                        <input
                          type="text"
                          class="form-control"
                          name="first_name"
                          required=""
                        />
                      </div>
                      <div class="col-sm-6">
                        <label>Last Name *</label>
                        <input
                          type="text"
                          class="form-control"
                          name="last_name"
                          required=""
                        />
                      </div>
                    </div>

                    <label>Display Name *</label>
                    <input
                      type="text"
                      class="form-control mb-0"
                      name="display_name"
                      required=""
                    />
                    <small class="d-block form-text mb-7"
                      >This will be how your name will be displayed in the
                      account section and in reviews</small
                    >

                    <label>Email Address *</label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      required=""
                    />
                    <fieldset>
                      <legend>Password Change</legend>
                      <label
                        >Current password (leave blank to leave
                        unchanged)</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        name="current_password"
                      />

                      <label
                        >New password (leave blank to leave unchanged)</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        name="new_password"
                      />

                      <label>Confirm new password</label>
                      <input
                        type="password"
                        class="form-control"
                        name="confirm_password"
                      />
                    </fieldset>

                    <button type="submit" class="btn btn-primary">
                      SAVE CHANGES
                    </button>
                  </form>
                </div>
              </div>
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
        <menu-component :ulclass="'mobile-menu mmenu-anim'"></menu-component>
        <!-- End MobileMenu -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MenuComponent from "~/components/MenuComponent.vue";

export default Vue.extend({
  components: { MenuComponent },
  head() {
    return {
      title: "account",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
    };
  },
  async asyncData() {
    return;
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

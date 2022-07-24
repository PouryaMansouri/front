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
          </div>
        </div>
      </header>
      <!-- End Header -->
      <main class="main">
        <nav class="breadcrumb-nav">
          <div class="container">
            <ul class="breadcrumb">
              <li>
                <a href="demo1.html"><i class="d-icon-home"></i></a>
              </li>
              <li>Wishlist</li>
            </ul>
          </div>
        </nav>
        <div v-if="!isEmpty" class="page-content pt-10 pb-10 mb-2">
          <div class="container">
            <table class="shop-table wishlist-table mt-2 mb-4">
              <thead>
                <tr>
                  <th class="product-name"><span>Product</span></th>
                  <th></th>
                  <th class="product-price"><span>Price</span></th>
                  <th class="product-stock-status">
                    <span>Stock status</span>
                  </th>
                  <th class="product-add-to-cart"></th>
                  <th class="product-remove"></th>
                </tr>
              </thead>
              <tbody class="wishlist-items-wrapper">
                <tr>
                  <td class="product-thumbnail">
                    <a href="product-simple.html">
                      <figure>
                        <img
                          src="images/products/product11.jpg"
                          width="100"
                          height="100"
                          alt="product"
                        />
                      </figure>
                    </a>
                  </td>
                  <td class="product-name">
                    <a href="product-simple.html"
                      >Beige knitted elastic runner shoes</a
                    >
                  </td>
                  <td class="product-price">
                    <span class="amount">$84.00</span>
                  </td>
                  <td class="product-stock-status">
                    <span class="wishlist-in-stock">In Stock</span>
                  </td>
                  <td class="product-add-to-cart">
                    <a href="product.html" class="btn-product btn-primary"
                      ><span>Select options</span></a
                    >
                  </td>
                  <td class="product-remove">
                    <div>
                      <a href="#" class="remove" title="Remove this product"
                        ><i class="fas fa-times"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="product-thumbnail">
                    <a href="product-simple.html">
                      <figure>
                        <img
                          src="images/products/product12.jpg"
                          width="100"
                          height="100"
                          alt="product"
                        />
                      </figure>
                    </a>
                  </td>
                  <td class="product-name">
                    <a href="product-simple.html">Sed diam nonummy nibh</a>
                  </td>
                  <td class="product-price">
                    <span class="amount">$84.00</span>
                  </td>
                  <td class="product-stock-status">
                    <span class="wishlist-in-stock">In Stock</span>
                  </td>
                  <td class="product-add-to-cart">
                    <a href="product.html" class="btn-product btn-primary"
                      ><span>Select options</span></a
                    >
                  </td>
                  <td class="product-remove">
                    <div>
                      <a href="#" class="remove" title="Remove this product"
                        ><i class="fas fa-times"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="product-thumbnail">
                    <a href="product-simple.html">
                      <figure>
                        <img
                          src="images/products/product13.jpg"
                          width="100"
                          height="100"
                          alt="product"
                        />
                      </figure>
                    </a>
                  </td>
                  <td class="product-name">
                    <a href="product-simple.html"
                      >Lorem ipsum dolor sit amet, consectetuer adipiscing
                      elit,</a
                    >
                  </td>
                  <td class="product-price">
                    <span class="amount">$84.00</span>
                  </td>
                  <td class="product-stock-status">
                    <span class="wishlist-out-stock">Out of Stock</span>
                  </td>
                  <td class="product-add-to-cart">
                    <a href="product.html" class="btn-product btn-primary"
                      ><span>Select options</span></a
                    >
                  </td>
                  <td class="product-remove">
                    <div>
                      <a href="#" class="remove" title="Remove this product"
                        ><i class="fas fa-times"></i
                      ></a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- <div class="social-links share-on">
              <h5 class="text-uppercase font-weight-bold mb-0 mr-4 ls-s">
                Share on:
              </h5>
              <a
                href="#"
                class="social-link social-icon social-facebook"
                title="Facebook"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a
                href="#"
                class="social-link social-icon social-twitter"
                title="Twitter"
                ><i class="fab fa-twitter"></i
              ></a>
              <a
                href="#"
                class="social-link social-icon social-pinterest"
                title="Pinterest"
                ><i class="fab fa-pinterest-p"></i
              ></a>
              <a
                href="#"
                class="social-link social-icon social-email"
                title="Email"
                ><i class="far fa-envelope"></i
              ></a>
              <a
                href="#"
                class="social-link social-icon social-whatsapp"
                title="Whatsapp"
                ><i class="fab fa-whatsapp"></i
              ></a>
            </div> -->
          </div>
        </div>
        <div v-if="isEmpty" class="page-content wishlist-empty">
          <div class="container">
            <div class="main-content">
              <i class="d-icon-heart wishlist-icon"></i>
              <h2 class="wishlist-descri">No products added to the wishlist</h2>
              <a class="btn btn-primary btn-rounded" href="shop.html">
                GO SHOP
              </a>
            </div>
          </div>
        </div>
      </main>
      <!-- End Main -->
      <footer-component :version="1"></footer-component>
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
import FooterComponent from "~/components/FooterComponent.vue";
import MenuComponent from "~/components/MenuComponent.vue";

export default Vue.extend({
  components: { MenuComponent, FooterComponent },
  head() {
    return {
      title: "wishlist",
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
    return {
      list: [],
    };
  },
  computed: {
    isEmpty() {
      return true;
    },
  },
  methods: {},
});
</script>

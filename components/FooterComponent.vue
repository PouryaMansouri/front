<template>
  <div>
    <footer v-if="version == 1" class="footer appear-animate">
      <div class="container">
        <div class="footer-middle">
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <div class="widget widget-about">
                <a href="demo2.html" class="logo-footer mb-4">
                  <img
                    src="/logo-white.svg"
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
                src="/images/payment.png"
                alt="payment"
                width="159"
                height="29"
              />
            </figure>
          </div>
          <div class="footer-center">
            <p class="copyright">Sarar &copy; 2021. All Rights Reserved</p>
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
    <footer v-if="version == 2" class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="row align-items-center">
            <div class="col-lg-3">
              <a href="demo1.html" class="logo-footer">
                <img
                  src="/logo-white.svg"
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
                      src="/images/instagram/01.jpg"
                      alt="instagram 1"
                      width="64"
                      height="64"
                    />
                  </div>
                  <div class="col-3">
                    <img
                      src="/images/instagram/02.jpg"
                      alt="instagram 2"
                      width="64"
                      height="64"
                    />
                  </div>
                  <div class="col-3">
                    <img
                      src="/images/instagram/03.jpg"
                      alt="instagram 3"
                      width="64"
                      height="64"
                    />
                  </div>
                  <div class="col-3">
                    <img
                      src="/images/instagram/04.jpg"
                      alt="instagram 4"
                      width="64"
                      height="64"
                    />
                  </div>
                  <div class="col-3">
                    <img
                      src="/images/instagram/05.jpg"
                      alt="instagram 5"
                      width="64"
                      height="64"
                    />
                  </div>
                  <div class="col-3">
                    <img
                      src="/images/instagram/06.jpg"
                      alt="instagram 6"
                      width="64"
                      height="64"
                    />
                  </div>
                  <div class="col-3">
                    <img
                      src="/images/instagram/07.jpg"
                      alt="instagram 7"
                      width="64"
                      height="64"
                    />
                  </div>
                  <div class="col-3">
                    <img
                      src="/images/instagram/08.jpg"
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
                src="/images/payment.png"
                alt="payment"
                width="159"
                height="29"
              />
            </figure>
          </div>
          <div class="footer-center">
            <p class="copyright">Sarar &copy; 2021. All Rights Reserved</p>
          </div>
          <div class="footer-right">
            <div class="social-links">
              <a
                href="#"
                class="social-link social-facebook fab fa-facebook-f"
              ></a>
              <a href="#" class="social-link social-twitter fab fa-twitter"></a>
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
  </div>
</template>
<script>
export default {
  props: ["version"],
  data() {
    return {};
  },
  async fetch() {},
};
</script>

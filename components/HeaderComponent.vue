<template>
  <div>
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
            <a href="/" class="logo">
              <img src="/logo.svg" alt="logo" width="153" height="44" />
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
            <WishlistComponent />
            <span class="divider"></span>
            <CartComponent />
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
              <MenuComponent :ulclass="'menu menu-active-underline'" />
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  async fetch() {},
};
</script>

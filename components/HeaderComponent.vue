<template>
  <div>
    <header class="header">
      <div class="header-top">
        <div class="container">
          <div class="header-left">
            <p class="welcome-msg">Welcome to Sarar From UAE!</p>
          </div>
          <div class="header-right">
            <NuxtLink v-if="this.$auth.loggedIn" to="/account">
              Go To Profile
            </NuxtLink>
            <NuxtLink v-else to="/auth"> Login And Register </NuxtLink>
          </div>
        </div>
      </div>
      <div class="header-middle sticky-header fix-top sticky-content">
        <div class="container">
          <div class="header-left">
            <a href="#" class="mobile-menu-toggle">
              <i class="d-icon-bars2"></i>
            </a>
            <a href="/" class="logo">
              <img src="/logo.svg" alt="logo" width="153" height="44" />
            </a>
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
          </div>
          <div class="header-right">
            <!-- <a href="tel:#" class="icon-box icon-box-side">
              <div class="icon-box-icon mr-0 mr-lg-2">
                <i class="d-icon-phone"></i>
              </div>
              <div class="icon-box-content d-lg-show">
                <h4 class="icon-box-title">Call Us Now:</h4>
                <p>0(800) 123-456</p>
              </div>
            </a> -->
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
          </div>
        </div>
      </div>
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
  methods: {},
  async fetch() {},
};
</script>

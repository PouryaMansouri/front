<template>
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
      <MenuComponent :ulclass="'mobile-menu mmenu-anim'" />
      <!-- End of MobileMenu -->
    </div>
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

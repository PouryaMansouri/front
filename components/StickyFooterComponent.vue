<template>
  <div class="sticky-footer sticky-content fix-bottom">
    <NuxtLink to="/" class="sticky-link"
      ><i class="d-icon-home"></i><span>Home</span></NuxtLink
    >
    <NuxtLink to="/shop" class="sticky-link"
      ><i class="d-icon-volume"></i><span>Categories</span></NuxtLink
    >
    <NuxtLink to="/wishlist" class="sticky-link"
      ><i class="d-icon-heart"></i><span>Wishlist</span></NuxtLink
    >
    <NuxtLink to="/account" class="sticky-link"
      ><i class="d-icon-user"></i><span>Account</span></NuxtLink
    >
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
</template>
<script>
export default {
  data() {
    return {};
  },
  async fetch() {},
};
</script>

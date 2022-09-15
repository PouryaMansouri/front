<template>
  <div class="sticky-footer sticky-content fix-bottom">
    <NuxtLink to="/" class="sticky-link"
      ><i class="d-icon-home"></i><span>Home</span></NuxtLink
    >
    <NuxtLink to="/wishlist" class="sticky-link"
      ><i class="d-icon-heart"></i><span>Wishlist</span></NuxtLink
    >
    <NuxtLink to="/account" class="sticky-link"
      ><i class="d-icon-user"></i><span>Account</span></NuxtLink
    >
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

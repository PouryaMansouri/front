<template>
  <div>
    <client-only>
      <LoadSpinner v-if="showHideSpinner" />
    </client-only>
    <HeaderComponent />
    <Nuxt />
    <StickyFooterComponent />
    <!-- Scroll Top -->
    <a
      style="background-color: #cceff0"
      id="scroll-top"
      href="#top"
      title="Top"
      role="button"
      class="scroll-top"
      ><i class="d-icon-arrow-up"></i
    ></a>
    <!-- <NewsLetterComponent /> -->
    <MobileMenuComponent />
    <FooterComponent :version="1" />
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.showHideSpinner = true;
  },
  mounted() {
    this.showHideSpinner = false;
  },
  data() {
    return {
      showHideSpinner: true,
    };
  },
};
</script>
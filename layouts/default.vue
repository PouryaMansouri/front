<template>
  <div>
    <HeaderComponent />
    <Nuxt />
    <StickyFooterComponent />
    <!-- Scroll Top -->
    <a
      style="background-color: #558063"
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
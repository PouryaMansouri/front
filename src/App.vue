<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { Mutations } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "app",
  setup() {
    const store = useStore();

    onMounted(() => {
      store.commit(Mutations.OVERRIDE_LAYOUT_CONFIG);
    });
  },
});
</script>

<style lang="scss">
// @import "~bootstrap-icons/font/bootstrap-icons.css";
// @import "~quill/dist/quill.snow.css";
// @import "~animate.css";
// @import "~sweetalert2/dist/sweetalert2.css";
// @import "~nouislider/distribute/nouislider.css";
// @import "~@fortawesome/fontawesome-free/css/all.min.css";
// @import "~socicon/css/socicon.css";
// @import "~line-awesome/dist/line-awesome/css/line-awesome.css";
// @import "~dropzone/dist/dropzone.css";
// @import "~@vueform/multiselect/themes/default.css";
// @import "~prism-themes/themes/prism-shades-of-purple.css";
// @import "~element-plus/dist/index.css";

// Main demo style scss
// @import "assets/sass/plugins";
// @import "assets/sass/style";

// Dark mode demo style scss
//@import "assets/sass/plugins.dark";
//@import "assets/sass/style.dark";

//RTL version styles
//@import "assets/css/style.rtl.css";
</style>

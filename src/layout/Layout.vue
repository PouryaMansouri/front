<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "master-layout",
  components: {},
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      if (!store.getters.isUserAuthenticated) {
        router.push({ name: "login" });
      }
    });

    watch(
      () => route.path,
      () => {
        if (!store.getters.isUserAuthenticated) {
          router.push({ name: "login" });
        }
      }
    );

    return {};
  },
});
</script>

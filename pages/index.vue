<template>
  <div>hi</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: "main",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
    };
  },
  async asyncData() {
    return;
  },
});
</script>

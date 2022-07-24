<template>
  <nav class="breadcrumb-nav">
    <div class="container">
      <ul class="breadcrumb">
        <li>
          <NuxtLink to="/"><i class="d-icon-home"></i></NuxtLink>
        </li>
        <li v-for="crumb in crumbs" :key="crumb.name">
          <NuxtLink :to="crumb.path">{{ crumb.name }}</NuxtLink>
        </li>
        <li>{{ pageName }}</li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  props: ["crumbs", "pageName"],
  data() {
    return {};
  },
  methods: {},
  async fetch() {},
};
</script>
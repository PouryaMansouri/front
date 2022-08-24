<template>
  <ul :class="ulclass">
    <li class="active">
      <a href="/">Home</a>
    </li>
    <li v-for="item in navbarMenuList" :key="item.id">
      <a :href="item.slug">{{ item.name }}</a>
      <div class="megamenu">
        <div class="row">
          <div
            v-for="sub1 in item.subcategories"
            :key="sub1.id"
            class="col-4 col-sm-3 col-md-3 col-lg-2"
          >
            <a :href="sub1.slug">
              <h5 class="menu-title">{{ sub1.name }}</h5>
            </a>
            <ul>
              <li v-for="sub2 in sub1.subcategories" :key="sub2.id">
                <a :href="sub2.slug">{{ sub2.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["ulclass"],
  data() {
    return {
      navbarMenuList: [],
    };
  },
  async fetch() {
    const { data } = await this.$axios.get("categories/navbar/");
    this.navbarMenuList = data;
  },
};
</script>

<template>
  <div class="store-listing market page-wrapper">
    <div class="main">
      <div class="page-content mb-10 pb-10">
        <div class="container">
          <div class="row cols-lg-3 cols-sm-2 cols-1 mt-10">
            <div v-for="item in shops" :key="item.id" class="store-wrapper">
              <div class="store">
                <div class="store-header">
                  <figure class="store-banner">
                    <img
                      :src="item.image"
                      :alt="item.name"
                      width="447"
                      height="291"
                      style="background-color: #8d9eaa"
                    />
                  </figure>
                </div>
                <div class="store-content">
                  <h2 class="store-title">
                    <NuxtLink :to="'/shop/' + item.id">{{
                      item.name
                    }}</NuxtLink>

                    <!-- <span class="featured-label">Featured</span> -->
                  </h2>
                  <div class="ratings-container">
                    <span class="ratings-full" title="Rated 4.65 out of 5">
                      <span class="ratings" style="width: 87%"></span>
                    </span>
                  </div>
                  <p>
                    <span class="city">{{ item.description }}</span
                    ><br />
                  </p>
                  <p>
                    <span class="city"></span>
                    <span class="Country">{{ item.address }}</span>
                  </p>
                  <p>
                    <span class="city"></span>
                    <span class="state">{{ item.email }}</span>
                  </p>
                  <div class="store-phone">
                    <i class="fa fa-phone"></i>{{ item.phone }}
                  </div>
                </div>
                <div class="store-footer">
                  <!-- <figure class="seller-avatar">
                    <img
                      src="images/vendor/avatar/1.jpg"
                      alt="Vendor avatar"
                      width="64"
                      height="64"
                    />
                  </figure> -->
                  <NuxtLink
                    class="btn btn-dark btn-link btn-underline"
                    :to="'/shop/' + item.id"
                    >Visit Shop</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  components: {},
  head() {
    return {
      title: "shops",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    const responses = await Promise.all([await $axios.get("shops/")]);

    return {
      shops: responses[0].data,
    };
  },
  data() {
    return {
      shops: [],
    };
  },
});
</script>

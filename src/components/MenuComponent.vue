<template>
    <li class="active">
      <a href="/">Home</a>
    </li>

    <li v-for="item in navbarMenuList" :key="item.id">
      <a :href="item.slug">{{ item.name }}</a>
      <div class="megamenu">
        <div class="row">
          <div class="col-6 col-sm-4 col-md-4 col-lg-3">
            <!-- <h4 class="menu-title">Variations 1</h4> -->
            <ul>
              <li v-for="subItem in item.subcategories" :key="subItem.id">
                <a :href="subItem.slug">{{ subItem.name }}</a>
              </li>
            </ul>
          </div>

          <!-- <div
                        class="
                          col-6 col-sm-4 col-md-4 col-lg-3
                          menu-banner menu-banner1
                          banner banner-fixed
                        "
                      >
                        <figure>
                          <img
                            src="images/menu/banner-1.jpg"
                            alt="Menu banner"
                            width="221"
                            height="330"
                          />
                        </figure>
                        <div class="banner-content y-50">
                          <h4
                            class="
                              banner-subtitle
                              font-weight-bold
                              text-primary
                              ls-m
                            "
                          >
                            Sale.
                          </h4>
                          <h3 class="banner-title font-weight-bold">
                            <span class="text-uppercase">Up to</span>70% Off
                          </h3>
                          <a
                            href="demo2-shop.html"
                            class="btn btn-link btn-underline"
                            >shop now<i class="d-icon-arrow-right"></i
                          ></a>
                        </div>
                      </div> -->
          <!-- End Megamenu -->
        </div>
      </div>
    </li>
</template>

<script>
import ApiService from "@/core/services/ApiService";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "menu-component",
  components: {},
  setup() {
    const navbarMenuList = ref([]);
    onMounted(() => {
      ApiService.get("categories/navbar/")
        .then((response) => {
          navbarMenuList.value = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    });

    return { navbarMenuList };
  },
});
</script>

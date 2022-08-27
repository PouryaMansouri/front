<template>
  <div class="page-wrapper">
    <main class="main">
      <div
        class="page-header"
        style="
          background-image: url('images/shop/page-header-back.jpg');
          background-color: #3c63a4;
        "
      >
        <h3 class="page-subtitle">Category</h3>
        <h1 class="page-title">{{ this.categoryName }}</h1>
      </div>
      <div class="page-content mb-10 pb-6 mt-5">
        <div class="container">
          <div class="row gutter-lg main-content-wrap">
            <aside
              class="
                col-lg-3
                sidebar sidebar-fixed sidebar-toggle-remain
                shop-sidebar
                sticky-sidebar-wrapper
              "
            >
              <div class="sidebar-overlay"></div>
              <a class="sidebar-close" href="#"><i class="d-icon-times"></i></a>
              <div class="sidebar-content">
                <div class="sticky-sidebar" data-sticky-options="{'top': 10}">
                  <div class="widget widget-collapsible">
                    <h3 class="widget-title">Filter by Price</h3>
                    <vue-slider
                      v-model="value"
                      :min="filterData.min_price"
                      :max="filterData.max_price"
                      :tooltip="'always'"
                      :tooltip-formatter="formatter"
                      :tooltip-placement="['top', 'top']"
                    ></vue-slider>
                    <div class="mb-4">
                      Price:
                      <span>${{ value[0] }}</span>
                      -
                      <span>${{ value[1] }}</span>
                    </div>
                  </div>
                  <div class="widget-collapsible">
                    <h3 class="widget-title">Size</h3>
                    <fieldset id="c-group">
                      <label
                        v-for="item in filterData.sizes"
                        :key="item.id"
                        :for="item.id"
                      >
                        <input
                          type="checkbox"
                          v-model="filters.sizes"
                          :value="item.id"
                          :id="item.id"
                          name="c-group"
                        />
                        <span class="label-text">{{ item.name }}</span>
                      </label>
                    </fieldset>
                  </div>
                  <div class="widget widget-collapsible">
                    <h3 class="widget-title">Color</h3>
                    <fieldset id="c-group">
                      <label
                        v-for="item in filterData.colors"
                        :key="item.id"
                        :for="item.id"
                      >
                        <input
                          type="checkbox"
                          v-model="filters.colors"
                          :value="item.id"
                          :id="item.id"
                          name="c-group"
                        />
                        <span class="label-text">{{ item.name }}</span>
                      </label>
                    </fieldset>
                  </div>
                  <div class="widget widget-collapsible">
                    <h3 class="widget-title">Brands</h3>
                    <fieldset id="c-group">
                      <label
                        v-for="item in filterData.brands"
                        :key="item.id"
                        :for="item.id"
                      >
                        <input
                          type="checkbox"
                          v-model="filters.brands"
                          :value="item.id"
                          :id="item.id"
                          name="c-group"
                        />
                        <span class="label-text">{{ item.title }}</span>
                      </label>
                    </fieldset>
                  </div>
                </div>
              </div>
            </aside>
            <div v-if="allProducts.length !== 0" class="col-lg-9 main-content">
              <div class="row cols-2 cols-sm-3 product-wrapper">
                <template>
                  <div v-for="item in filterProducts" :key="item.slug">
                    <product-component :product="item" />
                  </div>
                </template>
              </div>
            </div>
            <div v-else class="col-lg-9 main-content">
              <div class="page-content cart-empty">
                <div class="container">
                  <div class="main-content">
                    <i class="d-icon-bag cart-icon"></i>
                    <h2 class="cart-descri">No products</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from "vue";
import VueSlider from "vue-slider-component/dist-css/vue-slider-component.umd.min.js";
import "vue-slider-component/dist-css/vue-slider-component.css";
import "vue-slider-component/theme/default.css";
import ProductComponent from "~/components/ProductComponent.vue";

export default Vue.extend({
  components: { VueSlider, ProductComponent },
  head() {
    return {
      title: this.categoryName,
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
    };
  },
  async asyncData({ params, $axios }) {
    const responses = await Promise.all([
      await $axios.get("products/data-for-filter/"),
      await $axios.get(`categories/${params.slug}/`),
      await $axios.get(`categories/detail/${params.slug}/`),
    ]);

    return {
      categoryName: responses[2].data.name,
      allProducts: responses[1].data,
      filterData: responses[0].data,
      value: [responses[0].data.min_price, responses[0].data.max_price],
    };
  },
  computed: {
    filterProducts() {
      // item.name.toLowerCase().includes(queryLowered)
      const filteredData = this.allProducts.filter(
        (item) =>
          (this.filters.sizes.length == 0
            ? true
            : item.size.some((element) =>
                this.filters.sizes.includes(element.id)
              )) &&
          (this.filters.colors.length == 0
            ? true
            : item.color.some((element) =>
                this.filters.colors.includes(element.id)
              )) &&
          item.min_price >= this.value[0] &&
          item.min_price <= this.value[1]
        //     &&
        // (this.filters.brands.length == 0
        //   ? true
        //   : item.brand.some((element) =>
        //       this.filters.brands.includes(element.id)
        //     ))
      );
      return filteredData;
    },
  },
  methods: {},

  data() {
    return {
      filters: {
        sizes: [],
        colors: [],
        brands: [],
      },
      formatter: (v) => `$${("" + v).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
      allProducts: [],
      filterData: {
        colors: [],
        sizes: [],
        brands: [],
        categories: [],
        min_price: 0,
        max_price: 0,
      },
      value: [0, 0],
    };
  },
});
</script>

<style lang="less" scoped>
// radios
@checkbox-size: 16px;
@margin: 16px;
@margin-small: @margin / 2;
@text-lighter: #ccc;
@brand: #12cbc4;

body {
  font-family: sans-serif;
  color: #444;
  box-sizing: border-box;
}

.container2 {
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  margin: 30px;
}

fieldset {
  border: none;
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: flex-start;
  min-width: 400px;
}

label {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.aside {
  color: @text-lighter;
}

input {
  position: relative !important;
  appearance: none;
  margin: @margin-small;
  box-sizing: content-box;
  overflow: hidden;

  // circle
  &:before {
    content: "";
    display: block;
    box-sizing: content-box;
    width: @checkbox-size;
    height: @checkbox-size;
    border: 2px solid @text-lighter;
    transition: 0.2s border-color ease;
  }

  &:checked:before {
    border-color: @brand;
    transition: 0.5s border-color ease;
  }

  &:disabled:before {
    border-color: @text-lighter;
    background-color: @text-lighter;
  }

  // dot
  &:after {
    content: "";
    display: block;
    position: absolute;
    box-sizing: content-box;
    top: 50%;
    left: 50%;
    transform-origin: 50% 50%;
    background-color: @brand;
    width: @checkbox-size;
    height: @checkbox-size;
    border-radius: 100vh;
    transform: translate(-50%, -50%) scale(0);
  }

  &[type="radio"] {
    &:before {
      border-radius: 100vh;
    }

    &:after {
      width: @checkbox-size;
      height: @checkbox-size;
      border-radius: 100vh;
      transform: translate(-50%, -50%) scale(0);
    }

    &:checked:after {
      animation: toggleOnRadio 0.2s ease forwards;
    }
  }

  &[type="checkbox"] {
    &:before {
      border-radius: @checkbox-size / 4;
    }

    &:after {
      width: @checkbox-size * 0.6;
      height: @checkbox-size;
      border-radius: 0;
      transform: translate(-50%, -85%) scale(0) rotate(45deg);
      background-color: transparent;
      box-shadow: 4px 4px 0px 0px @brand;
    }

    &:checked:after {
      animation: toggleOnCheckbox 0.2s ease forwards;
    }
  }

  &[type="checkbox"].filled {
    &:before {
      border-radius: @checkbox-size / 4;
      transition: 0.2s border-color ease, 0.2s background-color ease;
    }

    &:checked:not(:disabled):before {
      background-color: @brand;
    }

    &:not(:disabled):after {
      box-shadow: 4px 4px 0px 0px white;
    }
  }
}

@keyframes toggleOnCheckbox {
  0% {
    opacity: 0;
    transform: translate(-50%, -85%) scale(0) rotate(45deg);
  }

  70% {
    opacity: 1;
    transform: translate(-50%, -85%) scale(0.9) rotate(45deg);
  }

  100% {
    transform: translate(-50%, -85%) scale(0.8) rotate(45deg);
  }
}

@keyframes toggleOnRadio {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }

  70% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.9);
  }

  100% {
    transform: translate(-50%, -50%) scale(0.8);
  }
}
</style>
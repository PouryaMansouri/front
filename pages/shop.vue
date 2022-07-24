<template>
  <div class="store-listing market page-wrapper">
    <div class="main">
      <div class="page-content mb-10 pb-10">
        <div class="container">
          <nav class="breadcrumb-nav">
            <ul class="breadcrumb">
              <li>
                <a href="market1.html"><i class="d-icon-home"></i></a>
              </li>
              <li>Store List</li>
            </ul>
          </nav>
          <div class="toolbox">
            <div class="toolbox-left mb-4 mb-md-0">
              <a
                href="#"
                class="
                  toolbox-item
                  btn btn-outline btn-dark btn-rounded btn-icon-left
                  form-toggle-btn
                "
                ><i class="d-icon-filter-2"></i>Filter</a
              >
              <p class="store-count">Total store showing: 6</p>
            </div>
            <div class="toolbox-right">
              <div class="toolbox-item toolbox-sort select-box text-dark">
                <label class="d-block">Sort By:</label>
                <select name="orderby" class="form-control">
                  <option value="default" selected="selected">
                    Most Recent
                  </option>
                  <option value="popularity">Most Popular</option>
                </select>
              </div>
              <div class="toolbox-item toolbox-layout">
                <a
                  href="store-listing.html"
                  class="d-icon-mode-grid btn-layout active"
                ></a>
                <a
                  href="store-listing1.html"
                  class="d-icon-mode-list btn-layout"
                ></a>
              </div>
            </div>
          </div>
          <div class="form-wrapper">
            <form action="#" class="input-wrapper-inline">
              <input
                type="email"
                class="form-control"
                name="vendor"
                id="vendor"
                placeholder="Search Vendors"
                required=""
              />
              <button class="btn btn-dark btn-rounded" type="submit">
                Apply
              </button>
            </form>
          </div>
          <div class="row cols-lg-3 cols-sm-2 cols-1 mt-4">
            <div class="store-wrapper">
              <div class="store">
                <div class="store-header">
                  <figure class="store-banner">
                    <img
                      src="images/vendor/store/1.jpg"
                      alt="Vendor"
                      width="447"
                      height="291"
                      style="background-color: #8d9eaa"
                    />
                  </figure>
                </div>
                <div class="store-content">
                  <h2 class="store-title">
                    <a href="vendor1.html">Vendor1</a>
                    <span class="featured-label">Featured</span>
                  </h2>
                  <div class="ratings-container">
                    <span class="ratings-full" title="Rated 4.65 out of 5">
                      <span class="ratings" style="width: 87%"></span>
                    </span>
                  </div>
                  <p>
                    <span class="street">Steven Street,</span><br />
                    <span class="city">El Carjon,</span><br />
                    <span class="state">California,</span>
                    <span class="Country">United States (US)</span>
                  </p>
                  <div class="store-phone">
                    <i class="fa fa-phone"></i>123456789
                  </div>
                </div>
                <div class="store-footer">
                  <figure class="seller-avatar">
                    <img
                      src="images/vendor/avatar/1.jpg"
                      alt="Vendor avatar"
                      width="64"
                      height="64"
                    />
                  </figure>
                  <a
                    href="vendor1.html"
                    class="btn btn-dark btn-link btn-underline"
                    >Visit Store<i class="d-icon-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="store-wrapper">
              <div class="store">
                <div class="store-header">
                  <figure class="store-banner">
                    <img
                      src="images/vendor/store/2.jpg"
                      alt="Vendor"
                      width="447"
                      height="291"
                      style="background-color: #c2c3c3"
                    />
                  </figure>
                </div>
                <div class="store-content">
                  <h2 class="store-title">
                    <a href="vendor1.html">Vendor2</a>
                  </h2>
                  <div class="ratings-container">
                    <span class="ratings-full" title="Rated 4.65 out of 5">
                      <span class="ratings" style="width: 87%"></span>
                    </span>
                  </div>
                  <p>
                    <span class="state">London,</span>
                    <span class="Country">United Kingdom (UK)</span>
                  </p>
                  <div class="store-phone">
                    <i class="fa fa-phone"></i>123456789
                  </div>
                </div>
                <div class="store-footer">
                  <figure class="seller-avatar">
                    <img
                      src="images/vendor/avatar/2.jpg"
                      alt="Vendor avatar"
                      width="64"
                      height="64"
                    />
                  </figure>
                  <a
                    href="vendor1.html"
                    class="btn btn-dark btn-link btn-underline"
                    >Visit Store<i class="d-icon-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="store-wrapper">
              <div class="store">
                <div class="store-header">
                  <figure class="store-banner">
                    <img
                      src="images/vendor/store/3.jpg"
                      alt="Vendor"
                      width="447"
                      height="291"
                      style="background-color: #868d8d"
                    />
                  </figure>
                </div>
                <div class="store-content">
                  <h2 class="store-title">
                    <a href="vendor1.html">Vendor3</a>
                  </h2>
                  <div class="ratings-container">
                    <span class="ratings-full" title="Rated 4.65 out of 5">
                      <span class="ratings" style="width: 87%"></span>
                    </span>
                  </div>
                  <p>
                    <span class="state">Rio de Janeiro,</span>
                    <span class="Country">Brazil</span>
                  </p>
                  <div class="store-phone">
                    <i class="fa fa-phone"></i>123456789
                  </div>
                </div>
                <div class="store-footer">
                  <figure class="seller-avatar">
                    <img
                      src="images/vendor/avatar/3.jpg"
                      alt="Vendor avatar"
                      width="64"
                      height="64"
                    />
                  </figure>
                  <a
                    href="vendor1.html"
                    class="btn btn-dark btn-link btn-underline"
                    >Visit Store<i class="d-icon-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="store-wrapper">
              <div class="store">
                <div class="store-header">
                  <figure class="store-banner">
                    <img
                      src="images/vendor/store/4.jpg"
                      alt="Vendor"
                      width="447"
                      height="291"
                      style="background-color: #dac6ad"
                    />
                  </figure>
                </div>
                <div class="store-content">
                  <h2 class="store-title">
                    <a href="vendor1.html">Vendor4</a>
                  </h2>
                  <div class="ratings-container">
                    <span class="ratings-full" title="Rated 4.65 out of 5">
                      <span class="ratings" style="width: 87%"></span>
                    </span>
                  </div>
                  <p>
                    <span class="state">Ontario,</span>
                    <span class="Country">Canada</span>
                  </p>
                  <div class="store-phone">
                    <i class="fa fa-phone"></i>123456789
                  </div>
                </div>
                <div class="store-footer">
                  <figure class="seller-avatar">
                    <img
                      src="images/vendor/avatar/4.jpg"
                      alt="Vendor avatar"
                      width="64"
                      height="64"
                    />
                  </figure>
                  <a
                    href="vendor1.html"
                    class="btn btn-dark btn-link btn-underline"
                    >Visit Store<i class="d-icon-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="store-wrapper">
              <div class="store">
                <div class="store-header">
                  <figure class="store-banner">
                    <img
                      src="images/vendor/store/5.jpg"
                      alt="Vendor"
                      width="447"
                      height="291"
                      style="background-color: #4c3f3d"
                    />
                  </figure>
                </div>
                <div class="store-content">
                  <h2 class="store-title">
                    <a href="vendor1.html">Vendor5</a>
                  </h2>
                  <div class="ratings-container">
                    <span class="ratings-full" title="Rated 4.65 out of 5">
                      <span class="ratings" style="width: 87%"></span>
                    </span>
                  </div>
                  <p>
                    <span class="state">Canberra,</span>
                    <span class="Country">Australia</span>
                  </p>
                  <div class="store-phone">
                    <i class="fa fa-phone"></i>123456789
                  </div>
                </div>
                <div class="store-footer">
                  <figure class="seller-avatar">
                    <img
                      src="images/vendor/avatar/5.jpg"
                      alt="Vendor avatar"
                      width="64"
                      height="64"
                    />
                  </figure>
                  <a
                    href="vendor1.html"
                    class="btn btn-dark btn-link btn-underline"
                    >Visit Store<i class="d-icon-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="store-wrapper">
              <div class="store">
                <div class="store-header">
                  <figure class="store-banner">
                    <img
                      src="images/vendor/store/6.jpg"
                      alt="Vendor"
                      width="447"
                      height="291"
                      style="background-color: #2d3c3b"
                    />
                  </figure>
                </div>
                <div class="store-content">
                  <h2 class="store-title">
                    <a href="vendor1.html">Vendor6</a>
                  </h2>
                  <div class="ratings-container">
                    <span class="ratings-full" title="Rated 4.65 out of 5">
                      <span class="ratings" style="width: 87%"></span>
                    </span>
                  </div>
                  <p>
                    <span class="state">Berlin,</span>
                    <span class="Country">Germany</span>
                  </p>
                  <div class="store-phone">
                    <i class="fa fa-phone"></i>123456789
                  </div>
                </div>
                <div class="store-footer">
                  <figure class="seller-avatar">
                    <img
                      src="images/vendor/avatar/6.jpg"
                      alt="Vendor avatar"
                      width="64"
                      height="64"
                    />
                  </figure>
                  <a
                    href="vendor1.html"
                    class="btn btn-dark btn-link btn-underline"
                    >Visit Store<i class="d-icon-arrow-right"></i
                  ></a>
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
  components: { },
  head() {
    return {
      title: "shop",
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
    // const responses = await Promise.all([
    //   await $axios.get("products/data-for-filter/", { isBasic: true }),
    //   await $axios.get("products/", { isBasic: true }),
    //   await $axios.get("landing/new-product/", { isBasic: true }),
    // ]);

    // return {
    //   filterData: responses[0].data,
    //   productList: responses[1].data.results,
    //   newTrendingList: responses[2].data,
    //   value: [responses[0].data.min_price, responses[0].data.max_price],
    // };
  },
  data() {
    return {
      formatter: (v) => `$${("" + v).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
      productList: [],
      filterData: {
        colors: [],
        sizes: [],
        brands: [],
        categories: [],
        min_price: 0,
        max_price: 0,
      },
      value: [0, 0],
      newTrendingList: [],
    };
  },
});
</script>

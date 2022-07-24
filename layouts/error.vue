<template>
  <!-- 404 error -->
  <section
    v-if="error.statusCode === 404"
    class="error-section-1 error-default banner banner-fixed"
  >
    <figure>
      <img
        src="/images/subpages/error-1/404_2_background.jpg"
        width="1903"
        height="800"
        alt="error-page"
        style="background-color: #f6f6f6"
      />
    </figure>
    <div class="container">
      <div class="row banner">
        <figure
          class="
            banner-figure
            col-12 col-lg-7
            d-flex
            justify-content-center
            d-lg-block
            pt-8 pt-lg-4
          "
        >
          <img
            src="/images/subpages/error-1/404_2_figure.png"
            alt="error-page"
            class="p-relative"
            width="629"
            height="701"
          />
          <label
            class="
              error-content
              ls-normal
              p-absolute
              mt-2
              y-50
              font-weight-bolder
            "
            >Error</label
          >
        </figure>
        <div
          class="
            col-12 col-lg-5
            mt-9
            d-flex
            justify-content-center
            d-lg-block
            pt-lg-10
            pl-2
          "
        >
          <div class="banner-content y-50">
            <h2 class="banner-title font-weight-bold text-secondary mb-5">
              Oops!...
            </h2>
            <h3 class="banner-subtitle font-weight-bold mb-2">
              Four oh Four! You have gone Adrift!
            </h3>
            <span
              class="
                banner-descri
                ls-normal
                font-weight-normal
                text-body
                d-block
              "
              >It looks like nothing was found at this location.</span
            >
            <NuxtLink to="/" class="btn btn-primary btn-rounded mt-7"
              >Home page<i class="d-icon-arrow-right"></i
            ></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 500 error -->
  <section v-else class="error-section-3 error-default banner banner-fixed">
    <figure>
      <img
        src="/images/subpages/404_4_background.png"
        width="1903"
        height="800"
        alt="error-page"
        style="background-color: #323232"
      />
    </figure>
    <div class="container">
      <div class="banner-content text-center y-50 x-50 floating">
        <h3
          class="
            banner-subtitle
            font-weight-bold
            mb-3
            text-white text-uppercase
          "
        >
          Ooopps.!
        </h3>
        <div class="layer">
          <h2
            class="
              banner-title
              ls-normal
              font-primary font-weight-bolder
              text-white
              mb-10
              mr-4
              pr-10
            "
          >
            500
          </h2>
          <label
            class="
              banner-descri
              ls-normal
              font-weight-bolder
              p-absolute
              text-uppercase text-white
            "
          >
            server error
          </label>
        </div>
      </div>
    </div>
    <figure class="p-absolute banner-figure">
      <img
        src="/images/subpages/404_4_figure.png"
        width="1903"
        height="800"
        alt="error-page"
      />
      <NuxtLink to="/" class="btn btn-primary btn-rounded p-absolute x-50"
        >Home page<i class="d-icon-arrow-right"></i
      ></NuxtLink>
    </figure>
  </section>
</template>

<script>
export default {
  props: ["error"],
  layout: "blank",
};
</script>
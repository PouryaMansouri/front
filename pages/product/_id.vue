<template>
  <div class="page-wrapper">
    <!-- <h1 class="d-none">Riode - Responsive eCommerce HTML Template</h1> -->
    <main class="main single-product">
      <div class="page-content mb-10">
        <div class="container-fluid">
          <div class="product-navigation">
            <ul class="breadcrumb breadcrumb-lg">
              <li>
                <a href="demo7.html"><i class="d-icon-home"></i></a>
              </li>
              <li><a href="#" class="active">Products</a></li>
              <li>Detail</li>
            </ul>
            <ul class="product-nav">
              <li class="product-nav-prev">
                <a href="#">
                  <i class="d-icon-arrow-left"></i> Prev
                  <span class="product-nav-popup">
                    <img
                      src="/images/product/product-thumb-prev.jpg"
                      alt="product thumbnail"
                      width="110"
                      height="123"
                    />
                    <span class="product-name">Sed egtas Dnte Comfort</span>
                  </span>
                </a>
              </li>
              <li class="product-nav-next">
                <a href="#">
                  Next <i class="d-icon-arrow-right"></i>
                  <span class="product-nav-popup">
                    <img
                      src="/images/product/product-thumb-next.jpg"
                      alt="product thumbnail"
                      width="110"
                      height="123"
                    />
                    <span class="product-name">Sed egtas Dnte Comfort</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="row gutter-lg">
            <aside
              class="
                col-lg-3 col-xxl-2
                right-sidebar
                sidebar-fixed
                sticky-sidebar-wrapper
              "
            >
              <div class="sidebar-overlay">
                <a class="sidebar-close" href="#"
                  ><i class="d-icon-times"></i
                ></a>
              </div>
              <a href="#" class="sidebar-toggle"
                ><i class="fas fa-chevron-left"></i
              ></a>
              <div class="sidebar-content">
                <div class="sticky-sidebar">
                  <div class="service-list mb-4">
                    <div class="icon-box icon-box-side icon-box3">
                      <span class="icon-box-icon">
                        <i class="d-icon-secure"></i>
                      </span>
                      <div class="icon-box-content">
                        <h4 class="icon-box-title">Secured Payment</h4>
                        <p>We ensure secure payment!</p>
                      </div>
                    </div>
                    <div class="icon-box icon-box-side icon-box1">
                      <span class="icon-box-icon">
                        <i class="d-icon-truck"></i>
                      </span>
                      <div class="icon-box-content">
                        <h4 class="icon-box-title">Free Shipping</h4>
                        <p>On all US orders above $99</p>
                      </div>
                    </div>
                    <div class="icon-box icon-box-side icon-box2">
                      <span class="icon-box-icon">
                        <i class="d-icon-money"></i>
                      </span>
                      <div class="icon-box-content">
                        <h4 class="icon-box-title">Money Back guarantee</h4>
                        <p>Any back within 30 days</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="
                      product-banner
                      banner banner-fixed
                      overlay-zoom overlay-dark
                      mb-4
                    "
                  >
                    <figure>
                      <img
                        src="/images/demos/demo7/product/banner.jpg"
                        width="280"
                        height="312"
                        alt="banner"
                      />
                    </figure>
                    <div
                      class="
                        banner-price-info
                        font-weight-bold
                        text-white text-uppercase
                        ls-m
                      "
                    >
                      20-22<sup>th</sup> April
                    </div>
                    <div class="banner-content text-center mt-1">
                      <h4
                        class="
                          banner-subtitle
                          d-inline-block
                          bg-primary
                          text-uppercase
                          ls-m
                          font-weight-semi-bold
                          text-dark
                          mb-0
                        "
                      >
                        Ultimate Sale
                      </h4>
                      <h3
                        class="
                          banner-title
                          ls-l
                          text-uppercase text-white
                          font-weight-bold
                          mb-0
                        "
                      >
                        Up to 70%
                      </h3>
                      <p class="mb-4 font-primary text-white lh-1 ls-m">
                        Discount Selected Items
                      </p>
                      <a href="#" class="btn btn-white btn-link btn-underline"
                        >Shop now<i class="d-icon-arrow-right"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div class="col-lg-9 col-xxl-10">
              <div class="product product-single row mb-4">
                <div class="col-lg-7">
                  <div class="product-gallery row cols-sm-2">
                    <figure
                      v-for="item in product.gallery"
                      :key="item.id"
                      class="product-image mb-4"
                    >
                      <img
                        :src="item.image"
                        :data-zoom-image="item.image"
                        alt="Blue Pinafore Denim Dress"
                        width="800"
                        height="900"
                      />
                      <a href="#" class="product-image-full"
                        ><i class="d-icon-zoom"></i
                      ></a>
                    </figure>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="product-details">
                    <h1 class="product-name pt-lg-2">
                      {{ product.name }}
                    </h1>
                    <div class="product-meta mb-3">
                      SKU: <span class="product-sku">12345670</span> BRAND:
                      <span class="product-brand">The Northland</span>
                    </div>
                    <div class="product-price">${{ productPrice }}</div>
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span
                          class="ratings"
                          :style="'width: ' + product.star * 20 + '%'"
                        ></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a
                        href="#product-tab-reviews"
                        class="link-to-tab rating-reviews"
                        >( {{ comments.length }} reviews )</a
                      >
                    </div>
                    <p class="product-short-desc">
                      {{ product.description }}
                    </p>
                    <div class="product-form product-color">
                      <label>Color:</label>
                      <div class="product-variations">
                        <a
                          v-for="color in product.color"
                          :key="color.id"
                          @click="colorSelect(color.name)"
                          class="color"
                          data-src="/images/demos/demo7/products/big1.jpg"
                          :style="'background-color: ' + color.code"
                        ></a>
                      </div>
                    </div>
                    <div class="product-form product-size">
                      <label>Size:</label>
                      <div class="product-form-group">
                        <div class="product-variations">
                          <a
                            class="size"
                            v-for="size in productSize"
                            :key="size.id"
                            @click="sizeSelect(size)"
                            >{{ size.name }}</a
                          >
                        </div>
                        <!-- <a href="#" class="product-variation-clean"
                          >Clean All</a
                        > -->
                      </div>
                    </div>
                    <!-- <div>
                      <span>{{ productPrice }}</span>
                    </div> -->

                    <hr class="product-divider" />

                    <div class="product-form product-qty">
                      <div class="product-form-group">
                        <div class="input-group">
                          <button class="quantity-minus d-icon-minus"></button>
                          <input
                            class="quantity form-control"
                            type="number"
                            min="1"
                            :max="productQuantity"
                          />
                          <button class="quantity-plus d-icon-plus"></button>
                        </div>
                        <button class="btn-product btn-cart">
                          <i class="d-icon-bag"></i>Add To Cart
                        </button>
                      </div>
                    </div>

                    <hr class="product-divider mb-3" />

                    <div class="product-footer">
                      <!-- <div class="social-links mr-2">
                          <a
                            href="#"
                            class="
                              social-link social-facebook
                              fab
                              fa-facebook-f
                            "
                          ></a>
                          <a
                            href="#"
                            class="social-link social-twitter fab fa-twitter"
                          ></a>
                          <a
                            href="#"
                            class="
                              social-link social-pinterest
                              fab
                              fa-pinterest-p
                            "
                          ></a>
                        </div> -->
                      <div class="product-action">
                        <a
                          @click="addToWishlist"
                          class="btn-product btn-wishlist"
                          ><i class="d-icon-heart"></i>Add To Wishlist</a
                        >
                        <!-- <span class="divider"></span>
                          <a href="#" class="btn-product btn-compare"
                            ><i class="d-icon-random"></i>Add To Compare</a
                          > -->
                      </div>
                    </div>

                    <div class="accordion accordion-simple mb-4">
                      <div class="card border-no card-description">
                        <div class="card-header">
                          <a href="#collapse1-1" class="collapse"
                            >Description</a
                          >
                        </div>
                        <div id="collapse1-1" class="card-body expanded">
                          <div class="row mt-4">
                            <div class="mb-4">
                              <h5
                                class="
                                  description-title
                                  mb-4
                                  font-weight-semi-bold
                                  ls-m
                                "
                              >
                                Features
                              </h5>
                              <p class="mb-2">
                                Praesent id enim sit amet.Tdio vulputate
                                eleifend in in tortor. ellus massa. siti iMassa
                                ristique sit amet condim vel, facilisis
                                quimequistiqutiqu amet condim Dilisis Facilisis
                                quis sapien. Praesent id enim sit amet.
                              </p>
                              <ul class="mb-8">
                                <li>
                                  Praesent id enim sit amet.Tdio vulputate
                                </li>
                                <li>
                                  Eleifend in in tortor. ellus massa.Dristique
                                  sitii
                                </li>
                                <li>Massa ristique sit amet condim vel</li>
                                <li>
                                  Dilisis Facilisis quis sapien. Praesent id
                                  enim sit amet
                                </li>
                              </ul>
                              <h5
                                class="
                                  description-title
                                  mb-3
                                  font-weight-semi-bold
                                  ls-m
                                "
                              >
                                Specifications
                              </h5>
                              <table class="table">
                                <tbody>
                                  <tr>
                                    <th
                                      class="
                                        font-weight-semi-bold
                                        text-dark
                                        pl-0
                                      "
                                    >
                                      Material
                                    </th>
                                    <td class="pl-4">
                                      Praesent id enim sit amet.Tdio
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      class="
                                        font-weight-semi-bold
                                        text-dark
                                        pl-0
                                      "
                                    >
                                      Claimed Size
                                    </th>
                                    <td class="pl-4">Praesent id enim sit</td>
                                  </tr>
                                  <tr>
                                    <th
                                      class="
                                        font-weight-semi-bold
                                        text-dark
                                        pl-0
                                      "
                                    >
                                      Recommended Use
                                    </th>
                                    <td class="pl-4">
                                      Praesent id enim sit amet.Tdio vulputate
                                      eleifend in in tortor. ellus massa. siti
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      class="
                                        font-weight-semi-bold
                                        text-dark
                                        border-no
                                        pl-0
                                      "
                                    >
                                      Manufacturer
                                    </th>
                                    <td class="border-no pl-4">
                                      Praesent id enim
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div>
                              <div class="icon-box-wrap d-flex flex-wrap">
                                <div
                                  class="
                                    icon-box icon-box-side icon-border
                                    pt-2
                                    pb-2
                                    mb-4
                                    mr-10
                                  "
                                >
                                  <div class="icon-box-icon">
                                    <i class="d-icon-lock"></i>
                                  </div>
                                  <div class="icon-box-content">
                                    <h4
                                      class="
                                        icon-box-title
                                        lh-1
                                        pt-1
                                        ls-s
                                        text-normal
                                      "
                                    >
                                      2 year warranty
                                    </h4>
                                    <p>Guarantee with no doubt</p>
                                  </div>
                                </div>
                                <div class="divider d-xl-show mr-10"></div>
                                <div
                                  class="
                                    icon-box icon-box-side icon-border
                                    pt-2
                                    pb-2
                                    mb-4
                                  "
                                >
                                  <div class="icon-box-icon">
                                    <i class="d-icon-truck"></i>
                                  </div>
                                  <div class="icon-box-content">
                                    <h4
                                      class="
                                        icon-box-title
                                        lh-1
                                        pt-1
                                        ls-s
                                        text-normal
                                      "
                                    >
                                      Free shipping
                                    </h4>
                                    <p>On orders over $50.00</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card card-additional">
                        <div class="card-header">
                          <a href="#collapse1-2" class="expand"
                            >Additional information</a
                          >
                        </div>
                        <div class="card-body collapsed" id="collapse1-2">
                          <ul class="list-none">
                            <li>
                              <label>Brands:</label>
                              <p>SkillStar, SLS</p>
                            </li>
                            <li>
                              <label>Color:</label>
                              <p>Blue, Brown</p>
                            </li>
                            <li>
                              <label>Size:</label>
                              <p>Large, Medium, Small</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="card card-reviews">
                        <div class="card-header">
                          <a href="#collapse1-4" class="expand"
                            >Reviews ({{ comments.length }})</a
                          >
                        </div>
                        <div class="card-body collapsed" id="collapse1-4">
                          <div class="row">
                            <div class="col-12 mb-6">
                              <div class="avg-rating-container">
                                <mark>{{ averageRating.total }}</mark>
                                <div class="avg-rating">
                                  <span class="avg-rating-title"
                                    >Average Rating</span
                                  >
                                  <div class="ratings-container mb-0">
                                    <div class="ratings-full">
                                      <span
                                        class="ratings"
                                        :style="
                                          'width: ' + averageRating * 20 + '%'
                                        "
                                      ></span>
                                      <span
                                        class="tooltiptext tooltip-top"
                                      ></span>
                                    </div>
                                    <span class="rating-reviews"
                                      >({{ comments.length }} Reviews)</span
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="ratings-list mb-2">
                                <div class="ratings-item">
                                  <div class="ratings-container mb-0">
                                    <div class="ratings-full">
                                      <span
                                        class="ratings"
                                        style="width: 100%"
                                      ></span>
                                      <span
                                        class="tooltiptext tooltip-top"
                                      ></span>
                                    </div>
                                  </div>
                                  <div class="rating-percent">
                                    <span style="width: 100%"></span>
                                  </div>
                                  <div class="progress-value">100%</div>
                                </div>
                                <div class="ratings-item">
                                  <div class="ratings-container mb-0">
                                    <div class="ratings-full">
                                      <span
                                        class="ratings"
                                        style="width: 80%"
                                      ></span>
                                      <span class="tooltiptext tooltip-top"
                                        >4.00</span
                                      >
                                    </div>
                                  </div>
                                  <div class="rating-percent">
                                    <span style="width: 0%"></span>
                                  </div>
                                  <div class="progress-value">0%</div>
                                </div>
                                <div class="ratings-item">
                                  <div class="ratings-container mb-0">
                                    <div class="ratings-full">
                                      <span
                                        class="ratings"
                                        style="width: 60%"
                                      ></span>
                                      <span class="tooltiptext tooltip-top"
                                        >4.00</span
                                      >
                                    </div>
                                  </div>
                                  <div class="rating-percent">
                                    <span style="width: 0%"></span>
                                  </div>
                                  <div class="progress-value">0%</div>
                                </div>
                                <div class="ratings-item">
                                  <div class="ratings-container mb-0">
                                    <div class="ratings-full">
                                      <span
                                        class="ratings"
                                        style="width: 40%"
                                      ></span>
                                      <span class="tooltiptext tooltip-top"
                                        >4.00</span
                                      >
                                    </div>
                                  </div>
                                  <div class="rating-percent">
                                    <span style="width: 0%"></span>
                                  </div>
                                  <div class="progress-value">0%</div>
                                </div>
                                <div class="ratings-item">
                                  <div class="ratings-container mb-0">
                                    <div class="ratings-full">
                                      <span
                                        class="ratings"
                                        style="width: 20%"
                                      ></span>
                                      <span class="tooltiptext tooltip-top"
                                        >4.00</span
                                      >
                                    </div>
                                  </div>
                                  <div class="rating-percent">
                                    <span style="width: 0%"></span>
                                  </div>
                                  <div class="progress-value">0%</div>
                                </div>
                              </div>
                              <a
                                class="
                                  btn btn-dark btn-rounded
                                  submit-review-toggle
                                "
                                href="#"
                                >Submit Review</a
                              >
                            </div>
                            <div class="col-12 comments pt-2 pb-10 border-no">
                              <nav class="toolbox">
                                <!-- <div class="toolbox-left">
                                    <div class="toolbox-item">
                                      <a
                                        href="#"
                                        class="btn btn-outline btn-rounded"
                                        >All Reviews</a
                                      >
                                    </div>
                                    <div class="toolbox-item">
                                      <a
                                        href="#"
                                        class="btn btn-outline btn-rounded"
                                        >With Images</a
                                      >
                                    </div>
                                    <div class="toolbox-item">
                                      <a
                                        href="#"
                                        class="btn btn-outline btn-rounded"
                                        >With Videos</a
                                      >
                                    </div>
                                  </div> -->
                                <!-- <div class="toolbox-right">
                                    <div
                                      class="
                                        toolbox-item toolbox-sort
                                        select-box
                                        text-dark
                                      "
                                    >
                                      <label>Sort By :</label>
                                      <select
                                        name="orderby"
                                        class="form-control"
                                      >
                                        <option value="">Default Order</option>
                                        <option
                                          value="newest"
                                          selected="selected"
                                        >
                                          Newest Reviews
                                        </option>
                                        <option value="oldest">
                                          Oldest Reviews
                                        </option>
                                        <option value="high_rate">
                                          Highest Rating
                                        </option>
                                        <option value="low_rate">
                                          Lowest Rating
                                        </option>
                                        <option value="most_likely">
                                          Most Likely
                                        </option>
                                        <option value="most_unlikely">
                                          Most Unlikely
                                        </option>
                                      </select>
                                    </div>
                                  </div> -->
                              </nav>
                              <ul class="comments-list">
                                <li v-for="item in comments" :key="item.id">
                                  <div class="comment">
                                    <figure class="comment-media">
                                      <a href="#">
                                        <img :src="item.avatar" alt="avatar" />
                                      </a>
                                    </figure>
                                    <div class="comment-body">
                                      <div
                                        class="comment-rating ratings-container"
                                      >
                                        <div class="ratings-full">
                                          <span
                                            class="ratings"
                                            :style="
                                              'width: ' + item.rate * 20 + '%'
                                            "
                                          ></span>
                                          <span
                                            class="tooltiptext tooltip-top"
                                          ></span>
                                        </div>
                                      </div>
                                      <div class="comment-user">
                                        <span class="comment-date"
                                          >by
                                          <span
                                            class="
                                              font-weight-semi-bold
                                              text-uppercase text-dark
                                            "
                                            >{{ item.nickname }}</span
                                          >
                                          on
                                          <span
                                            class="
                                              font-weight-semi-bold
                                              text-dark
                                            "
                                            >{{ item.created_at }}</span
                                          ></span
                                        >
                                      </div>

                                      <div class="comment-content mb-5">
                                        <p>
                                          {{ item.body }}
                                        </p>
                                      </div>
                                      <!-- <div class="file-input-wrappers">
                                          <img
                                            class="btn-play btn-img pwsp"
                                            src="images/products/product1.jpg"
                                            width="280"
                                            height="315"
                                            alt="product"
                                          />

                                          <img
                                            class="btn-play btn-img pwsp"
                                            src="images/products/product3.jpg"
                                            width="280"
                                            height="315"
                                            alt="product"
                                          />

                                          <a
                                            class="btn-play btn-iframe"
                                            style="
                                              background-image: url(images/product/product.jpg);
                                              background-size: cover;
                                            "
                                            href="video/memory-of-a-woman.mp4"
                                          >
                                            <i class="d-icon-play-solid"></i>
                                          </a>
                                        </div>
                                        <div class="feeling mt-5">
                                          <button
                                            class="
                                              btn
                                              btn-link
                                              btn-icon-left
                                              btn-slide-up
                                              btn-infinite
                                              like
                                              mr-2
                                            "
                                          >
                                            <i class="fa fa-thumbs-up"></i>
                                            Like (<span class="count">0</span>)
                                          </button>
                                          <button
                                            class="
                                              btn
                                              btn-link
                                              btn-icon-left
                                              btn-slide-down
                                              btn-infinite
                                              unlike
                                            "
                                          >
                                            <i class="fa fa-thumbs-down"></i>
                                            Unlike (<span class="count">0</span
                                            >)
                                          </button>
                                        </div> -->
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              <nav
                                class="
                                  toolbox toolbox-pagination
                                  justify-content-end
                                "
                              >
                                <ul class="pagination">
                                  <li class="page-item disabled">
                                    <a
                                      class="page-link page-link-prev"
                                      href="#"
                                      aria-label="Previous"
                                      tabindex="-1"
                                      aria-disabled="true"
                                    >
                                      <i class="d-icon-arrow-left"></i>Prev
                                    </a>
                                  </li>

                                  <li class="page-item">
                                    <a
                                      class="page-link page-link-next"
                                      href="#"
                                      aria-label="Next"
                                    >
                                      Next<i class="d-icon-arrow-right"></i>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                          <!-- End Comments -->
                          <div class="review-form-section">
                            <div class="review-overlay"></div>
                            <div class="review-form-wrapper">
                              <div class="title-wrapper text-left">
                                <h3
                                  class="
                                    title title-simple
                                    text-left text-normal
                                  "
                                >
                                  Add a Review
                                </h3>
                                <p>
                                  Your email address will not be published.
                                  Required fields are marked *
                                </p>
                              </div>
                              <div class="rating-form">
                                <label for="rating" class="text-dark"
                                  >Your rating *
                                </label>
                                <span class="rating-stars selected">
                                  <a class="star-1 active">1</a>
                                  <a class="star-2">2</a>
                                  <a class="star-3">3</a>
                                  <a class="star-4">4</a>
                                  <a class="star-5">5</a>
                                </span>

                                <select
                                  v-model="comment.rate"
                                  name="rating"
                                  id="rating"
                                  required=""
                                  style="display: none"
                                >
                                  <option value="">Rate…</option>
                                  <option value="5">Perfect</option>
                                  <option value="4">Good</option>
                                  <option value="3">Average</option>
                                  <option value="2">Not that bad</option>
                                  <option value="1">Very poor</option>
                                </select>
                              </div>
                              <div>
                                <textarea
                                  v-model="comment.body"
                                  id="reply-message"
                                  cols="30"
                                  rows="6"
                                  class="form-control mb-4"
                                  placeholder="Comment *"
                                  required
                                ></textarea>

                                <!-- <div class="review-medias">
                                    <div
                                      class="
                                        file-input
                                        form-control
                                        image-input
                                      "
                                      style="
                                        background-image: url(images/product/placeholder.png);
                                      "
                                    >
                                      <div class="file-input-wrapper"></div>
                                      <label
                                        class="btn-action btn-upload"
                                        title="Upload Media"
                                      >
                                        <input
                                          type="file"
                                          accept=".png, .jpg, .jpeg"
                                          name="riode_comment_medias_image_1"
                                        />
                                      </label>
                                      <label
                                        class="btn-action btn-remove"
                                        title="Remove Media"
                                      >
                                      </label>
                                    </div>
                                    <div
                                      class="
                                        file-input
                                        form-control
                                        image-input
                                      "
                                      style="
                                        background-image: url(images/product/placeholder.png);
                                      "
                                    >
                                      <div class="file-input-wrapper"></div>
                                      <label
                                        class="btn-action btn-upload"
                                        title="Upload Media"
                                      >
                                        <input
                                          type="file"
                                          accept=".png, .jpg, .jpeg"
                                          name="riode_comment_medias_image_2"
                                        />
                                      </label>
                                      <label
                                        class="btn-action btn-remove"
                                        title="Remove Media"
                                      >
                                      </label>
                                    </div>
                                    <div
                                      class="
                                        file-input
                                        form-control
                                        video-input
                                      "
                                      style="
                                        background-image: url(images/product/placeholder.png);
                                      "
                                    >
                                      <video
                                        class="file-input-wrapper"
                                        controls=""
                                      ></video>
                                      <label
                                        class="btn-action btn-upload"
                                        title="Upload Media"
                                      >
                                        <input
                                          type="file"
                                          accept=".avi, .mp4"
                                          name="riode_comment_medias_video_1"
                                        />
                                      </label>
                                      <label
                                        class="btn-action btn-remove"
                                        title="Remove Media"
                                      >
                                      </label>
                                    </div>
                                  </div>
                                  <p>
                                    Upload images and videos. Maximum count: 3,
                                    size: 2MB
                                  </p> -->
                                <button
                                  @click="submitComment"
                                  class="btn btn-primary btn-rounded"
                                >
                                  Submit<i class="d-icon-arrow-right"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <!-- End Reply -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section>
                <h2
                  class="title title-simple title-center text-capitalize mb-4"
                >
                  Related Products
                </h2>

                <div
                  class="
                    owl-carousel owl-theme owl-nav-full
                    row
                    cols-2 cols-md-3 cols-lg-4
                  "
                  data-owl-options="{
								'items': 5,
								'nav': false,
								'loop': false,
								'dots': true,
								'margin': 20,
								'responsive': {
									'0': {
										'items': 2
									},
									'768': {
										'items': 3
									},
									'992': {
										'items': 4,
										'dots': false
									}
								}
							}"
                >
                  <div
                    v-for="(item, index) in relatedProductsList"
                    :key="index"
                  >
                    <div class="product text-center">
                      <router-link :to="'/product/' + item.id">
                        <figure class="product-media">
                          <a>
                            <img
                              :src="item.image"
                              alt="product"
                              width="280"
                              height="315"
                            />
                          </a>
                          <!-- <div class="product-label-group">
                            <label class="product-label label-new">new</label>
                          </div> -->
                          <div class="product-action-vertical">
                            <a
                              class="btn-product-icon btn-cart"
                              data-toggle="modal"
                              data-target="#addCartModal"
                              title="Add to cart"
                              ><i class="d-icon-bag"></i
                            ></a>
                            <a
                              class="btn-product-icon btn-wishlist"
                              title="Add to wishlist"
                              ><i class="d-icon-heart"></i
                            ></a>
                          </div>
                          <div class="product-action">
                            <a
                              class="btn-product btn-quickview"
                              title="Quick View"
                              >Quick View</a
                            >
                          </div>
                        </figure>
                      </router-link>

                      <div class="product-details">
                        <div class="product-cat">
                          <a :href="item.category.slug">{{
                            item.category.name
                          }}</a>
                        </div>
                        <h3 class="product-name">
                          <a>{{ item.name }}</a>
                        </h3>
                        <div class="product-price">
                          <span class="price">{{ item.min_price }}</span>
                        </div>
                        <div class="ratings-container">
                          <div class="ratings-full">
                            <span
                              class="ratings"
                              :style="'width: ' + item.star * 20 + '%'"
                            ></span>
                            <span class="tooltiptext tooltip-top"></span>
                          </div>
                          <a class="rating-reviews"
                            >( {{ comments.length }} reviews )</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- Root element of PhotoSwipe. Must have class pswp. -->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <!-- Background of PhotoSwipe. It's a separate element as animating opacity is faster than rgba(). -->
      <div class="pswp__bg"></div>

      <!-- Slides wrapper with overflow:hidden. -->
      <div class="pswp__scroll-wrap">
        <!-- Container that holds slides.
			PhotoSwipe keeps only 3 of them in the DOM to save memory.
			Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <!--  Controls are self-explanatory. Order can be changed. -->

            <div class="pswp__counter"></div>

            <button
              class="pswp__button pswp__button--close"
              aria-label="Close (Esc)"
            ></button>
            <button
              class="pswp__button pswp__button--zoom"
              aria-label="Zoom in/out"
            ></button>

            <div class="pswp__preloader">
              <div class="loading-spin"></div>
            </div>
          </div>

          <div
            class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
          >
            <div class="pswp__share-tooltip"></div>
          </div>

          <button
            class="pswp__button--arrow--left"
            aria-label="Previous (arrow left)"
          ></button>
          <button
            class="pswp__button--arrow--right"
            aria-label="Next (arrow right)"
          ></button>

          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {},
  head() {
    return {
      title: this.product.name,
      meta: [
        { hid: "og-type", property: "og:type", content: "website" },
        { hid: "og-title", property: "og:title", content: this.product.name },
        {
          hid: "og-desc",
          property: "og:description",
          content: this.product.description,
        },
        // {
        //   hid: "og-image",
        //   property: "og:image",
        //   content: this.$img(this.product.images[0], { width: 1200 }),
        // },
        // {
        //   hid: "og-url",
        //   property: "og:url",
        //   content: `${this.$config.rootUrl}/product/${this.product.id}`,
        // },
      ],
    };
  },
  data() {
    return {
      product: { stock_detail: {}, min_price: 0 },
      productQuantity: null,
      productSize: [],
      relatedProductsList: [],
      comments: [
        {
          rate: 0,
        },
      ],
      productPrice: 0,
      averageRating: {
        total: 0,
        star5: 0,
        star4: 0,
        star3: 0,
        star2: 0,
        star1: 0,
      },
      comment: {
        object_id: 0,
        nickname: "",
        rate: 1,
        body: "",
      },
    };
  },
  methods: {
    colorSelect(name) {
      const detail = this.product.stock_detail[name].color_data.data;
      this.productSize = Object.values(detail);
    },
    sizeSelect(size) {
      this.productQuantity = size.quantity;
      this.productPrice = size.price;
    },
    submitComment() {
      console.log(this.comment);
      // this.$axios
      //   .post("comments/create-product/", this.comment)
      //   .then((response) => {
      //     if (response.status == 201) {
      //       window.location.reload();
      //     }
      //     console.log("error", "comment not submit");
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
    },
  },
  async asyncData({ params, $axios }) {
    const responses = await Promise.all([
      await $axios.get(`products/details/${params.id}/`),
    ]);

    const product = responses[0].data;
    const comments = product.comments;
    let averageRating = {};

    if (comments != []) {
      var rateSum = 0;
      for (let i = 0; i < comments.length; i++) {
        const element = comments[i];
        rateSum += element.rate;
      }
      averageRating.total = rateSum / comments.length;
    }

    return {
      product,
      productPrice: product.min_price,
      relatedProductsList: product.related_products,
      comments,
      averageRating,
    };
  },
};
</script>

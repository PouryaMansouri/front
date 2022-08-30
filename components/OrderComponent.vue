<template>
  <main class="main order">
    <div class="page-content pt-7 pb-10 mb-10">
      <button @click="print" class="btn btn-rounded btn-md mb-4 ml-10">
        print
      </button>
      <div id="order-details" class="container mt-8">
        <!-- <div class="order-message mr-auto ml-auto">
          <div class="icon-box d-inline-flex align-items-center">
            <div class="icon-box-icon mb-0">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                enable-background="new 0 0 50 50"
                xml:space="preserve"
              >
                <g>
                  <path
                    fill="none"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="bevel"
                    stroke-miterlimit="10"
                    d="
											M33.3,3.9c-2.7-1.1-5.6-1.8-8.7-1.8c-12.3,0-22.4,10-22.4,22.4c0,12.3,10,22.4,22.4,22.4c12.3,0,22.4-10,22.4-22.4
											c0-0.7,0-1.4-0.1-2.1"
                  ></path>
                  <polyline
                    fill="none"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="bevel"
                    stroke-miterlimit="10"
                    points="
											48,6.9 24.4,29.8 17.2,22.3 	"
                  ></polyline>
                </g>
              </svg>
            </div>
            <div class="icon-box-content text-left">
              <h5 class="icon-box-title font-weight-bold lh-1 mb-1">
                Thank You!
              </h5>
              <p class="lh-1 ls-m">Your order has been received</p>
            </div>
          </div>
        </div> -->

        <div class="order-results">
          <div class="overview-item">
            <span>Order number:</span>
            <strong>{{ order.id }}</strong>
          </div>
          <div class="overview-item">
            <span>Status:</span>
            <strong>{{ getStatus(order.status) }}</strong>
          </div>
          <div class="overview-item">
            <span>Date:</span>
            <strong>{{
              new Date(order.created_at).toString().split("GMT")[0]
            }}</strong>
          </div>
        </div>

        <h2
          class="
            title title-simple
            text-left
            pt-4
            font-weight-bold
            text-uppercase
          "
        >
          Order Details
        </h2>
        <div class="order-details">
          <table class="order-details-table">
            <thead>
              <tr class="summary-subtotal">
                <td>
                  <h3 class="summary-subtitle">Products</h3>
                </td>
                <td>
                  <h3 class="summary-subtitle">Shop</h3>
                </td>
                <td>
                  <h3 class="summary-subtitle">Price</h3>
                </td>
                <td>
                  <h3 class="summary-subtitle">Product Discount</h3>
                </td>
                <td>
                  <h3 class="summary-subtitle">Status</h3>
                </td>
                <td>
                  <h3 class="summary-subtitle">Delivery Status</h3>
                </td>
                <td>
                  <h3 class="summary-subtitle">Final Price</h3>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in order.order_items" :key="item.id">
                <td class="product-name">
                  {{ item.stock.product.name }}
                  <span> <i class="fas fa-times"></i> {{ item.quantity }}</span>
                </td>
                <td class="product-name">
                  {{ item.stock.shop.name }}
                </td>
                <td class="product-name">${{ item.total_price }}</td>
                <td class="product-name">${{ item.total_discount }}</td>
                <td class="product-name">
                  {{ getItemStatus(item.status) }}
                </td>
                <td class="product-name">
                  {{ getItemDeliveryStatus(item.delivery_status) }}
                </td>
                <td class="product-name">${{ item.final_price }}</td>
              </tr>

              <tr class="summary-subtotal">
                <td>
                  <h4 class="summary-subtitle">Coupon:</h4>
                </td>
                <td class="summary-subtotal-price">{{ order.coupon.code }}</td>
              </tr>
              <tr class="summary-subtotal">
                <td>
                  <h4 class="summary-subtitle">Subtotal:</h4>
                </td>
                <td class="summary-subtotal-price">${{ order.total_price }}</td>
              </tr>
              <tr class="summary-subtotal">
                <td>
                  <h4 class="summary-subtitle">Total Product Discount:</h4>
                </td>
                <td class="summary-subtotal-price">
                  ${{ order.total_discount }}
                </td>
              </tr>
              <tr class="summary-subtotal">
                <td>
                  <h4 class="summary-subtitle">Coupon Discount:</h4>
                </td>
                <td class="summary-subtotal-price">
                  ${{ order.total_coupon_discount }}
                </td>
              </tr>
              <tr class="summary-subtotal">
                <td>
                  <h4 class="summary-subtitle">Final Total:</h4>
                </td>
                <td>
                  <p class="summary-total-price">${{ order.final_price }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 class="title title-simple text-left pt-10 mb-2">Address</h2>
        <div class="address-info pb-8 mb-6">
          <p class="address-detail pb-2">
            {{ order.first_name }} {{ order.last_name }}<br />
            {{ order.phone }}<br />
            {{ order.email }}<br />
            {{ order.address.country.name }}<br />
            {{ order.address.city.name }}<br />
            {{ order.address.street }}<br />
            {{ order.address.zip_code }}<br />
          </p>
        </div>
      </div>
      <button
        @click="goToPayment"
        class="
          btn btn-icon-left btn-dark btn-back btn-rounded btn-md
          mb-4
          ml-10
        "
      >
        Go To Payment <i class="d-icon-arrow-right"></i>
      </button>
    </div>
  </main>
</template>
  <script>
export default {
  props: ["order"],
  data() {
    return {};
  },
  methods: {
    print() {
      var divToPrint = document.getElementById("order-details");
      var newWin = window.open("");
      newWin.document.write(divToPrint.outerHTML);
      newWin.print();
      newWin.close();
    },
    getStatus(status) {
      if (status == 0) return "Pending";
      if (status == 1) return "Completed";
      if (status == 2) return "Cancel By User";
      if (status == 3) return "Expire";
    },
    getItemStatus(status) {
      if (status == 0) return "Pending";
      if (status == 1) return "Completed";
      if (status == 4) return "Finish Before Payment";
      if (status == 5) return "Finish After Payment";
      if (status == 8) return "Expire";
    },
    getItemDeliveryStatus(status) {
      if (status == 0) return "Pending";
      if (status == 1) return "Processing";
      if (status == 2) return "Delivered";
      if (status == 3) return "Cancelled";
    },
    goToPayment() {
      this.$axios
        .post(`/orders/check-and-go-to-payment/`, {
          order_id: this.order.id,
        })
        .then((response) => {
          console.log(response);
        });
      // /orders/check-and-go-to-payment/
    },
  },
  async fetch() {},
};
</script>
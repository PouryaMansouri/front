<template>
  <div>
    <h4 class="m-5">Orders</h4>
    <table class="order-table">
      <thead>
        <tr>
          <th class="pl-2">Order</th>
          <th>Date</th>
          <th>Status</th>
          <th>Total</th>
          <th class="pr-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="order-number"><a href="#">#3596</a></td>
          <td class="order-date">
            <span>February 24, 2021</span>
          </td>
          <td class="order-status"><span>On hold</span></td>
          <td class="order-total">
            <span>$900.00 for 5 items</span>
          </td>
          <td class="order-action">
            <a href="#" class="btn btn-primary btn-link btn-underline">View</a>
          </td>
        </tr>
        <tr>
          <td class="order-number"><a href="#">#3593</a></td>
          <td class="order-date">
            <span>February 21, 2021</span>
          </td>
          <td class="order-status"><span>On hold</span></td>
          <td class="order-total">
            <span>$290.00 for 2 items</span>
          </td>
          <td class="order-action">
            <a href="#" class="btn btn-primary btn-link btn-underline">View</a>
          </td>
        </tr>
        <tr>
          <td class="order-number"><a href="#">#2547</a></td>
          <td class="order-date"><span>January 4, 2021</span></td>
          <td class="order-status"><span>On hold</span></td>
          <td class="order-total">
            <span>$480.00 for 8 items</span>
          </td>
          <td class="order-action">
            <a href="#" class="btn btn-primary btn-link btn-underline">View</a>
          </td>
        </tr>
        <tr>
          <td class="order-number"><a href="#">#2549</a></td>
          <td class="order-date">
            <span>January 19, 2021</span>
          </td>
          <td class="order-status"><span>On hold</span></td>
          <td class="order-total">
            <span>$680.00 for 5 items</span>
          </td>
          <td class="order-action">
            <a href="#" class="btn btn-primary btn-link btn-underline">View</a>
          </td>
        </tr>
        <tr>
          <td class="order-number"><a href="#">#4523</a></td>
          <td class="order-date"><span>Jun 6, 2021</span></td>
          <td class="order-status"><span>On hold</span></td>
          <td class="order-total">
            <span>$564.00 for 3 items</span>
          </td>
          <td class="order-action">
            <a href="#" class="btn btn-primary btn-link btn-underline">View</a>
          </td>
        </tr>
        <tr>
          <td class="order-number"><a href="#">#4526</a></td>
          <td class="order-date"><span>Jun 19, 2021</span></td>
          <td class="order-status"><span>On hold</span></td>
          <td class="order-total">
            <span>$123.00 for 8 items</span>
          </td>
          <td class="order-action">
            <a href="#" class="btn btn-primary btn-link btn-underline">View</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    // const Checkout = require("@payvision/checkout-library");
    // const options = {
    //   live: false,
    // };
    // const checkout = new Checkout(
    //   "{{CHECKOUT_ID}}",
    //   "checkout-container",
    //   options
    // );
    // checkout.render();
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 10000)
    // })
  },
  async asyncData() {
    return;
  },
  data() {
    return {
      selected: 0,
      countries: [],
      cities: [],
    };
  },
  methods: {
    handleUploading() {
      this.$toast.show("my message", { duration: 3000 });
    },
  },
};
</script>

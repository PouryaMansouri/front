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
        <tr v-for="item in orderList" :key="item.id">
          <td class="order-number">
            <a href="#">#{{ item.id }}</a>
          </td>
          <td class="order-date">
            <span>{{
              new Date(item.created_at).toString().split("GMT")[0]
            }}</span>
          </td>
          <td class="order-status">
            <span>{{ getStatus(item.status) }}</span>
          </td>
          <td class="order-total">
            <span
              >${{ item.final_price }} for
              {{ item.order_items.length }} items</span
            >
          </td>
          <td class="order-action">
            <a
              :href="'/order-details/' + item.id"
              class="btn btn-primary btn-link btn-underline"
              >View</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  mounted() {},
  async fetch() {
    await this.fetchData();
  },
  async asyncData() {
    return;
  },
  data() {
    return {
      orderList: [],
    };
  },
  methods: {
    async fetchData() {
      const { data } = await this.$axios.get("orders/user-orders/");
      this.orderList = data;
    },
    getStatus(status) {
      if (status == 0) return "Pending";
      if (status == 1) return "Completed";
      if (status == 2) return "Cancel By User";
      if (status == 3) return "Expire";
    },
  },
};
</script>

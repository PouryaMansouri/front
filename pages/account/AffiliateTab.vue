<template>
  <div>
    <h4 class="m-5">Affiliate</h4>
    <div class="row">
      <div class="col-lg-12 col-md-12 pr-lg-4">
        <table class="order-table">
          <thead>
            <tr>
              <th><span>count_clicks</span></th>
              <th><span>count_sales</span></th>
              <th><span>link</span></th>
              <th><span>created_at</span></th>
              <th>affiliate_link</th>
              <th>unique_code</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in affiliateList" :key="item.id">
              <td class="product-name">
                <div class="product-name-section">
                  <span>{{ item.count_clicks }}</span>
                </div>
              </td>
              <td class="product-quantity">
                <div class="product-name-section">
                  <span>{{ item.count_sales }}</span>
                </div>
              </td>
              <td class="product-quantity">
                <div class="product-name-section">
                  <span>{{ item.link }}</span>
                </div>
              </td>
              <td class="product-quantity">
                <div class="product-name-section">
                  <span>{{ item.created_at }}</span>
                </div>
              </td>
              <td class="product-quantity">
                <div class="product-name-section">
                  <span>{{ item.affiliate_link }}</span>
                </div>
              </td>
              <td class="product-quantity">
                <div class="product-name-section">
                  <span>{{ item.unique_code }}</span>
                </div>
              </td>
              <td class="product-close">
                <div
                  @click="removeAffiliate(item.id)"
                  class="product-remove"
                  title="Remove this affiliate"
                >
                  <i class="fas fa-times"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="cart-coupon-box mt-8">
          <h4 class="title coupon-title text-uppercase ls-m">
            Add New Affiliate
          </h4>
          <div class="form">
            <div class="row">
              <div class="col-sm-8">
                <label>Link *</label>
                <input
                  v-model="affiliate.link"
                  type="text"
                  class="form-control"
                  name="link"
                  required=""
                />
              </div>
            </div>
          </div>
          <button
            @click="addAffiliate"
            class="btn btn-md btn-dark btn-rounded btn-outline"
          >
            Add Affiliate
          </button>

          <button class="btn btn-md btn-dark btn-rounded btn-outline">
            Edit Affiliate
          </button>
        </div>
      </div>
    </div>
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
      affiliateList: [],
      affiliate: {
        link: "",
      },
    };
  },
  methods: {
    async fetchData() {
      const { data } = await this.$axios.get("affiliate/");

      this.affiliateList = data;
    },
    addAffiliate() {
      this.$axios
        .post("accounts/affiliate/", this.affiliate)
        .then((response) => {
          if (response.status == 201) {
            this.$toast.success("Successful", { duration: 3000 });
            this.fetchData();
          } else {
            this.$toast.error("Error", { duration: 3000 });
          }
        })
        .catch((e) => {
          console.log(e);
          this.$toast.error("Error", { duration: 3000 });
        });
    },
    removeAffiliate(id) {
      this.$axios
        .delete("accounts/affiliate/delete/", this.affiliate)
        .then((response) => {
          if (response.status == 201) {
            this.$toast.success("Successful", { duration: 3000 });
          } else {
            this.$toast.error("Error", { duration: 3000 });
          }
        })
        .catch((e) => {
          console.log(e);
          this.$toast.error("Error", { duration: 3000 });
        });
    },
  },
};
</script>

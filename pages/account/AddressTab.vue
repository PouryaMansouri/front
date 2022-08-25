<template>
  <div>
    <h4 class="m-5">Address</h4>
    <p class="mb-2">
      The following addresses will be used on the checkout page by default.
    </p>
    <div class="row">
      <div class="col-lg-12 col-md-12 pr-lg-4">
        <table class="order-table">
          <thead>
            <tr>
              <th><span>name</span></th>
              <th><span>phone</span></th>
              <th><span>country</span></th>
              <th><span>city</span></th>
              <th>street</th>
              <th>zip code</th>
            </tr>
          </thead>
          <tbody>
            <tr
              @click="setSelectItem(item)"
              :style="isSelectItem(item.id) ? 'border: double;' : ''"
              v-for="item in addressList"
              :key="item.id"
            >
              <td class="product-name">
                <div class="product-name-section">
                  <span>{{
                    item.user.first_name + " " + item.user.last_name
                  }}</span>
                </div>
              </td>
              <td class="product-quantity">
                <div class="product-name-section">
                  <span>{{ item.user.phone_number }}</span>
                </div>
              </td>
              <td class="product-quantity">
                <div class="product-name-section">
                  <span>{{ item.country.name }}</span>
                </div>
              </td>
              <td class="product-quantity">
                <div class="product-name-section">
                  <span>{{ item.city.name }}</span>
                </div>
              </td>
              <td class="product-quantity">
                <div class="product-name-section">
                  <span>{{ item.street + " " + item.street_number }}</span>
                </div>
              </td>
              <td class="product-quantity">
                <div class="product-name-section">
                  <span>{{ item.zip_code }}</span>
                </div>
              </td>
              <td class="product-close">
                <div
                  @click="removeAddress(item.id)"
                  class="product-remove"
                  title="Remove this address"
                >
                  <i class="fas fa-times"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="cart-coupon-box mt-8">
          <h4 class="title coupon-title text-uppercase ls-m">
            Add New Address
          </h4>
          <form action="#" class="form">
            <div class="row">
              <div class="col-sm-4">
                <label>First Name *</label>
                <input
                  v-model="address.user.first_name"
                  type="text"
                  class="form-control"
                  name="first_name"
                  required=""
                />
              </div>
              <div class="col-sm-4">
                <label>Last Name *</label>
                <input
                  v-model="address.user.last_name"
                  type="text"
                  class="form-control"
                  name="last_name"
                  required=""
                />
              </div>
              <div class="col-sm-4">
                <label>Phone *</label>
                <input
                  v-model="address.user.phone_number"
                  type="text"
                  class="form-control"
                  name="phone_number"
                  required=""
                />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4">
                <label>Country *</label>
                <div>
                  <select
                    v-model="address.country"
                    name="country"
                    class="form-control"
                    @change="countryChange"
                  >
                    <option
                      v-for="item in countries"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-sm-4">
                <label>City *</label>
                <div>
                  <select
                    v-model="address.city"
                    name="city"
                    class="form-control"
                  >
                    <option
                      v-for="item in cities"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-sm-4">
                <label>Zip Code *</label>
                <input
                  v-model="address.zip_code"
                  type="text"
                  class="form-control"
                  name="zip_code"
                  required=""
                />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <label>Street *</label>
                <input
                  v-model="address.street"
                  type="text"
                  class="form-control"
                  name="street"
                  required=""
                />
              </div>
              <div class="col-sm-6">
                <label>Street Number *</label>
                <input
                  v-model="address.street_number"
                  type="text"
                  class="form-control"
                  name="street_number"
                  required=""
                />
              </div>
            </div>
          </form>
          <button
            @click="addAddress"
            type="submit"
            class="btn btn-md btn-dark btn-rounded btn-outline"
          >
            Add Address
          </button>

          <button
            @click="editAddress"
            type="submit"
            class="btn btn-md btn-dark btn-rounded btn-outline"
          >
            Edit Address
          </button>
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
      title: "account",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
    };
  },
  mounted() {},
  async fetch() {
    await this.fetchData();
  },
  async asyncData() {
    return;
  },
  data() {
    return {
      selectedItem: 0,
      addressList: [],
      countries: [],
      cities: [],
      address: {
        user: {
          first_name: "",
          last_name: "",
          phone_number: "",
        },
        street: "",
        city: 0,
        zip_code: "",
        street_number: "",
        country: 0,
      },
    };
  },
  methods: {
    async fetchData() {
      const address = await this.$axios.get("accounts/address/list/");
      const country = await this.$axios.get("accounts/country/");

      this.addressList = address.data;
      this.countries = country.data;
    },
    isSelectItem(id) {
      if (this.selectedItem == id) return true;
      return false;
    },
    setSelectItem(item) {
      this.selectedItem = item.id;
      this.address = item;
    },
    countryChange(event) {
      this.cities = this.countries.filter(
        (item) => item.id == event.target.value
      )[0].cities;
    },
    addAddress() {
      this.$axios
        .post("accounts/address/create/", this.address)
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
    removeAddress(id) {
      this.$axios
        .delete("accounts/address/delete/", this.address)
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
});
</script>

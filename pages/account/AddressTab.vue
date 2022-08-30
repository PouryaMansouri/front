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
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in addressList" :key="item.id">
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
              <td class="product-close">
                <div
                  @click="setItem(item)"
                  class="product-remove"
                  title="Edit this address"
                >
                  edit
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="createTab" class="cart-coupon-box mt-8">
          <h4 class="title coupon-title text-uppercase ls-m">
            Add New Address
          </h4>
          <div class="form">
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
          </div>
          <button
            @click="addAddress"
            class="btn btn-md btn-dark btn-rounded btn-outline"
          >
            Add Address
          </button>
        </div>
        <div v-else class="cart-coupon-box mt-8">
          <h4 class="title coupon-title text-uppercase ls-m">Edit Address</h4>
          <div class="form">
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
          </div>
          <button
            @click="editAddress"
            class="btn btn-md btn-dark btn-rounded btn-outline"
          >
            Edit Address
          </button>
          <button
            @click="
              createTab = true;
              address = blankAddress;
            "
            class="btn btn-md btn-dark btn-rounded btn-outline"
          >
            Cancel
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
      createTab: true,
      selectedItem: 0,
      addressList: [],
      countries: [],
      cities: [],
      address: {
        street: "",
        city: 0,
        zip_code: "",
        street_number: "",
        country: 0,
      },
      blankAddress: {
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
    setItem(item) {
      this.createTab = false;
      this.address = {
        aid: item.id,
        street: item.street,
        city: item.city.id,
        zip_code: item.zip_code,
        street_number: item.street_number,
        country: item.city.country,
      };

      this.cities = this.countries.filter(
        (item) => item.id == this.address.country
      )[0].cities;
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
            this.address = this.blankAddress;
            this.$toast.success("Successful", { duration: 3000 });
            this.fetchData();
            this.address = this.blankAddress;
          } else {
            this.$toast.error("Error", { duration: 3000 });
          }
        })
        .catch((e) => {
          Object.keys(e.response.data).forEach((element) => {
            this.$toast.error(e.response.data[element], { duration: 3000 });
          });
        });
    },
    editAddress() {
      this.$axios
        .patch(`accounts/address/${this.address.aid}/update/`, this.address)
        .then((response) => {
          if (response.status == 200) {
            this.$toast.success("Successful", { duration: 3000 });
            this.fetchData();
            this.address = this.blankAddress;
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
        .delete(`accounts/address/${id}/`)
        .then((response) => {
          if (response.status == 204) {
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
  },
};
</script>

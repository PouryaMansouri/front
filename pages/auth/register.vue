<template>
  <div class="page-wrapper">
    <main class="main">
      <div class="page-content mt-6 pb-2 mb-10">
        <div class="container">
          <div class="login-popup">
            <ul
              class="
                nav nav-tabs nav-fill
                align-items-center
                border-no
                justify-content-center
                mb-5
              "
              role="tablist"
            >
              <li class="nav-item">
                <a class="nav-link active border-no lh-1 ls-normal">Register</a>
              </li>
            </ul>
            <div class="form-box">
              <div>
                <div class="form-group">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="register-email"
                    name="register-email"
                    placeholder="Your Email address *"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="phoneNumber"
                    type="number"
                    class="form-control"
                    id="register-phoneNumber"
                    name="register-phoneNumber"
                    placeholder="Your Phone Number *"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="firstName"
                    type="text"
                    class="form-control"
                    id="register-firstname"
                    name="register-firstname"
                    placeholder="Your Firstname *"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="lastName"
                    type="text"
                    class="form-control"
                    id="register-lastname"
                    name="register-lastname"
                    placeholder="Your Lastname *"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="register-password"
                    name="register-password"
                    placeholder="Password *"
                    required
                  />
                </div>
                <div class="form-footer">
                  <div class="form-checkbox">
                    <input
                      type="checkbox"
                      class="custom-checkbox"
                      id="register-agree"
                      name="register-agree"
                      required
                    />
                    <label class="form-control-label" for="register-agree"
                      >I agree to the privacy policy</label
                    >
                  </div>
                  <nuxt-link style="font-weight: bold" to="/auth"
                    >login</nuxt-link
                  >
                </div>
                <button
                  class="btn btn-dark btn-block btn-rounded"
                  @click="registerClick"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script >
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: "register",
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
    return;
  },
  data() {
    return {
      email: "",
      password: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
    };
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.$router.push({
        name: "account",
      });
    }
  },
  methods: {
    registerClick() {
      this.$axios
        .post("/accounts/register/", {
          email: this.email,
          phone_number: this.phoneNumber,
          first_name: this.firstName,
          last_name: this.lastName,
          password: this.password,
        })
        .then(async (response) => {
          if (response.status == 201) {
            this.$toast.success("Successful", { duration: 3000 });
            let response = await this.$auth.loginWith("local", {
              data: {
                email: this.email,
                password: this.password,
              },
            });
            this.$store.dispatch("cart/addToCartWhenLogin");
          }
        })
        .catch((e) => {
          this.$toast.error("Not Registred", { duration: 3000 });
        });
    },
  },
});
</script>

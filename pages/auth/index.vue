<template>
  <div class="page-wrapper">
    <main class="main">
      <div class="page-content mt-6 pb-2 mb-10">
        <div class="container">
          <div class="login-popup">
            <div class="form-box">
              <div class="tab tab-nav-simple tab-nav-boxed form-tab">
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
                    <a
                      class="nav-link active border-no lh-1 ls-normal"
                      href="#signin"
                      >Login</a
                    >
                  </li>
                </ul>
                <div class="tab-pane active" id="signin">
                  <div>
                    <div class="form-group mb-3">
                      <input
                        v-model="email"
                        type="text"
                        class="form-control"
                        id="singin-email"
                        name="singin-email"
                        placeholder="email or Email Address *"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        v-model="password"
                        type="password"
                        class="form-control"
                        id="singin-password"
                        name="singin-password"
                        placeholder="Password *"
                        required
                      />
                    </div>
                    <div class="form-footer">
                      <div class="form-checkbox">
                        <input
                          type="checkbox"
                          class="custom-checkbox"
                          id="signin-remember"
                          name="signin-remember"
                        />
                        <label class="form-control-label" for="signin-remember"
                          >Remember me</label
                        >
                      </div>
                      <nuxt-link to="/auth/register"
                        >create new account</nuxt-link
                      >
                    </div>
                    <button
                      class="btn btn-dark btn-block btn-rounded"
                      @click="loginClick"
                    >
                      Login
                    </button>
                  </div>
                </div>
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
      title: "login",
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
    async loginClick() {
      let response = await this.$auth.loginWith("local", {
        data: {
          email: this.email,
          password: this.password,
        },
      });
      this.$store.dispatch("cart/addToCartWhenLogin");
    },
    registerClick() {
      this.$axios
        .post("/accounts/register/", {
          email: this.email,
          phone_number: this.phoneNumber,
          first_name: this.firstName,
          last_name: this.lastName,
          password: this.password,
        })
        .then((response) => {
          if (response.status == 201) {
            this.$toast.success("Successful", { duration: 3000 });
            this.$auth.loginWith("local", {
              data: {
                email: this.email,
                password: this.password,
              },
            });
          }
        })
        .catch((e) => {
          this.$toast.error("Not Registred", { duration: 3000 });
        });
    },
  },
});
</script>

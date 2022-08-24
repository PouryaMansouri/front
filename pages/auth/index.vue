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
                  <li class="delimiter">or</li>
                  <li class="nav-item">
                    <a
                      class="nav-link border-no lh-1 ls-normal"
                      href="#register"
                      >Register</a
                    >
                  </li>
                </ul>
                <div class="tab-content">
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
                          <label
                            class="form-control-label"
                            for="signin-remember"
                            >Remember me</label
                          >
                        </div>
                        <!-- <a href="#" class="lost-link">Lost your password?</a> -->
                      </div>
                      <button
                        class="btn btn-dark btn-block btn-rounded"
                        @click="loginClick"
                      >
                        Login
                      </button>
                    </div>
                    <!-- <div class="form-choice text-center">
                        <label class="ls-m">or Login With</label>
                        <div class="social-links">
                          <a
                            href="#"
                            class="
                              social-link social-google
                              fab
                              fa-google
                              border-no
                            "
                          ></a>
                          <a
                            href="#"
                            class="
                              social-link social-facebook
                              fab
                              fa-facebook-f
                              border-no
                            "
                          ></a>
                          <a
                            href="#"
                            class="
                              social-link social-twitter
                              fab
                              fa-twitter
                              border-no
                            "
                          ></a>
                        </div>
                      </div> -->
                  </div>
                  <div class="tab-pane" id="register">
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
                      </div>
                      <button
                        class="btn btn-dark btn-block btn-rounded"
                        @click="registerClick"
                      >
                        Register
                      </button>
                    </div>
                    <!-- <div class="form-choice text-center">
                        <label class="ls-m">or Register With</label>
                        <div class="social-links">
                          <a
                            href="#"
                            class="
                              social-link social-google
                              fab
                              fa-google
                              border-no
                            "
                          ></a>
                          <a
                            href="#"
                            class="
                              social-link social-facebook
                              fab
                              fa-facebook-f
                              border-no
                            "
                          ></a>
                          <a
                            href="#"
                            class="
                              social-link social-twitter
                              fab
                              fa-twitter
                              border-no
                            "
                          ></a>
                        </div>
                      </div> -->
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

<script lang="ts">
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
  methods: {
    loginClick() {
      this.$store.dispatch("auth/login", {
        email: this.email,
        password: this.password,
      });
    },
    registerClick() {
      this.$store.dispatch("auth/register", {
        email: this.email,
        phone_number: this.phoneNumber,
        first_name: this.firstName,
        last_name: this.lastName,
        password: this.password,
      });
    },
  },
});
</script>

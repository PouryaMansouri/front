<template>
  <div class="page-wrapper">
    <main class="main account">
      <Breadcrumb pageName="Request" />
      <div
        class="page-header"
        style="background-image: url(images/page-header/contact-us.jpg)"
      >
        <h1 class="page-title font-weight-bold text-capitalize ls-l">
          Request
        </h1>
      </div>
      <div class="page-content mt-10 pt-7">
        <section class="contact-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-2 col-sm-3 ls-m mb-4">
                <div class="grey-section d-flex align-items-center h-100">
                  <div></div>
                </div>
              </div>
              <div
                class="
                  col-lg-8 col-md-8 col-sm-6
                  d-flex
                  align-items-center
                  mb-4
                "
              >
                <div class="w-100">
                  <div class="pl-lg-2">
                    <h4 class="ls-m font-weight-bold mb-2">
                      Submit Your Request
                    </h4>

                    <div class="row mb-2">
                      <div class="col-12 mb-4">
                        <textarea
                          v-model="askBody.message"
                          class="form-control"
                          required
                          placeholder="Message *"
                        ></textarea>
                      </div>
                      <div class="col-md-6 mb-4">
                        <input
                          v-model="askBody.name"
                          class="form-control"
                          type="text"
                          placeholder="Name *"
                          required
                        />
                      </div>
                      <div class="col-md-6 mb-4">
                        <input
                          v-model="askBody.email"
                          class="form-control"
                          type="email"
                          placeholder="Email *"
                          required
                        />
                      </div>
                      <div class="col-md-6 mb-4">
                        <input
                          v-model="askBody.phone"
                          class="form-control"
                          type="phone"
                          placeholder="Phone *"
                        />
                      </div>
                    </div>
                    <button
                      @click="submitMessage"
                      class="btn btn-dark btn-rounded"
                    >
                      Send<i class="d-icon-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-3 ls-m mb-4">
                <div class="grey-section d-flex align-items-center h-100">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  components: {},
  head() {
    return {
      title: "request page",
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
  async asyncData() {
    return;
  },
  data() {
    return {
      askBody: {
        message: "",
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    submitMessage() {
      this.$axios
        .post("public/all-asks/", this.askBody)
        .then((response) => {
          if (response.status == 201) {
            this.askBody = {};
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
</script>

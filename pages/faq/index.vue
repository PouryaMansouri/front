<template>
  <div class="faq page-wrapper">
    <div class="main">
      <Breadcrumb pageName="FAQs" />
      <div
        class="page-header"
        style="background-image: url(images/page-header/faq.jpg)"
      >
        <h3 class="page-subtitle lh-1">Frequently</h3>
        <h1 class="page-title font-weight-bold text-capitalize lh-1">
          Asked Questions
        </h1>
      </div>
      <div class="page-content mb-10 pb-8">
        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-8 mt-10">
                <div
                  class="
                    accordion accordion-border accordion-boxed accordion-plus
                  "
                >
                  <div v-for="faq in faqs" :key="faq.id" class="card">
                    <div class="card-header">
                      <a :href="'#collapse' + faq.id" class="expand">{{
                        faq.question
                      }}</a>
                    </div>
                    <div :id="'collapse' + faq.id" class="collapsed">
                      <div class="card-body">
                        <p>
                          {{ faq.answer }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: "faq",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "description",
        },
      ],
    };
  },
  async asyncData({ params, $axios }) {
    const responses = await Promise.all([await $axios.get("faqs/site/")]);

    return {
      faqs: responses[0].data,
    };
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

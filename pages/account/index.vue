<template>
  <div >
    <main >
      <Breadcrumb pageName="Account" />
      <b-row>
        <b-col sm="4">1</b-col>
        <b-col sm="4">2</b-col>
        <b-col sm="4">3</b-col>
        <b-col sm="4">4</b-col>
        <b-col sm="4">5</b-col>
      </b-row>

      <b-button
        v-b-modal.modal-register-stock-form-wizard
        class="mb-1 mb-sm-0 mr-0 mr-sm-1"
      >
        Stock register
      </b-button>
    </main>
    <b-modal
      hide-footer
      id="modal-register-stock-form-wizard"
      scrollable
      title="Register"
      size="lg"
    >
      <div>booogh</div>
    </b-modal>
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
  async asyncData() {
    return;
  },
  data() {
    return {};
  },
  methods: {
    handleUploading() {},
  },
});
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap.scss';
@import 'bootstrap-vue/src/index.scss';
</style>

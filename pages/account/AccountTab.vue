<template>
  <div>
    <form action="#" class="form">
      <div class="row">
        <div class="col-sm-6">
          <label>First Name *</label>
          <input
            v-model="user.first_name"
            type="text"
            class="form-control"
            name="first_name"
            required=""
          />
        </div>
        <div class="col-sm-6">
          <label>Last Name *</label>
          <input
            v-model="user.last_name"
            type="text"
            class="form-control"
            name="last_name"
            required=""
          />
        </div>
        <div class="col-sm-6">
          <label>Email *</label>
          <input
            v-model="user.email"
            type="text"
            class="form-control"
            name="email"
            required=""
          />
        </div>
        <div class="col-sm-6">
          <label>Phone *</label>
          <input
            v-model="user.phone_number"
            type="text"
            class="form-control"
            name="phone_number"
            required=""
          />
        </div>
      </div>

      <!-- <label>Display Name *</label>
      <input
        type="text"
        class="form-control mb-0"
        name="display_name"
        required=""
      />
      <small class="d-block form-text mb-7"
        >This will be how your name will be displayed in the account section and
        in reviews</small
      >

      <label>Email Address *</label>
      <input type="email" class="form-control" name="email" required="" /> -->
      <!-- <fieldset>
        <legend>Password Change</legend>
        <label>Current password (leave blank to leave unchanged)</label>
        <input type="password" class="form-control" name="current_password" />

        <label>New password (leave blank to leave unchanged)</label>
        <input type="password" class="form-control" name="new_password" />

        <label>Confirm new password</label>
        <input type="password" class="form-control" name="confirm_password" />
      </fieldset> -->

      <button @click="edit" class="btn btn-primary">SAVE CHANGES</button>
      <!-- <button id="pick-avatar" class="btn btn-primary">SAVE CHANGES</button> -->
    </form>
    <div>
      <avatar-cropper
        @uploading="handleUploading"
        :labels="{ submit: 'upload', cancel: 'cancel' }"
        :output-options="{ width: 640, height: 640 }"
        trigger="#pick-avatar"
        upload-url="/crop"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  async fetch() {
    await this.fetchData();
  },
  async asyncData() {},
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
      },
    };
  },
  methods: {
    async fetchData() {
      const { data } = await this.$axios.get("accounts/profile/detail/");

      this.user = data.user;
    },
    handleUploading() {
      this.$toast.show("my message", { duration: 3000 });
    },
    edit() {
      this.$axios
        .patch("/accounts/profile/update/", { user: this.user })
        .then((response) => {
          if (response.status == 200) {
            this.$toast.success("Profile Edited", { duration: 3000 });
          }
        })
        .catch((error) => {
          this.$toast.error("error", { duration: 3000 });
        });
    },
  },
};
</script>

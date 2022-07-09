<template>
  <div class="max-w-screen-md min-w-xs mx-auto my-10 px-10">
    <section class="user-profile">
      <div class="user-profile__title">
        <h2>User Profile</h2>
        <button @click="switchEditingMode" class="user-profile__edit">
          Edit Profile
        </button>
      </div>
      <form class="flex flex-col gap-5">
        <label for="fullName"
          >Name
          <input
            v-model="uName"
            name="fullName"
            type="input"
            :placeholder="[[name]]"
            :disabled="!editingMode"
            required
        /></label>

        <label for="userName"
          >User Name
          <input
            type="input"
            name="userName"
            :placeholder="[[username]]"
            :disabled="!editingMode"
        /></label>

        <label for="mail"
          >E-mail
          <input
            type="input"
            name="mail"
            :placeholder="[[email]]"
            :disabled="!editingMode"
        /></label>

        <label for="company"
          >Company
          <input
            type="input"
            name="company"
            :placeholder="[[company]]"
            :disabled="!editingMode"
        /></label>

        <label for="city"
          >City
          <input
            type="input"
            name="city"
            :placeholder="[[city]]"
            :disabled="!editingMode"
        /></label>

        <label for="zip"
          >Zip Code
          <input
            type="input"
            name="zip"
            :placeholder="[[zipcode]]"
            :disabled="!editingMode"
        /></label>

        <label for="phone"
          >Phone
          <input
            type="input"
            name="phone"
            :placeholder="[[phone]]"
            :disabled="!editingMode"
        /></label>

        <label for="site"
          >Website
          <input
            type="input"
            name="site"
            :placeholder="[[website]]"
            :disabled="!editingMode"
        /></label>

        <label for="comment"
          >Comment <textarea name="comment" :disabled="!editingMode"></textarea>
        </label>

        <div class="flex justify-end gap-5">
          <button class="user-profile__edit save-btn">Save</button>
          <button class="user-profile__edit cancel-btn">
            <router-link to="/users">Cancel</router-link>
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      uName: '',
      uUserName: '',
      uEmail: '',
      uCompany: '',
      uCity: '',
      uZipcode: '',
      uPhone: '',
      uWebsite: '',

      editingMode: false,
    };
  },

  methods: {
    switchEditingMode() {
      this.editingMode = true;
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/styles';
</style>

<style lang="scss" scoped>
@import '../assets/scss/profile';
</style>

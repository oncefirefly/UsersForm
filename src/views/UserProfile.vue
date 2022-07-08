<template>
  <div class="max-w-screen-md min-w-xs mx-auto my-10">
    <section class="user-profile">
      <div class="user-profile__title">
        <h2>User Profile</h2>
        <button class="user-profile__edit">Edit Profile</button>
      </div>
      <form>
        <label for="fullName"
          >Name
          <input
            v-model="uName"
            name="fullName"
            type="input"
            :placeholder="[[name]]"
            disabled
        /></label>

        <label for="userName"
          >User Name
          <input
            type="input"
            name="userName"
            :placeholder="[[username]]"
            disabled
        /></label>

        <label for="mail"
          >E-mail
          <input type="input" name="mail" :placeholder="[[email]]" disabled
        /></label>

        <label for="company"
          >Company
          <input
            type="input"
            name="company"
            :placeholder="[[company]]"
            disabled
        /></label>

        <label for="city"
          >City
          <input type="input" name="city" :placeholder="[[city]]" disabled
        /></label>

        <label for="zip"
          >Zip Code
          <input type="input" name="zip" :placeholder="[[zipcode]]" disabled
        /></label>

        <label for="phone"
          >Phone
          <input type="input" name="phone" :placeholder="[[phone]]" disabled
        /></label>

        <label for="site"
          >Website
          <input type="input" name="site" :placeholder="[[website]]" disabled
        /></label>

        <label for="comment"
          >Comment <textarea name="comment" disabled></textarea>
        </label>
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
    };
  },
};
</script>

<style lang="scss">
@import '../assets/scss/styles';
</style>

<style lang="scss" scoped>
@import '../assets/scss/profile';
</style>

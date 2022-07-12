<template>
  <div class="max-w-screen-md min-w-xs mx-auto my-10 px-10">
    <section class="user-profile">
      <div class="user-profile__title">
        <h2>User Profile</h2>
        <button @click="switchEditingMode" class="user-profile__edit-btn btn">
          Edit Profile
        </button>
      </div>
      <form class="flex flex-col gap-5">
        <label for="fullName"
          >Name
          <input
            v-model="pName"
            name="fullName"
            type="input"
            :placeholder="[[name]]"
            :readonly="!editingMode"
            @blur="switchValidationState(v$.pName)"
          />
          <template v-if="v$.pName.$error">
            <span class="validation__warning" v-if="v$.pName.required"
              >This field is required.</span
            >
          </template>
        </label>

        <label for="userName"
          >User Name
          <input
            v-model="pUserName"
            type="input"
            name="userName"
            :placeholder="[[username]]"
            :readonly="!editingMode"
            @blur="switchValidationState(v$.pUserName)"
          />
          <template v-if="v$.pUserName.$error">
            <span class="validation__warning" v-if="v$.pUserName.required"
              >This field is required.</span
            >
          </template>
        </label>

        <label for="mail"
          >E-mail
          <input
            v-model="pEmail"
            type="input"
            name="mail"
            :placeholder="[[email]]"
            :readonly="!editingMode"
            @blur="switchValidationState(v$.pEmail)"
          />
          <template v-if="v$.pEmail.$error">
            <span class="validation__warning" v-if="v$.pEmail.required"
              >This field is required.</span
            >
            <span class="validation__warning" v-if="v$.pEmail.email"
              >Email is invalid</span
            >
          </template>
        </label>

        <label for="company"
          >Company
          <input
            v-model="pCompany"
            type="input"
            name="company"
            :placeholder="[[company]]"
            :readonly="!editingMode"
            @blur="switchValidationState(v$.pCompany)"
          />
          <template v-if="v$.pCompany.$error">
            <span class="validation__warning" v-if="v$.pCompany.required"
              >This field is required.</span
            >
          </template>
        </label>

        <label for="city"
          >City
          <input
            v-model="pCity"
            type="input"
            name="city"
            :placeholder="[[city]]"
            :readonly="!editingMode"
            @blur="switchValidationState(v$.pCity)"
          />
          <template v-if="v$.pCity.$error">
            <span class="validation__warning" v-if="v$.pCity.required"
              >This field is required.</span
            >
          </template>
        </label>

        <label for="zip"
          >Zip Code
          <input
            v-model="pZipcode"
            type="input"
            name="zip"
            :placeholder="[[zipcode]]"
            :readonly="!editingMode"
            @blur="switchValidationState(v$.pZipcode)"
          />
          <template v-if="v$.pZipcode.$error">
            <span class="validation__warning" v-if="v$.pZipcode.required"
              >This field is required.</span
            >
          </template>
        </label>

        <label for="phone"
          >Phone
          <input
            v-model="pPhone"
            type="input"
            name="phone"
            :placeholder="[[phone]]"
            :readonly="!editingMode"
            @blur="switchValidationState(v$.pPhone)"
          />
          <template v-if="v$.pPhone.$error">
            <span class="validation__warning" v-if="v$.pPhone.required"
              >This field is required.</span
            >
          </template>
        </label>

        <label for="website"
          >Website
          <input
            v-model="pWebsite"
            type="input"
            name="website"
            :placeholder="[[website]]"
            :readonly="!editingMode"
            @blur="switchValidationState(v$.pWebsite)"
          />
          <template v-if="v$.pWebsite.$error">
            <span class="validation__warning" v-if="v$.pWebsite.required"
              >This field is required.</span
            >
          </template>
        </label>

        <label for="comment"
          >Comment
          <textarea
            v-model="pComment"
            name="comment"
            :readonly="!editingMode"
          ></textarea>
        </label>

        <div class="flex justify-end gap-5">
          <button class="btn">Save</button>
          <button @click.prevent="switchModalState" class="cancel-btn btn">
            Cancel
          </button>
        </div>
      </form>
    </section>

    <div v-if="modalIsOpened" class="modal">
      <div class="modal__inner">
        <div class="modal__text">
          <p>
            All unsaved changes will be lost. <br />
            Leave this page?
          </p>
        </div>
        <div class="modal__btns">
          <button class="btn">
            <router-link to="/users">Yes</router-link>
          </button>
          <button @click.prevent="switchModalState" class="cancel-btn btn">
            No
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

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

  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      pName: '',
      pUserName: '',
      pEmail: '',
      pCompany: '',
      pCity: '',
      pZipcode: '',
      pPhone: '',
      pWebsite: '',
      pComment: '',

      editingMode: false,
      modalIsOpened: false,
    };
  },

  validations() {
    return {
      pName: { required },
      pUserName: { required },
      pEmail: { required, email },
      pCompany: { required },
      pCity: { required },
      pZipcode: { required },
      pPhone: { required },
      pWebsite: { required },
    };
  },

  methods: {
    switchEditingMode() {
      this.editingMode = true;
    },

    switchModalState() {
      this.modalIsOpened = this.modalIsOpened ? false : true;
    },

    switchValidationState(field) {
      if (this.editingMode) {
        field.$touch();
      } else return;
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

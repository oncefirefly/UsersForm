<template>
  <div class="max-w-screen-md min-w-xs mx-auto my-10 px-10">
    <section class="users">
      <h2 class="users__title">Users List</h2>
      <ul class="list-none">
        <li v-for="user in allUsers" :key="user.id">
          <div class="user">
            <div class="user__data">
              <div class="user__fullname">
                <span>Fullname:</span>{{ user.name }}
              </div>
              <div class="user__city">
                <span>City:</span>{{ user.address.city }}
              </div>
              <div class="user__company">
                <span>Company:</span>{{ user.company.name }}
              </div>
            </div>
            <button>
              <router-link
                :to="{
                  name: 'user',
                  params: {
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    company: user.company.name,
                    city: user.address.city,
                    zipcode: user.address.zipcode,
                    phone: user.phone,
                    website: user.website,
                  },
                }"
                >Show More</router-link
              >
            </button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',

  beforeCreate() {
    this.$store.dispatch('fetchUsers');
  },

  methods: {
    ...mapActions(['fetchUsers']),
  },

  computed: {
    ...mapGetters(['allUsers']),
  },
};
</script>

<style lang="scss">
@import '../assets/scss/styles';
</style>

<style lang="scss" scoped>
@import '../assets/scss/users';
</style>

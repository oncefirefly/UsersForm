export default {
  state: {
    users: [],
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
  },
  actions: {
    async fetchUsers(ctx) {
      const usersData = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      ).then((r) => r.json());

      const users = usersData;

      ctx.commit('updateUsers', users);
    },
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
  },
};

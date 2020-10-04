const types = {
  CHANGE_NAME: "CHANGE_NAME",
};

module.exports = {
  namespaced: true,
  state: {
    name: "lplplpl",
    screen: "301",
  },
  mutations: {
    [types.CHANGE_NAME](state, val) {
      state.name = val;
    },
  },
  actions: {
    change_name({commit}, val){
      commit("CHANGE_NAME",val);
    }
  },
};
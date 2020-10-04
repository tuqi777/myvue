import Vue from 'vue'
import Vuex from 'vuex'

// 多模块引入-->处理
const files = require.context("./modules/", true, /\.js$/);
const contents = []
files.keys().map((item) => {
  let name = item.match(/.*\/(.*)\/.*/)[1]
  let temp = {}
  temp[name] = files(item)
  contents.push(temp);
});
console.log(contents, 'modules');
Vue.use(Vuex)
let state = {},
    mutations = {
    },
    actions = {},
    modules = {};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: Object.assign(modules, ...contents),
});

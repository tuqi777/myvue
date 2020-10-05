import Vue from 'vue'
import Vuex from 'vuex'

// 多模块引入-->处理
const files = require.context("./modules/", true, /index\.js$/);
const contents = []
files.keys().map((item) => {
  let name = item.match(/.*\/(.*)\/.*/)[1]
  let temp = {}
  console.log(item);
  temp[name] = files(item).default
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

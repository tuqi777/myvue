<template>
  <div class="workBeanch">
    <h1>{{name}}</h1>
    <h2>{{num}}</h2>
    <h2>{{num2}}</h2>
    <el-button type="primary" @click="changeName">你是谁的VUEX</el-button>
    <el-button type="primary" @click="textGetters">测试getters</el-button>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  export default {
    data() {
      return {
        qm: 1,
      }
    },
    computed: {
      name() {
        return this.$store.state.glob.name
      },
      ...mapState({
        num: state => state.glob.num
      }),
      ...mapGetters(['num2'])
    },
    mounted () {
      console.log('vuex:', this.$store);
    },
    methods: {
      changeName() {
        this.$store.commit('CHANGE_NAME', '在你在心上，自由的飞翔') // 模块不带命名空间的写法
        // this.$store.dispatch('glob/change_name', '在你在心上，自由的飞翔') // 模块带命名空间的写法
      },
      textGetters(){
        this.$store.dispatch('change_num', this.$store.state.glob.num +1) // 模块带命名空间的写法
      }
    },
  }
</script>

<style lang="scss" scoped>
.workBeanch{
  padding: 20px;
}
</style>
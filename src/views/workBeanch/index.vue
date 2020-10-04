<template>
  <div class="workBeanch">
    <h1>{{name}}</h1>
    <el-button type="primary" @click="changeName">你是谁的VUEX</el-button>
  </div>
</template>

<script>
  export default {
    computed: {
      name() {
        return this.$store.state.glob.name
      }
    },
    mounted () {
      console.log('vuex:', this.$store);
    },
    methods: {
      changeName() {
        // this.$store.commit('CHANGE_NAME', '在你在心上，自由的飞翔') // 模块不带命名空间的写法
        this.$store.dispatch('glob/change_name', '在你在心上，自由的飞翔') // 模块带命名空间的写法
      }
    },
  }
</script>

<style lang="scss" scoped>
.workBeanch{
  padding: 20px;
}
</style>
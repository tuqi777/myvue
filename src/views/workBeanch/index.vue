<template>
  <div class="workBeanch">
    <!-- <h1>{{name}}</h1>
    <h2>{{num}}</h2>
    <h2>{{num2}}</h2>
    <el-button type="primary" @click="changeName">你是谁的VUEX</el-button>
    <el-button type="primary" @click="textGetters">测试getters</el-button> -->
    <div id="echartsNo1"></div>
  </div>
</template>

<script>
  // import  bar from '@/plugins/echarts'
  import { login } from '@/api'
  import { option } from './echarts.js'
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
      // console.log('vuex:', this.$store);
      console.log( 'this is -----', this.echarts);
      this.init();
      login()
    },
    methods: {
      init () {
        this.initEcharts()
      },
      initEcharts(){
        let myChart = this.echarts.init(document.getElementById('echartsNo1'));
        // 绘制图表
        myChart.setOption(option);
      },
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
  #echartsNo1{
    width:500px;
    height: 400px;
  }
}
</style>
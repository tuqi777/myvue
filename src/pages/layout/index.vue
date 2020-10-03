<template>
  <div class="layout">
    <Top></Top>
    <Menu></Menu>
    <div class="main">
        <Bread></Bread>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Top from './components/top.vue';
  import Menu from './components/menu.vue';
  import Bread from './components/bread.vue';
  export default {
    components: {
      Top,
      Menu,
      Bread,
    },
  }
</script>

<style lang="scss" scoped>
.layout{
  width:100vw;
  height: 100vh;
  .main{
    width: calc(100vw - 240px);
    height: calc(100vh - 100px);
    padding: 20px;
    position: fixed;
    top:60px;
    left:200px;
  }
}
</style>
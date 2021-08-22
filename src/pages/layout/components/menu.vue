<template>
  <div class="menu">
      <!-- background-color="#293c55" -->
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      active-text-color="#409EFF"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse">
      <MenuItem :menu="menuList" />
    </el-menu>
  </div>
</template>

<script>
  import MenuItem from './menuItem.vue';
  export default {
    components: {
      MenuItem,
    },
    data() {
      return {
        isCollapse: false,
        menuList: [{
          title: '工作台',
          path: '/workBeanch',
          menuId: '1-1',
          iconUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2713042258,860821358&fm=26&gp=0.jpg',
        },{
          title: '用户管理',
          path: '/userMange',
          iconUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2713042258,860821358&fm=26&gp=0.jpg',
          menuId: '2-1',
          children: [{
            title: '普通用户管理',
            path: '/userMange/commonUserMange',
            iconUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2713042258,860821358&fm=26&gp=0.jpg',
            menuId: '2-1-1',
          },{
            title: 'VIP用户管理',
            path: '/userMange/vipUserMange',
            iconUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2713042258,860821358&fm=26&gp=0.jpg',
            menuId: '2-1-2',
          }]
        },{
          title: '设置',
          path: '/setting',
          menuId: '9-1',
          iconUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2713042258,860821358&fm=26&gp=0.jpg',
        }]
      }
    },
    computed: {
      screenSize() {
        return 123 
      }
    },
    mounted() {
      this.getMenu()
    },
    methods: {
      async getMenu(){
        const res = await this.$http({
          method: 'get',
          url: '/parameter/menu',
          params: {
            loginName: 'lp'
          }
        })
        console.log('getMenu::', res);
      },
      handleOpen() {
        console.log('open');
      },
      handleClose() {
        console.log('close');
      },
    },
  }
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
  }
  .menu{
    width:200px;
    height:calc(100vh - 60px);
    color: white;
}
</style>
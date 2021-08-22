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
  // import pic from '@/assets/images/cat&girl.jpg'
  export default {
    components: {
      MenuItem,
    },
    data() {
      return {
        isCollapse: false,
        menuList: [{
          title: 'Home',
          path: '/workBeanch',
          menuId: '1-1',
          iconUrl: '@/assets/img/cat&girl.jpg',
        },{
          title: 'Demo',
          path: '/ele',
          iconUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601640624517&di=5e31c0dfbaf638207f40e1117315453c&imgtype=0&src=http%3A%2F%2Fwww.suntop168.com%2Fblog%2Fzb_users%2Fupload%2F2014%2F2%2F998919B2.png',
          menuId: '2-1',
          children: [{
            title: 'elementui',
            path: '/ele',
            iconUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601640624517&di=5e31c0dfbaf638207f40e1117315453c&imgtype=0&src=http%3A%2F%2Fwww.suntop168.com%2Fblog%2Fzb_users%2Fupload%2F2014%2F2%2F998919B2.png',
            menuId: '2-1-1',
            children: [{
              title: 'form',
              path: '/ele/form',
              iconUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601640624517&di=5e31c0dfbaf638207f40e1117315453c&imgtype=0&src=http%3A%2F%2Fwww.suntop168.com%2Fblog%2Fzb_users%2Fupload%2F2014%2F2%2F998919B2.png',
              menuId: '2-1-1-1',
            }]
          },{
            title: 'components',
            path: '/userMange/vipUserMange',
            iconUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2713042258,860821358&fm=26&gp=0.jpg',
            menuId: '2-1-2',
          }]
        },{
          title: 'Settings',
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
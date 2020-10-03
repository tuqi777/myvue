<template>
  <div class="menu">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
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
          iconUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601640624517&di=5e31c0dfbaf638207f40e1117315453c&imgtype=0&src=http%3A%2F%2Fwww.suntop168.com%2Fblog%2Fzb_users%2Fupload%2F2014%2F2%2F998919B2.png',
        },{
          title: '用户管理',
          path: '/userMange',
          iconUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601640624517&di=5e31c0dfbaf638207f40e1117315453c&imgtype=0&src=http%3A%2F%2Fwww.suntop168.com%2Fblog%2Fzb_users%2Fupload%2F2014%2F2%2F998919B2.png',
          menuId: '2-1',
          children: [{
            title: '普通用户管理',
            path: '/userMange/commonUserMange',
            iconUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601640624517&di=5e31c0dfbaf638207f40e1117315453c&imgtype=0&src=http%3A%2F%2Fwww.suntop168.com%2Fblog%2Fzb_users%2Fupload%2F2014%2F2%2F998919B2.png',
            menuId: '2-1-1',
          },{
            title: 'VIP用户管理',
            path: '/userMange/vipUserMange',
            iconUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601640624517&di=5e31c0dfbaf638207f40e1117315453c&imgtype=0&src=http%3A%2F%2Fwww.suntop168.com%2Fblog%2Fzb_users%2Fupload%2F2014%2F2%2F998919B2.png',
            menuId: '2-1-2',
          }]
        },{
          title: '设置',
          path: '/setting',
          menuId: '9-1',
          iconUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601640624517&di=5e31c0dfbaf638207f40e1117315453c&imgtype=0&src=http%3A%2F%2Fwww.suntop168.com%2Fblog%2Fzb_users%2Fupload%2F2014%2F2%2F998919B2.png',
        }]
      }
    },
    computed: {
      screenSize() {
        return 123 
      }
    },
    methods: {
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
  }
</style>
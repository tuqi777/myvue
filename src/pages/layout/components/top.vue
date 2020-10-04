<template>
  <div class="top">
    <span class="logoWraper">
      <!-- <img src="@/assets/img/molin.png" alt="" srcset=""> -->
    </span>
    <span @click="$i18n.locale = $i18n.locale === 'en'? 'zh' : 'en'">切换语言</span>
    <el-dropdown class="userOperate">
      <span class="el-dropdown-link">
        {{$t('common.name')}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
            v-for="(item,i) in operateArr"
            :key="i"
            >
          {{item.name}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    data:() =>({
      userName: '李鹏',
      operateArr: [{
        name: '安全退出'
      }]
    }),
    methods: {
      loginOut() {
        console.log('安全退出');
      }
    },
  }
</script>

<style lang="scss" scoped>
.top{
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #362574;
  .logoWraper{
    width: 160px;
    height: 60px;
    display: inline-block;
    img{
      display: inline-block;
      width: 100%;
      height:100%;
    }
  }
  .userOperate{
    float: right;
    margin-right: 10px;
    color:#fff;
  }
}
</style>
<template>
  <div>
    <BasicTable
      :tableData="tableData"
      :tableOptions="tableOptions"
      :treeType="treeType"
    >
    </BasicTable>
    <el-button type="primary" @click="loginTest">login测试</el-button>
  </div>
</template>

<script>
import BasicTable from '@/components/basic-table'
import {login} from '@/api/userMange'
  export default {
    components: {
      BasicTable,
    },
    data() {
      return {
        tableData: [],
        tableOptions: [],
        treeType: {
          type: 'operate',
          edit: true,
          del: true,
          upload: true,
        }
      }
    },
    mounted () {
      login();
    },
    methods: {
      loginTest() {
        login({
          method:'get',
          url: '/apis/login',
          params: {
            name: 'lp'
          }
        }).then(function(res){
          console.log(res, '测试接口返回值');
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
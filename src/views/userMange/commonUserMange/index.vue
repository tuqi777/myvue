<template>
  <div>
    <BasicTable
      :tableData="tableData"
      :tableOptions="tableOptions"
      :treeType="treeType"
    >
    </BasicTable>
  </div>
</template>

<script>
import BasicTable from '@/components/basic-table'
import {login} from '@/api'
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
  }
</script>

<style lang="scss" scoped>

</style>
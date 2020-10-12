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
  }
</script>

<style lang="scss" scoped>

</style>
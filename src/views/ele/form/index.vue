<template>
  <div>
    <h4>form表单</h4>
    <el-form :model="form" inline size="small" :rules='rules'>
      <el-form-item label="名称(校验中英文)" prop="name" >
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="金额(校验数字)" prop="price" >
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="固定电话(校验)" prop="fixedPhone" >
        <el-input v-model="form.fixedPhone"></el-input>
      </el-form-item>
      <el-form-item label="手机(校验手机号)" prop="phone" >
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱(校验邮箱)" prop="mailBox" >
        <el-input v-model="form.mailBox"></el-input>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  data(){
     const RegTest = (reg) =>(rule,value, callBack) => {
       console.log(rule,value,1111);
       !value && callBack(new Error('不能为空！'))
        || (reg.test(value) && callBack())
        || callBack(new Error('内容不合法，请修改！'))
     }
    return {
      form: {
        name: '',
        price: '',
        phone:'',
        fixedPhone:'', 
        mailBox:'',
      },
      rules: {
        name: [
          {required: true , trigger: 'change', validator: RegTest(/^[\u4e00-\u9fa5a-zA-Z]+$/)}
        ],
        price: [
          {required: true , trigger: 'change', validator: RegTest(/^(-?\d+)(\.\d+)?$/)}
        ],
        fixedPhone: [
          {required: true , trigger: 'blur', validator: RegTest(/^(\d{4}-|\d{3}-)?(\d{8}|\d{7})$/)}
        ],
        phone: [
          {required: true , trigger: 'blur', validator: RegTest(/^1\d{10}$/)}
        ],
        mailBox: [
          {required: true , trigger: 'blur', validator: RegTest(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)}
        ],
      }
    }
  },
  methods: {
    name() {
      
    }
  },
}
</script>

<style>

</style>
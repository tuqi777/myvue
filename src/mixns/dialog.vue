<template>
    <div>
        <el-dialog
            title="提示"
            :visible.sync="visible"
            width="30%"
            :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: {
            visible: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                // dialogVisible: false,
            }
        },
        methods: {
            show() {
                console.log('show');
                // this.dialogVisible = true
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
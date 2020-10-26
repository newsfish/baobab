<template>
    <div>
        <el-menu mode="vertical" :router=true>
            <el-menu-item index="/order_main">交易总额</el-menu-item>
            <el-menu-item>货物总额</el-menu-item>
            <el-menu-item>贷款</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name:"OrderSideBar"
}
</script>

<style>


</style>

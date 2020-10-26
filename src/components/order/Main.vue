<template>
    <div>
        <el-container direction="horizontal">
            <el-aside>
                <OrderSideBar>

                </OrderSideBar>
            </el-aside>
            <el-main>
                <router-view>

                </router-view>
            </el-main>
        </el-container>

    </div>
</template>

<script>
import OrderSideBar from "./OrderSideBar";
export default {
    components:{
        OrderSideBar: OrderSideBar
    },
    name: 'Order'
}
</script>

<style>
</style>

<template>
    <div>
        <el-container>
            <el-aside>
                <StockSideBar>

                </StockSideBar>
            </el-aside>
            <el-main>
                <router-view>

                </router-view>
            </el-main>
        </el-container>

    </div>
</template>

<script>
import StockSideBar from "./StockSideBar";
export default {
    components:{
        StockSideBar: StockSideBar
    },
    name: 'Stock'
}
</script>

<style>
</style>

<template>
    <div id="baby">
        <el-container>
            <!-- 导航栏 -->
            <el-header>
                <NavBar></NavBar>
            </el-header>
            <!-- 展示部分 -->

            <router-view>
            </router-view>
            <el-footer>
            </el-footer>
        </el-container>
    </div>
<!-- END app  -->
</template>

<script>
import NavBar from './components/NavBar.vue'
// import SideBar from './components/StockSideBar.vue'
import "./assets/font-awesome/css/font-awesome.min.css"

export default {
  name: 'App',
  components: {
    NavBar
    // SideBar
  }
}
</script>

<style>

</style>

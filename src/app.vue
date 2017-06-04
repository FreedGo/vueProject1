<template>
    <div class="app">
        <!--头部-->
        <div class="head-warp">
            <mt-header fixed title="VUE项目一"></mt-header>
        </div>
        <!--/--头部-->

        <router-view></router-view>

        <!--底部-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item mui-active" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopCar">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </router-link>
        </nav>
        <!--/--底部-->
    </div>
</template>

<script>
    export default{
        data(){
            return {
                dec:'vue项目一'
            }
        }
    }
</script>

<style>
.head-warp{
    height:40px;
}
</style>
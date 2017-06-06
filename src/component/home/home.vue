<template>
    <div class="tmpl">
        <div class="swipe-warp">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in list">
                    <!--{{item}}-->
                    <a class="swipe-link" :href="item.url"><img class="swipe-image" :src="item.img" alt=""></a>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                dec:'home',
                list:[]
            }
        },
        created(){
	        this.getHomeLunbo()
        },
        methods:{
        	getHomeLunbo(){
        		var url = 'http://localhost:8899/api/getlunbo';
        		this.$http.get(url).then(res=>{
        			this.list = res.body.message;
                },res=>{
			        console.log('获取图片失败')
                    }

                );
            }
        }
    }
</script>

<style>
    .mint-swipe{
        height:300px;
    }
.swipe-link{
    display: inline-block;
    width:100%;
    height: auto;
}
.swipe-image{
    width: 100%;
    height: auto;
}
</style>
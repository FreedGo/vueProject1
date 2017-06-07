<template>
    <div class="tmpl">
        <div class="swipe-warp">
            <swiper :lists="list"></swiper>
        </div>
    </div>
</template>

<script>
    import swiper from '../swipe/swiper.vue';
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
        		var url = 'http://webhm.top:8899/api/getlunbo';
        		this.$http.get(url).then(res=>{
        			this.list = res.body.message;
                },res=>{
			        console.log('获取图片失败')
                    }

                );
            }
        },
        components:{
        	swiper
        }

    }
</script>

<style>
    /*.mint-swipe{*/
        /*height:220px;*/
    /*}*/
/*.swipe-link{*/
    /*display: inline-block;*/
    /*width:100%;*/
    /*height: auto;*/
/*}*/
/*.swipe-image{*/
    /*width: 100%;*/
    /*height: auto;*/
/*}*/
</style>
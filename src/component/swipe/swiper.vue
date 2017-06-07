<template>
	<div class="swipe-warp">
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in lists">
				<a class="swipe-link" :href="item.url"><img class="swipe-image" :src="item.img" alt=""></a>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
export  default {
	data(){
		return{
			msg:'1'
		}
	},
	props:[
		'lists'
	]
}
</script>

<style>
	.mint-swipe{
		height:187.5px;
	}
	.swipe-link{
		display: inline-block;
		width:100%;
		height: auto;
	}
	.swipe-image{
		width: 100%;
		height: 100%;
	}
</style >
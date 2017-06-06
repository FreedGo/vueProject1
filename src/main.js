/**
 * Created by Freed on 2017/6/3.
 */
// 1.导入包--------------------------------------
// 1.1 导入功能包
import Vue from 'vue';
import vueRouter from 'vue-router';
import vueResoure from 'vue-resource';

// 1.2 导入相关框架
import mintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import muicss from '../statics/mui/css/mui.css';

//1.3. 导入vue文件
import app from './app.vue';
import home from './component/home/home.vue';
import member from './component/member/member.vue';
import shopCar from './component/shopCar/shopCar.vue';
import search from './component/search/search.vue';



// --/--导入包结束--------------------------------------

//2.配置使用
//2.1. vue使用相关包

Vue.use(mintUI);

Vue.use(vueRouter);

Vue.use(vueResoure);

let router = new vueRouter({

    routes:[
        { name:'root',path:'/',redirect:'home'},//打开时自动重定向至首页
        { name:'home',path:'/home',component:home},
        { name:'member',path:'/member',component:member},
        { name:'shopCar',path:'/shopCar',component:shopCar},
        { name:'search',path:'/search',component:search},
    ]
})




new Vue({
    el:'#app',
    router,
    render:c=>c(app)
})


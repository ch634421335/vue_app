import Vue from 'vue'

//1. 引入路由包 (插件)
import VueRouter from 'vue-router'

//2. 安装插件包到Vue上,
Vue.use(VueRouter);

import Detail from '../pages/detail.vue'
import Home from '../pages/home.vue'
import Follow from '../pages/follow.vue'
import User from '../pages/user.vue'
import Login from '../pages/login.vue'
import Reg from '../pages/reg.vue'
import Error from '../pages/Error.vue'
import Column from '../pages/column.vue'

//3. 路由配置
let routes = [
  {path:'/home',component:Home},
  {path:'/follow',component:Follow},
  {path:'/column',component:Column},
  {path:'/User',component:User},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},
  {name:'detail', path:'/detail/:_id',component:Detail},
  {path:'/',redirect:'/home'},
  {path:'*',component:Error},
]

//4.路由实例
let router = new VueRouter({
  // routes:数组  //
  // routes:routes
  routes,
  mode:'hash',  //模式
  // mode:'history',
});

/*router.beforeEach((to,from,next)=>{
  console.log("全局 前置守卫")
  next();
  // next(false)

  if(to.path=="/login"||to.path=="/reg"){
    // next({path:"/goods",params:{a:1},query:{b:2}})
  }else{
    next("/login");
  }
})*/
//5.导出路由实例，让他去控制vue根
export default router
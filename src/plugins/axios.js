import axios from "axios";
import Vue from "vue";
import router from "./router"
import vm from "../main.js"

axios.interceptors.request.use(function(config){
    // console.log("请求拦截");
    vm.bLoading=true;
    let local = window.localStorage.getItem("user");
    let token = local ? JSON.parse(window.localStorage.getItem("user")).token : ''
    config.headers={
        token
    }
    return config;
},function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    vm.bLoading=false;
    let currentRoute = router.currentRoute.fullPath;
    if(response.data.err===2 && !currentRoute.includes("login")){
        router.replace({
            path:"/login",
            query:{addres:currentRoute}
        })
    }
    return response;
},function (error) {
    return Promise.reject(error)
})

Vue.prototype.$axios = axios;
window.axios=axios

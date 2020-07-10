<template>
    <div class="content">
        <uc-nav bgColor="transparent" bdWidth="0" arrow="gray"></uc-nav>
        <h1></h1>
        <div class="login-box">
            <p class="lsolid"></p>
            <div class="login">
                <router-link to="/login">登录</router-link>
                <!-- <a href="login_m.html">登录</a> -->
                <span></span>
                <router-link to="/reg">注册</router-link>
            </div>
            <p class="rsolid"></p>
        </div>
        <div class="user">
            <uc-input label="用户" v-model="username"></uc-input>
            <uc-input label="密码" v-model="password" type="password"></uc-input>
            {{errorMess}}
        </div>
        <div class="footbox">
            <uc-button text="登 录" @click="login" />
            <a href="javascript:;" class="tishi">忘记密码？</a>
        </div>
    </div>
</template>

<script>
    import UcNav from "../components/uc-nav/uc-nav"
    import UcInput from "../components/uc-input/uc-input"
    import UcButton from "../components/uc-button/uc-button"
    export default {
        name: "login",
        data(){
            return {
                username:"",
                password:"",
                errorMess:""
            }
        },
        components:{UcNav,UcInput,UcButton},
        methods:{
            login(){
                this.$axios({
                    url:"/api/login",
                    method:"post",
                    data:{
                        username:this.username,
                        password:this.password
                    }
                }).then(
                    res=>{
                        if(res.data.err===0){
                            //种token
                            window.localStorage.setItem("user",JSON.stringify(res.data))
                            //跳转到之前的页面
                            if(this.$route.query.address){
                                this.$router.replace(this.$route.query.address)
                            }else{
                                this.$router.replace("/user")
                            }
                        }else{
                            this.errorMess=res.data.msg
                        }
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .content{max-width:6.4rem; margin:0 auto;}
    .content .fhbtn{ padding-top:0.27rem;}
    .content h1{width:2.18rem;height:1.35rem; background:url(../assets/img/say.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
    .content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
    .login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
    .login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
    .content .login-box{ position:relative;}
    .content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
    .content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
    .content .user{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}

    .content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
    .content .login-btn{width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
    .content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>
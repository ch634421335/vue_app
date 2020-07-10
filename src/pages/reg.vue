<template>
    <div class="content">
        <uc-nav bgColor="transparent" bdWidth="0" arrow="gray"></uc-nav>
        <h1 @click="upload"><img :src="headimg" alt="" style="width: 150px;height: 150px;margin-top: -20px"></h1>
        <input type="file" id="file" style="display: none" @change="loadimg">
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
        </div>
        <div class="footbox">
            <uc-button text="注 册" @click="reg" />
            <a href="javascript:;" class="tishi">忘记密码？</a>
        </div>
    </div>
</template>

<script>
    import UcNav from '../components/uc-nav/uc-nav.vue'
    import UcInput from '../components/uc-input/uc-input.vue'
    import UcButton from '../components/uc-button/uc-button.vue'
    export default {
        name: "reg",
        data(){
            return {
                username:'',
                password:'',
                headimg:""
            }
        },
        components:{UcNav,UcInput,UcButton},
        methods:{
            loadimg(){
                let file = document.getElementById("file");
                file = file.files[0]
                let reader = new FileReader();
                reader.vue  = this
                reader.readAsDataURL(file);
                //在reader的load内部，this的指向是reader，所以使用自己的数据或者封装的vue方法，请使用this.vue.XXX
                reader.onload = function () {
                    file.src = this.result
                    this.vue.headimg = file.src
                }
            },
            reg(){
               let formData = new FormData();
               formData.append("username",this.username);
               formData.append("password",this.password);
               formData.append("nikename","前端随机昵称");
               let file = document.getElementById("file");
               formData.append("icon",file.files[0]);
               this.$axios({
                   url:"/api/reg",
                   method:"post",
                   data:formData
               }).then(
                   res=>{
                       if(res.data.err===0){
                           this.$router.push("/login")
                       }else{
                           this.errorMess=res.data.msg
                       }
                   }
               )
            },
            upload(){
                let file = document.getElementById("file");
                file.click()
            }
        }
    }
</script>

<style scoped>
    .content{max-width:6.4rem; margin:0 auto;}
    .content .fhbtn{ padding-top:0.27rem;}
    .content h1{width:2.18rem;height:1.35rem; background:url(../assets/img/my_cz.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
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
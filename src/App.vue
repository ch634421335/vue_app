<template>
    <div id="app">
        <Loading v-show="$root.bLoading"/>
    <Header v-show="$root.bNav"/>
        <router-view ></router-view>
<!--        <User/>-->
<!--        <Detail/>-->
        <Footer v-show="$root.bFoot"/>
    </div>
</template>

<script>
    import Header from "./layouts/header";
    import Footer from "./layouts/footer";
    import User from "./pages/user";
    import Detail from "./pages/detail";
    import Loading from "./components/loading"
    export default {
        name: 'App',
        data: () => ({
        }),
        params:{},
        methods: {

        },
        mounted() {
            // setTimeout(()=>this.list=['aa','bb','cc'],5000)


        },
        watch:{
            $route:{
                handler(to){
                    let path = to.path;
                    if(/home|follow|column/.test(path)){
                        this.$root.bNav=this.$root.bFoot=true;
                    }
                    if(/detail|login|reg/.test(path)){
                        this.$root.bNav=this.$root.bFoot=false
                    }
                    if(/user/.test(path)){
                        this.$root.bNav=false;
                        this.$root.bFoot=true;
                    }
                },
                immediate:true
            }
        },
        components: {
            Footer,Header,User,Detail,Loading
        }
    }
</script>

<style>
</style>

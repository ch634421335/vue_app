<template>
    <div class="pages__padding">
        <Banner :data="banner" collectionName="banner"/>
        <uc-cell
        v-for="(item,index) of home"
        :data="item"
        :index="index"
        :key="item._id"
        collectionName="home"
        />


    </div>
</template>

<script>
    import Banner from "../components/banner/banner"
    import UcCell from "../components/uc-cell/uc-cell"
    export default {
        name: "home",
        data(){
            return {
                home:[],banner:[],errorMess:'',
            }
        },
        components:{Banner,UcCell},
        mounted() {
            axios({
                url:"/api/goods/banner",
                params:{_limit:3}
            }).then(
                res=>res.data.err === 0 &&(this.banner=res.data.data)
            )
            axios({
                url:"/api/goods/home",
                params:{
                    _limit:20
                }
            }).then(
                res=>res.data.err===0&& (this.home=res.data.data)
            )
        }
    }
</script>

<style scoped>
    .pages__padding{padding-bottom:48px}
</style>
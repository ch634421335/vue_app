<template>
    <div class="page__padding">
        <uc-cell
        v-for="(item,index) of column"
        :data="item"
        :key="item._id"
        collectionName="colum"
        />
    </div>
</template>

<script>
    import UcCell from "../components/uc-cell/uc-cell"
    export default {
        name: "column",
        components:{UcCell},
        mounted() {
            axios({
                url:"/api/goods/column",
                params:{
                    _limit:12
                }
            }).then(
                res=>res.data.err===0 &&(this.column = res.data.data)
            )
        }
    }
</script>

<style scoped>

</style>
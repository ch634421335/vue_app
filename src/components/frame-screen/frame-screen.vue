<template>
    <div class="frame-screen-detail" v-if="type==='detail'">
        <div>
            <div class="icon"></div>
            <div class="auth_name"></div>
        </div>
        <div class="title"></div>
        <hr>
        <div class="time"></div>
        <div class="content"></div>
    </div>
    <div class="frame-screen-list" v-else-if="type==='list'">
        <div class="banner">
            banner
        </div>
        <div class="cell">cell</div>
        <div class="cell">cell</div>
        <div class="cell">cell</div>
        <div class="cell">cell</div>
        <div class="cell">cell</div>
    </div>
</template>

<script>
    export default {
        name: "frame-screen",
        props:{
            type:{
                type:String,
                default:'detail'
            }
        },

    }
</script>

<style scoped>
    .frame-screen-detail .icon{}
    .frame-screen-list .icon{}
</style>
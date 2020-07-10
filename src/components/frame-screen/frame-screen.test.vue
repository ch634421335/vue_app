<template>

    <div id="app">
        <h3>测试 骨架屏</h3>
        <frame-screen type="list" v-if="list.length==0"></frame-screen>
        <div v-else>数据</div>
    </div>

</template>

<script>

    import FrameScreen from "./components/frame-screen/frame-screen"

    export default {
        name: 'App',
        data: () => ({
            list:[]
        }),
        methods: {},
        mounted() {
            setTimeout(()=>this.list=['aa','bb','cc'])
        },
        components: {
            FrameScreen
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<template>
    <div id="app">
        <Loading v-show="list.length==0"></Loading>
    </div>

</template>

<script>

    import Loading from "./components/loading/index"

    export default {
        name: 'App',
        data: () => ({
            list:[]
        }),
        methods: {},
        mounted() {
            setTimeout(()=>this.list=['aa','bb','cc'],5000)
        },
        components: {
            Loading
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

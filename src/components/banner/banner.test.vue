<template>

    <div id="app">
        <h3>测试 轮播图</h3>

        <banner :data="bannerData" collection-name="banner" />
    </div>

</template>

<script>

    import Banner from "./components/banner/banner"

    export default {
        name: 'App',
        data: () => ({
            bannerData: []
        }),
        methods: {},
        mounted() {
            setTimeout(() => this.bannerData = [{
                _id: 1,
                banner: "./images/img_1.jpg",
                title: "titl1",
                sub_title: "subtitle1"
            }, {
                _id: 2, banner: "images/img_1.jpg",
                title: "titl1",
                sub_title: "subtitle2"
            },
                {
                    _id: 3,
                    banner: "./images/img_1.jpg",
                    title: "title3",
                    sub_title: "subtitle3"
                }
            ], 2000)
        },
        components: {
            Banner
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

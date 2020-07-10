<template>
    <div class="uc-cell">
        <div @click="toDetail">
            <h2><span v-show="index != null">{{index +1}}.</span>{{data.title}}</h2>
            <p>{{data.des}}</p>
        </div>
        <a v-if="isAdd" href="javascript:;" @click="$emit('add-item')">+</a>
    </div>
</template>

<script>
    export default {
        name: "uc-cell",
        props:{
            data:{
                type:Object,
                required:true
            },
            index:{
                type:Number,
                default:null
            },
            collectionName:{
                type:String,
                default:null
            },
            isAdd:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            toDetail(){
                if(this.collectionName){
                    this.$router.push(`/detail/${this.data._id}?collectionName=${this.collectionName}`)
                    // this.$router.push(`/detail/${this.data._id}?collectionName=${this.collectionName}`)
                }
            }
        }
    }
</script>

<style scoped>
    .uc-cell{position:relative;color:#494d4d;width:6.4rem; margin:0 auto;clear: both;padding:0.2rem 0.4rem;border-bottom:1px dashed #ccc;}
    .uc-cell:active{
        background: #ccc;
    }
    .uc-cell h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
    .uc-cell p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
    .uc-cell>a{
        position: absolute;right:1rem;top:30%;color:#494D4D;font-weight: bold;margin-top: -5px;
        text-align: center;font-size: 25px;
    }
</style>
<template>
    <div class="OnlineVideoShowContainer">
        <span class="titlePart">
            <a class="titleName">
                {{ title }}
            </a>
        </span>
        <!-- <video ref="videoElement" autoplay controls> -->
        <!-- 使用props.url作为视频流的源 -->
        <!-- <source :src="url" type="video/mp4"> -->
        <img class=videoStyle :src="videoUrl" alt="Video Stream" height="100%" width="100%">
        <!-- Your browser does not support the video tag. -->
        <!-- </video> -->
    </div>
</template>

<script setup>
    // import { defineProps } from 'vue';

    const props = defineProps([
        "title",
        "videoUrl",
        // "pickerLeft",
        // "pickerTop",
    ]);
    
    // const videoUrl = ref('http://202.118.21.59:5000/14');

    // onMounted(() => {
    // // 初始化视频流
    // // 这里可以添加自定义逻辑来处理视频流的连接，如使用MediaSource API
    // });

    // onUnmounted(() => {
    // // 清理工作
    // // 如果你使用了MediaSource或其他需要显式清理的API，请在这里进行
    // });
</script>

<style scoped>
.OnlineVideoShowContainer {
    width: 95%;
    height: 92%;

    border-radius: 13px;

    /* z-index: 3; */

    position: relative;
    left: 0px;
    bottom: 0;
    right: 0;
    top: 20px;
    margin: auto;

    .titlePart {
        width: 300px;
        position: absolute;
        background: url("../../../assets/images/filter-bg1.png");
        /* background-repeat: repeat-x; */
        background-size: 100% 100%;
        /* z-index: 3; */

        .titleName {
            position: relative;
            left: 20px;
            font-size: 18px;
            font-weight: bolder;
            color: aliceblue;
        }
    }

    .videoStyle {
        /*设置视频最小宽度和高度 这个设不设置没有什么影响 */
        /*min-width: 100%;
        min-height:100%;*/
        /**/
        position: relative;
        width: 100% !important;
        height: 86%;
        /* padding-bottom: 8%; */
        /* top: -0.5%; */

        /* margin: auto; */
        /* margin-top: 4%; */
        top: 25px;
        left: 0px;

        /*将视频放在元素的堆叠顺序最底层，以防覆盖其他东西*/
        z-index: -1;
        /*被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框。*/
        object-fit: fill;
    }

    ;
}
</style>

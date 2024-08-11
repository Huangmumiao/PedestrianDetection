<template>
    <div class="OfflineVideoShowContainer">
        <span class="titlePart">
            <a class="titleName">
                {{ title }}
            </a>
        </span>
        <text :class="{ 'timeText': video_flag, 'timeText_Ao': !video_flag }">{{ timeValue }}</text>
        <video class="videobox" :src="image_root" type="video/mp4" controls="controls" autoplay="autoplay" loop="loop" muted="muted" vertical-align="middle">
        </video>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';
import moment from 'moment'

const props = defineProps([
    "title",
    "image_root",
    "video_flag",
]);

const timeValue = ref('');

function updateTime() {
    setInterval(() => {
        timeValue.value = moment().format('YYYY-MM-DD HH:mm:ss');
    }, 1000);
}

onMounted(() => {
    updateTime();
});

</script>

<style lang="scss" scoped>
.OfflineVideoShowContainer {
    width: 95%;
    height: 92%;

    border-radius: 13px;

    z-index: 3;

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
        // background-repeat: repeat-x;
        background-size: 100% 100%;

        .titleName {
            position: relative;
            left: 20px;
            font-size: 18px;
            font-weight: bolder;
            color: aliceblue;
        }
    }

    .timeText {
        position: absolute;
        margin-top: 6%;
        margin-left: 3%;
        font-size: 15px;
        font-family: "Microsoft YaHei";
        font-weight: bold;
        color: aliceblue;
        z-index: 10;
    }

    .timeText_Ao {
        position: absolute;
        margin-top: 10%;
        margin-left: 3%;
        font-size: 15px;
        font-family: "Microsoft YaHei";
        font-weight: bold;
        color: aliceblue;
        z-index: 10;
    }

    .videobox {
        width: 100%;
        height: 86%;
        // color: yellow;

        // z-index: 10;
        position: relative;
        top: 25px;
        left: 0px;

        object-fit: fill;        
    }

    // .timePicker {
    //     width: 180px;
    //     height: 25px;
    //     position: absolute;
    //     left: v-bind(timePickerLeft);
    //     top: v-bind(timePickerTop);

    //     z-index: 99;
    // }
}

</style>

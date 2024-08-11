<template>
    <div class="CenterCube">
        <!-- <text class="Time1107">{{ VideoCSVData.time }}</text> -->

        <text class="CoalName1107">#1107煤堆 </text>
        <text class="HieghtName1107">高度：</text>
        <text class="HieghtValues1107">{{ h_1107 }}</text>
        <text class="FallName1107">落煤：</text>
        <!-- <text class="FallValues1107">{{ f_1107 }}</text> -->
        <text :class="{ 'FallValues1107_G': f_1107 == '是', 'FallValues1107': f_1107 == '否' }">{{ f_1107 }}</text>
        <text class="DepressionName1107">凹陷：</text>
        <!-- <text class="DepressionValues1107">{{ d_1107 }}</text> -->
        <text :class="{ 'DepressionValues1107_R': d_1107 == '是', 'DepressionValues1107': d_1107 == '否' }">{{ d_1107 }}</text>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps([
    // "time_value",
    "h_1107",
    "f_1107",
    "d_1107",
]);

</script>

<style lang="scss" scoped>
.CenterCube{
    // width: 100%;
    // height: 100%;
    z-index: 100;
    // position: relative;
    // object-fit: fill;
    margin-top: -15%;
    // margin-left: 13%;
    .Time1107{
        position: absolute;
        margin-top: -36%;
        margin-left: 3%;
        font-size: 15px;
        font-family : "Microsoft YaHei";
        font-weight: bold;
    }
    .CoalName1107{
        position: absolute;
        margin-top: 2%;
        margin-left: 32%;
        font-size: 18px;
        font-family : "Microsoft YaHei";
        font-weight: bold;
        color: #FFF;
    }
    .HieghtName1107{
        position: absolute;
        margin-top: -3%;
        margin-left: 50%;
        // margin-top: 5%;
        color: #FFF;
        text-align: center;
        font-size: 18px;
        font-family : "Microsoft YaHei";
        font-weight: bold;
        // position: absolute;
        // top: 15%;
        // left: 11%;
        // transform: translate(15%);
    }
    .HieghtValues1107{
        position: absolute;
        margin-top: -3%;
        margin-left: 60%;
        color: #FFF;
        text-align: center;
        font-size: 18px;
        font-family : "Microsoft YaHei";
        font-weight: bold;
        // width: 20%;
        // background-color: #00ff00;
        // position: absolute;
        // top: 15%;
        // left: 11%;
        // transform: translate(15%);
    }
    .FallName1107{
        position: absolute;
        margin-top: 2.2%;
        margin-left: 50%;
        // margin-top: 5%;
        color: #FFF;
        text-align: center;
        font-size: 18px;
        font-family : "Microsoft YaHei";
        font-weight: bold;
        // position: absolute;
        // top: 15%;
        // left: 11%;
        // transform: translate(15%);
    }
    .FallValues1107{
        position: absolute;
        margin-top: 2.2%;
        margin-left: 60%;
        color: #FFF;
        text-align: center;
        font-size: 18px;
        font-family : "Microsoft YaHei";
        font-weight: bold;
        // position: absolute;
        // top: 15%;
        // left: 11%;
        // transform: translate(15%);
    }
    .FallValues1107_G{
        position: absolute;
        margin-top: 2.2%;
        margin-left: 60%;
        color: #00ff00;
        text-align: center;
        font-size: 18px;
        font-family : "Microsoft YaHei";
        font-weight: bold;
        // position: absolute;
        // top: 15%;
        // left: 11%;
        // transform: translate(15%);
    }
    .DepressionName1107{
        position: absolute;
        margin-top: 7.2%;
        margin-left: 50%;
        // margin-top: 5%;
        color: #FFF;
        text-align: center;
        font-size: 18px;
        font-family : "Microsoft YaHei";
        font-weight: bold;
        // position: absolute;
        // top: 15%;
        // left: 11%;
        // transform: translate(15%);
    }
    .DepressionValues1107{
        position: absolute;
        margin-top: 7.2%;
        margin-left: 60%;
        color: #FFF;
        text-align: center;
        font-size: 18px;
        font-family : "Microsoft YaHei";
        font-weight: bold;
        // position: absolute;
        // top: 15%;
        // left: 11%;
        // transform: translate(15%);
    }
    .DepressionValues1107_R{
        position: absolute;
        margin-top: 7.2%;
        margin-left: 60%;
        color: rgb(255, 0, 0);
        text-align: center;
        font-size: 18px;
        font-family : "Microsoft YaHei";
        font-weight: bold;
        // position: absolute;
        // top: 15%;
        // left: 11%;
        // transform: translate(15%);
    }
}


</style>

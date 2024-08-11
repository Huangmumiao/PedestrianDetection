<template>
    <div class="CenterCube">
        <!-- <text class="Time1105">{{ VideoCSVData.time }}</text> -->
        <text class="CoalName1105">1105#煤堆 </text>        
        <text class="HieghtName1105">高度：</text>
        <text class="HieghtValues1105">{{ h_1105 }}</text>
        <text class="FallName1105">落煤：</text>
        <!-- <text class="FallValues1105">{{ f_1105 }}</text> -->
        <text :class="{ 'FallValues1105_G': f_1105 == '是', 'FallValues1105': f_1105 == '否' }">{{ f_1105 }}</text>
        <text class="DepressionName1105">凹陷：</text>
        <!-- <text class="DepressionValues1105">{{ d_1105 }}</text> -->
        <text :class="{ 'DepressionValues1105_R': d_1105 == '是', 'DepressionValues1105': d_1105 == '否' }">{{ d_1105 }}</text>

        <text class="CoalName1106">#1106煤堆 </text>
        <text class="HieghtName1106">高度：</text>
        <text class="HieghtValues1106">{{ h_1106 }}</text>
        <text class="FallName1106">落煤：</text>
        <!-- <text class="FallValues1106">{{ f_1106 }}</text> -->
        <text :class="{ 'FallValues1106_G': f_1106 == '是', 'FallValues1106': f_1106 == '否' }">{{ f_1106 }}</text>
        <text class="DepressionName1106">凹陷：</text>
        <!-- <text class="DepressionValues1106">{{ d_1106 }}</text> -->
        <text :class="{ 'DepressionValues1106_R': d_1106 == '是', 'DepressionValues1106': d_1106 == '否' }">{{ d_1106 }}</text>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps([
    "h_1105",
    "f_1105",
    "d_1105",
    "h_1106",
    "f_1106",
    "d_1106",
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
    .Time1105{
        position: absolute;
        margin-top: -36%;
        margin-left: 3%;
        font-size: 15px;
        font-family : "Microsoft YaHei";
        font-weight: bold;
    }
    .CoalName1105{
        position: absolute;
        margin-top: 2%;
        margin-left: 5%;
        font-size: 18px;
        font-family : "Microsoft YaHei";
        font-weight: bold;
        color: #FFF;
    }
    .HieghtName1105{
        position: absolute;
        margin-top: -3%;
        margin-left: 23%;
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
    .HieghtValues1105{
        position: absolute;
        margin-top: -3%;
        margin-left: 32%;
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
    .FallName1105{
        position: absolute;
        margin-top: 2.2%;
        margin-left: 23%;
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
    .FallValues1105{
        position: absolute;
        margin-top: 2.2%;
        margin-left: 32%;
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
    .FallValues1105_G{
        position: absolute;
        margin-top: 2.2%;
        margin-left: 32%;
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
    .DepressionName1105{
        position: absolute;
        margin-top: 7.2%;
        margin-left: 23%;
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
    .DepressionValues1105{
        position: absolute;
        margin-top: 7.2%;
        margin-left: 32%;
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
    .DepressionValues1105_R{
        position: absolute;
        margin-top: 7.2%;
        margin-left: 32%;
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

    .CoalName1106{
        position: absolute;
        margin-top: 2%;
        margin-left: 60%;
        font-size: 18px;
        font-family : "Microsoft YaHei";
        font-weight: bold;
        color:#FFF;
    }
    .HieghtName1106{
        position: absolute;
        margin-top: -3%;
        margin-left: 78%;
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
    .HieghtValues1106{
        position: absolute;
        margin-top: -3%;
        margin-left: 87%;
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
    .FallName1106{
        position: absolute;
        margin-top: 2.2%;
        margin-left: 78%;
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
    .FallValues1106{
        position: absolute;
        margin-top: 2.2%;
        margin-left: 87%;
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
    .FallValues1106_G{
        position: absolute;
        margin-top: 2.2%;
        margin-left: 87%;
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
    .DepressionName1106{
        position: absolute;
        margin-top: 7.2%;
        margin-left: 78%;
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
    .DepressionValues1106{
        position: absolute;
        margin-top: 7.2%;
        margin-left: 87%;
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
    .DepressionValues1106_R{
        position: absolute;
        margin-top: 7.2%;
        margin-left: 87%;
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

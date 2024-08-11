<template>
    <div class="CoalBox-Right">
        <!-- <span style="font: size 16px;;position:relative; left:5px; color:#E51C1C ;">系统决策</span> -->
        <!-- <span style="font: size 16px;position:relative;left:-8px;color:rgb(65, 231, 14) ;">优化决策</span> -->

        <text class="SystemTitle">系统决策</text>
        <div class="SystemTitleText1">优</div>
        <div class="SystemTitleText2">良</div>

        <text class="OptimalTitle">优化决策</text>
        <div class="OptimalTitleText1">优</div>
        <div class="OptimalTitleText2">良</div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.CoalBox-Right {
    margin-top: 2%;
    // margin-right: 2%;
    margin-left: -4%;
    float: left;
    position: relative;
    width: 100%;
    height: 100%;

    // background: yellowgreen;
    .SystemTitle {
        font-size: 18px;
        position: relative;
        font-family: "Microsoft YaHei";
        // margin-bottom: 22px;
        left:45px;
        top:67px;
        color:#E51C1C;
    }

    .SystemTitleText1 {
        position: relative;
        text-align: center;
        // margin-bottom: 20px;
        height: 40px;
        width: 60px;
        padding: 10px;
        border-radius: 5px;
        background-color: #938c8c;
        margin-left: 141px;
        top: 34px;
    }

    .SystemTitleText2 {
        position: relative;
        // margin-top: 0px;
        height: 40px;
        width: 60px;
        padding: 10px;
        border-radius: 5px;
        background-color: #409eff;
        text-align: center;
        margin-left: 241px;
        top: -5.5px;
    }

    .OptimalTitle {
        font-size: 18px;
        position: relative;
        font-family: "Microsoft YaHei";
        // margin-bottom: 22px;
        left: 45px;
        top: 67px;
        color:rgb(65, 231, 14);
    }

    .OptimalTitleText1 {
        position: relative;
        height: 40px;
        width: 60px;
        padding: 10px;
        border-radius: 5px;
        background-color: #409eff;
        text-align: center;
        margin-left: 141px;
        top: 34px;
    }

    .OptimalTitleText2 {
        position: relative;
        height: 40px;
        width: 60px;
        padding: 10px;
        border-radius: 5px;
        background-color: #938c8c;
        text-align: center;
        margin-left: 241px;
        top: -5.5px;
    }
}
</style>

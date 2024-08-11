<template>
    <div class="nameInputContainer">
        <span class="partName"> {{ props.title }} </span>
        <text :class="{ 'StartTitleText': props.value, 'HuiTitleText': !props.value }">启动中</text>
        <text :class="{ 'HuiTitleText': props.value, 'EndTitleText': !props.value }">已停止</text>
        <!-- <div class="OptimalTitleText1">启动中</div>
        <div class="OptimalTitleText2">已停止</div> -->
        <!-- <button @click="StartAlertTips" class="start-button"> 启动 </button> -->
        <!-- <button @click="EndAlertTips" class="end-button"> 停止 </button> -->
    </div>
</template>


<script setup>
const props = defineProps({
    title: String,
    value: Number,
    // value: Number,
});
</script>


<style scoped>
.nameInputContainer {
    width: 95%;
    height: 100%;

    display: grid;
    grid-template-columns: 60% 30% 10%;

    align-items: center;
    justify-items: center;
    position: relative;
    left: -10px;

    .partName {
        position: relative;
        left: 0px;
        font-size: 16px;
        font-weight: bolder;
        color: aliceblue;
    }

    .StartTitleText {
        position: relative;
        height: 35px;
        width: 70px;
        padding: 10px;
        border-radius: 5px;
        background-color: rgb(47,212,62);
        text-align: center;
        color: #fff;
        /* margin-left: 141px; */
        /* top: 34px; */
    }

    .HuiTitleText {
        position: relative;
        height: 35px;
        width: 70px;
        padding: 10px;
        border-radius: 5px;
        background-color: #777575;
        text-align: center;
        color: #a1a0a0;
        /* margin-left: 241px; */
        /* top: -5.5px; */
    }

    .EndTitleText {
        position: relative;
        height: 35px;
        width: 70px;
        padding: 10px;
        border-radius: 5px;
        background-color: #E51C1C;
        text-align: center;
        color: #fff;
        /* margin-left: 241px; */
        /* top: -5.5px; */
    }
}
</style>

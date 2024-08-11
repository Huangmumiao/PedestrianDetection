<template>
    <div class="nameInputContainer">
        <span class="partName"> {{ props.title }} </span>

        <!-- <div style="font: size 16px;position:relative; top:0px;left:-13px;"> -->
            <!-- <img :src="props.value === 1 ? '../../../assets/images/start.png' : '../../../assets/images/end.png'" alt="灯泡"> -->
            <!-- <img :src="'../../../assets/images/plus.png'" alt="灯泡"> -->
        <!-- </div> -->
        
        <div style="font: size 16px;position:relative; top:0px;left:0px;">
            <!-- <el-button @click="showModal" type="primary" v-if="isModalVisible == false">
                启动<el-icon class="el-icon--right">
                </el-icon>
            </el-button> -->
            <button @click="showModal" class="start-button">启动</button>
            <teleport to="body">
                <div v-if="isModalVisible" class="modal" @click="closeModal">
                    <!-- 弹框内容 -->
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <p>Hello, Vue!</p>
                    </div>
                </div>
            </teleport>
        </div>

        <div style="font: size 16px;position:relative; top:0px;left:0px;">
            <!-- <el-button @click="showModal" type="primary" v-if="isModalVisible == false">
                启动<el-icon class="el-icon--right">
                </el-icon>
            </el-button> -->
            <button @click="showModal" class="end-button">停止</button>
            <!-- <teleport to="body">
                <div v-if="isModalVisible" class="modal" @click="closeModal">
                    
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <p>Hello, Vue!</p>
                    </div>
                </div>
            </teleport> -->
        </div>
    </div>
</template>

<script setup>
import { stringType } from "ant-design-vue/es/_util/type";
import { ref } from "vue";

const props = defineProps({
    title: String,
    value: Number,
});
const isModalVisible = ref(false);
const showModal = () => {
    isModalVisible.value = true;
};

// 点击弹框外关闭弹框
const closeModal = () => {
    isModalVisible.value = false;
};

</script>

<style lang="scss" scoped>
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
        left: 12电流legend设置0px;
        font-size: 16px;
        font-weight: bolder;
        color: aliceblue;
    }

    .start-button {
        background-color: #05f905;
        border-color: #05f905;
        font-size: 20px;
        font-weight: bolder;
        color: aliceblue;
    }

    .end-button {
        background-color: #f9052e;
        border-color: #f9052e;
        font-size: 20px;
        font-weight: bolder;
        color: aliceblue;
    }

    .modal {
        display: flex;
        /* 使用 flex 布局 */
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        align-items: center;
        /* 垂直居中 */
        justify-content: center;
        /* 水平居中 */
        background-color: rgba(0, 0, 0, 0.5);
        /* 半透明背景 */
    }

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

}
</style>
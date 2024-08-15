<template>
    <div>
        <img src="../../assets/icon/videocamera_add.png" class="custom-upload-icon" @click="startCamera" alt="Upload Icon" />
    </div>
</template>

<script setup>
import { ref, onBeforeUnmount, defineEmits } from 'vue';

const emit = defineEmits(['cameraStarted']);
let stream = null;

// 启动摄像头
const startCamera = async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        emit('cameraStarted', stream);
    } catch (error) {
        console.error('Error accessing camera:', error);
    }
};

// 停止摄像头
const stopCamera = () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
};

// 清理摄像头资源
onBeforeUnmount(() => {
    stopCamera();
});
</script>

<style scoped>
.custom-upload-icon {
    cursor: pointer; /* 鼠标指针 */
    width: 24px; /* 图标宽度 */
    height: 24px; /* 图标高度 */
    margin: 4px 2px; /* 外边距 */
}

.custom-upload-icon:hover {
    opacity: 0.8; /* 悬停时的透明度 */
}
</style>
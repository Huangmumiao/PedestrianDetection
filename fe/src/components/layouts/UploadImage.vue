<template>
    <div>
        <input type="file" multiple @change="handleFileUpload" style="display: none;" ref="fileInput" />
        <img src="../../assets/icon/image.png" class="custom-upload-icon" @click="triggerFileInput" alt="Upload Icon" />
    </div>
</template>

<script setup>
import { ref, reactive, defineEmits } from 'vue';

const emits = defineEmits(['file-uploaded']);

const fileInput = ref(null);
console.log(fileInput);

const triggerFileInput = () => {
    fileInput.value.click();
};

// 处理文件上传
const handleFileUpload = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);
    emits('file-uploaded', fileArray);
};
</script>

<style>
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
<template>
  <div class="MainPageContainer">
    <div class="leftPart">
      <dv-border-box12>

        <div class="switch-container" style="border-bottom: 5px solid #2E6099; padding-bottom: 10px; width: 90%;">
          <img src="../../assets/icon/setting.png" alt="Icon" style="margin-right: 10px; width: 30px; height: 30px;" />
          <!-- 添加图标 -->
          <span class="white-text">Settings</span>
        </div>

        <!-- 导入文件的按钮 -->
        <div class="upload-buttons-container">
          <span class="white-text">input</span>
          <UploadImage class="upload-icon" @file-uploaded="handleFileUpload" />
          <UploadVideo class="upload-icon" @file-uploaded="handleFileUpload" />
          <AddCamera class="upload-icon" @cameraStarted="handleCameraStarted" />
        </div>

        <!-- 滚动条 -->
        <div>
          <span class="white-text1">IoU</span>
          <div class="slider-demo-block">
            <el-slider v-model="value_iou" show-input :min="0" :max="1" :step="0.01" class="custom-slider" />
          </div>
        </div>


        <div>
          <span class="white-text1">conf</span>
          <div class="slider-demo-block">
            <el-slider v-model="value_conf" show-input :min="0" :max="1" :step="0.01" class="custom-slider" />
          </div>
        </div>


        <div>
          <div class="flex-container">
            <span class="white-text1">latency</span>
            <div class="switch-container" style="margin-left: 20%;">
              <myswitch />
              <span class="white-text">enable</span>
            </div>
          </div>
          <div class="slider-demo-block">
            <el-slider v-model="value_latency" show-input :min="0" :max="1" :step="0.01" class="custom-slider" />
          </div>
        </div>


        <!-- 开关 -->
        <div class="switch-container">
          <myswitch />
          <span class="white-text">save automatically</span>
        </div>
      </dv-border-box12>


      <dv-border-box12>

      </dv-border-box12>

      <!-- <videOnlineShow title="1105和1106煤堆高度及落煤监控"
        videoUrl="http://202.118.21.57:2000/video_image_twin_video_edge" /> -->
    </div>

    <div class="rightPart">
      <dv-border-box13 class="border-box">
        <div v-if="currentFile" class="file-preview">
          <video v-if="currentFile.type.startsWith('video/')" :src="currentFile.url" controls class="media"></video>
          <img v-else-if="currentFile.type.startsWith('image/')" :src="currentFile.url" class="media" />
        </div>
        <video v-else-if="cameraStream" ref="cameraVideo" class="media_camera" autoplay></video>
      </dv-border-box13>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import videOnlineShow from "../public/video/onlineShow.vue";
import myswitch from "./myswitch.vue";
import UploadImage from "./UploadImage.vue";
import UploadVideo from "./UploadVideo.vue";
import AddCamera from "./AddCamera.vue";


const value_iou = ref(0.5)
const value_conf = ref(0.6)
const value_latency = ref(0.7)

const uploadedFiles = ref([]);
const cameraStream = ref(null);
const cameraVideo = ref(null);

const currentFile = computed(() => {
  if (uploadedFiles.value.length > 0) {
    return uploadedFiles.value[0];
  }
  return null;
});

const handleFileUpload = (files) => {
  uploadedFiles.value = []; // 清空数组
  files.forEach(file => {
    const url = URL.createObjectURL(file);
    uploadedFiles.value.push({ name: file.name, type: file.type, url });
  });
};

const handleCameraStarted = (stream) => {
  cameraStream.value = stream;
  if (cameraVideo.value) {
    cameraVideo.value.srcObject = stream;
  }
};

const stopCamera = () => {
  if (cameraStream.value) {
    cameraStream.value.getTracks().forEach(track => track.stop());
    cameraStream.value = null;
  }
};

watch(currentFile, (newFile, oldFile) => {
  if (newFile && cameraStream.value) {
    stopCamera();
  }
});

watch(cameraStream, (newStream, oldStream) => {
  if (newStream && currentFile.value) {
    uploadedFiles.value = [];
  }
});
</script>

<style lang="scss" scoped>
.MainPageContainer {
  width: 98%;
  height: 98%;
  position: relative;
  left: 1%;
  top: 1%;
  display: grid;
  grid-template-columns: 25% 75%;
  column-gap: 0.2%;

  .leftPart {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 50% 50%;
    row-gap: 0.2%;
  }

  .rightPart {
    width: 100%;
    height: 100%;
  }
}

.switch-container {
  align-items: center;
  display: flex;
  margin: 20px;
  /* 设置上下边距 */
  margin-left: 30px;
  /* 设置左边距 */

  .white-text {
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-size: 25px;
    /* 调整字体大小 */
    margin-left: 10px;
    /* 增加空格 */
  }
}

.upload-buttons-container {
  display: flex;
  align-items: center;
  /* 确保字体和图标在同一行上 */
  gap: 50px;
  margin: 20px;
  /* 设置上下边距 */

  .white-text {
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-size: 25px;
    /* 调整字体大小 */
    margin-left: 10px;
    /* 增加空格 */
  }

  .upload-icon {
    font-size: 40px;
    /* 调整图标大小 */
  }
}

.custom-input {
  color: gray;
  border: 1px solid gray;
  width: 70px;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 10px;
  /* 设置圆角 */
}

.white-text1 {
  color: white;
  font-family: "Times New Roman", Times, serif;
  font-size: 25px;
  /* 调整字体大小 */
  margin-left: 30px;
  /* 增加空格 */
  width: 50px;
}

.slider-demo-block {
  max-width: 600px;
  display: flex;
  align-items: center;
  margin: 10px;
  /* 设置上下边距 */

  .white-text {
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-size: 25px;
    /* 调整字体大小 */
    margin-left: 10px;
    /* 增加空格 */
    width: 50px;
  }

  .custom-slider {
    width: 400px;
    /* 设置宽度 */
    height: 20px;
    /* 设置高度 */
    margin-left: 10px;
    /* 调整与文本的间距 */
  }
}

.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}

.flex-container {
  display: flex;
  align-items: center;
  /* 垂直居中对齐 */
}

.border-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.file-preview {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden; /* 隐藏超出容器的内容 */
    position: relative; /* 使子元素可以绝对定位 */
}

.media {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain; /* 保持比例缩放，内容完整显示在容器中 */
    position: absolute; /* 绝对定位以确保内容居中并完整显示 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 使内容居中 */
}

.media_camera {
    width: 80%; /* 设置宽度为容器的80% */
    height: 80%; /* 设置高度为容器的80% */
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>
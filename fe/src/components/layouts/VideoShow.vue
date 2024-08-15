<template>
    <div class="card p-3 mt-1 border-round-xl shadow-6 bg-gray-800">
        <div class="font-semibold text-primary text-lg text-left px-2">{{ title }}</div>

        <div class="VideoShowContainer">
            <text class=timeBox v-if="show_time">
                {{ show_history_time ? timeValue_history : timeValue }}
            </text>

            <img class="videoBox" :src="image_root" alt="The program is not running"
                :style="{ width: videoWidth, height: videoHeight }"
                onerror="this.src='/localVideo/fmf/cover1.png';this.onerror=null;" />
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import moment from 'moment'

const props = defineProps({
    title: {
        type: String,
        default: '控制输出'
    },
    image_root: {
        type: String,
        default: 'line'
    },
    show_time: {
        type: Boolean,
        default: true
    },
    show_history_time: {
        type: Boolean,
        default: true
    },
    videoHeight: {
        type: [String, Number],
        default: '93%'
    },
    videoWidth: {
        type: [String, Number],
        default: '100%'
    }
})

const timeValue = ref('');
const timeValue_history = ref('');

function updateTime() {
    setInterval(() => {
        // 延时1天
        timeValue.value = moment().subtract(86400, 'seconds').format('YYYY-MM-DD HH:mm:ss');
        timeValue_history.value = moment().subtract(86400 + 10, 'seconds').format('YYYY-MM-DD HH:mm:ss');
        // // 实时
        // timeValue.value = moment().format('YYYY-MM-DD HH:mm:ss');
        // timeValue_history.value = moment().subtract(10, 'seconds').format('YYYY-MM-DD HH:mm:ss');
    }, 1000);
}

onMounted(() => {
    updateTime();
});
</script>

<style scoped>
.VideoShowContainer {
    width: 100%;
    height: 100%;

    border-radius: 13px;

    z-index: 3;

    position: relative;
    left: 0px;
    bottom: 0;
    right: 0;
    top: 16px;
    margin: auto;

    .videoBox {
        position: relative;
        top: -10px;
        /* left: 0px; */

        object-fit: fill;
    }

    .timeBox {
        position: absolute;
        /* margin-top: -2%; */
        margin-left: 3%;
        font-size: 18px;
        font-family: "Microsoft YaHei";
        font-weight: bold;
        color: aliceblue;
        z-index: 10;
    }
}
</style>
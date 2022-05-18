<template>
  <div>
    <v-row>
      <v-col
        style="
          position: relative;
          text-align: center;
          color: white;
          padding: 0;
          height: 300px;
        "
      >
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          autoplay
          muted
          playsinline
          style="
            height: 300px;
            width: 100%;
            object-fit: cover;
            object-position: center;
          "
        ></video>
        <div
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            top: 0;
            left: 0;
          "
        ></div>
        <div
          style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          "
        >
          <h2>FlowChat</h2>
          <span>나만의 채팅봇을 손쉽게 만들 수 있습니다.</span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServiceTitle",
});
</script>

<style scoped></style>

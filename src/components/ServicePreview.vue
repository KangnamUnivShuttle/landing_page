<template>
  <div style="margin-top: 15px">
    <v-row>
      <v-col style="height: 100px"></v-col>
    </v-row>
    <v-row>
      <v-col style="text-align: center; margin-top: 15px">
        <h2>서비스 주요 기능</h2>
      </v-col>
    </v-row>
    <photo-and-text
      v-for="preview in previewList"
      :key="preview"
      :url="preview.url"
      :toggle="preview.toggle"
      :msg="preview.msg"
    ></photo-and-text>
    <v-row>
      <v-col style="height: 100px"></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PhotoAndText from "./PhotoAndText.vue";

export default defineComponent({
  name: "ServicePreview",
  components: {
    PhotoAndText,
  },

  data() {
    return {
      previewList: [
        {
          url: `${require("../assets/flow.gif")}`,
          msg: "플로우 차트를 만들듯이 대화를 만들 수 있습니다.",
          toggle: true,
        },
        {
          url: `${require("../assets/customize.gif")}`,
          msg: "비즈니스 성격에 맞는 커스터마이징 플러그인을 Drag-Drop으로 적용할 수 있습니다.",
          toggle: false,
        },
        {
          url: `${require("../assets/test.gif")}`,
          msg: "대화 생성 후 테스트를 해보실 수 있습니다.",
          toggle: true,
        },
      ],
    };
  },
});
</script>

<style scoped></style>

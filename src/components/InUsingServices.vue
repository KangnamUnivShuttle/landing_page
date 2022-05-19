<template>
  <div>
    <v-row>
      <v-col style="height: 100px"></v-col>
    </v-row>
    <v-row>
      <v-col style="text-align: center; margin-top: 15px">
        <h2>서비스 사용 사례</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="text-align: center; margin: 15px 0">
        <div style="display: inline-block; margin: 5px">
          <img
            style="width: 50px"
            src="https://img1.daumcdn.net/thumb/C100x100.mplusfriend/?fname=http%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fbfkq3p%2FbtqtY1YfeWN%2FlrvS9Fg2XFnUIYCA0aOci1%2Fimg_s.jpg"
          />
          강남대학교 달구지봇
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="height: 100px"></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InUsingServices",
});
</script>

<style scoped></style>

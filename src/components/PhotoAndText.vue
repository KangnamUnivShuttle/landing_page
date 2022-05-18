<template>
  <div>
    <v-row v-if="toggle" style="margin-top: 15px">
      <v-col style="text-align: center" cols="12" md="6">
        <img :src="url" />
      </v-col>
      <v-col cols="12" md="6" class="text-col">
        <div
          style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: 15px 0;
          "
        >
          {{ msg }}
        </div>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" md="6" class="text-col">
        <div
          style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: 15px 0;
          "
        >
          {{ msg }}
        </div>
      </v-col>
      <v-col style="text-align: center" cols="12" md="6">
        <img :src="url" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PhotoAndText",
  props: {
    toggle: Boolean,
    msg: String,
    url: String,
  },
});
</script>

<style scoped>
img {
  height: 250px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 15px;
}

.text-col {
  position: relative;
  min-height: 200px;
}
</style>

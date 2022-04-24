<template>
  <div>
    <button @click="onBtnAddClick">add</button>
    <input type="text" name="" id="" v-model="input" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class AddGoalComponent extends Vue {
  input = "";

  onBtnAddClick() {
    console.log("asdf");
  }
}
</script>

<style></style>

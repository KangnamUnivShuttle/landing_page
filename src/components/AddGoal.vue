<template>
  <div>
    <div>
      <button @click="addGoal">add</button>
      <input type="text" name="" id="" v-model="input" />
    </div>
    <div>
      <span></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class AddGoalComponent extends Vue {
  input = "";
  invalidInput = false;

  addGoal() {
    this.invalidInput = false;
    if (this.input === "") {
      this.invalidInput = true;
      return;
    } else {
      this.$emit("add-goal", this.input);
      this.input = "";
    }
  }
}
</script>

<style></style>

<template>
  <div>
    <div>
      <button @click="addGoal">add</button>
      <input type="text" name="" id="" v-model="input" />
    </div>
    <div v-if="invalidInput">
      <span>Invalid input</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Watch } from "vue-property-decorator";

@Options({
  components: {},
})
export default class AddGoalComponent extends Vue {
  input = "";
  invalidInput = false;

  @Watch("invalidInput")
  onInvalidInputDetected(val: string) {
    if (val) {
      console.warn("Invalid input detected");
    }
  }

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

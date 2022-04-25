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

<script>
import { ref, watch } from "vue";

export default {
  emits: ["add-goal"],
  setup(props, { emit }) {
    const input = ref("");
    const invalidInput = ref(false);

    function addGoal() {
      invalidInput.value = false;
      if (input.value === "") {
        invalidInput.value = true;
        return;
      }
      emit("add-goal", input.value);
      input.value = "";
    }

    watch(invalidInput, (val) => {
      if (val) {
        console.warn("Invalid input detected");
      }
    });

    return {
      input,
      invalidInput,
      addGoal,
    };
  },
};
</script>

<!--
<script lang="ts">
import { Options, Vue, setup } from "vue-class-component";
@Options({
  components: {},
})
export default class AddGoal extends Vue {}
</script>-->
<!--
<script setup lang="ts">
// https://stackoverflow.com/q/71599533/7270469
import {
  ref,
  computed,
  watchEffect,
  watch,
  SetupContext,
  defineEmits,
} from "vue";
// import { Watch } from "vue-property-decorator";

const input = ref("");
const invalidInput = ref(false);

const emits = defineEmits(["add-goal"]);

function addGoal() {
  invalidInput.value = false;
  if (input.value === "") {
    invalidInput.value = true;
    return;
  }
  //   context.emit("add-goal", input.value);
  emits("add-goal", input.value);
  input.value = "";
}

watch(invalidInput, (val) => {
  if (val) {
    console.warn("Invalid input detected");
  }
});

//   input = "";
//   invalidInput = false;

//   @Watch("invalidInput")
//   onInvalidInputDetected(val: string) {
//     if (val) {
//       console.warn("Invalid input detected");
//     }
//   }

//   addGoal() {
//     this.invalidInput = false;
//     if (this.input === "") {
//       this.invalidInput = true;
//       return;
//     } else {
//       this.$emit("add-goal", this.input);
//       this.input = "";
//     }
//   }
</script>
-->
<style></style>

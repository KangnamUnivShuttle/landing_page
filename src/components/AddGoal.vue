<template>
  <div>
    <div>
      <button @click="context.addGoal">add</button>
      <input type="text" name="" id="" v-model="context.input" />
    </div>
    <div v-if="context.invalidInput">
      <span>Invalid input</span>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, watchEffect, watch } from "vue";
import { Options, Vue, setup } from "vue-class-component";
// import { Watch } from "vue-property-decorator";

@Options({
  components: {},
})
export default class AddGoal extends Vue {
  // https://vuejs.org/api/composition-api-setup.html#setup-context
  context = setup(() => {
    const input = ref("");
    const invalidInput = ref(false);

    function addGoal() {
      invalidInput.value = false;
      if (input.value === "") {
        invalidInput.value = true;
        return;
      }
      //   context.emit("add-goal", input.value);
      input.value = "";
    }

    watch(invalidInput, (val) => {
      if (val) {
        console.warn("Invalid input detected");
      }
    });

    return {
      input: input.value,
      invalidInput: invalidInput.value,
      addGoal,
    };
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
}
</script>

<style></style>

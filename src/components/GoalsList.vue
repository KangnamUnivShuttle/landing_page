<template>
  <div>
    <ul>
      <li v-for="goal in goals" v-bind:key="goal.id">{{ goal.text }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from "vue-class-component";
import { GoalModel } from "../interfaces/Goal.model";
// import { Prop } from "vue-property-decorator";

class Props {
  goals: GoalModel[] = prop({
    required: true,
  });
}
// https://stackoverflow.com/a/69135200/7270469
@Options({
  components: {},
})
export default class GoalsList extends Vue.with(Props) {}
</script>

<style></style>

<template>
  <div>
    <goals-list :goals="filteredGoals"></goals-list>
    <add-goal @add-goal="addText"></add-goal>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AddGoal from "./AddGoal.vue";
import GoalsList from "./GoalsList.vue";
import { GoalModel } from "../interfaces/Goal.model";

@Options({
  components: {
    AddGoal,
    GoalsList,
  },
})
export default class CourseGoals extends Vue {
  goals: GoalModel[] = [{ id: "asdf", text: " asdfsaf" }];

  get filteredGoals(): GoalModel[] {
    return this.goals.filter(
      (goal) => !goal.text.includes("angular") && !goal.text.includes("react")
    );
  }

  addText(text: string) {
    const newGoal = {
      id: new Date().toISOString(),
      text,
    };
    this.goals.push(newGoal);
  }

  mounted() {
    console.log("test", this.filteredGoals);
  }
}
</script>

<style></style>

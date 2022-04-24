<template>
  <div>
    <goals-list :goals="context.filteredGoals"></goals-list>
    <add-goal @add-goal="context.addText"></add-goal>
  </div>
</template>

<script lang="ts">
// https://stackoverflow.com/a/65027891/7270469
import { Options, Vue, setup } from "vue-class-component";
import { ref, computed } from "vue";
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
  context = setup(() => {
    const goals = ref([] as GoalModel[]);

    const filteredGoals = computed(function () {
      return goals.value.filter(
        (goal) => !goal.text.includes("angular") && !goal.text.includes("react")
      );
    });

    function addGoal(text: string) {
      console.log("test", text);
      const newGoal = {
        id: new Date().toISOString(),
        text,
      };
      goals.value.push(newGoal);
    }

    return {
      filteredGoals,
      addText: addGoal,
    };
  });

  mounted() {
    console.log("setup", this.context.filteredGoals);
  }
  //   goals: GoalModel[] = [{ id: "asdf", text: " asdfsaf" }];

  //   get filteredGoals(): GoalModel[] {
  //     return this.goals.filter(
  //       (goal) => !goal.text.includes("angular") && !goal.text.includes("react")
  //     );
  //   }

  //   addText(text: string) {
  //     const newGoal = {
  //       id: new Date().toISOString(),
  //       text,
  //     };
  //     this.goals.push(newGoal);
  //   }

  //   mounted() {
  //     console.log("test", this.filteredGoals);
  //   }
}
</script>

<style></style>

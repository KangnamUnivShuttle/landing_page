<template>
  <div class="about">
    <h1>This is an about page</h1>
    <course-goals></course-goals>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CourseGoals from "../components/CourseGoals.vue";

@Options({
  components: {
    CourseGoals,
  },
})
export default class AboutView extends Vue {}
</script>

<style></style>

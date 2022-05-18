<template>
  <v-container style="padding: 0" fluid="true">
    <service-title></service-title>
  </v-container>
  <v-container>
    <service-preview></service-preview>
    <in-using-services></in-using-services>
    <contact-us></contact-us>
  </v-container>
</template>

<script lang="ts">
import ServiceTitle from "@/components/ServiceTitle.vue";
import ServicePreview from "@/components/ServicePreview.vue";
import InUsingServices from "@/components/InUsingServices.vue";
import ContactUs from "@/components/ContactUs.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { ServiceTitle, ServicePreview, InUsingServices, ContactUs },
  name: "DemoView",
});
</script>

<style scoped></style>

<template>
  <div class="max-w-7xl mx-auto px-4">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: "MainLayout",
  components: { AppHeader },
};
</script>

<style></style>

<template>
  <div class="max-w-md w-full mt-8 space-y-6">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
      What to do?
    </h2>
    <div v-for="post in posts" :key="post.id">
      <app-post-item :post="post" />
    </div>
  </div>
</template>

<script>
import AppPostItem from "@/components/AppPostItem";

export default {
  components: {
    AppPostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>

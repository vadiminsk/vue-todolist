<template>
  <div class="max-w-md w-full mt-2 space-y-6">
    <div v-if="posts.length > 0">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        What to do?
      </h2>
      <div v-for="post in posts" :key="post.id">
        <app-post-item :post="post" @remove="remove(post)" />
      </div>
    </div>
    <div v-else>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        List is empty
      </h2>
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
  methods: {
    remove(post) {
      this.$emit("remove", post);
    },
  },
};
</script>

<style></style>

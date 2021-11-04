<template>
  <div class="px-2 py-5 flex">
    <div class="flex flex-1 items-center">
      <div class="text-sm text-gray-900 font-bold mr-5">
        {{ post.title }}
      </div>
      <div class="mt-1 text-sm text-gray-500 sm:mt-0">
        {{ post.description }}
      </div>
    </div>
    <app-button @click="remove">Remove</app-button>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      reguired: true,
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

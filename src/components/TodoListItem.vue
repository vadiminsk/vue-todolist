<template>
  <div class="border-t border-gray-200">
    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <div class="text-sm font-medium text-gray-900">{{ todo.title }}</div>
      <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {{ todo.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>

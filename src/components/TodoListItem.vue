<template>
  <div class="flex justify-between items-center px-4 border-t border-gray-200">
    <div class="flex flex-col bg-gray-50 py-5 px-6">
      <div class="text-lg font-medium text-gray-900">{{ todo.title }}</div>
      <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {{ todo.description }}
      </div>
    </div>
    <div>
      <button
        type="submit"
        class="self-end py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Delete item
      </button>
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

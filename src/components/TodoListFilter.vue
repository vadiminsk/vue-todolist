<template>
  <div>
    <button
      type="button"
      class="inline-flex items-center px-4 py-2 mr-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-red-900"
    >
      All
    </button>

    <button
      type="button"
      class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-red-900"
    >
      Completed
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoListFilter",
};
</script>

<style></style>

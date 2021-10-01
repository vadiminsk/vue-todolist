<template>
  <div class="flex justify-between">
    <h2
      class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mb-5"
    >
      {{ greetingText }}
    </h2>
    <TodoListFilter />
  </div>
</template>

<script>
import TodoListFilter from "./TodoListFilter.vue";

export default {
  name: "AppBlockTitle",
  components: {
    TodoListFilter,
  },
  props: { greetingText: String },
};
</script>

<style></style>

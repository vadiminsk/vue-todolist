<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Todo List
      </h3>
    </div>
    <div v-for="todo in todos" :key="todo.id">
      <todo-list-item :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem.vue";
export default {
  components: { TodoListItem },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>

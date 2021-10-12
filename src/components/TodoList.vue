<template>
  <div
    v-if="todos.length > 0"
    class="bg-white shadow overflow-hidden sm:rounded-lg"
  >
    <div v-for="todo in todos" :key="todo.id">
      <todo-list-item :todo="todo" @remove="removeTodo" />
    </div>
  </div>
  <div
    v-else
    class="bg-white shadow overflow-hidden sm:rounded-lg px-4 py-5 text-lg leading-6 font-medium text-gray-900"
  >
    Todo list is empty
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

  methods: {
    removeTodo(todo) {
      this.$emit("remove", todo);
    },
  },
};
</script>

<style></style>

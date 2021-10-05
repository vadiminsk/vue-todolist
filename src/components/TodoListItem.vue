<template>
  <div
    v-for="todo in todos"
    :key="todo.id"
    class="flex items-center border border-gray-200 rounded-l mb-3"
    :class="{ done: todo.isDone }"
  >
    <div class="p-2">
      <h4 class="text-xl">{{ todo.title }}</h4>
    </div>
    <div class="flex items-center ml-auto pr-3">
      <input
        id="input-done"
        name="input-done"
        type="checkbox"
        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      <label for="input-done" class="ml-2 block text-sm text-gray-900 ">
        Done
      </label>
    </div>
    <div class="px-2">
      <button
        @click="deleteItemMethod(todo)"
        class="inline-flex items-center px-3 py-1 ml-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoListItem",

  props: {
    todos: Array,
  },

  data() {
    return {
      todoItem: "",
    };
  },

  methods: {
    ...mapActions(["deleteItem"]),
    deleteItemMethod() {
      this.deleteItem();
    },
  },
};
</script>

<style scoped>
.done {
  background: #c1f48f;
}

.done h4 {
  text-decoration: line-through;
}
</style>

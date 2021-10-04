<template>
  <div
    v-for="(todo, index) in todos"
    :key="todo.id"
    class="flex items-center border border-gray-200 rounded-l mb-3"
  >
    <div class="p-2">
      <h4 class="text-xl">{{ todo.title }}</h4>
      <!-- <p class="text-base text-gray-500 font-normal">{{ item.description }}</p> -->
    </div>
    <div class="flex items-center ml-auto pr-3">
      <input
        id="input-done"
        name="input-done"
        type="checkbox"
        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      <label for="input-done" class="ml-2 block text-sm text-gray-900">
        Done
      </label>
    </div>
    <div class="px-2">
      <button @click="deleteItem(index)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",

  props: {
    todos: Array,
  },
};
</script>

<style></style>

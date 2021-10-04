<template>
  <form class="flex my-4" @submit.prevent>
    <div class="flex-1 mr-3">
      <label for="todo_input">
        <input
          type="text"
          name="todo_input"
          id="todo_input"
          v-model="todoItem"
          class="p-3 h-12 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </label>
    </div>
    <button
      @click="addNewItemMethod()"
      class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Add new
    </button>
    <transition name="fade">
      <button
        @click="resetItem"
        v-show="showResetButton"
        class="inline-flex items-center px-4 py-2 ml-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Reset
      </button>
    </transition>
  </form>
  <div>
    <TodoListItem :todos="todos" />
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
import { mapActions, mapGetters } from "vuex";
import uuid from "uuid/v4";

export default {
  name: "TodoListButton",

  components: {
    TodoListItem,
  },

  data() {
    return {
      todoItem: "",
    };
  },

  methods: {
    ...mapActions(["addNewItem"]),

    addNewItemMethod() {
      const todoItem = {
        title: this.todoItem,
        isDone: false,
        id: uuid(),
      };

      this.addNewItem({ todoItem });
      this.activity = "";
    },

    resetItem() {
      this.$store.commit("resetItem");
    },
  },

  computed: {
    ...mapGetters({
      todos: "getTodos",
    }),

    showResetButton() {
      return this.todoItem.length > 0;
    },
  },
};
</script>

<style></style>

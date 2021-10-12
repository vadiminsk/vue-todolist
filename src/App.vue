<template>
  <div>
    <div class="flex items-center justify-between px-4 py-5 sm:px-6">
      <h2 class="text-lg leading-6 font-medium text-gray-900">
        Todo List
      </h2>
      <app-button @click="showDialog">
        Create todo item
      </app-button>
    </div>
    <app-dialog v-model:show="dialogVisible">
      <todo-list-form @create="createTodo" />
    </app-dialog>
    <todo-list :todos="todos" @remove="removeTodo" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoListForm from "@/components/TodoListForm";

export default {
  name: "App",
  components: { TodoList, TodoListForm },

  data() {
    return {
      todos: [{ id: 1, title: "VueJS", description: "Learn VueJS" }],
      dialogVisible: false,
    };
  },

  methods: {
    createTodo(todo) {
      this.todos.push(todo);
      this.dialogVisible = false;
    },

    removeTodo(todo) {
      this.todos = this.todos.filter((item) => item.id !== todo.id);
    },

    showDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

TodoList

<template>
  <div>
    <todo-list-form @create="createTodo" />
    <todo-list :todos="todos" />
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
    };
  },

  methods: {
    createTodo(todo) {
      this.todos.push(todo);
    },
  },
};
</script>

TodoList

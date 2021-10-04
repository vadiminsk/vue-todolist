<template>
  <div>
    <AppBlockTitle greeting-text="Todo list" />
    <TodoListItem />
    <TodoListButton />
  </div>
</template>

<script>
import AppBlockTitle from "./AppBlockTitle.vue";
import TodoListButton from "./TodoListInput.vue";
import TodoListItem from "./TodoListItem.vue";

export default {
  name: "TodoList",
  components: {
    AppBlockTitle,
    TodoListButton,
    TodoListItem,
  },
};
</script>

<style></style>

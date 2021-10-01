<template>
  <div>
    <AppBlockTitle greeting-text="Todo list" />
    <TodoListInput />
    <TodoListItem />
  </div>
</template>

<script>
import AppBlockTitle from "./AppBlockTitle.vue";
import TodoListInput from "./TodoListInput.vue";
import TodoListItem from "./TodoListItem.vue";

export default {
  name: "TodoList",
  components: {
    AppBlockTitle,
    TodoListInput,
    TodoListItem,
  },
};
</script>

<style></style>

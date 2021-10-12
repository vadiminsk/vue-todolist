<template>
  <div class="flex justify-between items-center px-4 border-t border-gray-200">
    <div class="flex flex-col bg-gray-50 py-5 px-6">
      <div class="text-lg font-medium text-gray-900">{{ todo.title }}</div>
      <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {{ todo.description }}
      </div>
    </div>
    <div>
      <app-button @click="removeTodo">Delete</app-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },

  methods: {
    removeTodo() {
      this.$emit("remove", this.todo);
    },
  },
};
</script>

<style></style>

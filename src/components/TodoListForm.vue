<template>
  <div
    class="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Add todo item
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent>
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="title-field" class="sr-only">Title</label>
            <input
              id="title-field"
              name="title"
              type="text"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Title"
              v-model="todo.title"
            />
          </div>
          <div>
            <label for="description-field" class="sr-only">Description</label>
            <input
              id="description-field"
              name="description"
              type="text"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Description"
              v-model="todo.description"
            />
          </div>
        </div>

        <div class="flex flex-col">
          <button
            type="submit"
            class="self-end py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="createTodo"
          >
            Add item
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import uuid from "uuid/v4";

export default {
  data() {
    return {
      todo: {
        title: "",
        description: "",
      },
    };
  },

  methods: {
    createTodo() {
      this.todo.id = uuid();
      this.$emit("create", this.todo);
      this.todo = {
        title: "",
        description: "",
      };
    },
  },
};
</script>

<style></style>

<template>
  <form class="max-w-md w-full mt-8 space-y-6" @click.prevent>
    <input type="hidden" name="remember" value="true" />
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="title-field" class="sr-only">Title</label>
        <input
          id="title-field"
          name="title"
          type="text"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Title"
          v-model="post.title"
        />
      </div>
      <div>
        <label for="description" class="sr-only">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Description"
          v-model="post.description"
        />
      </div>
    </div>

    <div>
      <app-button @click="addPost" class="w-full">
        Add todo
      </app-button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      post: {
        title: "",
        description: "",
      },
    };
  },

  methods: {
    addPost() {
      this.post.id = uuidv4();

      this.$emit("addPost", this.post);

      this.post = {
        title: "",
        description: "",
      };
    },
  },
};
</script>

<style></style>

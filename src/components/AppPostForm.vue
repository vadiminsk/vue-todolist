<template>
  <form class="max-w-md w-full mt-8 space-y-6" @click.prevent>
    <input type="hidden" name="remember" value="true" />
    <div class="rounded-md shadow-sm space-y-px">
      <div>
        <label for="title-field" class="sr-only">Title</label>
        <app-input
          placeholder="Title"
          v-model="post.title"
          id="title-field"
          name="title"
          type="text"
          required
        />
      </div>
      <div>
        <label for="description" class="sr-only">Description</label>
        <app-input
          placeholder="Description"
          v-model="post.description"
          id="description"
          name="description"
          type="text"
          required
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
import AppInput from "./UI/AppInput.vue";

export default {
  components: { AppInput },
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

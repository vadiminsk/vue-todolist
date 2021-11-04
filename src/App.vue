<template>
  <div
    class="flex items-center justify-center flex-col py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full flex items-center justify-between py-4 px-2">
      <h1 class="text-center text-3xl font-extrabold text-gray-900">
        Posts list
      </h1>
      <app-button @click="showDialog">Add post</app-button>
    </div>
    <app-modal v-model:show="dialogVisible">
      <app-post-form @addPost="addPost" />
    </app-modal>
    <app-post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import AppPostForm from "@/components/AppPostForm";
import AppPostList from "@/components/AppPostList";

export default {
  name: "App",

  components: {
    AppPostForm,
    AppPostList,
  },

  data() {
    return {
      posts: [
        { id: 1, title: "VueJS", description: "Learn VueJS" },
        { id: 2, title: "VueJS", description: "Learn NuxtJS" },
        { id: 3, title: "VueJS", description: "Learn TypeScript" },
      ],
      dialogVisible: false,
    };
  },

  methods: {
    addPost(post) {
      this.posts.push(post);
      this.dialogVisible = !this.dialogVisible;
    },

    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },

    showDialog() {
      this.dialogVisible = !this.dialogVisible;
    },
  },
};
</script>

<template>
  <div
    class="flex items-center justify-center flex-col py-12 px-4 sm:px-6 lg:px-8"
  >
    <app-post-form @addPost="addPost" />
    <app-post-list :posts="posts" />
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
    };
  },

  methods: {
    addPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

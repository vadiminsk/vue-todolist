<template>
  <div
    v-for="item in list"
    :key="item.id"
    class="flex items-center border border-gray-200 rounded-l mb-3"
  >
    <div class="flex items-center justify-center w-8 h-8 border-r">
      {{ item.id }}
    </div>
    <div class="p-2">
      <h4 class="text-xl">{{ item.title }}</h4>
      <p class="text-base text-gray-500 font-normal">{{ item.description }}</p>
    </div>
    <div class="flex items-center ml-auto pr-3">
      <input
        id="remember-me"
        name="remember-me"
        type="checkbox"
        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      <label for="remember-me" class="ml-2 block text-sm text-gray-900">
        Done
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",

  data() {
    return {
      list: [
        {
          id: 1,
          title: "Create vue todo list",
          description: "Need to create s simple todo list by myself",
        },
        {
          id: 2,
          title: "Set up Vuex",
          description: "Remove hardcode and set up vuex with storage",
        },
        {
          id: 3,
          title: "Deploy app",
          description: "Deploy app to netlify or on the same hosting",
        },
      ],
    };
  },
};
</script>

<style></style>

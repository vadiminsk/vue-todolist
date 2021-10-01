<template>
  <header class="lg:flex lg:items-center lg:justify-between p-2 sm:p-6 lg:p-8">
    <div class="header__logo flex-1 min-w-0">
      <img alt="Vue logo" src="../assets/logo.png" class="block h-8 w-auto" />
    </div>
    <nav class="header_nav mt-5 flex lg:mt-0 lg:ml-4">
      <router-link
        to="/"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >Home</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style></style>

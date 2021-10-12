<template>
  <div
    v-if="show"
    @click="hideDialog"
    class="fixed flex items-center justify-center z-10 inset-0 overflow-y-auto bg-gray-600 bg-opacity-50"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      @click.stop
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style></style>

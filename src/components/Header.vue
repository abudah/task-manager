
<template>
  <div class="flex items-center justify-between bg-indigo-600">
    <div class="flex items-center justify-start">
      <img
        class="p-3 w-16"
        src="https://store-images.s-microsoft.com/image/apps.65408.9007199266251942.0c0e7f8d-7313-47d7-83e8-c34fea5d6188.1d03a141-61d5-4864-b738-9e0bb6abab53?mode=scale&q=90&h=200&w=200&background=%23009000"
      />
      <h1 class="font-bold text-xl text-indigo-100">Task manager</h1>
    </div>
    <button
      @click="$emit('toggle-task')"
      class="font-bold text-gray-800 shadow-xl p-2 m-5 bg-yellow-500 rounded-lg"
    >
      {{ AddTask ? "Add Task " : "Hide Add Task" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["AddTask"],
};
</script>

<style>
</style>
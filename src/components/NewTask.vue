<template>
  <div class="bg-yellow-600 text-yellow-100 font-bold">
    <div class="flex justify-between border-4 p-2 bg-green-400 rounded-lg">
      <h3 class="text-blue-900 p-7 w-1/3">Enter the Task :</h3>
      <form class="flex w-full" @submit="onsubmit">
        <input
          v-model="title"
          class="m-7 rounded w-full mr-12 pl-3 font-bold pr-1 text-green-900 outline-none"
          placeholder="title"
          type="text"
        />
        <button class="m-7 w-1/2 p-1 bg-blue-800 rounded-lg" type="submit">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTask",
  data() {
    return {
      title: "",
      checked: false,
    };
  },
  methods: {
    ...mapActions(["addTodos"]),
    onsubmit(e) {
      e.preventDefault();
      if (!this.title) {
        return alert("Enter the task Title");
      }
      this.addTodos(this.title);
      this.title = "";
      this.checked = false;
    },
  },
};
</script>

<style>
</style>
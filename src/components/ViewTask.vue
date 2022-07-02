<template>
  <div class="static bg-orange-500 font-bold">
    <div class="flex justify-between p-4">
      <h1>Tasks</h1>
      <div class="flex">
        <p class="bg-green-900 mr-2 p-3 w-3"></p>
        <p>Completed</p>
      </div>
      <div class="flex">
        <p class="bg-blue-100 p-3 mr-2 w-3"></p>
        <p>Not Completed</p>
      </div>
    </div>
    <div class="border-2 flex flex-wrap pl-20 border-black w-full">
      <div
        v-bind:class="{ 'bg-green-500  text-green-100': todos.completed }"
        @dblclick="onDoubleClick(todos)"
        v-for="todos in allTodos"
        :key="todos.title"
        class="w-1/4 rounded-lg p-5 m-5 bg-gray-500 text-gray-100"
      >
        <h2 class="font-bold relative top-0">{{ todos.title }}</h2>
        <div
          class="flex justify-between text-yellow-200 relative bottom-0 items-end"
        >
          <h3 class="relative top-10">
            Status: {{ todos.completed ? "Completed" : "Not Completed" }}
          </h3>
          <img
            @click="deleteTodos(todos.id)"
            class="w-6 mx-5"
            src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ViewTask",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodos", "updateTodo"]),
    onDoubleClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updTodo);
    },
  },
  computed: mapGetters(["allTodos"]),

  created() {
    this.fetchTodos();
  },
};
</script>

<style>
</style>
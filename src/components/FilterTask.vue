<template>
  <div class="flex justify-around p-4 bg-gray-300">
    <p class="font-bold px-5">Filter:</p>
    <div class="flex">
      <p class="font-bold text-gray-700 px-4">By number :</p>
      <select
        @change="filterTodosbyNumber($event)"
        class="font-bold rounded bg-green-100 px-4"
      >
        <option value="200">200</option>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
    </div>
    <div class="flex">
      <p class="font-bold text-gray-700 px-4">Completed:</p>
      <select
        @change="filterBystatus($event)"
        class="font-bold rounded bg-green-100 px-4"
      >
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTask",
  data() {
    return {
      limit: "",
    };
  },
  methods: mapActions(["filterTodosbyNumber", "filterBystatus"]),
};
</script>

<style>
</style>
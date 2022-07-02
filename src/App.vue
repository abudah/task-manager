<template>
  <Header @toggle-task="toggleAddtask" />
  <FilterTask />
  <NewTask v-show="AddTaskActive" AddTask="AddTaskActive" />
  <ViewTask />
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import ViewTask from "./components/ViewTask";
import NewTask from "./components/NewTask";
import FilterTask from "./components/FilterTask";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    ViewTask,
    NewTask,
    FilterTask,
  },
  data() {
    return {
      AddTaskActive: false,
    };
  },
  methods: {
    toggleAddtask() {
      this.AddTaskActive = !this.AddTaskActive;
    },
  },
};
</script>

<style>
</style>

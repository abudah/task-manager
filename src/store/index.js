import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    todos: [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
      }
    ]
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    newTodos: (state, todos) => state.todos.unshift(todos),
    removeTodos: (state, id) =>
      (state.todos = state.todos.filter((todo) => todo.id !== id)),
    updateTodo: (state, updTodo) => {
      const index = state.todos.findIndex((todo) => todo.id === updTodo.id);
      if (index !== -1) {
        state.todos.splice(index, 1, updTodo);
      }
    }
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      commit("setTodos", response.data);
    },
    async addTodos({ commit }, title) {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        { title, completed: false }
      );
      commit("newTodos", response.data);
    },
    async deleteTodos({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit("removeTodos", id);
    },
    async filterTodosbyNumber({ commit }, e) {
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].value
      );
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
      );
      commit("setTodos", response.data);
    },
    async filterBystatus({ commit }, e) {
      const status = e.target.options[e.target.options.selectedIndex].innerText;

      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?completed=${status}`
      );
      console.log("here is the status", status);
      commit("setTodos", response.data);
    },
    async updateTodo({ commit }, updTodo) {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
        updTodo
      );
      commit("updateTodo", response.data);
    }
  },
  getters: {
    allTodos(state) {
      return state.todos;
    }
  },
  modules: {}
});

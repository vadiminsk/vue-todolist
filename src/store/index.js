import { createStore, createLogger } from "vuex";

export default createStore({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],

  state: {
    todos: [],
    todoItem: "",
    isDone: false,
  },
  actions: {
    addNewItem({ commit }, { todoItem }) {
      commit("ADD_NEW_ITEM", todoItem);
    },
    deleteItem({ commit }, id) {
      commit("DELETE_ITEM", id);
    },
  },
  mutations: {
    ADD_NEW_ITEM(state, todoItem) {
      state.todos.push(todoItem);
      localStorage.setItem("todos", JSON.stringify(state.todos));
      state.todoItem = "";
    },

    DELETE_ITEM(state, todoItem, id) {
      let index = state.todos.findIndex((todo) => (todo.id = id));
      state.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
  getters: {
    getTodos(state) {
      const todos = JSON.parse(localStorage.getItem("todos"));
      if (todos && todos.length > 0) {
        state.todos = todos;
      }

      return state.todos;
    },
  },
  modules: {},
});

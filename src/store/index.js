import { createStore, createLogger } from "vuex";

export default createStore({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],

  state: {
    todos: [],
    todoItem: "",
    isDone: false,
  },
  mutations: {
    // addNewItem(state) {
    //   state.todos.push({
    //     id: Math.floor(Math.random()),
    //     title: state.todoItem,
    //     done: state.isDone,
    //   });
    //   state.todoItem = "";
    // },

    resetItem(state) {
      state.todoItem = "";
    },

    addNewItem(state, todoItem) {
      state.todos.push(todoItem);
      localStorage.setItem("todos", JSON.stringify(state.todos));
      state.todoItem = "";
    },

    deleteItem(state, todoItem) {
      state.todos = state.todos.filter((val) => val.id !== todoItem.id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
  actions: {
    addNewItem({ commit }, { todoItem }) {
      commit("addNewItem", todoItem);
    },
    deleteItem({ commit }, { todoItem }) {
      commit("deleteItem", todoItem);
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

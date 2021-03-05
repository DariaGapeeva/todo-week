import axios from "axios";
import { sortedDayOfWeek } from "../utilities/functions";

const instance = axios.create({
  baseURL: "https://todo-list-e1cb3.firebaseio.com/",
});

export const todoApi = {
  async getTodos() {
    try {
      const response = await instance.get("todos.json");

      const array = Object.keys(response.data).map((key) => ({
        ...response.data[key],
        id: key,
      }));
      const newArray = sortedDayOfWeek(array);
      return newArray;
    } catch (error) {
      console.error(error);
    }
  },
  addTodo(task, day, index, done) {
    return instance.post("todos.json", {
      task: task,
      day: day,
      index: index,
      done: done,
    });
  },
  deleteTodo(id) {
    return instance.delete(`todos/${id}.json`);
  },
  checkedTodo(id, done) {
    return instance.patch(`todos/${id}.json`, {
      done: done,
    });
  },
  moveTodo(id, day) {
    return instance.patch(`todos/${id}.json`, {
      day: day,
    });
  },

  reIndex(id, index) {
    return instance.patch(`todos/${id}.json`, {
      index: index,
    });
  },
};

export const authApi = {
  signUp(email, password) {
    return axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBG3T1hervWJlmu0ZlqIuRmczr9mdn6uFs",
      { email, password, returnSecureToken: true }
    );
  },
  signIn(email, password) {
    return axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBG3T1hervWJlmu0ZlqIuRmczr9mdn6uFs",
      { email, password, returnSecureToken: true }
    );
  },
};

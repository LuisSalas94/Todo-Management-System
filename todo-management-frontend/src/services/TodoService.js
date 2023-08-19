import axios from "axios";
import { getToken } from "./AuthService";

const BASE_URL_API_URL = "http://localhost:8080/api/todos";

/* Implement Basic Auth in React */
/* https://axios-http.com/docs/interceptors */

//* Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers["Authorization"] = getToken();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const getTodos = () => axios.get(BASE_URL_API_URL);

export const addTodo = (todo) => axios.post(BASE_URL_API_URL, todo);

export const getTodoById = (id) => axios.get(`${BASE_URL_API_URL}/${id}`);

export const updateTodo = (id, todo) =>
  axios.put(`${BASE_URL_API_URL}/${id}`, todo);

export const deleteTodo = (id) => axios.delete(`${BASE_URL_API_URL}/${id}`);

export const completeTodo = (id) =>
  axios.patch(`${BASE_URL_API_URL}/${id}/complete`);

export const incompleteTodo = (id) =>
  axios.patch(`${BASE_URL_API_URL}/${id}/incomplete`);

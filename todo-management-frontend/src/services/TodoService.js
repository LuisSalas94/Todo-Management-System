import axios from "axios";

const BASE_URL_API_URL = "http://localhost:8080/api/todos";

export const getTodos = () => axios.get(BASE_URL_API_URL);

export const addTodo = (todo) => axios.post(BASE_URL_API_URL, todo);

export const getTodoById = (id) => axios.get(`${BASE_URL_API_URL}/${id}`);

export const updateTodo = (id, todo) =>
  axios.put(`${BASE_URL_API_URL}/${id}`, todo);

export const deleteTodo = (id) => axios.delete(`${BASE_URL_API_URL}/${id}`);

export const completeTodo = (id) =>
  axios.patch(`${BASE_URL_API_URL}/${id}/complete`);

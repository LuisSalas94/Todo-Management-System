import axios from "axios";

const BASE_URL_API_URL = "http://localhost:8080/api/todos";

export const getTodos = () => axios.get(BASE_URL_API_URL);

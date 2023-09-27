import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  completeTodo,
  deleteTodo,
  getTodos,
  incompleteTodo,
} from "../services/TodoService";

const useListTodo = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (err) {
      console.log("Error fetching todos:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addNewTodo = () => {
    navigate("/add-todo");
  };

  const updateTodo = (id) => {
    navigate(`/update-todo/${id}`);
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const completeTodoMethod = async (id) => {
    await completeTodo(id);
    fetchTodos();
  };

  const incompleteTodoMethod = async (id) => {
    await incompleteTodo(id);
    fetchTodos();
  };

  return {
    todos,
    addNewTodo,
    updateTodo,
    removeTodo,
    completeTodoMethod,
    incompleteTodoMethod,
  };
};

export default useListTodo;

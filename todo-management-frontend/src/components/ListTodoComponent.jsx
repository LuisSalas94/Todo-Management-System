import { useEffect, useState } from "react";
import {
  completeTodo,
  deleteTodo,
  getTodos,
  incompleteTodo,
} from "../services/TodoService";
import { useNavigate } from "react-router-dom";
import useListTodo from "../hooks/useListTodo";

const ListTodoComponent = () => {
  /*   const [todos, setTodos] = useState([]);
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
 */

  const {
    todos,
    addNewTodo,
    updateTodo,
    removeTodo,
    completeTodoMethod,
    incompleteTodoMethod,
  } = useListTodo();

  return (
    <div className="container">
      <h2 className="text-center mt-3">List of Todos</h2>
      <button className="btn btn-outline-primary mb-2" onClick={addNewTodo}>
        Add Todo
      </button>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Todo Title</th>
              <th>Todo Description</th>
              <th>Todo Completed</th>
              <th>Action #1</th>
              <th>Action #2</th>
              <th>Action #3</th>
              <th>Action #4</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
                <td>
                  <button
                    onClick={() => updateTodo(todo.id)}
                    className="btn btn-outline-info btn-sm"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => completeTodoMethod(todo.id)}
                    className="btn btn-outline-info btn-sm"
                  >
                    Complete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => incompleteTodoMethod(todo.id)}
                    className="btn btn-outline-info btn-sm"
                  >
                    In Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodoComponent;

import { useState } from "react";

const ListTodoComponent = () => {
  const dummyData = [
    {
      id: 1,
      title: "Todo 1",
      description: "Description 1",
      completed: false,
    },
    {
      id: 2,
      title: "Todo 2",
      description: "Description 2",
      completed: false,
    },
    {
      id: 3,
      title: "Todo 3",
      description: "Description 3",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(dummyData);

  return (
    <div className="container">
      <h2 className="text-center mt-3">List of Todos</h2>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Todo Title</th>
              <th>Todo Description</th>
              <th>Todo Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodoComponent;

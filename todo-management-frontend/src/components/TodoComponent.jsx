import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addTodo, getTodoById, updateTodo } from "../services/TodoService";

const TodoComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [titleDescription, setTitleDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const saveOrUpdateTodo = async (e) => {
    e.preventDefault();
    const todo = { title, description, completed };

    if (title && description) {
      if (id) {
        try {
          await updateTodo(id, todo);
          console.log("Todo updated successfully");
          navigate("/todos");
        } catch (error) {
          console.error("Error updating todo:", error);
        }
      } else {
        try {
          await addTodo(todo);
          console.log("Todo added successfully");
          navigate("/todos");
        } catch (error) {
          console.error("Error adding todo:", error);
        }
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  const getTodoData = async (id) => {
    const response = await getTodoById(id);
    const data = response.data;
    setTitle(data.title);
    setDescription(data.description);
    setCompleted(data.completed);
  };

  useEffect(() => {
    if (id) {
      setTitleDescription("Update Todo");
      getTodoData(id);
    } else {
      setTitleDescription("Add Todo");
    }
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{titleDescription}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Todo Title:</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter todo"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Todo Description:</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter todo description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Todo Completed:</label>
                <select
                  className="form-select"
                  value={completed}
                  onChange={(e) => setCompleted(e.target.value)}
                >
                  <option value="false">No</option>
                  <option value="true">True</option>
                </select>
              </div>
              <button
                className="btn btn-outline-success"
                onClick={(e) => saveOrUpdateTodo(e)}
              >
                Add Todo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;

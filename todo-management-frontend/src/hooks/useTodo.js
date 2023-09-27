import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addTodo, getTodoById, updateTodo } from "../services/TodoService";

const useTodo = () => {
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

  return {
    title,
    setTitle,
    description,
    setDescription,
    completed,
    setCompleted,
    titleDescription,
    saveOrUpdateTodo,
  };
};

export default useTodo;

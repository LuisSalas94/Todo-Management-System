import useTodo from "../hooks/useTodo";

const TodoComponent = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    completed,
    setCompleted,
    titleDescription,
    saveOrUpdateTodo,
  } = useTodo();

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

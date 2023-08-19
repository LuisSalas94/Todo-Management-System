import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ListTodoComponent from "./components/ListTodoComponent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoComponent from "./components/TodoComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import { isUserLoggedIn } from "./services/AuthService";

function App() {
  const AuthenticatedRoute = ({ children }) => {
    const isAuth = isUserLoggedIn();
    if (isAuth) {
      return children;
    }
    return <Navigate to="/" />;
  };

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* <Route path="/" element={<ListTodoComponent />} /> */}
          {/* Diplay the Links as Per User Auth in the Header */}
          <Route path="/" element={<LoginComponent />} />
          {/* Secure the Routes */}
          <Route
            path="/todos"
            element={
              <AuthenticatedRoute>
                <ListTodoComponent />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/add-todo"
            element={
              <AuthenticatedRoute>
                <TodoComponent />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/update-todo/:id"
            element={
              <AuthenticatedRoute>
                <TodoComponent />
              </AuthenticatedRoute>
            }
          />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ListTodoComponent from "./components/ListTodoComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListTodoComponent />} />
          <Route path="/todos" element={<ListTodoComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

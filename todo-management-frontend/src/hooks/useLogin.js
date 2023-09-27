import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginAPICall,
  saveLoggedInUser,
  storeToken,
} from "../services/AuthService";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginForm = async (e) => {
    e.preventDefault();

    try {
      await loginAPICall(username, password);
      const token = "Basic " + window.btoa(username + ":" + password);
      storeToken(token);
      /* Diplay the Links as Per User Auth in the Header */
      saveLoggedInUser(username);
      navigate("/todos");
      /* Diplay the Links as Per User Auth in the Header */
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleLoginForm,
  };
};

export default useLogin;

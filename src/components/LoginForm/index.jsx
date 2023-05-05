import "./loginForm.css";
import { useState } from "react";
import axios from "axios"; // to be able to send request
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginForm = ({ setToken, setModalLogin }) => {
  // DECLARE STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // DECLARE FUNCTIONS TO HANDLE CHANGES AND SUBMIT
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email, password }
      );
      setToken(result.data.token);
      setModalLogin(false);
      Cookies.set("tokenVinted", result.data.token, { expires: 7 });
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="modalContainer">
      <form className="modal" onSubmit={handleSubmit}>
        <h1>Se connecter</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handlePasswordChange}
          value={password}
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};
export default LoginForm;

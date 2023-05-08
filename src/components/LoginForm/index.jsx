import "./loginForm.css";
import { useState } from "react";
import axios from "axios"; // to be able to send request
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginForm = ({ setModalVisible, setWhichModal, setToken }) => {
  // DECLARE STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // DECLARE VARIABLE(S)
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
      const result = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });
      setErrorMessage("");
      setToken(result.data.token);
      setModalVisible(false);
      Cookies.set("tokenVinted", result.data.token, { expires: 7 });
      navigate("/");
    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage("L'email et/ou le mot de passe ne sont pas correct");
      }
    }
  };

  return (
    <div
      className="modal"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <button
        className="closing-button"
        onClick={() => {
          setModalVisible(false);
        }}
      >
        X
      </button>
      <h1>Se connecter</h1>
      <form className="form" onSubmit={handleSubmit}>
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
        <div className="modal-submit">
          <button type="submit">Se connecter</button>
          {errorMessage && <span>{errorMessage}</span>}
          <p
            onClick={() => {
              setWhichModal("signup");
            }}
          >
            Pas encore de compte ? Inscris-toi !
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;

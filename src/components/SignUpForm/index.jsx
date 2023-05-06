import "./signUpForm.css";
import { useState } from "react";
import axios from "axios"; // to be able to send request
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignUpForm = ({ setModalVisible, setToken }) => {
  // DECLARE STATE(S)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // DECLARE VARIABLE(S)
  const navigate = useNavigate();

  // DECLARE FUNCTIONS TO HANDLE CHANGES AND SUBMIT
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleClickNewsletter = () => {
    setNewsletter(!newsletter);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:3000/user/signup", {
        username,
        email,
        password,
        newsletter,
      });
      setToken(result.data.token);
      setModalVisible(false);
      Cookies.set("tokenVinted", result.data.token, { expires: 7 });
      navigate("/");
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("Il y a déjà un compte associé à cet email");
      } else if (error.response.data.message === "missing parameter") {
        setErrorMessage("Merci de remplir tous les champs");
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
      <h1>S'inscrire</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          onChange={handleUsernameChange}
          value={username}
        />
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
        <div className="newsletter">
          <input
            id="newsletter"
            type="checkbox"
            name="newsletter"
            onClick={handleClickNewsletter}
          />
          <label htmlFor="newsletter">S'inscrire à la newsletter</label>
        </div>
        <button type="submit">S'inscrire</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SignUpForm;

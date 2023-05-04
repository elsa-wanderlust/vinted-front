import "./signUpForm.css";
import { useState } from "react";
import axios from "axios"; // to be able to send request
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignUpForm = ({ setToken }) => {
  // DECLARE STATES
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
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
      const result = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { username, email, password, newsletter }
      );
      // console.log(result);
      setToken(result.data.token);
      Cookies.set("tokenVinted", result.data.token, { expires: 7 });
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1>S'inscrire</h1>
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
      <input
        id="newsletter"
        type="checkbox"
        name="newsletter"
        onClick={handleClickNewsletter}
      />
      <label htmlFor="newsletter">S'inscrire à la newsletter</label>
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default SignUpForm;
import "./signUpForm.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUpForm = ({ setModalVisible, setWhichModal, setToken }) => {
  // DECLARE STATE(S)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [avatar, setAvatar] = useState("");
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
      // need to create a new instance of the FormData constructor (when sending file(s), we cant do it as body but need to use FormData)
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("newsletter", newsletter);
      formData.append("avatar", avatar);

      const result = await axios.post(
        "http://localhost:3000/user/signup",
        formData
      );
      setErrorMessage("");
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
        <section id="add-avatar">
          {!avatar && (
            <div className="add-avatar-label">
              <label>
                <FontAwesomeIcon className="plus-sign" icon="plus" /> &nbsp;
                Ajoute un avatar
                <input
                  type="file"
                  onChange={(event) => {
                    setAvatar(event.target.files[0]);
                  }}
                />
              </label>
            </div>
          )}
          {avatar && (
            <div className="uploaded-avatar">
              <img src={URL.createObjectURL(avatar)} alt="" />
              <button
                className="closing-button"
                onClick={() => {
                  setAvatar("");
                }}
              >
                X
              </button>
            </div>
          )}
        </section>
        <div className="newsletter-and-conditions">
          <div className="newsletter">
            <input
              id="newsletter"
              type="checkbox"
              name="newsletter"
              onClick={handleClickNewsletter}
            />
            <label htmlFor="newsletter">S'inscrire à la newsletter</label>
          </div>
          <p className="conditions">
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <div className="modal-submit">
          <button type="submit">S'inscrire</button>
          {errorMessage && <span>{errorMessage}</span>}
          <p
            onClick={() => {
              setWhichModal("login");
            }}
          >
            Tu as déjà un compte ? Connecte-toi !
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

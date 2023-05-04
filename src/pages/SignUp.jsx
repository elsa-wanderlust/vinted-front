import { useState, useEffect } from "react";
import axios from "axios"; // to be able to send request
import SignUp from "../components/SignUp";

const SignUpPage = () => {
  // DECLARE STATES
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [newsletter, setNewsletter] = useState(false);
  // const [data, setData] = useState("");
  // const [isLoading, setisLoading] = useState(true);

  return (
    <div>
      <SignUp
      // username={username}
      // setUsername={setUsername}
      // email={email}
      // setEmail={setEmail}
      // password={password}
      // setPassword={setPassword}
      // newsletter={newsletter}
      // setNewsletter={setNewsletter}
      />
    </div>
  );
};

export default SignUpPage;

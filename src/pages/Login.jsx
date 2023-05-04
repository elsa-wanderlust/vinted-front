import LoginForm from "../components/LoginForm";

const Login = ({ setToken }) => {
  return (
    <div>
      <LoginForm setToken={setToken} />
    </div>
  );
};

export default Login;

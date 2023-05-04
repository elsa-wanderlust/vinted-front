import SignUpForm from "../components/SignUpForm";

const SignUp = ({ setToken }) => {
  return (
    <div>
      <SignUpForm setToken={setToken} />
    </div>
  );
};

export default SignUp;

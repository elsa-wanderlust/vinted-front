import "./modal.css";

// IMPORT COMPONENTS
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";

const Modal = ({ setModalVisible, whichModal, setToken }) => {
  return (
    <div
      className="modal-container"
      onClick={() => {
        setModalVisible(false);
      }}
    >
      {whichModal === "signup" ? (
        <SignUpForm setModalVisible={setModalVisible} setToken={setToken} />
      ) : (
        <LoginForm setModalVisible={setModalVisible} setToken={setToken} />
      )}
    </div>
  );
};
export default Modal;

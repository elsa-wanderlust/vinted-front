import "./modal.css";

// IMPORT COMPONENT(S)
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";

const Modal = ({
  setModalVisible,
  setWhichModal,
  whichModal,
  setToken,
  setUserId,
}) => {
  return (
    <div
      className="modal-container"
      onClick={() => {
        setModalVisible(false);
      }}
    >
      {whichModal === "signup" ? (
        <SignUpForm
          setModalVisible={setModalVisible}
          setWhichModal={setWhichModal}
          setToken={setToken}
          setUserId={setUserId}
        />
      ) : (
        <LoginForm
          setModalVisible={setModalVisible}
          setWhichModal={setWhichModal}
          setToken={setToken}
          setUserId={setUserId}
          whichModal={whichModal}
        />
      )}
    </div>
  );
};
export default Modal;

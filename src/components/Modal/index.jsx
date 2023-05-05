import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";

const Modal = ({ modalVisible, setModalVisible, setToken }) => {
  return (
    <div className="modalContainer">
      <SignUpForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setToken={setToken}
      />
    </div>
  );
};
export default Modal;

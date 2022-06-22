import React, { useContext } from "react";
import { AppContext } from "../App";
import LoginForm from "./LoginForm";

const Modal = () => {
  const { modalType, showModal, setShowModal, login, register } =
    useContext(AppContext);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            {modalType === "login" && (
              <LoginForm setShowModal={setShowModal} login={login} />
            )}
            {/* {modalType === 'register' && <SignUp setShowModal={setShowModal} register={register} />}             */}
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;

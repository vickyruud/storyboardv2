import React from 'react'

const Modal = ({modalType, showModal, setShowModal, login, register}) => {
  return (
      <>    
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            {modalType === 'login' && <LoginForm setShowModal={setShowModal} login={login} />}
            {modalType === 'sign-up' && <SignUp setShowModal={setShowModal} register={register} />}
            {modalType === 'new-comment' && <NewComment setShowModal={setShowModal} />}
            {modalType === 'new-recipe' && <NewRecipe setShowModal={setShowModal} />}

          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default Modal
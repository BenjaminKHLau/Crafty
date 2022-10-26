import React, { useState } from 'react';
import { Modal } from '../../components/MODAL/modal'
import SignupForm from '../auth/SignUpForm';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)} className="login-signup">Sign Up</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
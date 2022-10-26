import React, { useEffect, useState } from 'react';
import { Modal } from '../MODAL/modal';
import { useSelector } from 'react-redux';
import ShopFormComponent from './shopForm';

function ShopFormModal() {
  const [showModal, setShowModal] = useState(false);

  const allShops = useSelector(state => state.shops)


  useEffect(()=> {
    setShowModal(false)
  }, [allShops])

  return (
    <>
      <div className='login-signup' onClick={() => setShowModal(true)}>Start a Shop</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ShopFormComponent />
        </Modal>
      )}
    </>
  );
}

export default ShopFormModal;
// frontend/src/components/LoginFormModal/index.js
import React, { useState, useEffect } from 'react';
import { Modal } from '../MODAL/modal';
import { useSelector } from 'react-redux';
import ShopEditFormComponent from './shopEditForm';

function EditShopFormModal({ shopId }) {
  const [showModal, setShowModal] = useState(false);

  const allShops = useSelector(state => state.shops)

  useEffect(()=> {
    setShowModal(false)
  }, [allShops])

  return (
    <>
      <div className="edit-delete" onClick={() => setShowModal(true)}>Edit Shop</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <ShopEditFormComponent shopId={shopId} />
        </Modal>
      )}
    </>
  );
}

export default EditShopFormModal;
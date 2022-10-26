import React, { useEffect, useState } from 'react';
import { Modal } from '../MODAL/modal';
import { useSelector } from 'react-redux';
import MerchEditFormComponent from './merchEditForm';

function MerchEditFormModal({merchId}) {
  const [showModal, setShowModal] = useState(false);

  const allMerch = useSelector(state => state.merch)


  useEffect(()=> {
    setShowModal(false)
  }, [allMerch])

  return (
    <>
      <div className='create-shop-button' onClick={() => setShowModal(true)}>Edit Merchandise</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <MerchEditFormComponent merchId={merchId}/>
        </Modal>
      )}
    </>
  );
}

export default MerchEditFormModal;
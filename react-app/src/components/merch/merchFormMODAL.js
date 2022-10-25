import React, { useEffect, useState } from 'react';
import { Modal } from '../MODAL/modal';
import { useSelector } from 'react-redux';
import MerchFormComponent from './merchForm';

function MerchFormModal({shopId}) {
  const [showModal, setShowModal] = useState(false);

  const allMerch = useSelector(state => state.merch)


  useEffect(()=> {
    setShowModal(false)
  }, [allMerch])

  return (
    <>
      <div className='create-shop-button' onClick={() => setShowModal(true)}>Add Product</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <MerchFormComponent shopId={shopId}/>
        </Modal>
      )}
    </>
  );
}

export default MerchFormModal;
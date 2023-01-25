import React, { useEffect, useState } from 'react';
import { Modal } from '../MODAL/modal';
import { useSelector } from 'react-redux';
import MerchReviewComponent from './merchReview';

function MerchRevFormModal({merchId}) {
  const [showModal, setShowModal] = useState(false);

  const allMerch = useSelector(state => state.merch)


  useEffect(()=> {
    setShowModal(false)
  }, [allMerch])

  return (
    <>
      <div className='add-merch' onClick={() => setShowModal(true)}>Review Product</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <MerchReviewComponent merchId={merchId}/>
        </Modal>
      )}
    </>
  );
}

export default MerchRevFormModal;
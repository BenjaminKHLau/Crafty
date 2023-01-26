import React, { useEffect, useState } from 'react';
import { Modal } from '../MODAL/modal';
import { useSelector } from 'react-redux';
import MerchReviewEditComponent from './MREdit';

function MREditFormModal({reviewId, merchId}) {
  const [showModal, setShowModal] = useState(false);

  const merchReviews = useSelector(state => state.merch_reviews)


  useEffect(()=> {
    setShowModal(false)
  }, [])

  return (
    <>
      <div className='add-merch' onClick={() => setShowModal(true)}>Edit Review</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <MerchReviewEditComponent reviewId={reviewId} merchId={merchId} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default MREditFormModal;
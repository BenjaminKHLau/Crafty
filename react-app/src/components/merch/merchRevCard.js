import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import sorrykiwi2 from "../pictures/sorrykiwi2.png";
// import MerchReviewEditComponent from "./MREdit";
import MREditFormModal from "./reviewEditMODAL";
import { deleteMRThunk, getAllMRThunk} from "../../store/merchReview";

function MerchRevCard({ user, review }) {
	const merch = useSelector((state) => state.merch);
    const dispatch = useDispatch()

    const deleteReview = async (e) => {
		e.preventDefault(e);
		dispatch(deleteMRThunk(review.id))
        .then(() => dispatch(getAllMRThunk()))
	};


	return (
		<div className="merch-rev-container">
			<img
				src={merch[review.merch_id]?.merch_image_url}
				className="merch-rev-img"
			/>
			<div className="merch-rev-info">
				<div className="merch-rev-0">
					<div className="merch-rev-1">{merch[review.merch_id]?.name}</div>
				</div>
				<div className="merch-rev-3">
					<div className="merch-rev-2">Rated: {review.rating}</div>
					{review.review && (<div className="merch-rev-2">Review: {review.review}</div>)}
				</div>
			</div>
            <MREditFormModal reviewId={review.id} merchId={review.merch_id}/>
            <div className="owner-controls" onClick={(e) => deleteReview(e)}>
							Delete Review
						</div>
		</div>
	);
}

export default MerchRevCard;

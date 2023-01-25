import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addMRThunk, getAllMRThunk } from "../../store/merchReview";

function MerchReviewComponent({ merchId }) {
	// console.log(merchId)
	const dispatch = useDispatch();
	const [review, setReview] = useState("");
	const [rating, setRating] = useState(5);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState([]);
	const session = useSelector((state) => state.session);
	let userId = session.user ? session.user.id : null;
	// console.log("merch session", session.user)
	// console.log("user", userId)

	useEffect(() => {
		setIsLoaded(true);
		dispatch(getAllMRThunk());
	}, [dispatch]);

	useEffect(() => {
		let errors = [];
		if (rating > 5 || rating < 1) errors.push("Rating must be between 1 - 5");
		setErrors(errors);
	}, [rating]);

	async function handleSubmit(e) {
		e.preventDefault();
		setIsSubmitted(true);
		if (errors.length > 0) {
			return;
		}

		let newReview = await dispatch(
			addMRThunk({
				review,
				rating,
				merch_id: merchId,
				author_id: userId,
			})
		);
		// return newReview
		console.log("submitted review", newReview);
	}

	const showErrors = errors.map((error) => (
		<div className="error-messages" key={error}>
			{error}
		</div>
	));

	return (
		isLoaded && (
			<form onSubmit={handleSubmit}>
				<h2 className="title">Review This Product!</h2>
				<ul className="errors">{isSubmitted && showErrors}</ul>
				<label className="form-stuff">Review</label>
				<input
					className="form-input"
					type="text"
					name="name"
					placeholder="Review"
					value={review}
					onChange={(e) => setReview(e.target.value)}
				/>
				<label className="form-stuff">Rating</label>
				<input
					className="form-input"
					type="number"
					name="name"
					min={1}
					max={5}
					placeholder="Rating"
					value={rating}
					onChange={(e) => setRating(e.target.value)}
				/>

				<div className="submit">
					<button
						type="submit"
						disabled={isSubmitted && errors.length > 0}
						className={
							isSubmitted && errors.length > 0 ? "noob" : "submit-button-login"
						}
					>
						Submit Review
					</button>
				</div>
			</form>
		)
	);
}

export default MerchReviewComponent;

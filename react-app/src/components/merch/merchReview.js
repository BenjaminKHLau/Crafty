import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function MerchReviewComponent({ merchId }) {
	// console.log(merchId)
	const [review, setReview] = useState("");
	const [rating, setRating] = useState(5);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
        setIsLoaded(true)
    }, []);

	return isLoaded && (
		<form>
			<label className="form-stuff">Review</label>
			<input
				// className="form-input"
				// type="text"
				// name="name"
				// placeholder="Product Name"
				// value={name}
				// onChange={(e) => setName(e.target.value)}
			/>

            <button type="submit">Submit Review</button>
		</form>
	);
}

export default MerchReviewComponent;

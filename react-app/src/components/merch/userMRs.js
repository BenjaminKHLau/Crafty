import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import MerchRevCard from "./merchRevCard";
import "./userMerchRev.css";

function UserMerchReviews({ user, reviews }) {
	// console.log(reviews)

	return (
		<div className="merch-rev-user">
			{reviews.map((review) => (
				<div>
					<MerchRevCard user={user} review={review} />
				</div>
			))}
		</div>
	);
}

export default UserMerchReviews;

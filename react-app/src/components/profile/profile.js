import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllShopsThunk } from "../../store/shop";
import ShopCard from "../shops/shopCard";
import "./profile.css";
import UserMerchReviews from "../merch/userMRs";

function UserProfileComponent() {
	const dispatch = useDispatch();

	const session = useSelector((state) => state.session);
	const shopSelector = useSelector((state) => state.shops);
	const [isLoaded, setIsLoaded] = useState(false);
	const allShops = Object.values(shopSelector);
	let user = session?.user ? session?.user : null;

	const userShops = allShops.filter((shop) => user.id === shop.owner_id);

	// USER REVIEWS
	const reviewsSelector = useSelector(state => state.merch_reviews)
	const reviewsArr = Object.values(reviewsSelector)
	const userReviews = reviewsArr.filter(review => user.id === review.author_id)
	// console.log("review profile select", userReviews)

	useEffect(() => {
		dispatch(getAllShopsThunk()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		isLoaded && (
			<div className="profile-container">
				<div className="profile"> Welcome to your profile, {user.username}</div>
                    <div className="inventory">Your Shops</div>
				<div className="home">
					{userShops.map((shop) => (
						<Link to={`/shops/${shop.id}`} className="shop-link" key={shop.id}>
							<ShopCard shop={shop} />
						</Link>
					))}
				</div>{userShops.length === 0 && (<div className="no-inventory">You don't have any shops...</div> )}
				<div className="inventory">Products You've Reviewed</div>
				<UserMerchReviews user={user} reviews={userReviews}/>
			</div>
		)
	);
}

export default UserProfileComponent;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getAllMerchThunk, deleteMerchThunk } from "../../store/merch";
import { getAllShopsThunk, getShopByIdThunk } from "../../store/shop";
import sorrykiwi2 from "../pictures/sorrykiwi2.png";
import "./merchDetails.css";
import MerchEditFormModal from "./merchEditFormMODAL";
import MerchInMerchDetailsComponent from "./mnm";
import MerchReviewComponent from "./merchReview";
import MerchRevFormModal from "./merchReviewMODAL";

function MerchDetailsComponent() {
	const dispatch = useDispatch();
	const history = useHistory();
	const { merchId } = useParams();

	const [isLoaded, setIsLoaded] = useState(false);

	const session = useSelector((state) => state.session);
	const merchSelector = useSelector((state) => state.merch);
	const shopsSelector = useSelector((state) => state.shops);
	const merch = merchSelector[merchId];

	const shop = shopsSelector[merch?.shop_id];
	const user = session.user ? session.user : null;

	let owner = false;
	if (user) owner = merch?.owner_id === user.id;

	const arr = Object.values(merchSelector)
    const merchArr = arr.filter(merch => merch.shop_id === merchSelector[merchId].shop_id)
	const uniqueMerch = merchArr.filter(merch => merch.id !== +merchId)
	// console.log("unique? merchArr: ",merchArr)
    // console.log("unique?: ",uniqueMerch)


	useEffect(() => {
		dispatch(getAllMerchThunk())
			.then(() => dispatch(getAllShopsThunk()))
			.then(() => setIsLoaded(true));
	}, [dispatch, merchId]);

	const deleteMerch = async (e) => {
		e.preventDefault(e);
		dispatch(deleteMerchThunk(merchId, merch.shop_id))
		.then(() => dispatch(getShopByIdThunk(merch.shop_id)))

		history.push(`/shops/${merch.shop_id}`);
	};

	return (
		isLoaded && (
            <div className="merchdetails-outer">

			<div className="merchdetails-container">
				<div className="merchdetails-pic-container">
					<img
						src={merch.merch_image_url}
						alt="merch detail pic"
						className="merchdetails-pic"
						onError={(e) => {
							e.target.src = sorrykiwi2;
						}}
					/>
				</div>
				<div className="merchdetails-store-name">
					<Link to={`/shops/${merch.shop_id}`} className="store-name-details">
						<div className="merchdetails-info">{merch.name}</div>
					</Link>
					<div className="click-to-store">
						Like this product?{" "}
						<Link to={`/shops/${merch.shop_id}`} className="visit-shop">{" "} Visit {shop.name}</Link>{" "}
					</div>
					<div className="merchdetails-desc">{merch.description}</div>
					<div className="protection-container">
						<div className="protection"><div className="protection2"> Crafty Purchase Protection 
						<div className="protection3">Shop confidently on Crafty knowing if something goes wrong with an order, we've got your back for all eligible purchases</div></div>
						</div> 

					</div>
					<div className="review-component">
						{/* <MerchReviewComponent merchId={merchId} /> */}
						<MerchRevFormModal merchId={merchId} />
					</div>
				</div>

			</div>
				{owner && (
					<div className="owner-perms2">
						<MerchEditFormModal merchId={merchId} />
						<div className="owner-controls" onClick={(e) => deleteMerch(e)}>
							Delete Item
						</div>
					</div>
				)}
				<div className="merchinshopcomponent">
				<div className="inventory">Looking for something else?</div>
					<MerchInMerchDetailsComponent merchId={merchId} />
					{uniqueMerch.length === 0 && (<div className="no-inventory">{shop.name} doesn't have any other merchandise left! Hurry before this is gone too!</div> )}
				</div>
            </div>
		)
	);
}

export default MerchDetailsComponent;

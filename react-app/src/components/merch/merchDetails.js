import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getAllMerchThunk, deleteMerchThunk } from "../../store/merch";
import { getAllShopsThunk } from "../../store/shop";
import sorrykiwi2 from "../pictures/sorrykiwi2.png";
import "./merchDetails.css";
import MerchEditFormModal from "./merchEditFormMODAL";

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

	useEffect(() => {
		dispatch(getAllMerchThunk())
			.then(() => dispatch(getAllShopsThunk()))
			.then(() => setIsLoaded(true));
	}, [dispatch, merchId]);

	const deleteMerch = async (e) => {
		e.preventDefault(e);
		dispatch(deleteMerchThunk(merchId, merch.shop_id));
		// .then(() => dispatch(getShopByIdThunk(merch.shop_id)))

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
						<Link to={`/shops/${merch.shop_id}`} className="visit-shop">Visit {shop.name}</Link>{" "}
					</div>
					<div className="merchdetails-desc">{merch.description}</div>
				</div>

			</div>
				{owner && (
					<div className="owner-perms">
						<MerchEditFormModal merchId={merchId} />
						<div className="owner-controls" onClick={(e) => deleteMerch(e)}>
							Delete Item
						</div>
					</div>
				)}
            </div>
		)
	);
}

export default MerchDetailsComponent;

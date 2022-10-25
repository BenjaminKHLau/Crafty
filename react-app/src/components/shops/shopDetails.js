import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getShopByIdThunk, deleteShopThunk } from "../../store/shop";
import { getAllMerchThunk } from "../../store/merch";
import EditShopFormModal from "./shopEditFormMODAL";
function ShopDetailsComponent() {
	const { shopId } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	const session = useSelector((state) => state.session);
	const shopSelect = useSelector((state) => state.shops);
	const shop = shopSelect[shopId];
	const [isLoaded, setIsLoaded] = useState(false);

	const user = session.user ? session.user : null;

	let owner = false;
	if (user) owner = shop?.owner_id === user.id;
	// console.log("owner: ", owner);
	// console.log("shopSelect: ", shopSelect);
	// console.log("USER IN SHOP DETAILS: ", user);

	useEffect(() => {
		dispatch(getShopByIdThunk(shopId))
        .then(() => dispatch(getAllMerchThunk()))
        .then(() => setIsLoaded(true))
	}, [dispatch, shopId]);

	const deleteShop = async (e) => {
		e.preventDefault(e);
		dispatch(deleteShopThunk(shopId));

		history.push("/");
	};

	return (
		isLoaded && (
			<div className="shop-details-container">
				<div className="centering-div">
					<div className="pic-div">
						<img
							src={shop.shop_image_url}
							alt="shop pic"
							className="shop-details-pic"
						/>
					</div>

					<div className="shop-info-container">
                        <div className="seller-left">

						<div className="seller-pic">
							<img
								src={shop.shop_image_url}
								alt="seller pic"
								className="seller-details-pic"
                                />
						</div>
						<div className="seller-details-container">
							<div className="shop-details-name">{shop.name}</div>
							<div className="shop-details-desc">{shop.description}</div>
						</div>
                                </div>
					{ owner && (<div className="owner-perms">
						<EditShopFormModal shopId={shop.id} />
						<div className="edit-delete" onClick={(e) => deleteShop(e)}>
							Delete Shop
						</div>
					</div>)}
					</div>
				</div>
			</div>
		)
	);
}

export default ShopDetailsComponent;

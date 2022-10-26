import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getShopByIdThunk, deleteShopThunk } from "../../store/shop";
import { getAllMerchThunk } from "../../store/merch";
import EditShopFormModal from "./shopEditFormMODAL";
import MerchFormModal from "../merch/merchFormMODAL";
import sorrykiwi2 from "../pictures/sorrykiwi2.png"
import MerchInShopComponent from "../merch/merchInShop";

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
                            onError={(e) => {
                                e.target.src = sorrykiwi2
                            }}
						/>
					</div>

					<div className="shop-info-container">
                        <div className="seller-left">

						<div className="seller-pic">
							<img
								src={shop.shop_image_url}
								alt="seller pic"
								className="seller-details-pic" 
                                onError={(e) => {
                                    e.target.src = sorrykiwi2
                                }}
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
                        <div className="add-merch">
                            <MerchFormModal shopId={shopId} />
                        </div>
					</div>)}
					</div>
				</div>
                <div className="merchinshopcomponent">
                    <div className="inventory">Browse our Merchandise!</div>
                <MerchInShopComponent />
                </div>

			</div>
		)
	);
}

export default ShopDetailsComponent;

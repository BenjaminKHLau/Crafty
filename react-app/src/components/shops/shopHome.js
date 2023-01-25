import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllShopsThunk } from "../../store/shop";
import { getAllMerchThunk } from "../../store/merch";
import ShopCard from "./shopCard";
import "./shopHome.css";
import MerchHome from "../merch/merchHome";

function ShopsHome() {
	const dispatch = useDispatch();

	const allShops = useSelector((state) => state.shops);
	const allMerch = useSelector((state) => state.merch);
	const [isLoaded, setIsLoaded] = useState(false);
	const shopsArr = Object.values(allShops);
	// console.log("ALL SHOPS: ", allShops)
	// console.log("ALL MERCH: ", allMerch);
	// console.log("Shops Array", shopsArr)

	useEffect(() => {
		dispatch(getAllShopsThunk())
			.then(() => dispatch(getAllMerchThunk()))
			.then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		isLoaded && (
			<div className="home-container">
                <div className="inspiration">Need inspiration? Check out these items!</div>
				<div className="shop-merch-home">
					<MerchHome />
						<div className="browse-shops">Browse Shops!</div>
					<div className="home">
						{shopsArr.map((shop) => (
							<Link to={`/shops/${shop.id}`} className="shop-link" key={shop.id}>
								<ShopCard shop={shop} />
							</Link>
						))}
					</div>
				</div>
			</div>
		)
	);
}

export default ShopsHome;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getAllMerchThunk } from "../../store/merch";
import { getAllShopsThunk } from "../../store/shop";

function MerchDetailsComponent(){
    const dispatch = useDispatch()
    const { merchId } = useParams()

    const [isLoaded, setIsLoaded] = useState(false);

    const merchSelector = useSelector(state => state.merch)
    const shopsSelector = useSelector(state => state.shops)
    const merch = merchSelector[merchId]
    console.log("MERCH SELECTOR IN MERCH DETAILS: ",merch)
    // console.log("SHOPS SELECTOR IN MERCH DETAILS: ",shopsSelector)
    const shop = shopsSelector[merch?.shop_id]
    console.log("SHOP: ",shop)



    useEffect(() => {
        dispatch(getAllMerchThunk())
        .then(() => dispatch(getAllShopsThunk()))
        .then(() => setIsLoaded(true))
	}, [dispatch, merchId]);

    return isLoaded && (
        <div className="merchdetails-container">
            <div className="merchdetails-pic-container">
                <img src={merch.merch_image_url} alt="merch detail pic" className="merchdetails-pic"/>
            </div>
            <div className="merchdetails-info">
            {merch.name}
            </div>
            <div className="click-to-store">Like this product? Visit <Link to={`/shops/${merch.shop_id}`}>{shop.name}</Link> </div>
        </div>
    )
}

export default MerchDetailsComponent
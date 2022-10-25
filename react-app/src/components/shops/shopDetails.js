import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { getShopByIdThunk } from "../../store/shop"
function ShopDetailsComponent(){
    const { shopId } = useParams()
    const dispatch = useDispatch()
    const shopSelect = useSelector(state => state.shops)
    const shop = shopSelect[shopId]
    const [isLoaded, setIsLoaded] = useState(false)
    console.log("shopSelect: ", shopSelect)
    // console.log("USE PARAMS: ", useParams())

    useEffect(() => {
        dispatch(getShopByIdThunk(shopId))
        .then(() => setIsLoaded(true))
    }, [dispatch])


    return isLoaded && (
        <div className="shop-details-container">
            <div className="shop-details-info">{shop.name}</div>
            <div className="shop-details-info">{shop.description}</div>
            <div className="shop-details-info">
                <img src={shop.shop_image_url} />
            </div>
        </div>
    )
}

export default ShopDetailsComponent
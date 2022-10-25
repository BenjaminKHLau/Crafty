import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getShopByIdThunk, updateShopThunk, deleteShopThunk } from "../../store/shop"
import EditShopFormModal from "./shopEditFormMODAL";
function ShopDetailsComponent(){
    const { shopId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const shopSelect = useSelector(state => state.shops)
    const shop = shopSelect[shopId]
    const [isLoaded, setIsLoaded] = useState(false)
    console.log("shopSelect: ", shopSelect)
    // console.log("USE PARAMS: ", useParams())

    useEffect(() => {
        dispatch(getShopByIdThunk(shopId))
        .then(() => setIsLoaded(true))
    }, [dispatch])

    const deleteShop = async (e) => {
        e.preventDefault(e)
        dispatch(deleteShopThunk(shopId))

        history.push("/")
    }

    return isLoaded && (
        <div className="shop-details-container">
            <div className="shop-details-info">{shop.name}</div>
            <div className="shop-details-info">{shop.description}</div>
            <div className="shop-details-info">
                <img src={shop.shop_image_url} />
            </div>

            <EditShopFormModal shopId={shop.id} />
            <div className="edit-delete" onClick={(e) => deleteShop(e)}>
                Delete Shop
              </div>
        </div>
    )
}

export default ShopDetailsComponent
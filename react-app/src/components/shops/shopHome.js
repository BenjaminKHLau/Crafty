import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllShopsThunk } from "../../store/shop"
import ShopCard from "./shopCard";
import "./shopHome.css"

function ShopsHome(){
    const dispatch = useDispatch()

    const allShops = useSelector(state => state.shops)
    const [isLoaded, setIsLoaded] = useState(false)
    const shopsArr = Object.values(allShops)
    // console.log("ALL SHOPS: ", allShops)
    // console.log("Shops Array", shopsArr)

    useEffect(() => {
        dispatch(getAllShopsThunk())
        .then(() => setIsLoaded(true))
    }, [dispatch])

    return isLoaded && (
        <div className="home">
            {shopsArr.map(shop => (
                <Link to={`/shops/${shop.id}`} className="shop-link" key={shop.id}>
                    <ShopCard shop={shop} />
                </Link>

            ))}

        </div>
    )
}

export default ShopsHome;
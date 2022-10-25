import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, NavLink } from "react-router-dom";
import { getAllShopsThunk } from "../../store/shop"

function ShopsHome(){
    const dispatch = useDispatch()

    const allShops = useSelector(state => state)
    console.log("ALL SHOPS: ", allShops)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(getAllShopsThunk())
        .then(() => setIsLoaded(true))
    }, [dispatch])

    return isLoaded && (
        <div className="home">

        </div>
    )
}

export default ShopsHome;
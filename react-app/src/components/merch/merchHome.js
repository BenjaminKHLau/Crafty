import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMerchThunk } from "../../store/merch";
import "./merchHome.css"
import MerchCard from "./merchCard";


function MerchHome(){
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const merchSelector = useSelector(state => state.merch)
    const merchArr = Object.values(merchSelector)
    // console.log("MERCH SELECTED: ",merchArr)
    

    useEffect(() => {
        dispatch(getAllMerchThunk())
        .then(() => setIsLoaded(true))
    }, [dispatch])



    return isLoaded && (
        <div className="merch-card-container">

        {merchArr.map(merch => (
            <Link to={`/merch/${merch.id}`} key={merch.id}>
                
            <div className="merch-home" key={merch.id}>
                <MerchCard merch={merch} />
            </div>
            </Link>
        ))}

        </div>
    )
}

export default MerchHome;
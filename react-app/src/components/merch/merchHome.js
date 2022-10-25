import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


function MerchHome(){
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        // dispatch(getAllShopsThunk())
        // .then(() => setIsLoaded(true))
    }, [dispatch])



    return (
        <h1>MERCH HOME</h1>
    )
}

export default MerchHome;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllMerchThunk } from "../../store/merch";
import "./merchHome.css"
import MerchCard from "./merchCard";


function MerchInMerchDetailsComponent({ merchId }){
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)

    const merchSelector = useSelector(state => state.merch)
    const arr = Object.values(merchSelector)
    const merchArr = arr.filter(merch => merch.shop_id === merchSelector[merchId].shop_id)


    function shuffle(array) {
        let counter = array.length;
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
    
        return array;
    }
    let shuffled = shuffle(merchArr)
    // console.log("SHUFFLED?: ", shuffled)
    


    useEffect(() => {
        dispatch(getAllMerchThunk())
        .then(() => setIsLoaded(true))
    }, [dispatch])



    return isLoaded && (
        <div className="merch-card-container2">
<div className="inventory">Looking for something else?</div>
<div className="merch-card-container">

        {shuffled.map(merch => ( //changed merchArr to shuffle for testing
            <Link to={`/merch/${merch.id}`} key={merch.id}>
                
            <div className="merch-home" key={merch.id}>
                <MerchCard merch={merch} />
            </div>
            </Link>
        ))}
        </div>
        </div>
    )
}

export default MerchInMerchDetailsComponent;
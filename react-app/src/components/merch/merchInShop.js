import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllMerchThunk } from "../../store/merch";
import "./merchHome.css"
import MerchCard from "./merchCard";


function MerchInShopComponent(){
    const {shopId} = useParams()
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const shopsSelector = useSelector(state => state.shops)
    const merchArr = shopsSelector[shopId].merch
    // const merchSelector = useSelector(state => state.merch)
    // const merchArr = Object.values(merchSelector)
    // console.log("MERCH SELECTED: ",merchArr)
    // console.log("SHOP SELECTED: ",shopsSelector[shopId].merch)


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
    
    // if(shuffled.length > 10) shuffled = shuffled.slice(0, 10)
    // console.log("OVER 10 SHUFFLED?: ", shuffled)


    useEffect(() => {
        dispatch(getAllMerchThunk())
        .then(() => setIsLoaded(true))
    }, [dispatch])



    return isLoaded && (
        <div className="merch-card-container">

        {shuffled.map(merch => ( //changed merchArr to shuffle for testing
            <Link to={`/merch/${merch.id}`} key={merch.id}>
                
            <div className="merch-home" key={merch.id}>
                <MerchCard merch={merch} />
            </div>
            </Link>
        ))}

        </div>
    )
}

export default MerchInShopComponent;
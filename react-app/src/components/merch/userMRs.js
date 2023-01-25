import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import MerchRevCard from "./merchRevCard";
import "./userMerchRev.css"

function UserMerchReviews({user, reviews}){
    console.log(reviews)
    

    return(
        <div className="merch-rev-user">
            {reviews.map(review => (
                <Link to={`/merch/${review.merch_id}`} className="merch-rev-link">
                    <MerchRevCard user={user} review={review} />
                </Link>
            ))}
        </div>
    )
}

export default UserMerchReviews
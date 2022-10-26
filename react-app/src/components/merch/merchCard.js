// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { deleteMerchThunk, getAllMerchThunk } from "../../store/merch";
import sorrykiwi2 from "../pictures/sorrykiwi2.png"

function MerchCard({merch}){
    // const dispatch = useDispatch()
    // const history = useHistory()
    // const [isLoaded, setIsLoaded] = useState(false);

    // const session = useSelector((state) => state.session);
    // const user = session.user ? session.user : null;

	// let owner = false;
	// if (user) owner = merch?.owner_id === user.id;

    // // useEffect(() => {
    // //     dispatch(getAllMerchThunk())
    // //     .then(() => setIsLoaded(true))
	// // }, [dispatch]);

    // const deleteMerch = async (e) => {
	// 	e.preventDefault(e);
	// 	dispatch(deleteMerchThunk(merch.Id));

	// 	history.push(`/shops/${merch.shop_id}`);
	// };

    return (
        <div className="merch-card">
            <div className="merch-home-image-container">
            <img src={merch.merch_image_url} alt="merch pic" className="merch-home-image" onError={e => {e.target.src = sorrykiwi2}}/>
            <div className="merch-card-info">
            {merch.name}
            </div>
            {/* <div className="edit-delete" onClick={(e) => deleteMerch(e)}>
							Delete Item
						</div> */}
            </div>

        </div>
    )
}

export default MerchCard;
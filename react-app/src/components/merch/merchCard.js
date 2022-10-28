
import sorrykiwi2 from "../pictures/sorrykiwi2.png"

function MerchCard({merch}){

    if (merch.name.length > 20) merch.name = merch.name.slice(0, 20) + "..."

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
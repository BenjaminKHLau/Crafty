import sorrykiwi2 from "../pictures/sorrykiwi2.png"

function MerchCard({merch}){

    return (
        <div className="merch-card">
            <div className="merch-home-image-container">
            <img src={merch.merch_image_url} alt="merch pic" className="merch-home-image" onError={e => {e.target.src = sorrykiwi2}}/>
            <div className="merch-card-info">
            {merch.name}
            </div>
            </div>

        </div>
    )
}

export default MerchCard;
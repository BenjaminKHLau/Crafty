function MerchCard({merch}){

    return (
        <div className="merch-card">
            <div className="merch-home-image-container">
            <img src={merch.merch_image_url} alt="merch pic" className="merch-home-image"/>
            </div>

            <div className="merch-card-info">
            {merch.name}
            </div>
        </div>
    )
}

export default MerchCard;
import sorrykiwi2 from "../pictures/sorrykiwi2.png"

function ShopCard({shop}){
    
    
    return(
        <div className="shopcard">
            <img src={shop.shop_image_url} className="shop-image" alt="shop" onError={(e) => {e.target.src = sorrykiwi2}}/>
            
            <div className="shop-card-info-container">
                <div className="shop-card-info">{shop.name}</div>
                <div className="shop-card-desc">{shop.description}</div>

            </div>


        </div>
    )
}

export default ShopCard;
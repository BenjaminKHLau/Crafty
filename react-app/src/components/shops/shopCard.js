import sorrykiwi2 from "../pictures/sorrykiwi2.png"

function ShopCard({shop}){
    
    
    return(
        <div className="shopcard">
            <div className="shop-card-info">{shop.name}</div>
            <img src={shop.shop_image_url} className="shop-image" alt="shop" onError={(e) => {
                                e.target.src = sorrykiwi2
                            }}/>
            <div className="shop-card-info">{shop.description}</div>


        </div>
    )
}

export default ShopCard;
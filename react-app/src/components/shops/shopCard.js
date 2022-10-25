function ShopCard({shop}){
    
    
    return(
        <div className="shopcard">
            <div className="shop-card-info">{shop.name}</div>
            <img src={shop.shop_image_url} className="shop-image" alt="shop image"/>
            <div className="shop-card-info">{shop.description}</div>


        </div>
    )
}

export default ShopCard;
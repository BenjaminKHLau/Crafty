from app.models import db, Shop


def seed_shops():
    shop1 = Shop(
        name="Ben's Shop", 
        description="Classy stuff",
        shop_image_url="https://www.minecraft.net/content/dam/games/minecraft/marketplace/updates-catspandas_latest.jpg",
        owner_id = 1
    )
    shop2 = Shop(
        name="Demo Shop", 
        description="Demo",
        shop_image_url="https://www.minecraft.net/content/dam/games/minecraft/marketplace/updates-catspandas_latest.jpg",
        owner_id = 2
    )
    shop3 = Shop(
        name="Marnie's Shop", 
        description="Marnie like Barney",
        shop_image_url="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/4/28/bjoyslzjb3uxqyg82uz2/minecraft",
        owner_id = 3
    )
    shop4 = Shop(
        name="Bobby's Shop", 
        description="Can you build it?",
        shop_image_url="https://assets2.rockpapershotgun.com/minecraft-house-ideas-hobbit-hole.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/minecraft-house-ideas-hobbit-hole.jpg",
        owner_id = 4
    )
    shop5 = Shop(
        name="Ben's Second Shop", 
        description="MineCraft stuff",
        shop_image_url="https://cdn.vox-cdn.com/thumbor/l9a45cx4ZfppNgzhQ5H3EX6glvs=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19355555/jbareham_191158_ply0958_decade_minecraft.jpg",
        owner_id = 1
    )
    db.session.add(shop1)
    db.session.add(shop2)
    db.session.add(shop3)
    db.session.add(shop4)
    db.session.add(shop5)
    db.session.commit()
    # shop = Shop(
    #     name="", 
    #     description="",
    #     shop_image_url="",
    #     owner_id = 1
    # ),
    
    
def undo_shops():
    db.session.execute('TRUNCATE shops RESTART IDENTITY CASCADE;')
    db.session.commit()
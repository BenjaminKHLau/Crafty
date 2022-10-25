from app.models import db, Merchandise



def seed_merch():
    merch1 = Merchandise(
        name="Ben's Merch",
        description="Cool",
        merch_image_url="https://www.minecraft.net/content/dam/games/minecraft/key-art/dungeons-void-vidart.jpg",
        shop_id = 1,
        owner_id = 1
    )
    merch2 = Merchandise(
        name="Ben's Merch 2",
        description="Cool 2",
        merch_image_url="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/games/switch/m/minecraft-switch/description-image",
        shop_id = 1,
        owner_id = 1
    )
    merch3 = Merchandise(
        name="Ben's Merch 3",
        description="Cool 3",
        merch_image_url="https://www.minecraft.net/content/dam/games/minecraft/key-art/MCL_Games_Subnav_Legends_300x465.jpg",
        shop_id = 1,
        owner_id = 1
    )
    merch4 = Merchandise(
        name="Ben's Merch 4",
        description="Cool 4",
        merch_image_url="https://www.lego.com/cdn/cs/catalog/assets/blt6ae5c60871323e5d/1/Minecraft_call_out.jpg?width=600",
        shop_id = 1,
        owner_id = 1
    )
    merch5 = Merchandise(
        name="Ben's Merch 5",
        description="Cool 5",
        merch_image_url="https://i.insider.com/627a982fc1076b00183d48a5?width=700",
        shop_id = 1,
        owner_id = 1
    )
    # merch = Merchandise(
    #     name="",
    #     description="",
    #     merch_image_url="",
    #     shop_id = 1,
    #     owner_id = 1
    # ),
    db.session.add(merch1)
    db.session.add(merch2)
    db.session.add(merch3)
    db.session.add(merch4)
    db.session.add(merch5)
    db.session.commit()
    
    
    
    
def undo_merch():
    db.session.execute('TRUNCATE merch RESTART IDENTITY CASCADE;')
    db.session.commit()
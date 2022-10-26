from app.models import db, Merchandise
from faker import Faker
import random
fake = Faker()

owners = list(range(1, 36))
shop_names = ["MineCraft", "Min", "The Best MineCraft", "Organic MineCraft", "MineCraft for the Times", "MineCraft for All", "MineCraft of the People", "MineCraft That Rock", "MineCraft-izer", "MineCraft-ak", "I Can't Believe It's Not MineCraft!", "MineCraft Smack", "Sneaky MineCraft", "The Sneaky MineCraft", "That MineCraft Time", "MineCraft-alyzer", "MineCraft Gun", "MineCraft Kaboom", "The MineCraft Project", "Pop MineCraft", "MineCraft Pop", "MineCraft Aid", "MineCraft Hoop", "MineCraft Wrap", "MineCraft-ophane", "MineCraft-oin", "MineCraft App", "MineCraft Tone", "MineCraft-yo", "Zip MineCraft", "MineCraft Chain", "MineCraft Helper", "The MineCraft Helper", "MineCraft Storage", "Max MineCraft", "MineCraft to the Max", "MineCraft-o-pot", "MineCraft-ex", "MineCraft-aphone", "MineCraft-mobile", "MineCraft-uzzi", "MineCraft Stick", "MineCraft Tape", "MineCraft Hero", "MineCraft Knife", "MineCraft-enol", "MineCraft Man", "MineCraft Woman", "MineCraft Dog", "MineCraft Dude", "MineCraft Ex", "MineCraft Bay", "MineCraft Apparel", "MineCraft Care", "MineCraft Luxury", "MineCraft Automotive", "The Personal MineCraft", "MineCraft Insurance", "MineCraft Food", "MineCraft Nutrition", "MineCraft Supplements", "MineCraft Medicine", "MineCraft Beer", "MineCraft Fast", "Fast MineCraft", "MineCraft Provider", "MineCraft Retail", "MineCraft Alliance", "The MineCraft Alliance", "MineCraft-pac", "MineCraft Mart", "Soft MineCraft", "Hard MineCraft", "Fast MineCraft", "MineCraft Bank", "MineCraft Video", "MineCraft Wrap", "Super MineCraft", "Post MineCraft", "MineCraft Buster", "MineCraft Pad", "MineCraft Pep", "Crazy MineCraft", "MineCraft Book", "MineCraft Company", "MineCraft Brand", "MineCraft Carta", "MineCraft Card", "The Worst MineCraft", "The Best MineCraft", "World's Okayest MineCraft", "OK MineCraft", "Okay MineCraft", "Hello MineCraft", "Fresh MineCraft", "MineCraft X", "Crypto MineCraft", "Anti-MineCraft", "The MineCraft Movement", "MineCraft Movement", "Rise MineCraft", "Shiny MineCraft", "Dumb MineCraft", "Single MineCraft", "MineCraft Serve", "MineCraft-soft", "Tame MineCraft", "Master MineCraft", "MineCraft Type", "Super Duper MineCraft", "Spectacular MineCraft", "Amazing MineCraft", "MineCraft Away", "MineCraft BnB", "MineCraft Hotel", "MineCraft Scout", "The MineCraft Project", "MineCraft Fix", "Fix MineCraft", "MineCraft Corporation", "MineCraft Media", "MineCraft Turf", "MineCraft Cash", "MineCraft Stick", "Chuck MineCraft", "MineCraft-it", "iMineCraft", "MineCraft Beep", "MineCraft Electronics", "MineCraft Electrical", "MineCraft Start", "Starter MineCraft", "MineCraft Box", "Box-o-MineCraft", "MineCraft Reality", "The MineCraft Experience", "Time to MineCraft", "It's Not Even MineCraft", "Way to MineCraft", "MineCraft Band", "MineCraft Garage", "MineCraft Cream", "Ice MineCraft", "Better MineCraft", "MineCraft Mint", "MineCraft Bowl", "Manly MineCraft", "Tourist MineCraft", "MineCraft Tour", "MineCraft Car", "MineCraft-O", "MineCraft-atron", "MineCraft Chronicles", "MineCraft Pocket", "Pocket of MineCraft", "MineCraft Limited", "MineCraft Edition", "MineCraft Ski", "Scoop of MineCraft", "MineCraft Woo", "Awesome MineCraft", "Amazing MineCraft", "Wondrous MineCraft", "Wonder MineCraft", "MineCraft Perfume", "MineCraft Scent", "MineCraft Cologne", "MineCraft Bag", "MineCraft Furniture", "Just for MineCraft", "InstaMineCraft", "Instant MineCraft", "Immediate MineCraft", "MineCraft Right Now", "MineCraft Forever", "Forever MineCraft", "Insane MineCraft", "MineCraft Insanity", "MineCraft Creame", "Creme-de-MineCraft", "MineCraft Lotion", "MineCraft Butter", "MineCraft Food", "Foodie MineCraft", "MineCraft Ball", "MineCraft Pump", "MineCraft Scope", "Prisma MineCraft", "American MineCraft", "European MineCraft", "Asian MineCraft", "Brazilian MineCraft", "Canadian MineCraft", "The MineCraft Concept", "The MineCraft Book", "Concept MineCraft", "Future MineCraft", "White MineCraft", "Black MineCraft", "Red MineCraft", "MineCraft Snake", "MineCraft Bottle", "Watch Me MineCraft", "Get Your MineCraft On", "MineCraft Credit", "MineCraft Kiss", "Kiss of MineCraft", "MineCraft Store", "MineCraft In a Box", "MineCraft In a Bottle", "MineCraft Rabbit", "Task MineCraft", "MineCraft Milk", "Canned MineCraft", "Pass the MineCraft", "MineCraft 77", "1st Place MineCraft", "2nd Place MineCraft", "No Place Like MineCraft", "There's Nothing Like MineCraft", "It's a MineCraft!", "Don't Have a MineCraft", "Famous MineCraft", "Top MineCraft", "Cruelty Free MineCraft", "Vegan MineCraft", "Meat Easter's MineCraft", "The Champagne of MineCraft", "MineCraft Wine", "MineCraft Bracelet", "MineCraft Partners", "Wife's MineCraft", "Husband's MineCraft", "Kids MineCraft", "MineCraft for Kids", "MineCraft Business", "MineCraft 9000", "Not Your Grandmothers MineCraft", "MineCraft Calendar", "MineCraft Wrap", "Wrapped MineCraft", "MineCraft CK", "MineCraft Logo", "MineCraft Label", "MineCraft Shoe", "Badass MineCraft", "Off the Wall MineCraft", "MineCraft Pills", "MineCraft Tube", "MineCraft Gloss", "Swag MineCraft", "MineCraft Tablet", "MineCraft Phone", "Modular MineCraft", "MineCraft Strap", "MineCraft Ride", "MineCraft Size", "MineCraft Drive", "Yellow MineCraft", "Smart MineCraft", "MineCraft Smart", "Today MineCraft", "Popular MineCraft", "Celebrity MineCraft", "Fine MineCraft", "MineCraft Shoulder", "MineCraft Allergy", "MineCraft Clean", "Clean MineCraft", "Silky MineCraft", "Baby MineCraft", "Auto MineCraft", "Call of MineCraft", "MineCraft Spread", "MineCraft Knoll", "RX MineCraft", "MineCraft Tool", "MineCraft Smile", "Family MineCraft", "MineCraft Reality", "Chocolate MineCraft", "Naked MineCraft", "MineCraft Juice", "Freedom MineCraft", "MineCraft Square", "Looped MineCraft", "Plastic MineCraft", "MineCraft Belt", "Corn MineCraft", "Vodka MineCraft", "MineCraft Jar", "MineCraft Holder", "Suede MineCraft", "Purple MineCraft", "Steel MineCraft", "MineCraft Reserve", "MineCraft Weiser", "MineCraft Express", "Express MineCraft", "Quicky MineCraft", "MineCraft Gift", "Dual MineCraft", "Mono MineCraft", "Written MineCraft", "Bag of MineCraft", "MineCraft Con", "MineCraft Shop", "BRB MineCraft", "Hair MineCraft", "Stressed MineCraft", "Timeless MineCraft", "Aged MineCraft", "Poison MineCraft", "MineCraft of the Gods", "MineCraft Empire", "Blast of MineCraft", "Original MineCraft", "Fast MineCraft", "Mega MineCraft", "MineCraft Giant", "MineCraft Patch", "MineCraft 100", "MineCraft Potion", "MineCraft Elixer", "Blue MineCraft", "MineCraft Onion", "MineCraft Bench", "MineCraft Choice", "The Choice of MineCraft", "MineCraft Favorite", "Recess MineCraft", "MineCraft Sport", "MineCraft Armor", "MineCraft Re-fill", "Smiley MineCraft", "Becoming MineCraft", "Wrapped MineCraft", "MineCraft Hair", "MineCraft Soul", "MineCraft Pizza", "Bacon MineCraft", "MineCraft Lips", "Fantastical MineCraft", "Magical MineCraft", "Motivational MineCraft", "Awake MineCraft", "MineCraft Awake", "MineCraft Ready", "MineCraft Alert", "MineCraft Code Red", "Code Red MineCraft", "Mountain Time MineCraft", "Clean MineCraft", "MineCraft Ritual", "Cleansing MineCraft", "Ready MineCraft"]
images = ["https://i.pinimg.com/originals/88/eb/8e/88eb8ef9504894cc4f32eb47263de192.png",
          "https://static.planetminecraft.com/files/resource_media/screenshot/1303/Tools_4624589.jpg",
          "https://preview.redd.it/fz8ynhpz9d361.png?auto=webp&s=bf0715446a84b5bb8cca727c7f20fb95759e64b7",
          "https://preview.redd.it/0j2encdhgww81.jpg?width=640&crop=smart&auto=webp&s=8899559566ac318cab43bb72bed64ddef875dd9d",
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16a94c3e-55bc-4868-92b5-99af942217d3/dc3073y-bb266a33-0b7d-46ba-b8f6-49e4315baf2a.png/v1/fill/w_1024,h_509,q_80,strp/minecraft__various_items_pixel_art_by_glimmeringclaymore_dc3073y-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2YTk0YzNlLTU1YmMtNDg2OC05MmI1LTk5YWY5NDIyMTdkM1wvZGMzMDczeS1iYjI2NmEzMy0wYjdkLTQ2YmEtYjhmNi00OWU0MzE1YmFmMmEucG5nIiwiaGVpZ2h0IjoiPD01MDkiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8xNmE5NGMzZS01NWJjLTQ4NjgtOTJiNS05OWFmOTQyMjE3ZDNcL2dsaW1tZXJpbmdjbGF5bW9yZS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.GAVhGJjH0lZYhqblEs2kLv4IVfhyAaJzQacmUJhrPOo",
          "https://static.planetminecraft.com/files/resource_media/screenshot/1234/2012-08-26_175246_3402512.jpg",
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10e3081b-d88c-4a09-91fe-6475d213cf46/daag71p-1b5d04f2-5321-4c1c-b164-b92b7c772b61.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwZTMwODFiLWQ4OGMtNGEwOS05MWZlLTY0NzVkMjEzY2Y0NlwvZGFhZzcxcC0xYjVkMDRmMi01MzIxLTRjMWMtYjE2NC1iOTJiN2M3NzJiNjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RnLQ3vdFsYNZFBT-QsPlPyk4-C_AAuMcWc5mnQHAbWY",
          "https://pbs.twimg.com/media/FE5YmI5XwAInYNz.png",
          "https://static.planetminecraft.com/files/resource_media/screenshot/1302/asd_4614949.jpg",
          "https://pbs.twimg.com/media/E5yO_QSX0Agwzsj.png:large",
          "https://i.pinimg.com/550x/29/55/96/2955961332ea47e129169f11a4fb9611.jpg",
          "https://pbs.twimg.com/media/DqmxPOwWwAEXyr3.png",
          "https://art.pixilart.com/thumb/b053c02d10f703f.png",
          "https://www.kindpng.com/picc/m/128-1287906_minecraft-potion-cool-minecraft-potion-transparent-minecraft-pixel.png",
          "https://i.etsystatic.com/19011332/r/il/362a16/1957780710/il_fullxfull.1957780710_28q7.jpg",
          "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/fd9d84e3d1b18e3.png",
          "https://i.pinimg.com/originals/39/7c/e0/397ce07e74b4d505ae68962491dfb4c4.png",
          "https://cdnb.artstation.com/p/assets/images/images/046/325/633/large/pk3001-new-piskel-1-png-1-1.jpg?1644855709",
          "https://i.redd.it/obf7lb6cxa171.jpg",
          "https://i.etsystatic.com/16870471/r/il/22cd6b/1860402848/il_570xN.1860402848_89c5.jpg",
          "https://www.kindpng.com/picc/m/467-4674096_minecraft-for-windows-pixel-art-minecraft-food-hd.png"
          ]
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/44/Diamond_Sword_JE3_BE3.png/revision/latest?cb=20201017135722",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ea/End_Crystal_JE2.gif/revision/latest?cb=20200512200814",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ec/Diamond_Shovel_JE3_BE3.png/revision/latest?cb=20200226194003",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e7/Diamond_Pickaxe_JE3_BE3.png/revision/latest?cb=20200226193952",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fc/Diamond_Leggings_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200218002400",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/04/Diamond_Hoe_JE3_BE3.png/revision/latest?cb=20200226193929",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b2/Diamond_Helmet_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200218002315",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Diamond_Chestplate_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20200218002341",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/82/Diamond_Boots_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200218002418",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/40/Diamond_Axe_JE3_BE3.png/revision/latest?cb=20200226193844",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f6/Ender_Pearl_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20200512195721",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b6/Crossbow_Pull_0.png/revision/latest?cb=20200512195058",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9b/Carrots_Age_7_BE.png/revision/latest/scale-to-width-down/160?cb=20220504145549",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Bucket_of_Pufferfish_JE2_BE2.png/revision/latest?cb=20200510234727",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/90/Bucket_of_Tropical_Fish_JE3_BE2.png/revision/latest?cb=20200510234844",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/47/Bucket_of_Salmon_JE2_BE2.png/revision/latest?cb=20200510234618",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7f/Bucket_of_Cod_JE2_BE2.png/revision/latest?cb=20200510235028",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c3/Bucket_of_Axolotl_JE1_BE1.png/revision/latest?cb=20201216173345",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/14/Bow_%28Pull_1%29_JE1_BE1.png/revision/latest?cb=20200510234415",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/10/Bottle_o%27_Enchanting.gif/revision/latest?cb=20200428012753",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/62/Acacia_Boat_with_Chest_JE2_BE1.png/revision/latest/scale-to-width-down/180?cb=20220325090919",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/12/Oak_Boat_with_Chest_JE2_BE1.png/revision/latest/scale-to-width-down/180?cb=20220325090906",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/bd/Bamboo_Raft_with_Chest_JE1_BE1.png/revision/latest/scale-to-width-down/180?cb=20221020073134",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/20/Mangrove_Boat_with_Chest_JE2_BE1.png/revision/latest/scale-to-width-down/180?cb=20220325090930",
        #   "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a5/Dark_Oak_Boat_with_Chest_JE2_BE1.png/revision/latest/scale-to-width-down/180?cb=20220325090924"

def seed_merch():
    
    for i in range(300):
        num = random.choice(owners)
        new_merch = Merchandise(
        name=random.choice(shop_names),
        description=fake.paragraph(nb_sentences=5),
        merch_image_url=random.choice(images),
        shop_id = num,
        owner_id = num
        )
        db.session.add(new_merch)
    
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
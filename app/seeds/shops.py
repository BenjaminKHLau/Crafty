from app.models import db, Shop
from faker import Faker
import random
fake = Faker()

owners = [1, 2, 3, 4]
images = ["https://i.guim.co.uk/img/media/c6f7b43fa821d06fe1ab4311e558686529931492/140_73_1079_647/master/1079.jpg?width=1200&quality=85&auto=format&fit=max&s=12a9b5ef959d71d5e114c94653dd95e5",
          "https://i.ytimg.com/vi/1JSjZqV-YK8/maxresdefault.jpg",
          "https://www.minecraft.net/content/dam/games/minecraft/screenshots/MCD-PMP_Seasonal-Adventures_Media-Block_Season-1_600x360.jpg",
          "https://i.ytimg.com/vi/b5Xf7wDPPEU/maxresdefault.jpg",
          "https://www.bleepstatic.com/content/hl-images/2021/12/16/Minecraft.jpg",
          "https://ftw.usatoday.com/wp-content/uploads/sites/90/2022/05/Minecraft-attacking-a-SkeletoN.jpg",
          "https://www.nme.com/wp-content/uploads/2022/07/Minecraft-Technoblade-tribute.jpg",
          "https://i.ytimg.com/vi/chuRE9nxLT4/maxresdefault.jpg",
          "https://store-images.s-microsoft.com/image/apps.21440.14489670829682582.abff952b-b572-4134-a542-e4b319fcfb4b.a1a05973-21fe-4abc-b762-f0ecaa96e228",
          "https://www.global-esports.news/wp-content/uploads/2022/05/Minecraft-2022-Guide.jpg"]
shop_names = ["MineCraft", "Min", "The Best MineCraft", "Organic MineCraft", "MineCraft for the Times", "MineCraft for All", "MineCraft of the People", "MineCraft That Rock", "MineCraft-izer", "MineCraft-ak", "I Can't Believe It's Not MineCraft!", "MineCraft Smack", "Sneaky MineCraft", "The Sneaky MineCraft", "That MineCraft Time", "MineCraft-alyzer", "MineCraft Gun", "MineCraft Kaboom", "The MineCraft Project", "Pop MineCraft", "MineCraft Pop", "MineCraft Aid", "MineCraft Hoop", "MineCraft Wrap", "MineCraft-ophane", "MineCraft-oin", "MineCraft App", "MineCraft Tone", "MineCraft-yo", "Zip MineCraft", "MineCraft Chain", "MineCraft Helper", "The MineCraft Helper", "MineCraft Storage", "Max MineCraft", "MineCraft to the Max", "MineCraft-o-pot", "MineCraft-ex", "MineCraft-aphone", "MineCraft-mobile", "MineCraft-uzzi", "MineCraft Stick", "MineCraft Tape", "MineCraft Hero", "MineCraft Knife", "MineCraft-enol", "MineCraft Man", "MineCraft Woman", "MineCraft Dog", "MineCraft Dude", "MineCraft Ex", "MineCraft Bay", "MineCraft Apparel", "MineCraft Care", "MineCraft Luxury", "MineCraft Automotive", "The Personal MineCraft", "MineCraft Insurance", "MineCraft Food", "MineCraft Nutrition", "MineCraft Supplements", "MineCraft Medicine", "MineCraft Beer", "MineCraft Fast", "Fast MineCraft", "MineCraft Provider", "MineCraft Retail", "MineCraft Alliance", "The MineCraft Alliance", "MineCraft-pac", "MineCraft Mart", "Soft MineCraft", "Hard MineCraft", "Fast MineCraft", "MineCraft Bank", "MineCraft Video", "MineCraft Wrap", "Super MineCraft", "Post MineCraft", "MineCraft Buster", "MineCraft Pad", "MineCraft Pep", "Crazy MineCraft", "MineCraft Book", "MineCraft Company", "MineCraft Brand", "MineCraft Carta", "MineCraft Card", "The Worst MineCraft", "The Best MineCraft", "World's Okayest MineCraft", "OK MineCraft", "Okay MineCraft", "Hello MineCraft", "Fresh MineCraft", "MineCraft X", "Crypto MineCraft", "Anti-MineCraft", "The MineCraft Movement", "MineCraft Movement", "Rise MineCraft", "Shiny MineCraft", "Dumb MineCraft", "Single MineCraft", "MineCraft Serve", "MineCraft-soft", "Tame MineCraft", "Master MineCraft", "MineCraft Type", "Super Duper MineCraft", "Spectacular MineCraft", "Amazing MineCraft", "MineCraft Away", "MineCraft BnB", "MineCraft Hotel", "MineCraft Scout", "The MineCraft Project", "MineCraft Fix", "Fix MineCraft", "MineCraft Corporation", "MineCraft Media", "MineCraft Turf", "MineCraft Cash", "MineCraft Stick", "Chuck MineCraft", "MineCraft-it", "iMineCraft", "MineCraft Beep", "MineCraft Electronics", "MineCraft Electrical", "MineCraft Start", "Starter MineCraft", "MineCraft Box", "Box-o-MineCraft", "MineCraft Reality", "The MineCraft Experience", "Time to MineCraft", "It's Not Even MineCraft", "Way to MineCraft", "MineCraft Band", "MineCraft Garage", "MineCraft Cream", "Ice MineCraft", "Better MineCraft", "MineCraft Mint", "MineCraft Bowl", "Manly MineCraft", "Tourist MineCraft", "MineCraft Tour", "MineCraft Car", "MineCraft-O", "MineCraft-atron", "MineCraft Chronicles", "MineCraft Pocket", "Pocket of MineCraft", "MineCraft Limited", "MineCraft Edition", "MineCraft Ski", "Scoop of MineCraft", "MineCraft Woo", "Awesome MineCraft", "Amazing MineCraft", "Wondrous MineCraft", "Wonder MineCraft", "MineCraft Perfume", "MineCraft Scent", "MineCraft Cologne", "MineCraft Bag", "MineCraft Furniture", "Just for MineCraft", "InstaMineCraft", "Instant MineCraft", "Immediate MineCraft", "MineCraft Right Now", "MineCraft Forever", "Forever MineCraft", "Insane MineCraft", "MineCraft Insanity", "MineCraft Creame", "Creme-de-MineCraft", "MineCraft Lotion", "MineCraft Butter", "MineCraft Food", "Foodie MineCraft", "MineCraft Ball", "MineCraft Pump", "MineCraft Scope", "Prisma MineCraft", "American MineCraft", "European MineCraft", "Asian MineCraft", "Brazilian MineCraft", "Canadian MineCraft", "The MineCraft Concept", "The MineCraft Book", "Concept MineCraft", "Future MineCraft", "White MineCraft", "Black MineCraft", "Red MineCraft", "MineCraft Snake", "MineCraft Bottle", "Watch Me MineCraft", "Get Your MineCraft On", "MineCraft Credit", "MineCraft Kiss", "Kiss of MineCraft", "MineCraft Store", "MineCraft In a Box", "MineCraft In a Bottle", "MineCraft Rabbit", "Task MineCraft", "MineCraft Milk", "Canned MineCraft", "Pass the MineCraft", "MineCraft 77", "1st Place MineCraft", "2nd Place MineCraft", "No Place Like MineCraft", "There's Nothing Like MineCraft", "It's a MineCraft!", "Don't Have a MineCraft", "Famous MineCraft", "Top MineCraft", "Cruelty Free MineCraft", "Vegan MineCraft", "Meat Easter's MineCraft", "The Champagne of MineCraft", "MineCraft Wine", "MineCraft Bracelet", "MineCraft Partners", "Wife's MineCraft", "Husband's MineCraft", "Kids MineCraft", "MineCraft for Kids", "MineCraft Business", "MineCraft 9000", "Not Your Grandmothers MineCraft", "MineCraft Calendar", "MineCraft Wrap", "Wrapped MineCraft", "MineCraft CK", "MineCraft Logo", "MineCraft Label", "MineCraft Shoe", "Badass MineCraft", "Off the Wall MineCraft", "MineCraft Pills", "MineCraft Tube", "MineCraft Gloss", "Swag MineCraft", "MineCraft Tablet", "MineCraft Phone", "Modular MineCraft", "MineCraft Strap", "MineCraft Ride", "MineCraft Size", "MineCraft Drive", "Yellow MineCraft", "Smart MineCraft", "MineCraft Smart", "Today MineCraft", "Popular MineCraft", "Celebrity MineCraft", "Fine MineCraft", "MineCraft Shoulder", "MineCraft Allergy", "MineCraft Clean", "Clean MineCraft", "Silky MineCraft", "Baby MineCraft", "Auto MineCraft", "Call of MineCraft", "MineCraft Spread", "MineCraft Knoll", "RX MineCraft", "MineCraft Tool", "MineCraft Smile", "Family MineCraft", "MineCraft Reality", "Chocolate MineCraft", "Naked MineCraft", "MineCraft Juice", "Freedom MineCraft", "MineCraft Square", "Looped MineCraft", "Plastic MineCraft", "MineCraft Belt", "Corn MineCraft", "Vodka MineCraft", "MineCraft Jar", "MineCraft Holder", "Suede MineCraft", "Purple MineCraft", "Steel MineCraft", "MineCraft Reserve", "MineCraft Weiser", "MineCraft Express", "Express MineCraft", "Quicky MineCraft", "MineCraft Gift", "Dual MineCraft", "Mono MineCraft", "Written MineCraft", "Bag of MineCraft", "MineCraft Con", "MineCraft Shop", "BRB MineCraft", "Hair MineCraft", "Stressed MineCraft", "Timeless MineCraft", "Aged MineCraft", "Poison MineCraft", "MineCraft of the Gods", "MineCraft Empire", "Blast of MineCraft", "Original MineCraft", "Fast MineCraft", "Mega MineCraft", "MineCraft Giant", "MineCraft Patch", "MineCraft 100", "MineCraft Potion", "MineCraft Elixer", "Blue MineCraft", "MineCraft Onion", "MineCraft Bench", "MineCraft Choice", "The Choice of MineCraft", "MineCraft Favorite", "Recess MineCraft", "MineCraft Sport", "MineCraft Armor", "MineCraft Re-fill", "Smiley MineCraft", "Becoming MineCraft", "Wrapped MineCraft", "MineCraft Hair", "MineCraft Soul", "MineCraft Pizza", "Bacon MineCraft", "MineCraft Lips", "Fantastical MineCraft", "Magical MineCraft", "Motivational MineCraft", "Awake MineCraft", "MineCraft Awake", "MineCraft Ready", "MineCraft Alert", "MineCraft Code Red", "Code Red MineCraft", "Mountain Time MineCraft", "Clean MineCraft", "MineCraft Ritual", "Cleansing MineCraft", "Ready MineCraft"]


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
    for i in range(30):
        fake_shop = Shop(
            name=random.choice(shop_names),
            description=fake.paragraph(nb_sentences=5),
            shop_image_url=random.choice(images),
            owner_id = random.choice(owners)
        )
        db.session.add(fake_shop)
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
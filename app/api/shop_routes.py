from crypt import methods
from flask import Blueprint, jsonify, request, session, redirect
from flask_login import current_user, login_user, logout_user, login_required
from itsdangerous import json
from app.models import User, Shop, Merchandise, db
from ..forms import ShopForm, MerchandiseForm

shops_routes = Blueprint('shops', __name__)


# READ ALL
@shops_routes.route("/")
def home():
    allShops = Shop.query.all()
    return {shop.id: shop.to_dict() for shop in allShops}

# READ SHOP BY ID
@shops_routes.route("/<int:shopId>")
def shop_details(shopId):
    shop = Shop.query.get(shopId)
    return shop.to_dict()

# READ SHOP AND MERCH?
# @shops_routes.route("/<int:shopId>")
# def shop_details_merch(shopId):
#     shop = Shop.query.get(shopId)
#     merch = Merchandise.query.filter_by(shop_id=shopId).all()
#     return merch.to_dict()

# CREATE
@shops_routes.route("/", methods=["POST"])
@login_required
def make_shop():
    form = ShopForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_shop = Shop(
            name = form.data['name'],
            description = form.data['description'],
            shop_image_url = form.data['shop_image_url'],
            owner_id = current_user.id
            )
        db.session.add(new_shop)
        db.session.commit()
        return jsonify(new_shop.to_dict()), 200
    else: return {"errors": form.errors}, 401

# UPDATE
@shops_routes.route("/<int:shopId>", methods=["PUT"])
@login_required
def update_shop(shopId):
    form = ShopForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    shop = Shop.query.get(shopId)
    if form.validate_on_submit():
            shop.name = form.data['name']
            shop.description = form.data['description']
            shop.owner_id = current_user.id
            shop.shop_image_url = form.data['shop_image_url']
    db.session.commit()
    print("UPDATE SHOP ROUTE IN BACKEND: ", shop)
    return shop.to_dict()


# DELETE
@shops_routes.route("/<int:shopId>", methods=["DELETE"])
@login_required
def delete_shop(shopId):
    shop = Shop.query.get(shopId)
    db.session.delete(shop)
    db.session.commit()
    return {
        "statusCode": 200,
        "message": "deleted successfully"
    }
from crypt import methods
from flask import Blueprint, jsonify, request, session, redirect
from flask_login import current_user, login_user, logout_user, login_required
from itsdangerous import json
from app.models import User, Shop, Merchandise, db
from ..forms import ShopForm, MerchandiseForm

shops_routes = Blueprint('shops', __name__)


# READ
@shops_routes.route("/")
def home():
    allShops = Shop.query.all()
    return {shop.id: shop.to_dict() for shop in allShops}

# READ
@shops_routes.route("/<int:shopId>")
def shop_details(shopId):
    shop = Shop.query.get(shopId)
    return shop.to_dict()

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
            owner_id = current_user.id,
            shop_image_url = form.data['imageUrl']
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
            shop.name = form.data['name'],
            shop.description = form.data['description'],
            shop.ownerId = current_user.id,
            shop.shop_image_url = form.data['imageUrl']
    db.session.commit()
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
from crypt import methods
from flask import Blueprint, jsonify, request, session, redirect
from flask_login import current_user, login_user, logout_user, login_required
from itsdangerous import json
from app.models import User, Shop, Merchandise, db
from ..forms import ShopForm, MerchandiseForm

merch_routes = Blueprint('merch', __name__)


# READ
@merch_routes.route("/")
def merch_home():
    allMerch = Merchandise.query.all()
    return jsonify({merch.id: merch.to_dict() for merch in allMerch})

# READ
@merch_routes.route("/<int:merchId>")
def merch_details(merchId):
    merch = Merchandise.query.get(merchId)
    return merch.to_dict()

# CREATE
@merch_routes.route("/", methods=["POST"])
@login_required
def new_merch():
    form = MerchandiseForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_merch = Merchandise(
            name = form.data['name'],
            description = form.data['description'],
            owner_id = current_user.id,
            merch_image_url = form.data['merch_image_url'],
            shop_id = form.data['shop_id']
            )
        db.session.add(new_merch)
        db.session.commit()
        return new_merch.to_dict()

# UPDATE
@merch_routes.route("/<int:merchId>", methods=["PUT"])
@login_required
def update_merch(merchId):
    form = MerchandiseForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    merch = Merchandise.query.get(merchId)
    if form.validate_on_submit():
            merch.name = form.data['name'],
            merch.description = form.data['description'],
            merch.ownerId = current_user.id,
            merch.shop_id = merch.shop_id
            merch.merch_image_url = form.data['merch_image_url']
    db.session.commit()
    return merch.to_dict()


# DELETE
@merch_routes.route("/<int:merchId>", methods=["DELETE"])
@login_required
def delete_merch(merchId):
    merch = Shop.query.get(merchId)
    db.session.delete(merch)
    db.session.commit()
    return {
        "statusCode": 200,
        "message": "deleted successfully"
    }
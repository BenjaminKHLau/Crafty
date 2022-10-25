from crypt import methods
from flask import Blueprint, jsonify, request, session, redirect
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, Shop, Merchandise, db
from ..forms import ShopForm, MerchandiseForm

shops_routes = Blueprint('shops', __name__)



@shops_routes.route("/")
def home():
    pass


@shops_routes.route("/<int:shopId>")
def shop_details():
    pass


@shops_routes.route("/", methods=["POST"])
@login_required
def make_shop():
    form = ShopForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_shop = Shop(
            name = form.data['name'],
            description = form.data['description'],
            ownerId = current_user.id,
            imageUrl = form.data['imageUrl'],
            )
        db.session.add(new_shop)
        db.session.commit()
        return new_shop.to_dict()


@shops_routes.route("/")
@login_required
def update_shop():
    pass
from crypt import methods
from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

shops = Blueprint('shops', __name__)



@shops.route("/")
def home():
    pass


@shops.route("/<int:shopId>")
def shop_details():
    pass


@shops.route("/", methods=["POST"])
@login_required
def make_shop():
    pass


@shops.route("/")
@login_required
def update_shop():
    pass
from crypt import methods
from flask import Blueprint, jsonify, request, session, redirect
from flask_login import current_user, login_user, logout_user, login_required
from itsdangerous import json
from app.models import User, Shop, Merchandise, db
from ..forms import ShopForm, MerchandiseForm

cart_routes = Blueprint('cart', __name__)
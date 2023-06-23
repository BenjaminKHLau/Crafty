from crypt import methods
from flask import Blueprint, jsonify, request, session, redirect
from flask_login import current_user, login_user, logout_user, login_required
from itsdangerous import json
from app.models import User, Shop, Merchandise, db, Cart
from ..forms import ShopForm, MerchandiseForm

cart_routes = Blueprint('cart', __name__)

# @cart_routes.route('/api/items', methods=['GET'])
# def get_items():
#     items = Merchandise.query.all()
#     return jsonify([{'id': item.id, 'name': item.name, 'price': item.price} for item in items])

# @cart_routes.route('/api/items/<int:item_id>', methods=['GET'])
# def get_item(item_id):
#     item = Merchandise.query.get_or_404(item_id)
#     return jsonify({'id': item.id, 'name': item.name})

@cart_routes.route('/', methods=['GET'])
@login_required
def get_cart():
    items = Cart.query.join(Merchandise).add_columns(Merchandise.id, Merchandise.name).all()
    return jsonify([{'id': item.id, 'name': item.name} for item in items])

@cart_routes.route('/', methods=['POST'])
@login_required
def add_to_cart():
    data = request.get_json()
    item_id = data.get('merch_id')
    item = Merchandise.query.get_or_404(item_id)
    cart_item = Cart(merch=item)
    db.session.add(cart_item)
    db.session.commit()
    return jsonify({'message': f'{item.name} added to cart successfully'})


@cart_routes.route('/<int:item_id>', methods=['DELETE'])
@login_required
def remove_from_cart(item_id):
    cart_item = Cart.query.filter_by(merch_id=item_id).first_or_404()
    db.session.delete(cart_item)
    db.session.commit()
    return jsonify({'message': f'Merchandise {item_id} removed from cart successfully'})

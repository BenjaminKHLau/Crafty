from crypt import methods
from flask import Blueprint, jsonify, request, session, redirect
from flask_login import current_user, login_user, logout_user, login_required
from itsdangerous import json
from app.models import User, Shop, Merchandise, MerchReview, db
from ..forms import ShopForm, MerchandiseForm, MerchReviewForm

merch_rev_routes = Blueprint('merch_reviews', __name__)


# READ
@merch_rev_routes.route("/")
def merch_rev_home():
    allMerchReviews = MerchReview.query.all()
    return {review.id: review.to_dict() for review in allMerchReviews}

@merch_rev_routes.route("/<int:MRId>")
def review_by_id(MRId):
    review = MerchReview.query.get(MRId)
    return review.to_dict()

# CREATE
@merch_rev_routes.route("/", methods=["POST"])
@login_required
def new_review():
    form = MerchReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_rev = MerchReview(
            # id = form.data['id'],
            merch_id = form.data['merch_id'],
            review = form.data['review'],
            rating = form.data['rating'],
            author_id = current_user.id
        )
        db.session.add(new_rev)
        db.session.commit()
        return jsonify(new_rev.to_dict()), 200
    else: return {"errors": form.errors}, 401
    
    
# UPDATE
@merch_rev_routes.route("/<int:MRId>", methods=["PUT"])
@login_required
def update_review(MRId):
    form = MerchReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    merch_rev = MerchReview().query.get(MRId)
    if form.validate_on_submit():
        merch_rev.review = form.data['review']
        merch_rev.rating = form.data['rating']
        
    db.session.commit()
    return merch_rev.to_dict()

# DELETE
@merch_rev_routes.route("/<int:MRId>", methods=["DELETE"])
@login_required
def delete_review(MRId):
    review = MerchReview.query.get(MRId)
    db.session.delete(review)
    db.session.commit()
    return {
        "statusCode": 200,
        "message": "deleted successfully"
    }
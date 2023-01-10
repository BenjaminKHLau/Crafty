from .db import db
from sqlalchemy.orm import relationship

class ShopReview(db.Model):
    __tablename__ = "shop_reviews"
    
    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(255), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    # shop_review_image_url = db.Column(db.String)
    
    shop_id = db.Column(db.Integer, db.ForeignKey("shops.id"), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
#     # placeholder = db.Column(db.Integer, db.ForeignKey("merch.id"), nullable=False)
    
#     # RELATIONSHIPS
    shop = db.relationship("Shop", back_populates="reviews")
    # shop_reviews = db.relationship("Shop", back_populates="reviews")
    # merchy = db.relationship("Merchandise", back_populates="merchy")
    author = db.relationship("User", back_populates="shop_review_author")
    
    
    def to_dict(self):
        response = {
            "id": self.id,
            "review": self.review,
            "shop_id": self.shop_id,
            # "shop_review_image_url": self.shop_review_image_url,
            "author_id": self.author_id
        }

        return response
from .db import db
from sqlalchemy.orm import relationship

class MerchReview(db.Model):
    __tablename__ = "merch_reviews"
    
    id = db.Column(db.Integer, primary_key = True)
    review = db.Column(db.String())
    rating = db.Column(db.Integer(), nullable=False)
    author_id = db.Column(db.Integer(), nullable=False)
    
    merch_id = db.Column(db.Integer, db.ForeignKey("merch.id"), nullable=False)
    # Relationships
    merch = db.relationship("Merchandise", back_populates="merch_review")
    
    def to_dict(self):
        response = {
            "id": self.id,
            "review": self.review,
            "rating": self.rating,
            "author_id": self.author_id
        }

        return response
from .db import db
from sqlalchemy.orm import relationship

class Cart(db.Model):
    
    __tablename__ = "cart"
    
    id = db.Column(db.Integer, primary_key=True)
    merch_id = db.Column(db.Integer, db.ForeignKey('merch.id'), nullable=False)

    merch = db.relationship('Merchandise', back_populates='cart_items')

    def __repr__(self):
        return f"Cart(id={self.id}, item={self.item})"
    
    def to_dict(self):
        return {
            "merch_id": self.merch_id,
            "merch": [item.to_dict() for item in self.merch]
        }
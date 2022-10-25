from .db import db
from sqlalchemy.orm import relationship

class Merchandise(db.Model):
    __tablename__ = "merch"
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    merch_image_url = db.Column(db.String)
    
    shop_id = db.Column(db.Integer, db.ForeignKey("shops.id"), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    
    # RELATIONSHIPS
    shop = relationship("Shop", back_populates="merch")
    # review = relationship("Review", back_populates="business", cascade="all, delete-orphan")
    
    
    def to_dict(self):
        response = {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "shop_id": self.shop_id,
            "merch_image_url": self.merch_image_url,
            "owner_id": self.owner_id
        }

        return response
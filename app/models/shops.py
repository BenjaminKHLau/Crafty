from .db import db
from sqlalchemy.orm import relationship

class Shop(db.Model):
    __tablename__ = 'shops'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    shop_image_url = db.Column(db.String)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    
    
    
    # RELATIONSHIPS
    merch = relationship("Merchandise", back_populates="shop", cascade="all, delete-orphan")
    
    def to_dict(self):
        response = {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "owner_id": self.owner_id,
            "shop_image_url": self.shop_image_url
        }

        return response
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.orm import relationship


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    email = db.Column(db.String(50), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    
    #FOREIGN KEY
    # cart_id = db.Column(db.Integer, db.ForeignKey("cart.id"))
    
    #RELATIONSHIPS
    shop_review_author = db.relationship("ShopReview", back_populates="author")
    cart = db.relationship('Cart', back_populates='user')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError



class ShopForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired(message="Please provide a name between 3-40 characters")])
    owner_id = IntegerField('ownerId', validators=[DataRequired(message="Please provide a description between 3-255 characters")])
    shop_image_url = StringField('imageUrl') #optional
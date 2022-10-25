from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError



class ShopForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    ownerId = IntegerField('ownerId', validators=[DataRequired()])
    imageUrl = StringField('imageUrl') #optional
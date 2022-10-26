from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError

class MerchandiseForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    owner_id = IntegerField('ownerId', validators=[DataRequired()])
    shop_id = IntegerField('storeId', validators=[DataRequired()])
    merch_image_url = StringField('imageUrl')
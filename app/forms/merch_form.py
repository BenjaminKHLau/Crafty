from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError

class MerchandiseForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    ownerId = IntegerField('ownerId', validators=[DataRequired()])
    storeId = IntegerField('storeId', validators=[DataRequired()])
    imageUrl = StringField('imageUrl')
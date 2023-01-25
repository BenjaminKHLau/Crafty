from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError

class MerchReviewForm(FlaskForm):
    item_id = IntegerField('itemId', validators=[DataRequired(message="Item ID")])
    review = StringField('review')
    author_id = IntegerField('authorId', validators=[DataRequired(message="Who is writing this review?")])
    rating = IntegerField('rating', validators=[DataRequired(message="Provide a rating between 1-5")])
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError

class MerchReviewForm(FlaskForm):
    merch_id = IntegerField('merchId', validators=[DataRequired(message="Merch ID")])
    review = StringField('review')
    author_id = IntegerField('authorId')
    rating = IntegerField('rating', validators=[DataRequired(message="Provide a rating between 1-5")])
"""empty message

Revision ID: c468b3fc4406
Revises: 
Create Date: 2023-06-23 00:18:28.644650

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c468b3fc4406'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=20), nullable=False),
    sa.Column('email', sa.String(length=50), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('shops',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=False),
    sa.Column('shop_image_url', sa.String(), nullable=True),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('merch',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=False),
    sa.Column('merch_image_url', sa.String(), nullable=True),
    sa.Column('shop_id', sa.Integer(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['shop_id'], ['shops.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shop_reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('review', sa.String(length=255), nullable=False),
    sa.Column('stars', sa.Integer(), nullable=False),
    sa.Column('shop_id', sa.Integer(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['author_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['shop_id'], ['shops.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('cart',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('merch_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['merch_id'], ['merch.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('merch_reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('review', sa.String(length=240), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=True),
    sa.Column('merch_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['merch_id'], ['merch.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('merch_reviews')
    op.drop_table('cart')
    op.drop_table('shop_reviews')
    op.drop_table('merch')
    op.drop_table('shops')
    op.drop_table('users')
    # ### end Alembic commands ###
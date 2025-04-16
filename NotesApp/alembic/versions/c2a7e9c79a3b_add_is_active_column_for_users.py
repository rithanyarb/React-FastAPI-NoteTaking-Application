"""add is_active column for users

Revision ID: c2a7e9c79a3b
Revises: 
Create Date: 2025-04-15 17:53:58.925180

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'c2a7e9c79a3b'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

"""Upgrade schema."""
def upgrade() -> None:
    op.add_column('users', sa.Column('is_active', sa.Boolean(), server_default='1'))

"""Downgrade schema."""
def downgrade() -> None:
    op.drop_column('users', 'is_active')

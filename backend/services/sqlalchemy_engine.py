from sqlalchemy import create_engine
from django.conf import settings

DATABASE_URL = f"postgresql+psycopg2://{settings.DATABASES['default']['USER']}:{settings.DATABASES['default']['PASSWORD']}@" \
               f"{settings.DATABASES['default']['HOST']}:{settings.DATABASES['default']['PORT']}/{settings.DATABASES['default']['NAME']}"

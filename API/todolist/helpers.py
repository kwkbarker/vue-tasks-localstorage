from functools import wraps
from pickle import FALSE
from flask import session, request, redirect, url_for
from flask_login import current_user
from todolist.models import User

# login required decorator for task view
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not current_user.is_authenticated:
            return redirect(url_for('login', next=request.url))
        return f(*args, **kwargs)
    return decorated_function

def validate_username(username_to_check):
        user = User.query.filter_by(username=username_to_check).first()
        print(user)
        if user:
            return False
        else:
            return True

def validate_email_address(email_address_to_check):
    email = User.query.filter_by(email=email_address_to_check).first()
    if email:
        return False
    else:
        return True


"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)

def create_token(username, password):
    user = User.query.filter_by(username=username, password=password).first()
    if user is None:
        return None
    else:
        return create_access_token(identity=user.id)

@api.route("/login", methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    print(username)
    print(password)
    token = create_token(username, password)
    return jsonify({ "token": token })
    
@api.route("/register", methods=["POST"])
def register():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    try:
        user = User(username = username, password = password)
        db.session.add(user)
        db.session.commit()
        token = create_token(username, password)
        return jsonify({ "token": token }), 200
    except:
        return jsonify({'message': 'error'}), 400

    
    

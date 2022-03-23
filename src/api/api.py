import os
import twitter
from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS

# API authentication
def api_auth():
    api = twitter.Api(consumer_key=os.getenv('CONSUMER_KEY'),
                    consumer_secret=os.getenv('CONSUMER_SECRET'),
                    access_token_key=os.getenv('ACCESS_TOKEN'),
                    access_token_secret=os.getenv('ACCESS_TOKEN_SECRET'))

    return api

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return {"batman": "i'm vengeance"}

# Get info for all 3 endpoints for a user
@app.route('/<name>')
def all(name):
    api = api_auth()

    try:
        user = api.GetUser(screen_name=name)
        followers = api.GetFollowers(screen_name=name)
        friends = api.GetFriends(screen_name=name)
    except twitter.error.TwitterError:
        return {"error": "user not found"}
    
    user_profile = {
        'name': user.name,
        'bio': user.description,
        'id': user.id_str,
        'screenName': user.screen_name,
        'profileImageUrl': user.profile_image_url,
        'followersCount': user.followers_count,
        'friendsCount': user.friends_count
    }

    followers = [(u.id, u.screen_name, u.name) for u in followers]
    friends = [(u.id, u.screen_name, u.name) for u in friends]

    return {"user": user_profile, "followers": followers, "friends": friends,}

@app.route('/user/<name>')
def user(name):
    api = api_auth()
    
    try:
        r = api.GetUser(screen_name=name)
    except twitter.error.TwitterError:
        return {"error": "user not found"}

    user_profile = {
        'name': r.name,
        'bio': r.description,
        'id': r.id_str,
        'screenName': r.screen_name,
        'profileImageUrl': r.profile_image_url,
        'followersCount': r.followers_count,
        'friendsCount': r.friends_count
    }

    return {'user': user_profile}

@app.route('/followers/<name>')
def followers(name):
    api = api_auth()

    try:
        r = api.GetFollowers(screen_name=name)
    except twitter.error.TwitterError:
        return {"error": "user not found"}

    followers = [(u.id, u.screen_name, u.name) for u in r]

    return {'followers': followers}

@app.route('/friends/<name>')
def friends(name):
    api = api_auth()
    
    try:
        r = api.GetFriends(screen_name=name)
    except twitter.error.TwitterError:
        return {"error": "user not found"}

    friends = [(u.id, u.screen_name, u.name) for u in r]

    return {'friends': friends}

if __name__ == '__main__':
    load_dotenv('../')
    app.run(debug=False)
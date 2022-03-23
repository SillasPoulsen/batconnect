import os
import twitter
from dotenv import load_dotenv
from flask import Flask

# API authentication
def api_auth():
    api = twitter.Api(consumer_key=os.getenv('CONSUMER_KEY'),
                    consumer_secret=os.getenv('CONSUMER_SECRET'),
                    access_token_key=os.getenv('ACCESS_TOKEN'),
                    access_token_secret=os.getenv('ACCESS_TOKEN_SECRET'))

    return api

# Wrap api call in a error handler
def call_api_error_managed(name, api_call_dict):
    returns = {}

    try:
        for k, v in api_call_dict.items():
            returns[k] = v(screen_name=name)
    except twitter.error.TwitterError as err:
        print("TWITTER API ERROR: ", err)
        return {"error": "user not found"}
    return returns

# Extract user info from response
def take_user_info(r):
    user_profile = {
        'name': r["user"].name,
        'bio': r["user"].description,
        'id': r["user"].id_str,
        'screenName': r["user"].screen_name,
        'profileImageUrl': r["user"].profile_image_url,
        'followersCount': r["user"].followers_count,
        'friendsCount': r["user"].friends_count
    }

    return user_profile

app = Flask(__name__)

@app.route('/')
def index():
    return {"batman": "i'm vengeance"}

# Get info for all 3 endpoints for a user
@app.route('/<name>')
def all(name):
    api = api_auth()

    api_calls = {
        "user": api.GetUser,
        "followers": api.GetFollowers,
        "friends": api.GetFriends
    }

    r = call_api_error_managed(name, api_calls)
    if "error" in r.keys():
        return r
    
    user_profile = take_user_info(r)
    followers = [(u.id, u.screen_name, u.name) for u in r["followers"]]
    friends = [(u.id, u.screen_name, u.name) for u in r["friends"]]

    return {"user": user_profile, "followers": followers, "friends": friends,}

@app.route('/user/<name>')
def user(name):
    api = api_auth()
    
    api_calls = {
        "user": api.GetUser
    }

    r = call_api_error_managed(name, api_calls)
    if "error" in r.keys():
        return r
    return {'user': take_user_info(r)}

@app.route('/followers/<name>')
def followers(name):
    api = api_auth()
    
    api_calls = {
        "followers": api.GetFollowers
    }

    r = call_api_error_managed(name, api_calls)
    if "error" in r.keys():
        return r

    followers = [(u.id, u.screen_name, u.name) for u in r['followers']]
    return {'followers': followers}

@app.route('/friends/<name>')
def friends(name):
    api = api_auth()
    
    api_calls = {
        "friends": api.GeFriendst
    }

    r = call_api_error_managed(name, api_calls)
    if "error" in r.keys():
        return r
    
    friends = [(u.id, u.screen_name, u.name) for u in r['friends']]

    return {'friends': friends}

if __name__ == '__main__':
    load_dotenv('../')
    app.run(debug=False)
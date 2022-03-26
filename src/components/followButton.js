import React from 'react';
import { follow } from '../services/follow'

const FollowButton = ({ ethAddress, id }) => {

    const handleFollow = () => {
        const profileId = id;
    
        follow(profileId, ethAddress)
    }
    return (
        <div className="user-option mx-auto sm:ml-auto sm:mr-0">
            <button
                onClick={() => handleFollow()} 
                className="h-10 px-5 m-2 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700">
            Follow
            </button>
        </div>
    )
}

export default FollowButton;
import React from 'react'
import { createProfile } from '../services/create-profile.ts'

const CreateProfileButton = ({lensHandle, lensImage, lensBio}) => {

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => createProfile(lensHandle, lensImage)}
        >
            Mint my Lens Profile
        </button>
    );
};

export default CreateProfileButton;
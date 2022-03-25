import React from 'react'
import { createProfile } from '../services/create-profile.ts'

const CreateProfileButton = ({lensHandle, lensImage, lensBio}) => {

    return (
        <button
            className="mt-4 w-full bg-purple-500 font-semibold py-2 rounded-md  tracking-wide"
            onClick={() => createProfile(lensHandle, lensImage)}
        >
            Mint my Lens Profile
        </button>
    );
};

export default CreateProfileButton;
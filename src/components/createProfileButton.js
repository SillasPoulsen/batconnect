import React from 'react'
import { createProfile } from '../services/create-profile.ts'

const CreateProfileButton = ({lensHandle, lensImage, lensBio}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        createProfile(lensHandle, lensImage);
    }

    return (
        <button
            className="mt-4 w-full bg-purple-500 font-semibold py-2 rounded-md  tracking-wide"
            onClick={(e) => handleSubmit(e)}
        >
            Mint my Lens Profile
        </button>
    );
};

export default CreateProfileButton;
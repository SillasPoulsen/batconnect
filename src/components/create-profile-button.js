import React from 'react'
import { createProfile } from '../services/create-profile.ts'

const CreateProfileButton = () => {

    const handle = "newuser341231"
    const profileUri = "https://rollingstone.uol.com.br/media/_versions/keanu_reeves_como_neo_em_matrix_divulgacao_widelg.jpg"

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => createProfile(handle, profileUri)}
        >
            create profile
        </button>
    );
};

export default CreateProfileButton;
import React from "react";
import { useNavigate } from "react-router-dom";
import { createProfile } from "../services/create-profile.ts";

const CreateProfileButton = ({
  lensHandle,
  lensImage,
  lensBio,
  ethAddress,
  setErrorMessage,
  setIsLoading,
}) => {
  const navigate = useNavigate();

  console.log("this is the ethAdress in CreateProfileButton", ethAddress);
  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      console.log(lensImage);
      await createProfile(lensHandle, lensImage);
      navigate(`/lensprofile/${ethAddress}/0`);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(
        "Something went wrong, maybe the handle has already been taken"
      );
      console.log(error);
    }
  };

  return (
    <button
      className="mt-4 w-full bg-purple-500 font-semibold py-2 rounded-md  rounded-full bg-purple-800 text-white  hover:text-black ; hover:text-black hover:bg-purple-900"
      onClick={(e) => handleSubmit(e)}
    >
      Mint my Lens Profile
    </button>
  );
};

export default CreateProfileButton;

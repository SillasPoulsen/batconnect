import { useEffect, useState } from "react";
import { profiles } from "../services/get-profiles.ts";
import { useNavigate, useParams } from "react-router-dom";

function WalletProfile() {
  const navigate = useNavigate();

  const [allProfiles, setAllProfiles] = useState([]);

  console.log(allProfiles);

  let { ethAddress } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await profiles(ethAddress);
      setAllProfiles(response.profiles.items);
    };
    fetchData();
  }, [allProfiles, ethAddress]);

  function handleClick(idx, e) {
    e.preventDefault();
    navigate(`/lensprofile/${ethAddress}/${idx}`);
  }

  return (
    <div class="flex flex-col items-center justify-center min-h-screen p-16 bg-slate-200">
      <h1 class="my-10 font-medium text-3xl sm:text-4xl font-black">
        Follow a Members
        <span class="day" style={{ display: "inline-block" }}>
          😎
        </span>
        <span class="night" style={{ display: "none" }}>
          👀
        </span>
      </h1>
      <div class="mb-4">
        <button
          class="toggle-theme btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
          type="button"
        >
          Dark
        </button>
      </div>
      <div class="user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4">
        {/* <!--User row --> */}
        {allProfiles &&
          allProfiles.map((address, idx) => {
            return (
              <div
                onClick={(event) => handleClick(idx, event)}
                class="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]"
              >
                <div class="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                  <div class="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                    {address.picture ? (
                      <img
                        class="avatar w-20 h-20 rounded-full"
                        src={address.picture.original.url}
                        alt="profilepicture"
                      ></img>
                    ) : (
                      <p>hello</p>
                    )}
                  </div>
                  <div class="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                    <a href="google.com" class="title font-medium no-underline">
                      {address.handle}
                    </a>
                    <div class="skills flex flex-col">
                      <span class="subtitle text-slate-500">
                        Marketing Liaison
                      </span>
                      <span class="subtitle text-slate-500">
                        Coordinator 💪
                      </span>
                    </div>
                  </div>
                </div>
                {/* <!--Button content --> */}
                <div class="user-option mx-auto sm:ml-auto sm:mr-0">
                  <button
                    class="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
                    type="button"
                  >
                    Follow
                  </button>
                </div>
                {/* <!--Close Button content --> */}
              </div>
            );
          })}

        <a
          class="show-more block w-10/12 mx-auto py-2.5 px-4 text-center no-underline rounded hover:bg-[#f6f8f9] font-medium duration-300"
          href="#/"
        >
          Show more members
        </a>
      </div>
    </div>
  );
}

export default WalletProfile;

/* 
<>
    <div>
      {allProfiles && (allProfiles.map((address, idx) => {
        return(
        <div onClick={ (event) => handleClick(idx, event) }>
          <p key={idx}>{address.handle}</p>
          { address.picture ? <img src={ address.picture.original.url } alt="profilepicture"></img> : <p>hello</p> }
          <p>{ address.bio }</p>
        </div>
        )
      }))}
    </div>
     */

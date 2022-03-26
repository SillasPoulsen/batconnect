import { useEffect } from "react";
import { profiles } from "../services/get-profiles.ts";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FollowButton } from "../components"

function WalletProfile({ allProfiles, setAllProfiles }) {
  const navigate = useNavigate();

  console.log(allProfiles);

  let { ethAddress } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await profiles(ethAddress);
      setAllProfiles(response.profiles.items);
    };
    fetchData();
  }, [allProfiles, ethAddress, setAllProfiles]);

  function handleClick(idx, e) {
    e.preventDefault();
    navigate(`/lensprofile/${ethAddress}/${idx}`);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-16 bg-slate-200">
      <p className="day" style={{ display: "inline-block" }}>
        Profiles owned by:
      </p>
      <h1 className="my-10 mt-0 font-medium text-3xl sm:text-4xl font-black">
        {ethAddress}
      </h1>
      <div className="user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4">
        {/* <!--User row --> */}
        { (allProfiles && allProfiles.length === 0) ? (
             <>
             <div className="h-screen  bg-slate-50 flex justify-center items-center w-full flex-col">
               <div
                 className="
                  spinner-border
                  animate-spin
                  inline-block
                  w-32
                  h-32
                  border-16
                  rounded-full
                  text-purple-500
                "
                 role="status"
               ></div>
               <div>
                 <p>Searching profiles...</p>
               </div>
             </div>
           </>
        ) : (
          allProfiles.map((address, idx) => {
            return (
              <div
                key={address}
                onClick={(event) => handleClick(idx, event)}
                className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]"
              >
                <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                  <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                    {address.picture ? (
                      <img
                        className="avatar w-20 h-20 rounded-full"
                        src={address.picture.original.url}
                        alt="profilepicture"
                      ></img>
                    ) : (
                      <img
                        className="avatar w-20 h-20 rounded-full"
                        src="https://cdn.britannica.com/21/75121-050-8CF5E1DB/Bats-structures-organs-sound-frequencies-signals-contexts.jpg"
                        alt="profilepicture"
                      ></img>
                    )}
                  </div>
                  <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                    <a
                      href="google.com"
                      className="title font-medium no-underline"
                    >
                      {address.handle}
                    </a>
                  </div>
                </div>
                <FollowButton ethAddress={ethAddress} id={address.id}/>
              </div>
            );}))}
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

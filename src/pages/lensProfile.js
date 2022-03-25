import { useEffect, useState } from "react";
import { profiles } from "../services/get-profiles.ts";
import { useParams } from "react-router-dom";

function LensProfile() {
  const [profile, setProfile] = useState([]);

  let { ethAddress, id } = useParams();
  console.log(id, ethAddress);

  useEffect(() => {
    const fetchData = async () => {
      const response = await profiles(ethAddress);
      setProfile(response.profiles.items[id]);
    };

    fetchData();
  }, [ethAddress, id]);

  return (
    <div class="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
      <div class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
        <div class=" h-32 overflow-hidden">
          <img
            class="w-full"
            src="https://thumbs.dreamstime.com/b/green-matrix-big-virtual-screen-49825584.jpg"
            alt=""
          />
        </div>
        <div class="flex justify-center px-5  -mt-12">
          {profile.picture ? (
            <img
              class="h-32 w-32 bg-white p-2 rounded-full   "
              src={profile.picture.original.url}
              alt=""
            />
          ) : (
            <img
              class="h-32 w-32 bg-white p-2 rounded-full   "
              src="https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png"
              alt=""
            />
          )}
        </div>
        <div class=" ">
          <div class="text-center px-14">
            <h2 class="text-gray-800 text-3xl font-bold">{profile.handle}</h2>
            <p class="text-gray-400 mt-2">{"@" + profile.handle}</p>
            <p class="mt-2 text-gray-600">{profile.bio}</p>
          </div>
          <hr class="mt-6" />
          <div class="flex  bg-gray-50 ">
            <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
              <p>
                <span class="font-semibold">0 </span> Followers
              </p>
            </div>
            <div class="border"></div>
            <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
              <p>
                {" "}
                <span class="font-semibold">0 </span> Following
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LensProfile;

//  <div>
//     {profile.picture ? (
//       <img src={profile.picture.original.url} alt="profilepicture"></img>
//     ) : (
//       <p>hello</p>
//     )}
//     <h3>{profile.handle}</h3>
//     <p>Bio:{profile.bio}</p>
//     </div>

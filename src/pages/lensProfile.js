import { useEffect, useState } from "react";
import { profiles } from "../services/get-profiles.ts";
import { useParams } from "react-router-dom";
import { TwitterShareButton } from "react-twitter-embed";
import { followers } from "../services/followers.ts";
import FollowButtonSmall from "../components/followButtonSmall";

function LensProfile() {
  const [profile, setProfile] = useState([]);
  const [amountFollowers, setAmountFollowers] = useState(0);
  const [lensid, setLensId] = useState();

  let { ethAddress, idx } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await profiles(ethAddress);
      setProfile(response.profiles.items[idx]);
      const id = response.profiles.items[idx].id;
      console.log("id", response.profiles.items[idx].id);
      const test = await followers(id);
      console.log("test", test);
      setLensId(id);
      setAmountFollowers(test.followers.items.length);
    };

    fetchData();
  }, [ethAddress, idx]);

  return (
    <div class="h-screen flex flex-wrap items-center  justify-center ">
      <div class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out rounded-xl p-0">
        <div class=" h-32 overflow-hidden">
          <img
            class="min-w-fits rounded-xl"
            src="https://previews.123rf.com/images/arsgera/arsgera2004/arsgera200400012/144578961-gemstone-diamond-or-shiny-glass-texture-pattern-kaleidoscope-background-3d-render-3d-illustration.jpg"
            alt=""
          />
        </div>
        <div class="flex justify-center px-5 -mt-12">
          {profile.picture ? (
            <img
              class="h-32 w-32 bg-white p-2 rounded-full"
              src={profile.picture.original.url}
              alt=""
            />
          ) : (
            <img
              class="h-32 w-32 bg-white p-2 rounded-full"
              src="https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png"
              alt=""
            />
          )}
        </div>
        <div class="flex-col items-center">
          <div class="text-center px-14 flex flex-col items-center">
            <h2 class="text-gray-800 text-3xl font-bold">{profile.handle}</h2>
            <p class="text-gray-400 mt-2">{"@" + profile.handle}</p>
            <p class="mt-2 text-gray-600">{profile.bio}</p>
            <div className="table content-evenly">
              <div className="table-row content-center">
                <div className="table-cell">
                  <TwitterShareButton
                    url={`http://localhost:3000/lensprofile/${ethAddress}/${idx}`}
                    options={{
                      text: "I've just created a profile on Lens",
                      via: "OpenBat",
                      size: "large",
                    }}
                  />
                </div>
                <div className="table-cell">
                  <FollowButtonSmall ethAddress={ethAddress} id={lensid} />
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-6" />
          <div class="flex  bg-gray-50 rounded-xl ">
            <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer rounded-xl">
              <p>
                <span class="font-semibold">{amountFollowers}</span> Followers
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

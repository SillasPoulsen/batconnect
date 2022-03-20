import { useEffect, useState } from 'react'
import { profiles } from '../../Queries/ProfilesQuery.ts'
import { useParams } from "react-router-dom";

function ProfilePage() {

    const [profile, setProfile] = useState([]);

  let { ethAddress, id } = useParams();
  console.log(id, ethAddress);
 
  console.log("profilssssssssse", profile)

  useEffect( () => {

    const fetchData = async () => {
    console.log("this is eth", ethAddress)
    const response = await profiles(ethAddress)
    setProfile(response.profiles.items[id]);
    }

    fetchData()
  }, [ethAddress, id])

  return (
    <>
      <div>
      { profile.picture ? <img src={ profile.picture.original.url } alt="profilepicture"></img> : <p>hello</p> }
        <h3>{profile.handle}</h3>
        <p>Bio:{profile.bio}</p>
      </div>
    </>
  );
}

export default ProfilePage;

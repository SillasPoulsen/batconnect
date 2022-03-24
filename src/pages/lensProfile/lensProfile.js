import { useEffect, useState } from 'react'
import { profiles } from '../../services/get-profiles.ts'
import { useParams } from "react-router-dom";
import { CreateProfileButton } from '../../components';

function LensProfile() {

    const [profile, setProfile] = useState([]);

  let { ethAddress, id } = useParams();
  console.log(id, ethAddress);

  useEffect( () => {

    const fetchData = async () => {
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
        <CreateProfileButton />
        
      </div>
    </>
  );
}

export default LensProfile;

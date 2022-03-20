import { useEffect, useState } from 'react'
import { profiles } from '../../Queries/ProfilesQuery.ts'
import { useHistory, useParams } from "react-router-dom";

function AllProfilesPage() {

  const history = useHistory();

  const [allProfiles, setAllProfiles] = useState([]);
  console.log("hereee", allProfiles);

  let { ethAddress } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await profiles(ethAddress)
      setAllProfiles(response.profiles.items);
    }
    fetchData();   
  }, [allProfiles, ethAddress]);

  function handleClick (idx, e)  {
    e.preventDefault();
    history.push(`/lensprofile/${ethAddress}/${idx}`)
  }

  return (
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
    </>
  );
}

export default AllProfilesPage;

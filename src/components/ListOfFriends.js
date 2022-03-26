import React from "react";
import { useState, useEffect } from "react";
import { profilesByHandler } from "../services/get-profiles-by-handle.ts";
import axios from "axios";


const ListOfFriends = ({ twitterHandle }) => {
  let [friends, setFriends] = useState([]);

  // const handleGetProfilesByHandler = () => {
  //   const profiles = profilesByHandler(twitterHandle);

  // }

  useEffect(() => {
    console.log(twitterHandle);
    axios
      .get("http://127.0.0.1:5000/friends/" + twitterHandle.replace("@", ""))
      .then(async (res) => {
        console.log(res.data.friends);
        const dataArray = res.data.friends
        const result = dataArray.map(a => a.screenName)
        const testArray = ['jocorrei42', 'CalendarDefi', '123123dadasd131dskjdslkj', '123123dadasd131dskjdslkj', '123123dadasd131dskjdsl', '123123dadasd131kjdslkj', '12312dasd131dskjdslkj', '123123dadasd131dskjdslk', '123123dadas1dskjdslkj', '123123dadasd131dlkj', '123adasd131dskjdslkj', '1231131dskjdslkj', '123123dadasd131dskjdslkj', '123123dadasd131dskjdslkj', '123123dadasd131dskjdslkj', '123123dadasd131dskjdslkj', '123123dadasd131dskjdslkj', '123123dadasd131dskjdslkj', '123123dadasd131dskjdslkj' ]
        console.log("here ", result, typeof result, typeof testArray);
        const friendsArray = await profilesByHandler(testArray)
        console.log(friendsArray);
      })
  }, [twitterHandle]);
  
  return (
    <>
      <div>
      </div>
    </>
  );
};

export default ListOfFriends;

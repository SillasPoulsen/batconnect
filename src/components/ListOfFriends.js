import React from "react";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";

const ListOfFriends = ({ twitterHandle }) => {
  let [friends, setFriends] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/friends/" + twitterHandle.replace("@", ""))
      .then((res) => {
        console.log(res.data.friends[0].screenName);
        setFriends(res.data.friends);
      });
  }, [twitterHandle]);
  return (
    <>
      <div>
        <h3>{friends[1].screenName}</h3>
      </div>
    </>
  );
};

export default ListOfFriends;

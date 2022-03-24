import React from "react";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";

const ListOfFriends = ({ twitterHandle }) => {
  let [friends, setFriends] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/followers/" + twitterHandle.replace("@", ""))
      .then((res) => {
        console.log(res.data.followers[0][1]);
        setFriends(res.data.followers);
      });
  }, []);
  return (
    <>
      <div>
        <h3>{friends}</h3>
      </div>
    </>
  );
};

export default ListOfFriends;

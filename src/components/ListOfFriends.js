import React from "react";
import { Fragment, useState, useEffect } from "react";
import axios from "axios"



const ListOfFriends = ({twitterHandle}) => {
  let [friendsList , setFriendsList] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/friends/' + twitterHandle.replace('@', ''))
        .then(res => {
        })
  }, [])
  return(
    <>
    <p>list of friends, one on each line with a follow button on each line</p>
    </>
  )
}

export default ListOfFriends
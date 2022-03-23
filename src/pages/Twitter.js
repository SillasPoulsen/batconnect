import TwitterHandleForm from "../components/twitterHandleForm";
import NewLens from "../components/newLens";
import react from "react";
import { Fragment, useState } from "react";

const Twitter = () => {
const [twitterHandle, setTwitterHandle] = useState('@you');
const [toggle, setToggle] = useState(true);
if (toggle){
  return(
    <>
      <TwitterHandleForm twitterHandle={twitterHandle} setTwitterHandle={setTwitterHandle}/>
      <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() =>{setToggle(false)}}>Done</button>
    </>
  )
}
else{
  return(
    <>
      <NewLens twitterHandle={twitterHandle} setTwitterHandle={setTwitterHandle}/>
    </>
  )
}
}

export default Twitter;
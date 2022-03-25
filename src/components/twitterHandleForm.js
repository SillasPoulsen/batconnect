import React from "react";
import { Fragment } from "react";

const TwitterHandleForm = ({ twitterHandle, setTwitterHandle, setToggle }) => {
  return (
    <Fragment>
   <div className="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center" >
  	<form className="m-4 flex" onSubmit={() => setToggle(false)} >
    	<input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" 
      placeholder="@Your Twitter Handle" 
      onChange={(e) => setTwitterHandle(e.target.value)} 
      />
		<button className="px-8 rounded-r-lg bg-purple-400  text-gray-800 font-bold p-4 uppercase border-purple-500 border-t border-b border-r"
     onClick={() => {setToggle(false);}}
    >Let's go</button>
	</form>
  </div>
    </Fragment>
  );
};

export default TwitterHandleForm;

{/* <form
className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
onSubmit={() => setToggle(false)}
>
<label className="block text-gray-500 font-bold md:text_center mb-1 md:mb-0 pr-4">
  Enter your Twitter Handle
</label>
<input
  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
  id="inline-full-name"
  type="text"
  value={twitterHandle}
  onChange={(e) => setTwitterHandle(e.target.value)}
></input>
</form>
<button
className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
type="button"
onClick={() => {
  setToggle(false);
}}
>
Done
</button> */}
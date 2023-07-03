import React from "react";

function Desktop() {
  return (
    <div className="">
      <div className="flex w-[1200px] ml-32 rounded-md h-[550px] mt-10 bg-white pl-28 pt-14 ">
        {/* <div className="flex justify-between w-[250px]  h-14  bg-white">
          <button className="bg-blue-700 rounded-xl   w-24 h-10 text-white">Premium</button>
          <p className="text-blue-500">HTML</p>
          <p className="text-blue-800">CSS</p>
          <p className="text-pink-950 ">JS</p>
        </div> */}
        <div className=" w-[700px] pt-20">
          <h1 className="text-3xl pl- pb-4">password generator app</h1>
          <p className="  text-black pl-">
            This app will be an excellent test of your HTML, CSS, and JS skills.
            You'll build custom form controls and use JavaScript to generate
            random passwords.
          </p>
          <button className="bg-rose-800 h-14 w-48  text-2xl rounded-full mt-3">Start Challenges</button>
        </div>
        <div>
          {" "}
          <img  className="pb-10 pr-20" src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/nvjjyhvhqfwnjseojdgg.jpg" />
          <div className="flex justify-between"> <button className=" bg-blue-800 h-10 rounded-full w-32">Desktop Design</button>
          <button className=" bg-zinc-400 h-10 rounded-full w-32">Active States</button>
          <button className=" bg-zinc-400 h-10 rounded-full w-32"> Tablet Design</button>
          <button className=" bg-zinc-400 h-10 rounded-full w-32"> Mobile Design</button>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default Desktop;

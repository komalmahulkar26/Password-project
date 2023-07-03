import React from "react";

function Rfce() {
  return (
    <div className=" flex justify-between ml-10 mt-12 mb-10 ">
     <div  className="">
        <div className="">
          <h1 className="text-3xl text-blue-500">stay up to date</h1>
          <p className="">
            with new challenges, featured solutions, selected articles and our
            latest news
          </p>
          <div className="mt-5 mb-3">
        <input className="w-52 h-10 rounded-sm pl-2" type="email" placeholder="Email@example.com"/>
        <button className="w-52 bg-red-700 ml-5 h-12 rounded-full">SUBSCRIBE</button></div>
        </div></div>
        <div className="flex  justify-between  mr-16 w-[600px]">
          <div className=" ">
            <h1 className="text-black font-bold">FRONTEND MENTOR</h1>
            <p>Unlock</p>
            <p>ContactUs</p>
            <p>FAQ us</p>
          </div>
          <div>
            <h1 className="text-black font-bold">EXPLORE</h1>
            <p>Challenges</p>
            <p>Solution</p>
            <p>Resources</p>
          </div>
          <div>
            <h1 className="text-black font-bold">COMMUNITY</h1>
            <p>discoard</p>
            <p>Guidlines</p>
            <p>Blog</p>
          </div>
          <div>
            <h1 className="text-black font-bold">FOR COMPANIES</h1>
            <p>Hire developers</p>
          </div>
        </div>
        
    </div>
  );
}

export default Rfce;

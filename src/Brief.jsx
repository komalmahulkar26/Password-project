import React from "react";

function Brief() {
  return (
    <div>
      <div className="flex  mt-12 ">
        <div className=" w-[500px] ml-52 p-4 rounded-md bg-white">
          <h1 className="text-2xl  pl-3 pb-3 text-black font-bold pt-3 "> 📝Brief</h1>
          <p>
            Your challenge is to build out this password generator app and get
            it looking as close to the design as possible.
          </p>

          <p>
            You can use any tools you like to help you complete the challenge.
            So if you've got something you'd like to practice, feel free to give
            it a go.
          </p>

          <p>Your users should be able to:</p>

          <p>Generate a password based on the selected inclusion options</p>
          <p>Copy the generated password to the computer's clipboard</p>
          <p>See a strength rating for their generated password</p>
          <p>
            View the optimal layout for the interface depending on their
            device's screen size
          </p>
          <p>
            See hover and focus states for all interactive elements on the page
          </p>
          <p>
            Download the project and go through the README.md file. This will
            provide further details about the project and help you get set up.
          </p>

          <p>
            Want some support on the challenge? Join our community and ask
            questions in the help channel.
          </p>
        </div>
        <div>
          <div className=" w-[500px] p-4  rounded-md ml-5 h-48 bg-white">
            <h1 className="text-2xl pl-3  font-bold pb-2"> 🗃Assets provided</h1>
            <p>✓ Sketch and Figma design files Mobile, tablet & desktop layouts</p>
            <p> ✓ Professional design system for colors, fonts, etc. Optimized image</p>
            <p>✓ assets README file to help you get started HTML file with</p>
            <p>✓ pre-written content</p>
          </div>
          <div className=" rounded-md  w-[500px] p-3 ml-5 mt-5 h-[300px] bg-white">
            <h1 className="text-2xl font-bold pb-2 pl-3 pt-2">💡Ideas to test yourself</h1>
            <p>1.Write your styles using a pre-processor, such as Sass, Less or
            Stylus.</p>
             <p> 2.Train your eye for detail by getting your solution as close
            to the design as you can </p>
            <p>3.Use a JavaScript framework/library to
            practice templating and/or building using components </p>
           <p>4.Try
            estimating the time it will take for you to build the project.</p>
            <p>5.Then see if the time taken matches up to your estimate.</p> 
            <p>6. Project
            estimations are a skill that is often overlooked but is important
            for professional developers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brief;

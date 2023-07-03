import React from "react";
import Option from "./Option";
import Desktop from "./Desktop";
import Brief from "./Brief";
import ChallegesFAQ from "./ChallegesFAQ";
import Discord from "./Discord";
import Referance from "./Referance";
import Rfce from "./Rfce";


function App() {
  return (
    <div className="bg-slate-300 w-full h-full">
      <Option />
      <Desktop />
      <Brief />
      <ChallegesFAQ
        que={"Can I use libraries/frameworks on these projects?"}
        ans={
          "Yes! Our challenges provide professional designs but there are no rules on what tools to use. So feel free to use anything you like to build your projects."
        }
      />
      <ChallegesFAQ
        que={"How can I get help if I'm stuck on a challenge?"}
        ans={
          "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated  channel! If you haven't joined yet, you can get an invite to our Discord server here."
        }
      />
      <ChallegesFAQ
        que={"Can I use these projects in my portfolio?"}
        ans={
          "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!"
        }
      />
      <ChallegesFAQ
        que={"Is there an official solution I can take a look at?"}
        ans={
          "We don't provide  solutions for the challenges. This is because there is no single perfect way to complete a challenge. Instead, you're encouraged to review other people's code in the community. You can learn so much by seeing how other people have approached the same challenges and giving them feedback."
        }
      />
      <ChallegesFAQ
        que={"Do I get a code review when I post my solution?"}
        ans={
          "Frontend Mentor is a collaborative learning community where everyone can give feedback to each other. If you'd like to receive feedback from the community, please be sure to post a question when you submit your solution. The more specific you can be, the better. Being clear with your questions means you're much more likely to receive valuable feedback from others."
        }
      />
      <ChallegesFAQ
        que={"How do I submit my solution?"}
        ans={
          "We'd recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask questions in our Discord server, and we'll help you submit your project."
        }
      />
      <ChallegesFAQ
        que={
          "Can I use these challenges within my own free or commercial content/tutorials/projects?"
        }
        ans={
          "Please visit our License page to learn more about how our challenges can be used within your own content. If you're unsure about anything, please feel free to contact us at hi@frontendmentor.io and we'll be more than happy to answer your questions."
        }
      />
      <ChallegesFAQ
        que={"How often are new challenges added?"}
        ans={
          "We launch a new challenge every two weeks. We alternate between free and premium challenge launches, so we launch one free and one premium challenge each month."
        }
/>
<Discord/>
<Referance/>
<Rfce/>
    </div>
  );
}

export default App;

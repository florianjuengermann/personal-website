import React from "react";
import RoundImg from "../components/RoundImg";
import { SocialIcon } from "react-social-icons";

function TitlePage() {
  return (
    <div className="background">
      <div
        className="container items-center flex-col flex"
        style={{ borderTop: "none" }}
      >
        <RoundImg src="img/flo_dark.jpg" />
        <h1 className="text-center text-white text-6xl font-light my-10">
          Florian Juengermann
        </h1>
        <h3 className="text-center text-neutral-300 text-2xl mb-10">
          cs grad student <a href="https://seas.harvard.edu/">@harvard</a>
          <br />
          autopilot <a href="https://www.tesla.com/AI">@telsa</a>
          <br />
          foundations of ml, quantum computing, startups
        </h3>
        <div className="w-full max-w-lg flex justify-evenly">
          <SocialIcon
            bgColor="rgb(212 212 212)"
            url="https://linkedin.com/in/juengermann"
          />
          <SocialIcon
            bgColor="rgb(212 212 212)"
            url="https://instagram.com/fjuengermann"
          />
          <SocialIcon
            bgColor="rgb(212 212 212)"
            url="https://twitter.com/fjuengermann"
          />
          <SocialIcon
            bgColor="rgb(212 212 212)"
            url="https://github.com/florianjuengermann"
          />
        </div>
      </div>
    </div>
  );
}

export default TitlePage;

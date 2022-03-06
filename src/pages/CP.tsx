import React from "react";
import RoundImg from "../components/RoundImg";

function CP() {
  return (
    <div className="background">
      <div className="container items-center flex-col flex">
        <h1 className="page-heading mb-10">Competitive Programming</h1>
        <RoundImg src="img/cp.jpg" />
        <div className="text-lg my-10">
          In Competitive Programming, you solve and implement algorithmic
          problems on time. Either alone or in a team.
          <br />I used to regularly train on{" "}
          <a href="https://codeforces.com/">Codeforces</a> as{" "}
          <a
            href="https://codeforces.com/profile/fjuengermann"
            className="text-[#ff8c00]"
          >
            fjuengermann
          </a>
        </div>
      </div>
    </div>
  );
}

export default CP;

import React from "react";
import HonorEntry from "../components/HonorEntry";
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
          <br />I used to be quite active on{" "}
          <a href="https://codeforces.com/">Codeforces</a> as{" "}
          <a
            href="https://codeforces.com/profile/fjuengermann"
            className="text-[#ff8c00]"
          >
            fjuengermann
          </a>
        </div>
        <HonorEntry
          title="Google Hashcode"
          icon="img/hashcode.png"
          hoverText="In Google Hashcode, teams of four have 4 hours<br/> to solve a single real-world optimization problem."
        >
          <ul className="list-disc list-inside pl-2">
            <li>
              <b>4x</b> qualified for World finals ('18, '19, '20, '22)
            </li>
            <li>
              Ranked <b>4th</b> out of 10,000 teams in the qualification round
              2022
            </li>
            <li>
              Ranked <b>13th</b> and <b>10th</b> in the world finals 2019 and
              2020
            </li>
          </ul>
          Read my <a href="https://xorigin.tech/blog/hashcode">blog article</a>{" "}
          describing our experiences at the final.
        </HonorEntry>
        <hr className="w-full border-transparent" />
        <HonorEntry
          title="International Collegiate Programming Contest (ICPC)"
          icon="img/icpc.png"
          hoverText={
            'The ICPC is "the oldest, largest,<br/> and most prestigious programming contest in the world".<br /> University teams solve 10-15 algorithmic problems in 5 hours.'
          }
        >
          <ul className="list-disc list-inside pl-2">
            <li>
              Ranked 42th at <b>world finals</b> in Moscow 2021
            </li>
            <li>Gold medal at Northwestern Europe Regional Contest</li>
          </ul>
        </HonorEntry>
        <hr className="w-full border-transparent" />
        <HonorEntry
          title="International Olympiad in Informatics (IOI)"
          icon="img/ioi.png"
          iconClass="scale-75"
          hoverText="The IOI is an individual programming competition<br/> for high school students. <br/>Contestants have 5 hours to solve three problems."
        >
          <ul className="list-disc list-inside pl-2">
            <li>Bronze medalist</li>
            <li>One of four German representatives</li>
          </ul>
        </HonorEntry>
        <hr className="w-full border-transparent" />
        <HonorEntry
          title="Google Codejam"
          icon="img/codejam.png"
          hoverText="Google Codejam is an individual programming competition<br/> that attracts more than 40,000 participants every year.<br/> Contestants solve 3-5 algorithmic problem in 2-3 hours."
        >
          <ul className="list-disc list-inside pl-2">
            <li>
              Ranked <b>124th</b> worldwide in Round 3 out of 40,000
              participants
            </li>
          </ul>
        </HonorEntry>
      </div>
    </div>
  );
}

export default CP;

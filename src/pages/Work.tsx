import React from "react";
import CVEntry from "../components/CVEntry";

function Work() {
  return (
    <div className="background">
      <div className="container items-center flex-col flex">
        <h1 className="page-heading">Experience</h1>
        <CVEntry
          title="Tesla Autopilot"
          subtitle="Motion Planning Intern"
          time="May '22 – Aug '22"
          location="Palo Alto, CA"
          icon="img/tesla.png"
        >
          Worked on real-time object prediction and maneuver planning. <br />
          Directly presented work to Elon.
        </CVEntry>
        <CVEntry
          title="Trendify"
          subtitle="Co-Founder & CTO"
          link="https://trendifyapp.com/"
          time="Oct '20 – Dec '21"
          location="Boston, MA"
          icon="img/trendify.png"
        >
          Developed an image-based fashion searching app with 15,000 downloads.
        </CVEntry>
        <CVEntry
          title="XOrigin"
          subtitle="Co-Founder & CTO "
          link="https://xorigin.tech/"
          time="Jun '19 – Dec '21"
          location="Mayen, Germany"
          icon="img/xorigin.png"
        >
          Build full-stack software projects for other companies.
        </CVEntry>
      </div>
    </div>
  );
}

export default Work;

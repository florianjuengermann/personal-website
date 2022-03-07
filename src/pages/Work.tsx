import React from "react";
import CVEntry from "../components/CVEntry";

function Work() {
  return (
    <div className="background">
      <div className="container items-center flex-col flex">
        <h1 className="page-heading">Experience</h1>
        <CVEntry
          title="Tesla Autopilot"
          time="May '22 – Aug '22"
          location="Palo Alto, CA"
          icon="img/tesla.png"
        >
          Incoming Motion Planning Engineer Intern
        </CVEntry>
        <CVEntry
          title="Trendify"
          link="https://trendifyapp.com/"
          time="Oct '20 – Dec '21"
          location="Boston, MA"
          icon="img/trendify.png"
        >
          Co-Founder & CTO <br />
          Developed an image-based fashion searching app with 15,000 downloads
        </CVEntry>
        <CVEntry
          title="XOrigin"
          link="https://xorigin.tech/"
          time="Jun '19 – Dec '21"
          location="Mayen, Germany"
          icon="img/xorigin.png"
        >
          Co-Founder & CTO <br />
          Build full-stack software projects for other companies.
        </CVEntry>
      </div>
    </div>
  );
}

export default Work;

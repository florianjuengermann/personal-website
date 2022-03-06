import React from "react";
import CVEntry from "../components/CVEntry";

function Education() {
  return (
    <div className="background">
      <div className="container items-center flex-col flex">
        <h1 className="page-heading">Education</h1>
        <CVEntry
          title="Harvard University"
          time="Sep '21 – Dec '22"
          location="Cambridge, MA"
          icon="img/harvard.png"
        >
          M.S. Computational Science and Engineering
        </CVEntry>
        <CVEntry
          title="Massachusetts Institute of Technology"
          time="Sep '21 – May '22"
          location="Cambridge, MA"
          icon="img/mit.png"
        >
          Cross-registered
        </CVEntry>
        <CVEntry
          title="Technical University Munich"
          time="Oct '18 – June '21"
          location="Munic, Germany"
          icon="img/tum.png"
        >
          B.S. Computer Science, Minor in Physics, High Distinction (Grade 1.1)
          <br />
          Bachelor Thesis: <i>Learning Algebraic Predicates for Explainable Controllers.</i>
          <br />
          Teaching assistant for Functional Programming and Theory of Computation.
        </CVEntry>
      </div>
    </div>
  );
}

export default Education;

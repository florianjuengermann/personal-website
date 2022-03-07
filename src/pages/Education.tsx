import React from "react";
import CVEntry from "../components/CVEntry";

function Education() {
  return (
    <div className="background">
      <div className="container items-center flex-col flex">
        <h1 className="page-heading">Education</h1>
        <CVEntry
          title="Harvard University"
          subtitle="M.S. Computational Science and Engineering"
          time="Sep '21 – Dec '22"
          location="Cambridge, MA"
          icon="img/harvard.png"
        >
          Working with{" "}
          <a href="https://iacs.seas.harvard.edu/people/weiwei-pan">
            Weiwei Pan
          </a>{" "}
          on{" "}
          <a href="#infinite-width-project">infinite-width neural networks</a>
        </CVEntry>
        <CVEntry
          title="Massachusetts Institute of Technology"
          subtitle="Cross-registered"
          time="Sep '21 – May '22"
          location="Cambridge, MA"
          icon="img/mit.png"
        >
          ML courses:{" "}
          <span data-tip="Machine Learning (graduate level)">6.867</span>,{" "}
          <span data-tip="Advances in Computer Vision">6.869</span>
          <br />
          Quantum courses:{" "}
          <span data-tip="Quantum Computing by Peter Shor">18.435</span>,{" "}
          <span data-tip="Quantum Complexity Theory">6.845</span>
        </CVEntry>
        <CVEntry
          title="Technical University Munich"
          subtitle="B.S. Computer Science, Minor in Physics, High Distinction (Grade 1.1)"
          time="Oct '18 – June '21"
          location="Munic, Germany"
          icon="img/tum.png"
        >
          Bachelor Thesis:{" "}
          <i>Learning Algebraic Predicates for Explainable Controllers</i>
          <br />
          Teaching assistant for <i>Functional Programming</i> and{" "}
          <i>Theory of Computation</i>
        </CVEntry>
      </div>
    </div>
  );
}

export default Education;

import React from "react";
import Project from "../components/Project";
/*
Projects:
  - Udemy Course
  - CF Bot
  - CubeSat
  - Uncertainty Paper
  - AM 205 paper
  - CS 205 paper (preview)
  - ML paper
*/
function Projects() {
  return (
    <div className="background">
      <div className="container items-center flex-col flex">
        <h1 className="page-heading mb-10">Projects</h1>
        <Project
          title="An Overview of Uncertainty Quantification Methods for Infinite Neural Networks"
          subtitle="Harvard AM 207 project with Maxime Laasri and Marius Merkle"
          icon="img/uncertainty.png"
          teaser={
            <>
              Looking infinitely wide neural networks is a fruitful theoretical
              approach to understanding machine learning. In this limit, the
              networks' behavior can be precisely described by rigorous
              mathematical tools.{" "}
              <a href="https://arxiv.org/abs/2201.04746">Read the paper</a>
            </>
          }
        />
        <Project
          title="Advanced Algorithms Video Course"
          subtitle="Hosted on Udemy"
          icon="img/udemy.jpg"
          teaser={
            <>
              Udemy course with 15,000+ students. Explaining algorithms that are
              used in competitive programming and asked in job interviews.
              <br />
              <a href="https://www.udemy.com/course/algorithms-for-job-interviews-and-competitive-programming/">
                Watch the course
              </a>
            </>
          }
        />
        <Project
          title="Competitive Programming Telegram Bot"
          subtitle="Work with Tobias Schindler"
          icon="img/cf_live_bot.png"
          teaser={
            <>
              Sending live standings, smart summaries, and notifications for
              competitions on <a href="https://codeforces.com">Codeforces</a>{" "}
              with 2,000+ active users. Telegram handle{" "}
              <a href="https://t.me/codeforces_live_bot">
                @codeforces_live_bot
              </a>
              . See a description of all features in the{" "}
              <a href="https://codeforces.com/blog/entry/82669">blog post</a>.
            </>
          }
        />
        <Project
          title="Case Studies on Physics-Informed Neural Networks"
          subtitle="Harvard AM 205 project with Marius Merkle and Marcel Torne"
          icon="img/sound.mp4"
          teaser={
            <>
              Solving differential equations is hard. We use physics-informed
              neural networks (PINNs) to learn a solution. The loss function
              describes how well the differential equation is satisfied at
              certain sample points. <br />
              <a href="doc/PINNs.pdf">Read the report</a>
            </>
          }
        />
        <Project
          title="On Causal Matrix Completion"
          subtitle="MIT 6.867 project with Lucas Camelo Sa and Vı́ctor Quintas-Martı́nez"
          icon="img/matrix_crop.png"
          teaser={
            <>
              Consider a database of users and movies where each entry in the
              matrix describes the rating a user gave a movie. This matrix is
              sparse and we are interested in predicting the missing entries. In
              this project we consider the case where the missingness is not
              random. E.g. a user does not like horror movies and thus does not
              rate them.{" "}
              <a href="doc/OnCausalMatrixCompletion.pdf">Read the report</a>
            </>
          }
        />
        <Project
          title="CubeSat Project MeginaSat"
          subtitle="High school project"
          icon="img/cubesat.png"
          teaser={
            <>
              Worked on a satellite to orbit the earth on a low earth orbit.
              Project goal was to take pictures and send them back to earth.
              Additionally, we worked on optical data transmission using high
              power LEDs that would allow higher bandswidths in clear nights.{" "}
              <a href="http://meginasat.org/?lang=en">Project Website</a>
            </>
          }
        />
        <Project
          title="[Work in progress] Parallel Planetary Impact Simulation with SPH"
          subtitle="Harvard CS 205 project with Henry Jin, Alex Kashi, and Johannes Portik"
          icon="img/planet_collision.jpg"
          teaser="Smoothed Particle Hytrodynamics (SPH) is a technique for simulating the physical behaviour of fluids or solid matter. It is based on simulating
          individual particles and interpolating the fluid behavior from those. We use Highperformance Computing techniques such as OpenMP and MPI to speed up those simulations for simulating collisions of planets."
        />
      </div>
    </div>
  );
}

export default Projects;

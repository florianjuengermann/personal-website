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
          id="infinite-width-project"
          title="An Overview of Uncertainty Quantification Methods for Infinite Neural Networks"
          subtitle="Harvard AM 207 project with Maxime Laasri and Marius Merkle"
          icon="img/uncertainty.png"
          teaser={
            <>
              Looking at infinitely wide neural networks is a fruitful
              theoretical approach to understanding machine learning. In this
              limit, the networks' behavior can be precisely described by
              rigorous mathematical tools.{" "}
              <a href="https://arxiv.org/abs/2201.04746">Read the paper</a>
            </>
          }
        />
        <Project
          id="algebraic-predicates"
          title="Algebraically Explainable Controllers: Decision Trees and Support Vector Machines Join Forces"
          subtitle={
            <>
              {"To appear in the "}{" "}
              <a href="https://www.springer.com/journal/10009">STTT journal</a>
            </>
          }
          icon="img/algebraic_predicate.png"
          teaser={
            <>
              Decision trees can be used as an explainable representation of
              controllers (a.k.a. strategies, policies). To model more complex
              systems, we show how to sythesize algebraic splitting predicates
              for the decision tree nodes.{" "}
              <a href="https://arxiv.org/abs/2208.12804">Read the paper</a>
            </>
          }
        />
        <Project
          title="Advanced Algorithms Video Course"
          subtitle="Hosted on Udemy"
          icon="img/udemy.jpg"
          teaser={
            <>
              Udemy course with 15,000+ students. Explaining algorithms for
              competitive programming and job interviews.
              <br />
              <a href="https://www.udemy.com/course/algorithms-for-job-interviews-and-competitive-programming/">
                Watch the course
              </a>
            </>
          }
        />
        <Project
          title="Distributed-DALLE"
          subtitle="First price at HackBoston 2022 with Walden Yan"
          icon="img/ddalle.jpg"
          teaser={
            <>
              An art marketplace where individuals looking for bespoke artwork
              can place a bounty, and creators leverage AI to generate
              high-quality art to compete for the bounty. Built and deployed on
              the <a href="https://klaytn.foundation">Klaytn blockchain</a>.
              Live website at <a href="https://ddalle.xyz">ddalle.xyz</a>.
              Source code available on{" "}
              <a href="https://github.com/walnutwaldo/D-DALLE">GitHub</a>.
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
          title="Quantum Zero-Knowledge Proofs"
          subtitle="MIT 6.845 review paper with Taro Spirig"
          icon="img/qzk.png"
          teaser={
            <>
              Review of Broadbent et al.'s zero-knowledge proof system for all
              problems in the complexity class QMA (the quantum analog to NP).
              Also covering non-interactive zero-knowledge proof systems and
              classical zero-knowledge arguments for QMA.{" "}
              <a href="doc/quantum_zero_knowledge_proofs.pdf">
                Read the report
              </a>
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
          title="Parallel Planetary Impact Simulation with SPH"
          subtitle="Harvard CS 205 project with Henry Jin, Alex Kashi, and Johannes Portik"
          icon="img/CS205.mp4"
          teaser={
            <>
              Smoothed Particle Hydrodynamics (SPH) is a technique for
              simulating the physical behavior of fluids or solid matter. It is
              based on simulating individual particles and interpolating the
              fluid behavior from those. We use{" "}
              <i>high performance computing</i> techniques such as OpenMP and
              MPI to speed up those simulations for simulating collisions on a
              planetary scale.
            </>
          }
        />
        <Project
          title="Improved Camera Pose Estimation for NeRFs with CNNs and Curriculum Learning"
          subtitle="MIT 6.869 project with Marcel Torne"
          icon="img/nerf.gif"
          iconClass="w-[300px]"
          teaser={
            <>
              Neural Radiance Fields (NeRF) solve the novel view synthesis
              problem by using a differentiable renderer to train a neural
              network to learn a 3d scene representation. We use curriculum
              learning to improve camera pose estimation while jointly training
              the NeRF. <a href="doc/nerfs.pdf">Read the report</a>
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
              this project, we consider the case where the missingness is not
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
              Worked on a satellite to orbit the earth on a low earth orbit. The
              project goal was to take pictures and send them back via optical
              data transmission. High-power LEDs would allow higher bandwidth in
              clear nights. I mainly worked on the ADCS system, running
              simulations and developing embedded code.{" "}
              <a href="http://meginasat.org/?lang=en">Project Website</a>
            </>
          }
        />
      </div>
    </div>
  );
}

export default Projects;

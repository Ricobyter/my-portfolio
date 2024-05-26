import React from "react";
import { projects } from "../assets/constants";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

export default function MoreProjects() {
  return (
    <div className="bg-[#0d1117] font-Poppins w-[100vw] text-white min-h-screen">
      <header className="pt-16 flex flex-col justify-center items-center font-montserrat">
        <p className="text-gray-200  mb-1 text-sm">Some more of</p>
        <h1 className="text-4xl">My Projects</h1>
      </header>
      <section className="flex justify-center items-center pt-10">
        <p className="text-gray-400 w-[60vw] text-center">
          Explore some more of my diverse projects to see my skills in design,
          development, and innovative problem-solving. Each project highlights
          my versatility and expertise, demonstrating my ability to tackle
          challenges across various technologies.
        </p>
      </section>
      <main className="flex justify-center items-center mt-10">
        <div className="w-[90vw] md:w-[60vw] grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
          {projects.map((project) => {
            return (
              <ProjectCard
                img={project.img}
                title={project.title}
                description={project.description}
                tech={project.tech}
              />
            );
          })}
        </div>
      </main>
      <footer className="mt-10 pb-4 flex justify-center items-center">
        <Link to="/">

        <button className="bg-gradient-to-r from-[#103CE7] to-[#C820EE] hover:from-[#C820EE] hover:to-[#103CE7] hover:scale-105 duration-200 text-xl px-4  flex py-2 justify-center items-center  rounded-xl">
          Go Back 
        </button>
        </Link>
      </footer>
    </div>
  );
}

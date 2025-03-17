"use client";
import { projects } from "@/constants/projects";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const MyWorkCard = dynamic(() => import("../ui/ProjectCard"), { ssr: false });
const ProjectModal = dynamic(() => import("../ui/ProjectModel"), { ssr: false });

interface workProps {
  img: string;
  title: string;
  description: string;
  label: string;
  link: string;
  date: string;
}

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<workProps | null>(null);
  

  const handleShowModal = (project: workProps) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="Projects"
      className="min-h-screen w-screen flex flex-col justify-center lg:px-[119px] px-4 py-10"
    >
      {/* Section Title */}
      <div className="flex flex-col gap-3 mb-6 text-center lg:text-left">
        <h1 className="text-sm text-gray-700">Featured Projects</h1>
        <h1 className="text-3xl lg:text-4xl font-bold">
          Able to do the right things at <br />the right time.
        </h1>
      </div>

      {/* Project Filters */}
      <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
        <h1 className="text-lg font-semibold">All Projects</h1>
        <h1 className="text-lg font-semibold">Commercial</h1>
        <h1 className="text-lg font-semibold">Industrial</h1>
        <h1 className="text-lg font-semibold">Architecture</h1>
        <h1 className="text-lg font-semibold">Plumbing</h1>
        <h1 className="text-lg font-semibold">Interior</h1>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1440px]">
          {projects.slice(0,).map((project, i) => (
            <MyWorkCard
              key={i}
              img={project.img}
              title={project.title}
              description={project.description}
              label={project.label}
              link={project.link}
              date={project.date}
              onShowModal={() => handleShowModal(project)}
            />
          ))}
        </div>
        </div>

      {/* Project Modal */}
      {showModal && selectedProject && (
        <ProjectModal
          showModal={showModal}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
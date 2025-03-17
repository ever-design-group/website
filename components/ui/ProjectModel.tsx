import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  project: {
    title: string;
    date: string;
    img: string;
    description: string;
  };
}

const ProjectModal: React.FC<ModalProps> = ({ showModal, onClose, project }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Handle click outside to close the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, onClose]);

  if (!showModal) return null;

  return (
    <div className="projectmodel fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-screen ">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg shadow-lg max-w-[600px] w-full mx-4"
      >
        {/* Modal Content */}
        <h1 className="text-2xl font-bold mb-4 text-slate-700">{project.title}</h1>
        <p className="text-gray-700 mb-4 text-sm">{project.date}</p>
        
        {/* Image */}
        <div className="proimage relative w-full h-[300px] mb-4"> 
          <Image
            src={project.img}
            alt={project.title}
            fill 
            className="object-cover rounded-lg" 
          />
        </div>
        
        {/* Description */}
        <p className="description text-gray-600 text-base max-h-[200px] overflow-y-auto mt-3 p-3 border rounded-lg">
          {project.description}
        </p>
        {/* Close Button */}
        <button
          className=" w-full bg-primary text-white px-4 py-3 rounded-md hover:bg-orange-700 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
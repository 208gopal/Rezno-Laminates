import React, { useState, useEffect, useTransition } from 'react';
import Button from '../general/Button';
import { projectsData, categories } from '../projectsData/ProjectsData';
import ProjectCard from '../general/ProjectCard';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(9);
  const [activeCategory, setActiveCategory] = useState('HPL');
  const [isPending, startTransition] = useTransition();

  const currentProjects = projectsData[activeCategory] || [];

  const toggleProjects = () => {
    const isShowLess = visibleProjects >= currentProjects.length;

    setVisibleProjects(prev =>
      isShowLess ? 9 : Math.min(prev + 9, currentProjects.length)
    );

    if (isShowLess) {
      setTimeout(() => {
        const section = document.getElementById('projects');
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleCategoryClick = (key) => {
    startTransition(() => {
      setActiveCategory(key);
      setVisibleProjects(9);
    });

    // Scroll to top of section
    setTimeout(() => {
      const section = document.getElementById('projects');
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 py-8">
      {/* Section Header */}
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-sm md:text-base lg:text-lg font-light mb-3 text-left tracking-wider">
          LAST PROJECTS
        </h2>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left leading-tight">
          Make it with passion.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-start gap-4 mb-12">
        {categories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => handleCategoryClick(key)}
            className={`px-4 py-2 rounded-full border transition-colors duration-300 
              ${activeCategory === key
                ? 'bg-black text-white'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Loading Spinner (optional) */}
      {isPending && (
        <div className="text-center text-gray-500 my-6 animate-pulse">
          Loading...
        </div>
      )}

      {/* Projects Grid */}
      {!isPending && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.slice(0, visibleProjects).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              images={project.images}
            />
          ))}
        </div>
      )}

      {/* Toggle Button */}
      {!isPending && currentProjects.length > 9 && (
        <div className="text-center mt-12">
          <Button
            text={visibleProjects >= currentProjects.length ? 'Show Less' : 'Load More'}
            onClick={toggleProjects}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
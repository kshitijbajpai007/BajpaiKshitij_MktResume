// src/pages/CategoryPage.jsx
// Categorical Hub rendering SpecimenCards from src/data/work.js with deep-linked ProjectSheet

import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import SpecimenCard from '../components/work/SpecimenCard';
import ProjectSheet from '../components/ProjectSheet';
import { CATEGORIES, findProject } from '../data/work';

const CategoryPage = () => {
  const { category, slug } = useParams();
  const navigate = useNavigate();

  const data = CATEGORIES[category?.toLowerCase()] || CATEGORIES['founder-led'];
  const [expandedSection, setExpandedSection] = useState(data.sections[0]?.id);

  // Update default expanded section if category changes
  useEffect(() => {
    if (data?.sections?.length > 0) {
      setExpandedSection(data.sections[0].id);
    }
  }, [category, data]);

  // Deep-link resolution: if URL has :slug, resolve the project from data
  const activeProject = slug ? findProject(category, slug) : null;

  const handleOpenProject = (project) => {
    navigate(`/work/${category}/${project.slug}`);
  };

  const handleCloseProject = () => {
    navigate(`/work/${category}`);
  };

  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-20 px-6 md:px-12 container mx-auto">
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-16 border-b-4 border-black pb-8 flex flex-col md:flex-row justify-between items-end gap-6"
      >
        <div>
          <Link
            to="/work"
            className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] mb-6 hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Sectors
          </Link>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none">
            {data.title}
          </h1>
        </div>
        <p className="font-mono text-sm uppercase text-neutral-400 font-bold tracking-widest max-w-[280px] text-left md:text-right">
          {data.description}
        </p>
      </motion.div>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {data.sections.map((section) => (
          <div key={section.id} className="border-b-4 border-black">
            <button
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className="w-full flex justify-between items-center py-8 text-left group"
              aria-expanded={expandedSection === section.id}
            >
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-lg font-black text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  // 0{section.projects.length}
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-500 group-hover:text-accent">
                  {section.label}
                </h2>
              </div>
              <motion.div
                animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 border-2 border-transparent group-hover:border-black group-hover:bg-accent transition-all"
              >
                <ChevronDown size={36} strokeWidth={4} />
              </motion.div>
            </button>

            <AnimatePresence>
              {expandedSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-16 pt-4">
                    {section.projects.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => handleOpenProject(project)}
                        className="cursor-pointer group/card"
                      >
                        <SpecimenCard project={project} />
                        <div className="mt-6 flex justify-between items-end border-l-4 border-transparent group-hover/card:border-accent pl-6 transition-all duration-300">
                          <div>
                            <h3 className="font-black uppercase text-2xl md:text-3xl leading-none group-hover/card:text-accent transition-colors">
                              {project.title}
                            </h3>
                            <p className="font-mono text-xs text-neutral-500 mt-2 uppercase tracking-widest font-bold">
                              Client: {project.client}
                            </p>
                          </div>
                          <span className="font-black uppercase text-xs tracking-widest bg-black text-white px-3 py-1 scale-0 group-hover/card:scale-100 transition-transform origin-right">
                            Inspect Case →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Deep-Linked Project Sheet */}
      <ProjectSheet
        project={activeProject}
        isOpen={Boolean(activeProject)}
        onClose={handleCloseProject}
      />
    </div>
  );
};

export default CategoryPage;

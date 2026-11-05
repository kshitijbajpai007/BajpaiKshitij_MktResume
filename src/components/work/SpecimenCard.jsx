// src/components/work/SpecimenCard.jsx
// The Hook is the Thumbnail: text-first card for copywriting & strategy specimens

import { ArrowRight } from 'lucide-react';

const SpecimenCard = ({ project }) => {
  const displayTag = project.tag || (project.format ? `${project.format.toUpperCase()} // SPECIMEN` : 'SPECIMEN');

  return (
    <div
      className="relative w-full h-[380px] md:h-[400px] border-4 border-black bg-white p-8 md:p-10 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-accent transition-all duration-300 group cursor-pointer overflow-hidden select-none"
    >
      {/* Top Header Row */}
      <div className="flex justify-between items-start gap-4">
        <span className="bg-white text-black border-2 border-black px-3 py-1 font-mono text-[10px] md:text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-black group-hover:text-white group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all">
          {displayTag}
        </span>
        <span className="font-mono text-[11px] font-black uppercase tracking-wider text-neutral-400 group-hover:text-black transition-colors text-right">
          {project.client}
        </span>
      </div>

      {/* Main Hook Display (The hook is the thumbnail) */}
      <div className="my-auto py-4">
        <h3 className="font-sans font-black text-2xl md:text-3xl lg:text-4xl uppercase tracking-tighter leading-[0.95] text-black transition-transform duration-300 group-hover:translate-x-1">
          "{project.hook}"
        </h3>
      </div>

      {/* Footer / Action */}
      <div className="pt-4 border-t-2 border-neutral-200 group-hover:border-black flex justify-between items-center transition-colors">
        <span className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-neutral-500 group-hover:text-black transition-colors">
          // {project.title}
        </span>
        <div className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">
          <span>Inspect</span>
          <ArrowRight size={16} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

export default SpecimenCard;


import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WorkCard({ work }) {
  return (
    <Link
      to={`/projects/${work.id}`}
      className="group overflow-hidden rounded-2xl border border-line bg-panel shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan/45 hover:shadow-neon"
    >
      <div className="aspect-[4/3] overflow-hidden bg-white/5">
        <img
          src={work.image}
          alt={work.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs text-cyan">{work.category}</p>
            <h3 className="text-lg font-semibold text-white">{work.title}</h3>
          </div>
          <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-white/5 text-muted transition group-hover:border-cyan/50 group-hover:text-cyan">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-muted">{work.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {work.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

import React from 'react';
import { useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import WorkGrid from '../components/WorkGrid.jsx';
import { categories, works } from '../data/works.js';

const allLabel = '\u5168\u90e8';
const defaultTitle = '\u4f5c\u54c1\u603b\u89c8';
const description =
  '\u4ee5\u9879\u76ee\u6570\u7ec4\u7edf\u4e00\u7ba1\u7406\u4f5c\u54c1\u5185\u5bb9\uff0c\u8986\u76d6\u5546\u4e1a\u5e7f\u544a\u3001\u54c1\u724c\u7535\u5546\u3001\u6587\u65c5\u57ce\u5e02\u3001\u77ed\u7247\u6d77\u62a5\u4e0e\u4e2a\u4eba\u6982\u5ff5\u89c6\u89c9\u3002';

export default function Works({ title = defaultTitle }) {
  const [active, setActive] = useState(allLabel);
  const filters = [allLabel, ...categories];
  const filteredWorks = useMemo(
    () => (active === allLabel ? works : works.filter((work) => work.category === active)),
    [active],
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <SectionHeader eyebrow="Works" title={title} description={description} />

      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
              active === filter
                ? 'border-cyan bg-cyan text-ink'
                : 'border-line bg-white/5 text-muted hover:border-violet/70 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <WorkGrid items={filteredWorks} />
    </section>
  );
}

import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader.jsx';
import WorkGrid from '../components/WorkGrid.jsx';
import { featuredWorks } from '../data/works.js';

const heroImage =
  'images/AIGC%E4%BD%9C%E5%93%81%E9%9B%86%E7%B4%A0%E6%9D%90/04_AI%E6%B5%B7%E6%8A%A5/%E4%B8%AA%E4%BA%BA%E9%A3%8E%E6%A0%BC%E6%B5%B7%E6%8A%A5.jpg';

const text = {
  name: '\u674e\u6c11\u660a',
  intro:
    '\u4e13\u6ce8\u4e8eAI\u89c6\u89c9\u521b\u4f5c\u3001AI\u77ed\u7247\u5206\u955c\u3001\u5546\u4e1a\u6d77\u62a5\u3001\u6587\u65c5\u89c6\u89c9\u3001\u4eba\u7269\u8bbe\u5b9a\u4e0e\u77ed\u89c6\u9891\u5185\u5bb9\u5305\u88c5\u3002',
  viewWorks: '\u67e5\u770b\u4f5c\u54c1',
  contactMe: '\u8054\u7cfb\u6211',
  featuredTitle: '\u7cbe\u9009\u4f5c\u54c1',
  featuredDesc:
    '\u9996\u9875\u4ec5\u5c55\u793a 6 \u4e2a\u7cbe\u9009\u9879\u76ee\uff0c\u66f4\u591a\u5546\u4e1a\u5e7f\u544a\u3001\u6587\u65c5\u89c6\u89c9\u3001\u77ed\u7247\u5c01\u9762\u4e0e\u6982\u5ff5\u521b\u4f5c\u53ef\u8fdb\u5165\u4f5c\u54c1\u9875\u67e5\u770b\u3002',
  heroAlt: '\u4e2a\u4eba\u98ce\u683c\u6d77\u62a5',
};

export default function Home() {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_0.9fr] md:py-20 lg:px-8">
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan">AIGC Visual Creator</p>
          <h1 className="text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">{text.name}</h1>
          <p className="mt-5 max-w-2xl text-xl text-gray-200">AIGC Visual Creator</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">{text.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/works"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
            >
              {text.viewWorks}
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet/70 hover:bg-white/10"
            >
              {text.contactMe}
              <Mail size={18} />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(0,229,255,0.22),transparent_34%),radial-gradient(circle_at_70%_70%,rgba(138,92,255,0.22),transparent_34%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-panel p-3 shadow-neon backdrop-blur-xl">
            <img
              src={heroImage}
              alt={text.heroAlt}
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Featured Works" title={text.featuredTitle} description={text.featuredDesc} />
        <WorkGrid items={featuredWorks} />
      </section>
    </>
  );
}

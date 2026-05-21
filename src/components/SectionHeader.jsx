import React from 'react';

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
      {eyebrow && <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-cyan">{eyebrow}</p>}
      <h1 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">{title}</h1>
      {description && <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{description}</p>}
    </div>
  );
}

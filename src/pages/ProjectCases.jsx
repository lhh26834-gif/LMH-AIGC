import React from 'react';
import { Film, ImageIcon, Layers, PlayCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import {
  characterSettings,
  coverImages,
  projectCases,
  sceneSettings,
  storyboardImages,
  videoWorks,
} from '../data/projects.js';

const copy = {
  title: '\u9879\u76ee\u6848\u4f8b',
  desc:
    '\u8fd9\u91cc\u4e0d\u518d\u91cd\u590d\u4f5c\u54c1\u56fe\u7247\u5217\u8868\uff0c\u800c\u662f\u628a\u77ed\u7247\u3001\u6f2b\u5267\u3001\u5546\u4e1a\u6d77\u62a5\u548c\u6587\u65c5\u89c6\u89c9\u6309\u5b8c\u6574\u9879\u76ee\u6765\u5c55\u793a\u3002',
  deliverables: '\u4ea4\u4ed8\u5185\u5bb9',
  tools: '\u4f7f\u7528\u5de5\u5177',
  videos: '\u89c6\u9891\u4f5c\u54c1',
  videoDesc:
    '\u89c6\u9891\u4f5c\u54c1\u653e\u5728\u9879\u76ee\u6848\u4f8b\u9875\uff0c\u7528\u6765\u5c55\u793a AI \u77ed\u89c6\u9891\u521b\u4f5c\u3001\u955c\u5934\u8282\u594f\u3001\u526a\u8f91\u5305\u88c5\u548c\u5185\u5bb9\u6210\u7247\u80fd\u529b\u3002',
  storyboard: '\u5206\u955c\u56fe\u7247',
  character: '\u4eba\u7269\u8bbe\u5b9a',
  scene: '\u573a\u666f\u8bbe\u5b9a',
  covers: '\u89c6\u9891\u5c01\u9762',
};

function ProjectCaseCard({ item }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-panel shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan/40">
      <div className="aspect-[16/10] overflow-hidden bg-white/5">
        <img src={item.cover} alt={item.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
      </div>
      <div className="p-5 sm:p-6">
        <p className="mb-3 inline-flex items-center gap-2 text-xs text-cyan">
          <Layers size={15} />
          {item.category}
        </p>
        <h2 className="text-xl font-semibold text-white">{item.title}</h2>
        <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>

        <div className="mt-5">
          <h3 className="mb-3 text-sm font-semibold text-white">{copy.deliverables}</h3>
          <div className="flex flex-wrap gap-2">
            {item.deliverables.map((deliverable) => (
              <span key={deliverable} className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-gray-300">
                {deliverable}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="mb-3 text-sm font-semibold text-white">{copy.tools}</h3>
          <div className="flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <span key={tool} className="rounded-full border border-violet/35 bg-violet/10 px-3 py-1 text-xs text-gray-200">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function VideoCard({ item }) {
  const [isPlayingEmbed, setIsPlayingEmbed] = React.useState(false);
  const [embedNonce, setEmbedNonce] = React.useState(0);
  const pendingLabel = '\u5f85\u5d4c\u5165\u5916\u90e8\u89c6\u9891';
  const openLabel = '\u6253\u5f00\u89c6\u9891';
  const playLabel = '\u64ad\u653e';
  const embedPlayUrl = item.embedUrl
    ? `${item.embedUrl}${item.embedUrl.includes('?') ? '&' : '?'}autoplay=1&t=0&start=0&fresh=${embedNonce}`
    : '';

  return (
    <article className="rounded-2xl border border-line bg-panel p-3 shadow-card backdrop-blur-xl">
      <div className="overflow-hidden rounded-xl bg-black">
        {item.embedUrl && isPlayingEmbed ? (
            <iframe
            key={embedPlayUrl}
            className="aspect-video w-full"
            src={embedPlayUrl}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            sandbox="allow-scripts allow-same-origin allow-presentation"
            allowFullScreen
          />
        ) : item.embedUrl ? (
          <button
            type="button"
            onClick={() => {
              setEmbedNonce(Date.now());
              setIsPlayingEmbed(true);
            }}
            className="group block aspect-video w-full overflow-hidden bg-black text-left"
            aria-label={`${playLabel} ${item.title}`}
          >
            <img src={item.poster} alt={item.title} className="h-full w-full object-cover transition group-hover:scale-105" />
          </button>
        ) : item.src ? (
          <video
            className="aspect-video w-full object-contain"
            controls
            preload="metadata"
            poster={item.poster}
            src={item.src}
          />
        ) : (
          <div className="relative aspect-video">
            <img src={item.poster} alt={item.title} className="h-full w-full object-cover opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/45 px-6 text-center">
              <span className="rounded-full border border-cyan/50 bg-ink/80 px-4 py-2 text-sm text-cyan">
                {pendingLabel}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="px-2 py-4">
        <p className="mb-2 inline-flex items-center gap-2 text-xs text-cyan">
          <PlayCircle size={15} />
          {item.category}
        </p>
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        {item.externalUrl && (
          <a
            href={item.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-gray-200 transition hover:border-cyan/60 hover:text-cyan"
          >
            {openLabel}
          </a>
        )}
      </div>
    </article>
  );
}

function ImageAssetCard({ item }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-panel shadow-card backdrop-blur-xl">
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-black/35">
        <img src={item.image} alt={item.title} className="h-full w-full object-contain" loading="lazy" />
      </div>
      <div className="p-4">
        <p className="mb-2 text-xs text-cyan">{item.category}</p>
        <h3 className="text-base font-semibold leading-6 text-white">{item.title}</h3>
      </div>
    </article>
  );
}

function AssetSection({ title, items }) {
  return (
    <div className="mt-14 border-t border-line pt-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan/10 text-cyan">
          <ImageIcon size={19} />
        </span>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ImageAssetCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function ProjectCases() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <SectionHeader eyebrow="Cases" title={copy.title} description={copy.desc} />

      <div className="grid gap-6 lg:grid-cols-2">
        {projectCases.map((item) => (
          <ProjectCaseCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-12">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.24em] text-cyan">
            <Film size={17} />
            Video
          </p>
          <h2 className="text-3xl font-semibold text-white">{copy.videos}</h2>
          <p className="mt-4 text-base leading-8 text-muted">{copy.videoDesc}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {videoWorks.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <AssetSection title={copy.storyboard} items={storyboardImages} />
      <AssetSection title={copy.character} items={characterSettings} />
      <AssetSection title={copy.scene} items={sceneSettings} />
      <AssetSection title={copy.covers} items={coverImages} />
    </section>
  );
}

import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';

const strengths = [
  '\u5e73\u9762\u8bbe\u8ba1\u4e0e\u5546\u4e1a\u89c6\u89c9\u7248\u5f0f',
  '\u524d\u7aef UI \u8bbe\u8ba1\u4e0e\u54cd\u5e94\u5f0f\u9875\u9762\u5b9e\u73b0',
  'AIGC \u89c6\u89c9\u521b\u4f5c\u4e0e\u63d0\u793a\u8bcd\u8fed\u4ee3',
  'AI \u77ed\u7247\u5206\u955c\u3001\u4eba\u7269\u8bbe\u5b9a\u4e0e\u955c\u5934\u6c1b\u56f4',
  '\u6587\u65c5\u6d77\u62a5\u3001\u57ce\u5e02\u89c6\u89c9\u4e0e\u653b\u7565\u5185\u5bb9\u5305\u88c5',
  '\u77ed\u89c6\u9891\u5c01\u9762\u3001\u4fe1\u606f\u5c42\u7ea7\u4e0e\u5e73\u53f0\u4f20\u64ad\u9002\u914d',
];

const profile = {
  title: '\u5173\u4e8e\u6211',
  desc: '\u5e73\u9762\u8bbe\u8ba1\u3001\u524d\u7aef UI\u3001AIGC \u89c6\u89c9\u521b\u4f5c\u4e0e AI \u5185\u5bb9\u751f\u4ea7\u7684\u590d\u5408\u578b\u80fd\u529b\u4ecb\u7ecd\u3002',
  name: '\u674e\u6c11\u660a',
  role: 'AIGC Visual Creator / UI Visual Designer',
  photo:
    'images/AIGC%E4%BD%9C%E5%93%81%E9%9B%86%E7%B4%A0%E6%9D%90/07_%E4%B8%AA%E4%BA%BA%E5%A4%B4%E5%83%8F%E4%B8%8E%E7%AE%80%E4%BB%8B/%E4%B8%AA%E4%BA%BA%E5%A4%B4%E5%83%8F.png',
  meta: ['2021\u5e74\u6bd5\u4e1a', '\u6587\u79d8\uff08\u4fe1\u606f\u5316\u5e94\u7528\uff09\u4e13\u4e1a', '\u5e73\u9762\u8bbe\u8ba1 / \u524d\u7aef UI / AIGC'],
  paragraphs: [
    '\u6211\u53eb\u674e\u6c11\u660a\uff0c2021\u5e74\u6bd5\u4e1a\u4e8e\u6fee\u9633\u804c\u4e1a\u6280\u672f\u5b66\u9662\u6587\u79d8\uff08\u4fe1\u606f\u5316\u5e94\u7528\uff09\u4e13\u4e1a\u3002\u6bd5\u4e1a\u540e\u66fe\u4ece\u4e8b\u5e73\u9762\u8bbe\u8ba1\u53ca\u524d\u7aef UI \u8bbe\u8ba1\u5236\u4f5c\uff0c\u53c2\u4e0e\u8fc7 PC \u7aef\u3001\u79fb\u52a8\u7aef\u754c\u9762\u8bbe\u8ba1\u4e0e\u9875\u9762\u5236\u4f5c\uff0c\u5177\u5907\u4e00\u5b9a\u7684\u89c6\u89c9\u5ba1\u7f8e\u80fd\u529b\u3001\u8bbe\u8ba1\u6267\u884c\u80fd\u529b\u548c\u57fa\u7840\u524d\u7aef\u5b9e\u73b0\u7ecf\u9a8c\u3002',
    '\u5728\u540e\u7eed\u9879\u76ee\u5de5\u4f5c\u4e2d\uff0c\u6211\u5f00\u59cb\u63a5\u89e6\u5e76\u4e3b\u52a8\u5b66\u4e60 AI \u5de5\u5177\u3002\u81ea 2022 \u5e74\u8d77\u5173\u6ce8 AI \u8f6f\u4ef6\u4e0e\u5927\u6a21\u578b\u7684\u53d1\u5c55\uff0c2023 \u5e74\u5728\u5b9e\u9645\u5de5\u4f5c\u4e2d\u5c1d\u8bd5\u5c06 AI \u5e94\u7528\u4e8e\u6587\u6863\u64b0\u5199\u3001\u5e94\u6025\u6551\u63f4\u9884\u6848\u6574\u7406\u3001\u9690\u60a3\u6574\u6539\u901a\u77e5\u5355\u5236\u4f5c\u7b49\u573a\u666f\uff0c\u9010\u6b65\u5f62\u6210\u4e86\u4f7f\u7528 AI \u63d0\u5347\u5185\u5bb9\u751f\u4ea7\u6548\u7387\u3001\u4f18\u5316\u5de5\u4f5c\u6d41\u7a0b\u7684\u610f\u8bc6\u3002',
    '\u968f\u7740 AIGC\u3001\u5927\u6a21\u578b\u53ca\u5404\u7c7b AI \u8bbe\u8ba1\u5de5\u5177\u7684\u53d1\u5c55\uff0c\u6211\u8ba4\u8bc6\u5230 AI \u6b63\u5728\u6df1\u5ea6\u8d4b\u80fd\u8bbe\u8ba1\u3001\u5185\u5bb9\u521b\u4f5c\u548c\u524d\u7aef\u5b9e\u73b0\u7b49\u9886\u57df\u3002\u7ed3\u5408\u81ea\u5df1\u65e9\u671f\u7684\u5e73\u9762\u8bbe\u8ba1\u3001UI \u8bbe\u8ba1\u548c\u57fa\u7840\u524d\u7aef\u7ecf\u9a8c\uff0c\u6211\u5e0c\u671b\u5c06 AI \u5de5\u5177\u5e94\u7528\u80fd\u529b\u4e0e\u89c6\u89c9\u8bbe\u8ba1\u80fd\u529b\u76f8\u7ed3\u5408\uff0c\u5411 AI \u8f85\u52a9\u8bbe\u8ba1\u3001AIGC \u5185\u5bb9\u521b\u4f5c\u3001UI \u89c6\u89c9\u8bbe\u8ba1\u53ca\u76f8\u5173\u5c97\u4f4d\u65b9\u5411\u53d1\u5c55\u3002',
  ],
};

export default function About() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <SectionHeader eyebrow="About" title={profile.title} description={profile.desc} />

      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <aside className="rounded-2xl border border-line bg-panel p-4 shadow-neon backdrop-blur-xl sm:p-5">
          <div className="overflow-hidden rounded-xl border border-line bg-black/35">
            <img src={profile.photo} alt={profile.name} className="aspect-[3/4] w-full object-cover object-top" />
          </div>
          <div className="px-2 py-5">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan">Profile</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{profile.name}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{profile.role}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {profile.meta.map((item) => (
                <span key={item} className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <div className="rounded-2xl border border-line bg-panel p-6 shadow-card backdrop-blur-xl sm:p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan">Personal Introduction</p>
          <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
            {'\u4ece\u89c6\u89c9\u8bbe\u8ba1\u5230 AIGC \u5185\u5bb9\u521b\u4f5c'}
          </h3>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted">
            {profile.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((item, index) => (
          <div
            key={item}
            className="rounded-2xl border border-line bg-panel p-5 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan/40"
          >
            <span className="text-xs text-cyan">0{index + 1}</span>
            <h3 className="mt-3 text-base font-semibold text-white">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

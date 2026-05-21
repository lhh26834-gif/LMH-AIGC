import React from 'react';
import { Mail, MessageCircle, Sparkles, UserRound } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';

const contactItems = [
  { icon: UserRound, label: '\u59d3\u540d', value: '\u674e\u6c11\u660a' },
  {
    icon: Sparkles,
    label: '\u6c42\u804c\u65b9\u5411',
    value: 'AIGC\u89c6\u89c9\u8bbe\u8ba1 / AI\u77ed\u89c6\u9891\u521b\u4f5c / \u89c6\u89c9\u8bbe\u8ba1 / UI\u8bbe\u8ba1',
  },
  { icon: Mail, label: '\u90ae\u7bb1', value: 'your-email@example.com' },
  { icon: MessageCircle, label: '\u5fae\u4fe1', value: 'WeChat ID \u9884\u7559' },
];

const copy = {
  title: '\u8054\u7cfb\u65b9\u5f0f',
  desc:
    '\u6b22\u8fce\u56f4\u7ed5 AIGC \u89c6\u89c9\u8bbe\u8ba1\u3001AI \u77ed\u89c6\u9891\u521b\u4f5c\u3001\u5546\u4e1a\u89c6\u89c9\u3001UI \u8bbe\u8ba1\u7b49\u65b9\u5411\u8fdb\u884c\u6c9f\u901a\u3002',
};

export default function Contact() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <SectionHeader eyebrow="Contact" title={copy.title} description={copy.desc} />

      <div className="rounded-2xl border border-line bg-panel p-5 shadow-neon backdrop-blur-xl sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-xl border border-line bg-white/5 p-5">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan/10 text-cyan">
                <Icon size={20} />
              </div>
              <p className="text-sm text-muted">{label}</p>
              <p className="mt-2 text-base font-medium leading-7 text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

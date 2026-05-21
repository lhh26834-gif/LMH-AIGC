import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { label: '\u9996\u9875', path: '/' },
  { label: '\u4f5c\u54c1', path: '/works' },
  { label: '\u9879\u76ee\u6848\u4f8b', path: '/projects' },
  { label: '\u5173\u4e8e\u6211', path: '/about' },
  { label: '\u8054\u7cfb', path: '/contact' },
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="fixed inset-0 -z-10 bg-radial-grid" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

      <header className="sticky top-0 z-50 border-b border-line bg-ink/72 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="h-3 w-3 rounded-full bg-cyan shadow-[0_0_22px_rgba(0,229,255,0.9)] transition group-hover:scale-110" />
            <span className="text-sm font-semibold tracking-[0.2em] text-white sm:text-base">
              MINHAO AIGC
            </span>
          </NavLink>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition hover:bg-white/10 hover:text-white ${
                    isActive ? 'bg-white/10 text-cyan' : 'text-muted'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            aria-label="\u5207\u6362\u5bfc\u822a\u83dc\u5355"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/5 text-white md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-line bg-ink/95 px-4 py-3 backdrop-blur-xl md:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm transition ${
                      isActive ? 'bg-white/10 text-cyan' : 'text-muted hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>MINHAO AIGC · AIGC Visual Creator</p>
          <p>{'\u0041\u0049\u89c6\u89c9\u521b\u4f5c / \u5546\u4e1a\u6d77\u62a5 / \u6587\u65c5\u89c6\u89c9 / \u77ed\u89c6\u9891\u5185\u5bb9\u5305\u88c5'}</p>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "#diensten", label: "Diensten" },
  { href: "#over", label: "Over Javer" },
  { href: "#werkwijze", label: "Samenwerking" },
  { href: "#opdrachtgevers", label: "Opdrachtgevers" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-8 max-720:px-5">
        <div
          className="my-[18px] max-820:my-3 max-w-[1180px] mx-auto flex items-center justify-between gap-[18px] py-[10px] pl-[22px] pr-[14px] border border-line rounded-pill"
          style={{ background: "#ffffffcc", backdropFilter: "blur(10px)" }}
        >
          <a href="#" aria-label="De Sociale Dienstverlener — naar boven" className="flex items-center shrink-0">
            <Image
              src="/logo-mark.png"
              alt=""
              width={1200}
              height={867}
              priority
              className="h-9 w-auto max-820:h-8"
            />
            <span className="ml-3 font-semibold text-[0.95rem] whitespace-nowrap max-520:hidden">
              De Sociale Dienstverlener
            </span>
          </a>

          <ul className="flex gap-[22px] list-none m-0 p-0 text-[0.9rem] text-ink-2 whitespace-nowrap max-820:hidden">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-olive transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="bg-ink text-white py-[11px] px-5 rounded-pill text-[0.86rem] font-medium whitespace-nowrap flex-shrink-0 hover:bg-olive transition-colors"
            >
              Bespreek opdracht
            </a>
            <button
              type="button"
              aria-label={open ? "Sluit menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="hidden max-820:inline-flex items-center justify-center w-10 h-10 rounded-full border border-line bg-white text-ink hover:text-olive"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {open ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div
            className="hidden max-820:block mx-3 -mt-2 mb-2 border border-line rounded-2xl p-3 shadow-[0_22px_50px_-22px_#1a1c1430]"
            style={{ background: "#ffffffee", backdropFilter: "blur(10px)" }}
          >
            <ul className="list-none m-0 p-0 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={closeMenu}
                    className="block px-4 py-3 rounded-xl text-[0.95rem] text-ink-2 hover:bg-olive-faint hover:text-olive-deep"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";

const KEY = "sdv_cookie_choice";

export default function CookieBanner() {
  // Start hidden during SSR to avoid hydration mismatch; reveal after mount if no prior choice
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function choose(choice: "accept" | "decline") {
    try {
      localStorage.setItem(KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Cookievoorkeuren"
      className="fixed bottom-[18px] left-[18px] right-[18px] z-[60] max-w-[520px] mx-auto bg-white border border-line rounded-[20px] py-[22px] px-6 flex flex-col gap-[14px] transition-[transform,opacity] duration-300"
      style={{
        boxShadow: "0 22px 50px -22px #1a1c1440",
        transform: visible ? "translateY(0)" : "translateY(140%)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <h5
        className="m-0 font-display font-medium text-[1.05rem] flex items-center gap-[10px]"
        style={{ letterSpacing: "-0.01em" }}
      >
        <span className="w-2 h-2 bg-olive rounded-full inline-block" />
        Cookies &amp; privacy
      </h5>
      <p className="m-0 text-ink-2 text-[0.9rem] leading-[1.5]">
        Deze website gebruikt alleen functionele cookies om te zorgen dat alles werkt. Geen tracking, geen advertenties. Lees meer in het{" "}
        <a
          href="#"
          className="underline"
          style={{ color: "var(--olive-deep)" }}
        >
          privacystatement
        </a>
        .
      </p>
      <div className="flex gap-[10px] flex-wrap">
        <button
          type="button"
          onClick={() => choose("decline")}
          className="flex-1 min-w-[120px] cursor-pointer py-3 px-[18px] rounded-pill font-medium text-[0.9rem] bg-transparent text-ink border border-line hover:border-olive transition-colors"
          style={{ fontFamily: "inherit" }}
        >
          Alleen noodzakelijk
        </button>
        <button
          type="button"
          onClick={() => choose("accept")}
          className="flex-1 min-w-[120px] cursor-pointer py-3 px-[18px] rounded-pill font-medium text-[0.9rem] bg-ink text-white border-0 hover:bg-olive-deep transition-colors"
          style={{ fontFamily: "inherit" }}
        >
          Akkoord
        </button>
      </div>
    </div>
  );
}

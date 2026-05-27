const tiles = [
  {
    label: "Bellen of appen",
    value: "06 — 33 66 83 70",
    href: "tel:+31633668370",
  },
  {
    label: "E-mail",
    value: "info@socialedienstverlener.nl",
    href: "mailto:info@socialedienstverlener.nl",
  },
  {
    label: "WhatsApp",
    value: "Direct bericht via WhatsApp",
    href: "https://wa.me/31633668370",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-8 max-720:px-5">
        <div
          className="relative overflow-hidden bg-white border border-line rounded-[36px] p-[60px] grid grid-cols-[1.1fr_1fr] gap-[50px] items-center max-920:grid-cols-1 max-920:p-8 max-920:rounded-[28px] max-920:gap-[30px]"
        >
          {/* Decorative circle */}
          <div
            aria-hidden="true"
            className="absolute z-0 rounded-full"
            style={{
              left: "-80px",
              bottom: "-120px",
              width: 300,
              height: 300,
              background: "var(--olive-faint)",
            }}
          />

          {/* Left */}
          <div className="relative z-10">
            <div
              className="inline-block py-[6px] px-[14px] rounded-pill text-[0.78rem] font-medium mb-[18px]"
              style={{
                background: "var(--olive-faint)",
                color: "var(--olive-deep)",
                border: "1px solid #63850018",
              }}
            >
              Contact
            </div>
            <h2
              className="font-display font-medium m-0 mb-[18px]"
              style={{
                fontSize: "clamp(34px, 4.6vw, 56px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.02,
              }}
            >
              Bespreek vrijblijvend{" "}
              <em className="not-italic" style={{ color: "var(--olive)" }}>
                een opdracht.
              </em>
            </h2>
            <p className="text-ink-2 m-0 mb-7 text-[1.05rem]">
              Een casus, een lopend project of een specifieke vraag? Stuur een bericht of bel direct. Ik reageer binnen één werkdag — en als het niet past, denk ik graag mee over een passend alternatief.
            </p>
            <a
              href="mailto:info@socialedienstverlener.nl"
              className="inline-flex items-center gap-[10px] py-4 px-[26px] rounded-pill font-medium text-[0.98rem] bg-ink text-cream hover:bg-olive-deep transition-[transform,background] duration-200 hover:-translate-y-px"
            >
              Neem contact op via mail
              <span className="bg-olive w-6 h-6 rounded-full inline-grid place-items-center text-white text-[0.78rem]">
                →
              </span>
            </a>
          </div>

          {/* Right - links */}
          <div className="relative z-10 grid gap-3">
            {tiles.map((t) => (
              <a
                key={t.href}
                href={t.href}
                {...(t.external
                  ? { target: "_blank", rel: "noopener" }
                  : {})}
                className="flex justify-between items-center bg-cream py-[18px] px-[22px] rounded-[16px] font-medium transition-colors duration-150 hover:bg-olive-faint"
              >
                <div>
                  <small className="text-[0.76rem] text-ink-2 block mb-[2px] font-normal">
                    {t.label}
                  </small>
                  {t.value}
                </div>
                <span className="w-9 h-9 rounded-full bg-olive text-white grid place-items-center">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

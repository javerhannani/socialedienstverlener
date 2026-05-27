const cards = [
  {
    tag: "Gemeentes & wijkteams",
    h: "Wanneer een casus om extra handen vraagt.",
    items: [
      "Casusregie op lopende trajecten",
      "Jeugdhulp via ZIN of PGB",
      "Overbruggings­zorg bij wachttijd",
      "Korte, heldere terugkoppeling",
    ],
  },
  {
    tag: "Zorgaanbieders",
    h: "Wanneer uw caseload of expertise tekortschiet.",
    items: [
      "Detachering of onderaannemerschap",
      "Complexe casuïstiek erbij pakken",
      "Bokscoaching als interventie",
      "Tijdelijke vervanging of uitbreiding",
    ],
  },
  {
    tag: "Scholen & projecten",
    h: "Wanneer er meer nodig is dan de mentor kan bieden.",
    items: [
      "Groepswerk & weerbaarheids­trainingen",
      "Individuele begeleiding op school",
      "Inzet bij jongeren­projecten",
      "Meedenken aan programma‐ontwerp",
    ],
  },
];

export default function Opdrachtgevers() {
  return (
    <section id="opdrachtgevers" className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-8 max-720:px-5">
        <div className="flex flex-col items-center text-center gap-[14px] mb-[54px]">
          <div
            className="rounded-pill text-[0.78rem] font-medium py-[6px] px-[14px]"
            style={{
              background: "var(--olive-faint)",
              color: "var(--olive-deep)",
              border: "1px solid #63850018",
            }}
          >
            Opdrachtgevers
          </div>
          <h2
            className="font-display font-medium m-0 max-w-[20ch]"
            style={{
              fontSize: "clamp(34px, 4.8vw, 60px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.04,
            }}
          >
            Voor wie ik werk.
          </h2>
          <p className="m-0 text-ink-2 max-w-[54ch] text-[1.06rem]">
            Drie type partijen die mij inzetten — elk met een eigen vraagstuk en tempo.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[18px] mt-[30px] max-820:grid-cols-1">
          {cards.map((c) => (
            <div
              key={c.tag}
              className="bg-white border border-line rounded-[22px] p-7 flex flex-col gap-3"
            >
              <div
                className="text-[0.78rem] font-medium uppercase"
                style={{ color: "var(--olive-deep)", letterSpacing: "0.05em" }}
              >
                {c.tag}
              </div>
              <h4
                className="font-display font-medium text-[1.4rem] m-0"
                style={{ letterSpacing: "-0.02em" }}
              >
                {c.h}
              </h4>
              <ul className="m-0 p-0 list-none text-ink-2 text-[0.95rem]">
                {c.items.map((it, i) => (
                  <li
                    key={i}
                    className="py-2 flex gap-[10px] border-t border-line"
                  >
                    <span
                      className="font-semibold"
                      style={{ color: "var(--olive)" }}
                    >
                      ✓
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

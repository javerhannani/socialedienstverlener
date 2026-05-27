const steps = [
  {
    n: "01",
    h: "Aanvraag",
    p: "U mailt of belt met een casus, een lopend project of een specifieke vraag. Ik reageer binnen één werkdag met een eerste reactie.",
    dur: "≤ 1 werkdag",
  },
  {
    n: "02",
    h: "Kennismaking & match",
    p: "Korte verkenning of het past — bij u op locatie, bij mij of digitaal. We bespreken inhoud, beschikbaarheid en tarief.",
    dur: "~ 1 uur · vrijblijvend",
  },
  {
    n: "03",
    h: "Inzet",
    p: "Uitvoering met korte lijn naar u als opdrachtgever en het netwerk rond de jongere. Tussentijds bereikbaar, geen onnodige administratie.",
    dur: "Op maat",
  },
  {
    n: "04",
    h: "Rapportage & afronding",
    p: "Heldere tussentijdse terugkoppeling en een afsluitend gesprek. Met, indien gewenst, een schriftelijk eindverslag.",
    dur: "Op vaste momenten",
  },
];

export default function Werkwijze() {
  return (
    <section id="werkwijze" className="py-[100px]">
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
            Samenwerking
          </div>
          <h2
            className="font-display font-medium m-0 max-w-[20ch]"
            style={{
              fontSize: "clamp(34px, 4.8vw, 60px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.04,
            }}
          >
            Hoe een opdracht meestal verloopt.
          </h2>
          <p className="m-0 text-ink-2 max-w-[54ch] text-[1.06rem]">
            Van eerste aanvraag tot afsluitende rapportage — in vier overzichtelijke stappen.
          </p>
        </div>

        <div className="grid gap-[14px]">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-white border border-line rounded-[22px] py-6 px-7 grid items-center gap-6 grid-cols-[90px_1fr_auto] max-720:grid-cols-[60px_1fr] max-720:gap-4"
            >
              <div
                className="font-display font-medium leading-none text-[3rem] max-720:text-[2.2rem]"
                style={{ color: "var(--olive)", letterSpacing: "-0.03em" }}
              >
                {s.n}
              </div>
              <div>
                <h4
                  className="font-display font-medium text-[1.3rem] m-0 mb-1"
                  style={{ letterSpacing: "-0.015em" }}
                >
                  {s.h}
                </h4>
                <p className="m-0 text-ink-2 text-[0.96rem]">{s.p}</p>
              </div>
              <div
                className="rounded-pill text-[0.78rem] font-medium py-2 px-[14px] whitespace-nowrap max-720:col-span-2"
                style={{
                  background: "var(--olive-faint)",
                  color: "var(--olive-deep)",
                }}
              >
                {s.dur}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

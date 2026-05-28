import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-[12px] pb-10">
      <div className="max-w-[1200px] mx-auto px-8 max-720:px-5">
        <div className="grid grid-cols-[1.15fr_.85fr] gap-[60px] items-center max-920:grid-cols-1 max-920:gap-8">
          {/* Left column */}
          <div>
            <div
              className="inline-flex items-center gap-[10px] py-2 px-4 rounded-pill text-[0.82rem] font-medium mb-7"
              style={{
                background: "var(--olive-faint)",
                color: "var(--olive-deep)",
                border: "1px solid #63850020",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-olive"
                style={{ boxShadow: "0 0 0 4px #63850018" }}
              />
              Freelance jeugdhulpverlener · Flexibel inzetbaar
            </div>

            <h1
              className="font-display font-medium m-0 mb-6"
              style={{
                fontSize: "clamp(48px, 7.6vw, 108px)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
              }}
            >
              Jeugdhulp <span className="headline-underline">op maat</span> — daar waar het reguliere aanbod{" "}
              <span className="headline-accent">tekortschiet.</span>
            </h1>

            <p className="text-[1.2rem] text-ink-2 max-w-[50ch] m-0 mb-8">
              Achter <strong className="text-ink font-semibold">De Sociale Dienstverlener</strong> staat Javer Hannani — freelance jeugdhulpverlener met tien jaar ervaring (13–27 jaar). Direct inzetbaar voor gemeentes,
              wijkteams, zorgaanbieders en scholen in Noord-Holland.
            </p>

            <div className="flex gap-3 flex-wrap items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-[10px] py-4 px-[26px] rounded-pill font-medium text-[0.98rem] bg-ink text-cream hover:bg-olive-deep transition-[transform,background] duration-200 hover:-translate-y-px"
              >
                Bespreek een opdracht
                <span className="bg-olive w-6 h-6 rounded-full inline-grid place-items-center text-white text-[0.78rem]">
                  →
                </span>
              </a>
              <a
                href="#diensten"
                className="inline-flex items-center gap-[10px] py-4 px-[26px] rounded-pill font-medium text-[0.98rem] bg-transparent text-ink hover:text-olive transition-[transform,border-color,color] duration-200 hover:-translate-y-px"
                style={{ border: "1px solid #1a1c1430" }}
              >
                Bekijk diensten
              </a>
            </div>

            <div className="mt-[34px] flex gap-[18px] items-center flex-wrap text-ink-2 text-[0.88rem]">
              {["SKJ geregistreerd", "10 jaar ervaring", "Regio Noord-Holland"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 bg-white border border-line py-2 px-[14px] rounded-pill text-[0.84rem] text-ink"
                >
                  <span className="w-[6px] h-[6px] bg-olive rounded-full" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right column: hero stack */}
          <div className="relative h-[560px] max-920:h-[520px] max-520:h-[480px]">
            {/* c1 dark photo card */}
            <div
              className="absolute top-0 left-0 right-[50px] bottom-[140px] bg-ink text-cream p-[26px] rounded-[28px] flex flex-col gap-[18px] overflow-hidden max-520:right-6 max-520:bottom-[160px] max-520:p-5"
              style={{ boxShadow: "0 22px 50px -22px #1a1c1430" }}
            >
              <div className="flex justify-between items-start gap-3">
                <h4
                  className="m-0 font-display font-medium text-[1.35rem] leading-[1.15]"
                  style={{ maxWidth: "13ch" }}
                >
                  Korte lijnen. Heldere rapportage. Geen wachtlijst.
                </h4>
                <div className="bg-olive text-white py-[6px] px-3 rounded-pill text-[0.74rem] font-medium whitespace-nowrap">
                  13–27 jaar
                </div>
              </div>
              <div className="relative flex-1 rounded-[20px] overflow-hidden">
                <Image
                  src="/javer-sfeer.jpg"
                  alt="Javer Hannani"
                  fill
                  sizes="(max-width: 920px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* c2 white overlay card */}
            <div
              className="absolute right-0 bottom-0 w-[62%] max-520:w-[78%] bg-white py-[18px] px-5 max-520:py-[14px] max-520:px-4 rounded-[28px] border border-line flex flex-col gap-1 overflow-hidden"
              style={{ boxShadow: "0 22px 50px -22px #1a1c1430" }}
            >
              <div
                className="text-[0.7rem] text-ink-2 uppercase font-medium mb-1"
                style={{ letterSpacing: "0.08em" }}
              >
                Inzetbaar voor
              </div>
              {[
                { ic: "G", title: "Gemeentes & wijkteams", sub: "Casusregie en jeugdhulp op afroep" },
                { ic: "Z", title: "Zorgaanbieders", sub: "Detachering & onderaanneming" },
                { ic: "S", title: "Scholen & projecten", sub: "Groepswerk en begeleiding" },
              ].map((r, i) => (
                <div
                  key={r.ic}
                  className={`flex gap-[10px] items-center py-2 text-[0.88rem] ${i > 0 ? "border-t border-line" : ""}`}
                  style={{ minWidth: 0 }}
                >
                  <span className="w-7 h-7 rounded-full bg-olive-faint grid place-items-center font-display font-semibold text-[0.74rem] flex-none"
                    style={{ color: "var(--olive-deep)" }}
                  >
                    {r.ic}
                  </span>
                  <div className="min-w-0 flex-1">
                    <strong className="block font-semibold text-[0.92rem] leading-[1.2]">{r.title}</strong>
                    <small className="text-ink-2 text-[0.74rem] block mt-px leading-[1.3]">{r.sub}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

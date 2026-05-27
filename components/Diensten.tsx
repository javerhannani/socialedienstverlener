type IconProps = { className?: string };

function IconCoach({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
    </svg>
  );
}

function IconCase({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7h18M3 12h18M3 17h12" />
      <circle cx="19" cy="17" r="2.2" />
    </svg>
  );
}

function IconBoks({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4h-3a3 3 0 0 0-3 3v3l-2 1v6a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-3" />
      <path d="M14 4l4 2v5a2 2 0 0 1-2 2h-2" />
    </svg>
  );
}

function IconGroup({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M3 20c0-3 2.5-5 5-5s5 2 5 5" />
      <path d="M11 20c0-3 2.5-5 5-5s5 2 5 5" />
    </svg>
  );
}

function IconHouse({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 21V8l7-4 7 4v13" />
      <path d="M9 21v-7h6v7" />
    </svg>
  );
}

function IconPlus({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export default function Diensten() {
  return (
    <section id="diensten" className="py-[100px]">
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
            Diensten
          </div>
          <h2
            className="font-display font-medium m-0 max-w-[20ch]"
            style={{
              fontSize: "clamp(34px, 4.8vw, 60px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.04,
            }}
          >
            Vijf manieren waarop ik kan worden ingezet.
          </h2>
          <p className="m-0 text-ink-2 max-w-[54ch] text-[1.06rem]">
            Van losse casusregie tot meerjarige projecten. Flexibel inzetbaar via ZIN, PGB, detachering of onderaannemerschap — in afstemming met u als opdrachtgever.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-820:grid-cols-1">
          {/* 01 Jongerencoaching */}
          <ServiceCard icon={<IconCoach />} title="Jongerencoaching">
            Eén-op-één begeleiding van jongeren (13–27) die vastlopen op school, thuis, op het werk of in zichzelf. Op locatie, op straat of wandelend buiten — wat past bij deze jongere.
          </ServiceCard>

          {/* 02 Casusregie */}
          <ServiceCard icon={<IconCase />} title="Casusregie">
            Overzicht houden in complexe trajecten. Ik coördineer tussen gezin, hulpverleners, school en gemeente, en lever heldere terugkoppeling aan u als opdrachtgever.
          </ServiceCard>

          {/* 03 Bokscoaching - feature */}
          <FeatureCard icon={<IconBoks />} title="Bokscoaching">
            Bokstraining als interventie. Werken aan emotie&shy;regulatie, zelfbeheersing en lichaams&shy;bewustzijn — vaak passend voor jongeren die meer baat hebben bij bewegen dan praten.
          </FeatureCard>

          {/* 04 Groepswerk */}
          <ServiceCard icon={<IconGroup />} title="Groepswerk">
            Themasessies en trainingen voor groepen jongeren. Op maat — weerbaarheid, communicatie of samenwerking. Voor scholen, jongerenwerk of wijkteams.
          </ServiceCard>

          {/* 05 Activiteitenbegeleiding */}
          <ServiceCard
            icon={<IconHouse />}
            title={<>Activiteiten&shy;begeleiding &amp; projecten</>}
          >
            Inzet bij jongerenprojecten — als uitvoerder of als mede-ontwerper. Van losse activiteiten tot meerjarige programma&apos;s, klein of groot.
          </ServiceCard>

          {/* 06 CTA tile */}
          <a
            href="#contact"
            className="group flex flex-col p-[30px] px-7 rounded-[24px] min-h-[240px] text-left transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--olive-faint)",
              border: "1px dashed #63850050",
            }}
          >
            <div
              className="w-[54px] h-[54px] rounded-[18px] grid place-items-center mb-[22px]"
              style={{ background: "#63850020", color: "var(--olive-deep)" }}
            >
              <IconPlus />
            </div>
            <h3
              className="font-display font-medium text-[1.5rem] m-0 mb-[10px]"
              style={{ letterSpacing: "-0.02em", color: "var(--olive-deep)" }}
            >
              Andere opdracht?
            </h3>
            <p
              className="m-0 text-[0.97rem]"
              style={{ color: "var(--olive-deep)", opacity: 0.85 }}
            >
              Iets specifieks voor uw gemeente, organisatie of school? Vertel kort wat u nodig heeft — vaak is er ruimte om samen iets passends te maken.
            </p>
            <span
              className="mt-auto pt-[22px] text-[0.86rem] font-medium inline-flex items-center gap-2"
              style={{ color: "var(--olive-deep)" }}
            >
              Neem contact op →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="svc-card group bg-white border border-line rounded-[24px] p-[30px] px-7 min-h-[240px] flex flex-col transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-28px_#1a1c1430] hover:border-[#63850040]">
      <div
        className="w-[54px] h-[54px] rounded-[18px] bg-olive-faint grid place-items-center mb-[22px]"
        style={{ color: "var(--olive-deep)" }}
      >
        {icon}
      </div>
      <h3
        className="font-display font-medium text-[1.5rem] m-0 mb-[10px]"
        style={{ letterSpacing: "-0.02em" }}
      >
        {title}
      </h3>
      <p className="m-0 text-ink-2 text-[0.97rem]">{children}</p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className="feature-glow relative overflow-hidden bg-ink text-cream rounded-[24px] p-[30px] px-7 min-h-[240px] flex flex-col transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-28px_#1a1c1430]"
      style={{ border: "1px solid var(--ink)" }}
    >
      <span
        className="absolute top-6 right-6 bg-olive text-white py-[6px] px-3 rounded-pill text-[0.7rem] font-medium uppercase z-10"
        style={{ letterSpacing: "0.04em" }}
      >
        Uniek
      </span>
      <div
        className="w-[54px] h-[54px] rounded-[18px] grid place-items-center mb-[22px] relative z-10"
        style={{ background: "#ffffff14", color: "var(--olive-soft)" }}
      >
        {icon}
      </div>
      <h3
        className="font-display font-medium text-[1.5rem] m-0 mb-[10px] relative z-10"
        style={{ letterSpacing: "-0.02em" }}
      >
        {title}
      </h3>
      <p
        className="m-0 text-[0.97rem] relative z-10"
        style={{ color: "#ffffffb8" }}
      >
        {children}
      </p>
    </div>
  );
}

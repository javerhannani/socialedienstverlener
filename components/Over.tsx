import Image from "next/image";

export default function Over() {
  return (
    <section id="over" className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-8 max-720:px-5">
        <div
          className="relative overflow-hidden grid grid-cols-[.9fr_1.1fr] gap-[60px] items-center bg-white border border-line rounded-[36px] p-[50px] max-920:grid-cols-1 max-920:gap-9 max-920:p-7 max-920:rounded-[28px]"
        >
          {/* Decorative circle */}
          <div
            aria-hidden="true"
            className="absolute z-0 rounded-full"
            style={{
              right: "-100px",
              top: "-100px",
              width: 280,
              height: 280,
              background: "var(--olive-faint)",
            }}
          />

          {/* Portrait */}
          <div
            className="relative z-10 rounded-[24px] overflow-hidden border border-line"
            style={{ aspectRatio: "4 / 5" }}
          >
            <Image
              src="/javer-portrait.jpg"
              alt="Portret van Javer Hannani"
              fill
              sizes="(max-width: 920px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="relative z-10">
            <div
              className="inline-block py-[6px] px-[14px] rounded-pill text-[0.78rem] font-medium mb-[18px]"
              style={{
                background: "var(--olive-faint)",
                color: "var(--olive-deep)",
                border: "1px solid #63850018",
              }}
            >
              Over mij
            </div>
            <h2
              className="font-display font-medium m-0 mb-5"
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                letterSpacing: "-0.025em",
                lineHeight: 1.04,
              }}
            >
              Even voorstellen —{" "}
              <em className="not-italic" style={{ color: "var(--olive)" }}>
                Javer Hannani.
              </em>
            </h2>
            <p className="text-[1.06rem] text-ink-2 m-0 mb-[14px]">
              Vanaf mijn zestiende werk ik met jongeren — eerst als vrijwilliger en activiteiten&shy;begeleider, later als hulpverlener en regisseur. Inmiddels tien jaar ervaring in{" "}
              <strong className="text-ink font-semibold">verschillende zwaartes</strong>: van lichte coaching tot complexe casusregie.
            </p>
            <p className="text-[1.06rem] text-ink-2 m-0 mb-[14px]">
              Ik studeerde af aan de <strong className="text-ink font-semibold">HBO Social Work</strong> met het excellentie&shy;programma en ben <strong className="text-ink font-semibold">SKJ-geregistreerd</strong>. Praktisch en oplossings&shy;gericht, met oog voor het verhaal eronder — en met de overtuiging dat jongeren rust, vertrouwen en tijd verdienen. Voor opdrachtgevers betekent dat: korte lijnen, heldere afspraken en bereikbaarheid wanneer het nodig is.
            </p>

            <div className="grid grid-cols-3 gap-[14px] mt-7">
              {[
                { k: "10 jr", v: "ervaring in de jeugdhulp" },
                { k: "SKJ", v: "geregistreerd" },
                { k: "HBO+", v: "Social Work met excellentie" },
              ].map((s) => (
                <div key={s.k} className="bg-cream rounded-2xl p-4">
                  <div
                    className="font-display font-medium text-[1.7rem]"
                    style={{ color: "var(--olive-deep)", letterSpacing: "-0.03em" }}
                  >
                    {s.k}
                  </div>
                  <div className="text-[0.78rem] text-ink-2 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

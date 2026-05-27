import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="text-center text-ink-2 text-[0.86rem] pt-[50px] pb-[90px]">
      <div className="max-w-[1200px] mx-auto px-8 max-720:px-5">
        <div className="flex justify-center mb-[18px]">
          <Image
            src="/logo-full.png"
            alt="De Sociale Dienstverlener — Freelancer, voor de jeugd."
            width={3125}
            height={1806}
            className="h-28 w-auto max-720:h-24"
          />
        </div>
        <SocialLinks size="md" className="justify-center mb-5" />
        <div className="flex justify-center gap-[22px] flex-wrap">
          <span>© 2026 · Freelancer, voor de jeugd.</span>
          <span>SKJ geregistreerd</span>
          <span>Regio Noord-Holland</span>
          <span>
            <a href="#" className="text-inherit hover:text-olive-deep">
              Privacy
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

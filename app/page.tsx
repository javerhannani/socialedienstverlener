import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Diensten from "@/components/Diensten";
import Over from "@/components/Over";
import Werkwijze from "@/components/Werkwijze";
import Opdrachtgevers from "@/components/Opdrachtgevers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Diensten />
      <Over />
      <Werkwijze />
      <Opdrachtgevers />
      <Contact />
      <Footer />
      <CookieBanner />
    </>
  );
}

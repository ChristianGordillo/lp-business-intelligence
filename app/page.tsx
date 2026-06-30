import Hero from "./components/Hero";
import PropertyIntelligence from "./components/PropertyIntelligence";
import Propertysignals from "./components/Propertysignals";
import PeopleBehind from "./components/PeopleBehind";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LetsTalk from "./components/LetsTalk";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <PropertyIntelligence />
      <PeopleBehind />
      <Propertysignals />
      <LetsTalk />
      <Footer />
    </main>
  );
}
import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TechBackground from "../components/TechBackground";
import ScrollToTop from "../components/ScrollToTop";
import ScrollProgress from "../components/ScrollProgress";
import CursorSpotlight from "../components/CursorSpotlight";
import IntroLoader from "../components/IntroLoader";
import ClickEffect from "../components/ClickEffect";

const INTRO_KEY = "intro-seen";

// L'intro n'est jouée qu'une fois par session (et jamais si les animations sont réduites)
const shouldSkipIntro = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  try {
    return sessionStorage.getItem(INTRO_KEY) === "1";
  } catch {
    return false;
  }
};

export default function Home() {
  const [introDone, setIntroDone] = useState(shouldSkipIntro);

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // stockage indisponible (navigation privée) : l'intro sera rejouée, sans gravité
    }
    setIntroDone(true);
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatePresence>{!introDone && <IntroLoader onFinish={finishIntro} />}</AnimatePresence>
      <ClickEffect />
      <ScrollProgress />
      <TechBackground />
      <CursorSpotlight />
      <Navbar />
      <Hero ready={introDone} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

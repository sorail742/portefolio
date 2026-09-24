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

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <TechBackground />
      <CursorSpotlight />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

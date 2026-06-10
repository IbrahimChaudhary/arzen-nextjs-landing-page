import Header from "./components/Header";
import Hero from "./components/Hero";
import Headline from "./components/Headline";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Headline />
      <Features />
      <Stats />
      <Projects />
      <Contact />
    </>
  );
}

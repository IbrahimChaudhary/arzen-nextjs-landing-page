import Contact from "./components/Contact";
import Features from "./components/Features";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Headline from "./components/Headline";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Headline />
      <Features />
      <Stats />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

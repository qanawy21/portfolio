import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import Links from "@/components/Links";

export default function Home() {
  return (
    <div className="wrap">
      <TopBar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Education />
      </main>
      <Links />
    </div>
  );
}

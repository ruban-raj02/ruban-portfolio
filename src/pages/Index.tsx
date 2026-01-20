import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: 
          'linear-gradient(to right, rgba(128, 128, 128, 0.11) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.11) 1px, transparent 1px )',
        backgroundSize: '40px 40px'
      }}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sports from "@/components/Sports";
import Culture from "@/components/Culture";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Sports />
        <Culture />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

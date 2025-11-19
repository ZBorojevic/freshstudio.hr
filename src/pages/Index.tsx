import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Guarantee from "@/components/Guarantee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"; 

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar /> {/* Dodaj navbar ovdje */}
      <Hero />
      <Problem />
      <Solution />
      <Guarantee />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

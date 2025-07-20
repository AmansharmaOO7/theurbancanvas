import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import Reviews from "@/components/sections/reviews";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

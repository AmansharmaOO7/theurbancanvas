import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)]/90 to-[var(--royal-blue)]/80 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-shadow">
          INNOVATE DESIGN IN{" "}
          <span className="block text-6xl md:text-8xl">URBAN SPACES</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Urban Canvas blends creativity and function to craft unique, future-ready interior 
          solutions that transform spaces into masterpieces of modern living.
        </p>
        <Button 
          onClick={scrollToContact}
          className="bg-white text-[var(--navy)] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Start Your Project →
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce-slow">
          <ChevronDown className="text-white text-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

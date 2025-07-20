import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-3xl font-bold text-white mb-4 block">
              Urban Canvas
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming spaces into masterpieces of modern living. Where creativity meets 
              functionality in perfect harmony.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center hover:bg-royal-blue transition-colors duration-300">
                <Facebook className="text-white w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center hover:bg-royal-blue transition-colors duration-300">
                <Instagram className="text-white w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center hover:bg-royal-blue transition-colors duration-300">
                <Linkedin className="text-white w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center hover:bg-royal-blue transition-colors duration-300">
                <MessageCircle className="text-white w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Residential Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Commercial Spaces
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Hospitality Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Turnkey Projects
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("portfolio")}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Urban Canvas. All rights reserved. | Design Excellence Since 2020
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

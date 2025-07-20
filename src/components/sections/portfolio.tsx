import { Card } from "@/components/ui/card";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Luxury Residential Suite",
      description: "Modern bedroom design with sophisticated finishes",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Corporate Office Redesign", 
      description: "Contemporary workspace with productivity focus",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Boutique Hotel Restaurant",
      description: "Elegant dining space with modern hospitality design",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Contemporary Living Space",
      description: "Open-plan residential design with modern aesthetics", 
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Executive Office Suite",
      description: "Professional workspace with luxury finishes",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Grand Hotel Lobby",
      description: "Sophisticated hospitality design with luxury details",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold navy mb-4">Latest Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent work showcasing innovative design solutions across residential, 
            commercial, and hospitality spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group cursor-pointer border-0 shadow-none">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={item.image}
                  alt={item.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

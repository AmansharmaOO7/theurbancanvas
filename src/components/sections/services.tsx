import { Card, CardContent } from "@/components/ui/card";
import { Home, Building, Utensils, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="text-white text-3xl" />,
      title: "Residential",
      description: "Create a home that reflects your unique personality. From cozy apartments to expansive houses, we design bespoke interiors that beautifully blend comfort with timeless elegance—perfectly.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
    {
      icon: <Building className="text-white text-3xl" />,
      title: "Commercial", 
      description: "Designing workspaces that truly work for you. From modern offices to dynamic retail spaces, we create commercial interiors that boost productivity, reflect your brand, and leave a bold, lasting impression.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
    {
      icon: <Utensils className="text-white text-3xl" />,
      title: "Hospitality",
      description: "Our hospitality interior design projects focus on creating warm, welcoming, and functional spaces that elevate guest experiences. From luxurious hotel lobbies to cozy guest rooms and elegant dining areas.",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
    {
      icon: <Settings className="text-white text-3xl" />,
      title: "Turnkey Projects And Management",
      description: "Commercial interior design focuses on creating functional, efficient, and visually appealing spaces that are innovative, on-brand, and tailored to the specific needs of your business operations.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold navy mb-4">OUR SERVICES</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  {service.icon}
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold navy mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

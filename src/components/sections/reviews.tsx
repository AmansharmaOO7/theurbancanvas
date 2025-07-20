import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      text: "From concept to execution, everything was smooth. Their ideas were modern, yet practical. Great value for money.",
      name: "Rohan Mehta",
      role: "Home Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      text: "I'm super impressed! The team gave attention to tiny details and turned my boring room into something lively.",
      name: "Geeta Agarwal",
      role: "Home Owner", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      text: "Their design sense is spot on! They made my home both stylish and comfortable. Smooth communication throughout.",
      name: "Aditya Singh",
      role: "Plaza Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      text: "Amazing makeover! My space reflects my personality now. From the furniture layout to the wall colors, everything is perfect.",
      name: "Meera Patel", 
      role: "Home Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold navy mb-4">Client Reviews</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {renderStars()}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={review.image}
                    alt={`${review.name} - ${review.role}`} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold navy">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold navy mb-8">About us</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At URBAN CANVAS, we specialize in creating sophisticated, functional interiors 
                that reflect our clients' values, lifestyles, and aspirations. With a reputation 
                built on excellence, integrity, and attention to detail, we provide a comprehensive 
                range of interior design services for residential, commercial, hospitality projects 
                and Turnkey Projects and Management.
              </p>
              <p>
                Founded in 2020, our firm brings together a multidisciplinary team of experienced 
                designers, project managers, and consultants who are dedicated to delivering results 
                that are both aesthetically refined and practically effective. Each project begins 
                with a deep understanding of our client's goals, followed by a tailored design 
                process that emphasizes collaboration, innovation, and timeless elegance.
              </p>
              <p>
                From cozy urban apartments to spacious commercial spaces, we approach every project 
                with a fresh perspective and an eye for detail that transforms ordinary spaces into 
                extraordinary experiences.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Urban Canvas founder and principal designer" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Founder & Principal Designer</h3>
                <p className="text-xl">Urban Canvas Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

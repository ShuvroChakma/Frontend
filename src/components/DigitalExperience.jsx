const DigitalExperience = () => {
    const services = [
    {
      id: 1,
      title: "STRATEGY",
      icon: "📊",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      bgColor: "bg-transparent",
      textColor: "text-gray-700",
      iconBg: "bg-white",
      iconColor: "text-gray-700"
    },
    {
      id: 2,
      title: "BRANDING",
      icon: "📢",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      bgColor: "bg-white",
      textColor: "text-gray-700",
      iconBg: "bg-[#F0AA0090]",
      iconColor: "text-white"
    },
    {
      id: 3,
      title: "DEVELOPMENT",
      icon: "💻",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      bgColor: "bg-transparent",
      textColor: "text-gray-700",
      iconBg: "bg-white",
      iconColor: "text-gray-700"
    },
    {
      id: 4,
      title: "WEB DESIGN",
      icon: "🎨",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      bgColor: "bg-[#F0AA00]",
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-[#F0AA00]"
    }
  ];
  return (
    <section className="bg-[#DDCFC6] py-16 lg:py-24 px-4 border-t border-white">
      <div className="w-[90%] lg:w-[85%] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Epic design and engineering
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`${service.bgColor} p-6 lg:p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 text-center min-h-[280px] flex flex-col justify-between`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`${service.iconBg} ${service.iconColor} w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-md`}>
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className={`${service.textColor} text-lg font-bold mb-4 tracking-wide`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`${service.textColor} text-sm leading-relaxed ${service.textColor === 'text-white' ? 'opacity-90' : ''}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalExperience;

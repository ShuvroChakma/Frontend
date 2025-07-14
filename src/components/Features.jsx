const features = [
  {
    title: "Strategy",
    description: "UX strategy, research & analysis for modern design needs.",
  },
  {
    title: "Branding",
    description: "Logo creation, brand tone, identity & positioning.",
  },
  {
    title: "Development",
    description: "Responsive & dynamic websites and applications.",
  },
  {
    title: "Web Design",
    description: "Creative and conversion-focused visual design.",
  },
];

const Features = () => {
  return (
    <section className="py-16 text-center px-4">
      <h2 className="text-3xl font-bold mb-6">Epic design and engineering</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        UI/UX with modern vision, logic, and creative solutions to match client
        expectations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="bg-white shadow p-6 rounded">
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
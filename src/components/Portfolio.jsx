const categories = [
  "Website Design",
  "Mobile Application",
  "Corporate Design",
  "Mobile Application",
  "Responsive Design",
  "Digital Product",
];

const Portfolio = () => {
  return (
    <section className="bg-[#1f1f1f] text-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
      <p className="text-gray-400 mb-8">
        Some recent examples of our quality work and design experience.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {categories.map((title, i) => (
          <div key={i} className="bg-white rounded overflow-hidden shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt={title}
              className="w-full h-48 object-cover"
            />
            <div className="text-black p-4 font-medium">{title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

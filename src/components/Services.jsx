const Services = () => {
  return (
    <section className="bg-black text-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div>
          <h3 className="font-bold mb-2">Strategy</h3>
          <ul className="text-sm space-y-1 text-gray-300">
            <li>UX Research</li>
            <li>Interactive Workshops</li>
            <li>Business Mapping</li>
            <li>Digital Strategy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Design</h3>
          <ul className="text-sm space-y-1 text-gray-300">
            <li>Creative Direction</li>
            <li>Prototypes</li>
            <li>Brand Guidelines</li>
            <li>UI & Web Design</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Development</h3>
          <ul className="text-sm space-y-1 text-gray-300">
            <li>Web & CMS</li>
            <li>Front-end & API</li>
            <li>Architecture Design</li>
            <li>Shopify & WordPress</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;

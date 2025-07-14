const BrandValues = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div>
          <img
            src="https://via.placeholder.com/600x400"
            alt="Brand Values"
            className="rounded-lg shadow"
          />
          <div className="bg-black text-white p-6 mt-4 text-center">
            <h3 className="text-lg font-bold mb-2">Brand Values</h3>
            <p className="text-sm">Strategic vision. Customer-centric design. Market impact.</p>
            <button className="mt-3 border border-white px-4 py-1">Explore Our Work</button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <img
            src="https://via.placeholder.com/600x200"
            alt="Design Work"
            className="rounded-lg shadow"
          />
          <img
            src="https://via.placeholder.com/600x200"
            alt="Tools"
            className="rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandValues;

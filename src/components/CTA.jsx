const CTA = () => {
  return (
    <section className="bg-yellow-400 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">Construction and renovation projects</h2>
          <p>
            We craft beautiful and functional digital spaces. Our experience ensures value-driven,
            user-friendly interfaces with measurable results.
          </p>
        </div>
        <div>
          <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import Link from "next/link";

const JoinUs = () => {
  return (
    <div className="py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Heading */}
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl text-center lg:text-left">
          <span className="block">Ready to dive in?</span>
          <span className="block text-[#FFB800]">Start your journey with Tide Bank today.</span>
        </h2>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <Link href="/how-it-works">
            <button className="bg-[#4E73DF] hover:bg-[#355B8E] text-white font-medium px-4 sm:px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
              Get Started
            </button>
          </Link>
          <Link href="/features">
            <button className="bg-transparent border-2 border-[#4E73DF] text-[#4E73DF] font-medium px-4 sm:px-6 py-2.5 rounded-lg shadow-md hover:bg-[#4E73DF] hover:text-white transition-transform transform hover:scale-105">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

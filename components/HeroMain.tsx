import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";

const HeroMain = () => {
  return (
    <section className="bg-[#240642] w-full h-screen px-6 md:px-20 py-4 md:py-10">
      <div className="flex flex-wrap items-center justify-between w-full md:w-4/5">
        {/* Left Section */}
        <div className="w-full md:w-auto">
          <div className="flex  md:flex-row items-center justify-center md:items-start">
            <div className="flex flex-col justify-between py-5 text-center md:text-left">
              <p className="w-40 text-white">
                Hi there, I’m Otto! Welcome to my world.
              </p>
              <button className="px-4 py-2 bg-gray-100 text-blue-700 font-bold rounded-full hover:bg-gray-400 hover:text-blue-800 mt-4 md:mt-10">
                Join Waitlist
              </button>
            </div>
            <div className="mt-4 md:mt-0 md:ml-4">
              <Image
                className="object-contain"
                src="/images/penguin-hero-1.png"
                alt="penguin-hero"
                width={160} // Equivalent to sm:w-40
                height={160} // Equivalent to sm:h-40
                sizes="(max-width: 640px) 112px, 160px" // Equivalent to w-28 and sm:w-40
                priority
              />
            </div>
          </div>
          <button className="px-6 py-2 bg-black/30 text-white font-medium flex items-center gap-2 mt-4 rounded-full w-full md:w-auto justify-center md:justify-start">
            <p>Event - Ongoing - Waiting List</p> <ChevronRight />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center w-full md:w-auto mt-8 md:mt-0">
          <h1 className="text-white text-5xl sm:text-7xl md:text-9xl font-extrabold leading-tight md:leading-[158.2px] text-center md:text-left">
            A new way <br /> of banking_
          </h1>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full md:w-2/5 mt-10 text-center md:text-left">
        <p className="font-bold text-white text-lg sm:text-xl md:text-2xl">
          Use the people’s favorite app to do everything, from paying bills,
          saving for goals, or managing everyday expenses. Tide makes it simple,
          smart, secure, and more importantly, less awkward.
        </p>
        <button className="px-4 py-2 bg-secondary text-white text-lg sm:text-xl font-semibold flex items-center gap-3 mt-8 rounded-full w-full md:w-auto justify-center md:justify-start">
          <p>Customer reviews</p> <ChevronDown />
        </button>
      </div>
    </section>
  );
};

export default HeroMain;

import Features from "@/components/Features";
import HeroMain from "@/components/HeroMain";
import JoinUs from "@/components/JoinUs";

export default function Home() {
  return (
    <div className="space-y-32 text-white">
      {/* Hero Section */}
      <div className="">
        <HeroMain />
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Features />
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-gradient-to-b from-[#1F2A44] to-[#141D2A] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <JoinUs />
        </div>
      </div>
    </div>
  );
}

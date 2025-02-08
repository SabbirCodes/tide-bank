import Link from "next/link";
import Card from "./Card";
import { ClipboardList, Users, Calculator, DollarSign } from "lucide-react";

const features = [
  { name: "Expense tracking", icon: ClipboardList },
  { name: "Payroll integration", icon: DollarSign },
  { name: "Multi-user account access", icon: Users },
  { name: "Automated tax calculation", icon: Calculator },
];

export default function ForBusiness() {
  return (
    <section id="for-business" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-grayDark">
            For Business
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            Simplifying finances for growing businesses
          </p>
          <p className="mt-2 text-lg text-gray-700">
            With us, you save time, reduce costs, and streamline your business operations
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-10">
          <p className="text-center font-medium text-xl text-gray-800 mb-6">
            With all features to cater for you
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card
                key={feature.name}
                title={feature.name}
                icon={feature.icon}
                description=""
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <Link
            href="/signup-business"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary rounded-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
          >
            Sign Up for a Free Business Account
          </Link>
        </div>
      </div>
    </section>
  );
}

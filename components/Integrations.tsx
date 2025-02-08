import Card from "./Card";
import { Link2, DollarSign, Briefcase } from "lucide-react";
import Link from "next/link";

const integrationCategories = [
  { name: "Your accounting tools", icon: Link2 },
  { name: "Payment gateways", icon: DollarSign },
  { name: "Business platforms", icon: Briefcase },
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Integrations
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            Seamless integration with the tools you&apos;re already using
          </p>
        </div>

        <div className="mt-10">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-foreground mb-4">
              Access and Link your other bank accounts to simplify everything
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Integrate all of your finances in one
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {integrationCategories.map((category) => (
              <Card
                key={category.name}
                icon={category.icon}
                title={category.name}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-2xl font-bold text-foreground mb-6">
            We got you sorted!
          </p>
          <Link
            href="/integration-guide"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Request Step-by-Step Integration
          </Link>
        </div>
      </div>
    </section>
  );
}

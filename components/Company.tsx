import { Mail } from "lucide-react";

const companyValues = [
  {
    title: "All-in-One Convenience",
    description: "Say goodbye to juggling multiple apps",
  },
  {
    title: "Financial Freedom",
    description: "Take control of your money with tools built for you",
  },
  {
    title: "Designed for You",
    description: "Intuitive, sleek, and tailored to your needs",
  },
];

const coreValues = ["Transparency", "Innovation", "Inclusion"];

const leadershipTeam = [
  { name: "Martin Moupanaga", role: "Founder & CEO" },
  { name: "Heekiu Man", role: "COO" },
  { name: "Lohith Neerukonda", role: "CTO" },
];

export default function Company() {
  return (
    <section id="company" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Company
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            {"We aren't just another fintech company"}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {companyValues.map((value) => (
              <div
                key={value.title}
                className="bg-white text-center p-6 rounded-xl shadow-card"
              >
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-4">
            Our Mission
          </h3>
          <p className="text-xl text-gray-700 text-center">
            Make banking super easy and convenient
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-4">
            Core Values
          </h3>
          <div className="flex justify-center space-x-4">
            {coreValues.map((value) => (
              <span
                key={value}
                className="px-4 py-2 bg-primary text-white rounded-full"
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-4">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((leader) => (
              <div
                key={leader.name}
                className="bg-white text-center p-6 rounded-xl shadow-card"
              >
                <h4 className="text-lg font-medium text-foreground mb-2">
                  {leader.name}
                </h4>
                <p className="text-gray-700">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-4">
            Contact Info
          </h3>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="mailto:inquiry@tidebank.net"
              className="text-primary hover:text-primary/80"
            >
              inquiry@tidebank.net
            </a>
            <a
              href="mailto:support@tidebank.net"
              className="text-primary hover:text-primary/80"
            >
              support@tidebank.net
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="mailto:contact@tidebank.net"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <Mail className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
            Reach out to us
          </a>
        </div>
      </div>
    </section>
  );
}

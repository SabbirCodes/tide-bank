import { Download, CreditCard, Banknote } from "lucide-react";
import Card from "./Card";

const steps = [
  {
    title: "Download the App",
    description:
      "Get started by downloading the Tide Bank app from your app store.",
    icon: Download,
  },
  {
    title: "Create an Account",
    description:
      "Sign up for an account in minutes with just a few simple steps.",
    icon: CreditCard,
  },
  {
    title: "Start Banking",
    description: "Enjoy seamless banking, transfers, and financial management.",
    icon: Banknote,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto text-center px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-grayDark sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-700">
            Get started with Tide Bank in three easy steps
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Card
                key={index}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Smartphone, CreditCard, PiggyBank, Lock } from "lucide-react";
import Card from "./Card";

const features = [
  {
    name: "Mobile Banking",
    description:
      "Manage your finances anytime, anywhere with our user-friendly mobile app.",
    icon: Smartphone,
  },
  {
    name: "Instant Payments",
    description:
      "Send money to friends and family or pay bills instantly with just a few taps.",
    icon: CreditCard,
  },
  {
    name: "Savings Goals",
    description:
      "Set and track your savings goals to achieve your financial dreams faster.",
    icon: PiggyBank,
  },
  {
    name: "Bank-Grade Security",
    description:
      "Rest easy knowing your money and data are protected by state-of-the-art security.",
    icon: Lock,
  },
];

export default function Features() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto text-center px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-grayDark">
          Key Features
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          Experience a better way to manage your finances with Tide Bank.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.name} title={feature.name} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

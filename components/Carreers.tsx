import { Mail } from "lucide-react"
import JobCard from "./JobCard"

const jobOpenings = [
  "DevOps Engineer",
  "Business Development Manager",
  "Finance & Compliance",
  "Investor Relations",
  "Miscellaneous",
  "Product Manager",
]

const benefits = ["Flexible working hours", "Health Insurance", "Learning Opportunities", "Networking opportunities"]

export default function Careers() {
  return (
    <section id="careers" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Careers</h2> {/* Dark text */}
          <p className="mt-4 text-xl text-gray-700">Join us in Revolutionizing finance</p> {/* Darker gray text */}
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-foreground mb-4">Current Openings - Remote</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobOpenings.map((job) => (
              <JobCard key={job} job={job} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-foreground mb-4">Perks & Benefits</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="bg-white text-center p-6 rounded-xl shadow-card">
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-xl text-foreground mb-4">Email us - Job title Included</p>
          <a
            href="mailto:careers@tidebank.com"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <Mail className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
            Contact Us
          </a>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">Terms and Conditions apply.</p>
      </div>
    </section>
  )
}

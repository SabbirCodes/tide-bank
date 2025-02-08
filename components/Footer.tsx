import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Tide</h3>
            <p className="mt-2 text-gray-600">
              Ride the Wave of Financial Freedom.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900">Services</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/payments" className="hover:text-blue-600">
                  Payments
                </Link>
              </li>
              <li>
                <Link href="/business-accounts" className="hover:text-blue-600">
                  Business Accounts
                </Link>
              </li>
              <li>
                <Link href="/investment" className="hover:text-blue-600">
                  Investment
                </Link>
              </li>
              <li>
                <Link href="/loans" className="hover:text-blue-600">
                  Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="font-semibold text-gray-900">Help & Support</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-blue-600">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-blue-600">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-blue-600">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold text-gray-900">Legal</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/regulatory-info" className="hover:text-blue-600">
                  Regulatory Info
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-blue-600"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-blue-600"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-blue-600"
              >
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-4 text-center">
          <p>© {new Date().getFullYear()} Tide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

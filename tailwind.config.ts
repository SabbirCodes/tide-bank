import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral colors for backgrounds and text
        background: "#f5f5f5",  // Light gray background
        foreground: "#333333",  // Dark text for readability

        // PayPal-inspired colors
        primary: "#0070ba",  // PayPal blue for buttons and links
        secondary: "#663EC333",  // for button
        grayDark: "#2d2d2d",  // Darker gray for footer and dark elements
        grayLight: "#e5e5e5", // Light gray for subtle sections

        // Success and Error messages
        success: "#4caf50",  // Green for success messages
        error: "#f44336",    // Red for error messages
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],  // Standard clean font for fintech applications
      },
      boxShadow: {
        "button": "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle button shadow
        "card": "0 2px 10px rgba(0, 0, 0, 0.1)",  // Light card shadow
      },
      spacing: {
        128: "32rem", // For large sections or hero areas
      },
      borderRadius: {
        xl: "1rem",  // Soft rounded corners for buttons, inputs, etc.
        "2xl": "1.5rem", // More rounded for cards and sections
      },
    },
  },
  plugins: [],
} satisfies Config;

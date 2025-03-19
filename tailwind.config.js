/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // Added root pages directory
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Added root components directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // Added root app directory
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      fontFamily: {
        courier: ['"Courier New"', "Courier", "monospace"],
        patrick: ['"Patrick Hand"', "cursive"],
        laxent: ['"Cursive"', "sans-serif"],
      },
      colors: {
        green: "#00FF00",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "star-pattern": "radial-gradient(white 1px, transparent 1px)",
      },
      animation: {
        "move-stars": "moveStars 20s linear infinite",
      },
      keyframes: {
        moveStars: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

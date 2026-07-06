import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#05070B",
        "opai-blue": "#0A84FF",
        "opai-blue-soft": "#4DA3FF",
        "ptsd-green": "#6EDB8F",
        ink: "#FFFFFF"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(10, 132, 255, 0.24)",
        "green-glow": "0 0 48px rgba(110, 219, 143, 0.18)"
      },
      backgroundImage: {
        "mesh-dark":
          "radial-gradient(circle at 18% 18%, rgba(10,132,255,0.18), transparent 30%), radial-gradient(circle at 74% 14%, rgba(110,219,143,0.12), transparent 28%), linear-gradient(180deg, #05070B 0%, #07101A 52%, #05070B 100%)"
      }
    }
  },
  plugins: []
};

export default config;

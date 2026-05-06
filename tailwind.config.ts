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
        ink: "#050816",
        panel: "#0b1020",
        line: "rgba(255,255,255,0.12)"
      },
      boxShadow: {
        glow: "0 0 70px rgba(99, 102, 241, 0.34)",
        soft: "0 24px 80px rgba(0, 0, 0, 0.42)"
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.26), transparent 34%), radial-gradient(circle at 80% 18%, rgba(14,165,233,0.2), transparent 28%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.42" },
          "50%": { opacity: "0.85" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4.5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#080808", paper: "#f3eee4", champagne: "#d7b56d" },
      boxShadow: { luxury: "0 30px 90px rgba(0,0,0,.45)" }
    }
  },
  plugins: []
};
export default config;
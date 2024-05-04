import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        md: "0 0 4px 0 rgba(0, 0, 0, 0.07), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        lg: "0 0 6px 0 rgba(0, 0, 0, 0.07), 0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        xl: "0 0 10px 0 rgba(0, 0, 0, 0.07), 0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        xxl: "0 0 15px 0 rgba(255, 255, 255, 0.07), 0 25px 50px -12px rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;

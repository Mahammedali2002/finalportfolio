import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // ✅ belangrijkste regel
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#E9724C",
          beige: "#FAF6EB",
        },
      },
    },
  },
  plugins: [],
};
export default config;

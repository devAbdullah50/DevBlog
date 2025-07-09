import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}", // ✅ for markdown files
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors if needed
      },
    },
  },
  darkMode: "class", // ⚠️ important for dark mode support
  plugins: [typography],
}

export default config

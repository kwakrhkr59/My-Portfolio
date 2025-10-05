module.exports = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        dark: "#0f172a",
        primary: {
          DEFAULT: "#2563eb",
          dark: "#3b82f6",
        },
        secondary: {
          DEFAULT: "#6366f1",
          dark: "#818cf8",
        },
        accent: {
          DEFAULT: "#8b5cf6",
          dark: "#a78bfa",
        },
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "Pretendard", "sans-serif"],
      },
      animation: {
        "fade-in": "fade-in 1s ease-out forwards",
        "fade-in-2s": "fade-in 1s ease-out 2s forwards",
        "fade-in-3s": "fade-in 1s ease-out 3s forwards",
        "fade-in-bounce": "fade-in-bounce 2s infinite",
        "slide-in": "slideIn 0.5s ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-bounce": {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-10px)",
          },
          "60%": {
            transform: "translateY(-5px)",
          },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

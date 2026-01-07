/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        noir: "#0a0a0a",
        night: "#121010",
        ember: "#f3c468",
        blush: "#ff5fa2",
        smoke: "#b7b1a6",
        slatewood: "#1f1a18"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(243, 196, 104, 0.2)",
        soft: "0 16px 50px rgba(0, 0, 0, 0.45)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

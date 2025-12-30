export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"]
      },
      colors: {
        background: "#0b0c10",
        surface: "#10121a",
        border: "rgba(255,255,255,0.10)",
        ink: "rgba(255,255,255,0.92)",
        muted: "rgba(255,255,255,0.64)",
        accent: "#c7b8ff"
      },
      boxShadow: { card: "0 10px 30px rgba(0,0,0,0.35)" }
    }
  },
  plugins: []
};

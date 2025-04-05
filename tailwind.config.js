/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/RichTextEditor.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4a6fa5",
        pl: "#e0e8f5",
        text: "#333333",
        "text-light": "#777777",
        background: "#f9f9f9",
        card: "#ffffff",
        border: "#e0e0e0",
      },
      fontFamily: {
        noto: ["Noto Sans Gunjala Gondi", "sans-serif"],
      },
    },
  },
  plugins: [],
};

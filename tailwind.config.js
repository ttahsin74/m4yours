/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "web-line": "linear-gradient(180deg,#accae4,rgba(85,114,139,0))",
        "bg-twelve":
          "linear-gradient(180deg,rgba(65,114,206,.2),hsla(0,0%,100%,.2) 68%)",
      },
      colors: {
        lol: "linear-gradient(180deg,rgba(65,114,206,.2),hsla(0,0%,100%,.2) 68%)",
      },
    },
  },
  plugins: [],
};

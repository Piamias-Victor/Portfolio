/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        indigo1: "#fdfdfe",
        indigo2: "#f8faff",
        indigo3: "#f0f4ff",
        indigo4: "#e6edfe",
        indigo5: "#d9e2fc",
        indigo6: "#c6d4f9",
        indigo7: "#aec0f5",
        indigo8: "#8da4ef",
        indigo9: "#3e63dd",
        indigo10: "#3a5ccc",
        indigo11: "#3451b2",
        indigo12: "#101d46",

        slate1: "#fbfcfd",
        slate2: "#f8f9fa",
        slate3: "#f1f3f5",
        slate4: "#eceef0",
        slate5: "#e6e8eb",
        slate6: "#dfe3e6",
        slate7: "#d7dbdf",
        slate8: "#c1c8cd",
        slate9: "#889096",
        slate10: "#7e868c",
        slate11: "#687076",
        slate12: "#11181c",
      },
    },
  },
};

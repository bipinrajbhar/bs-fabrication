/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [forms()],
};

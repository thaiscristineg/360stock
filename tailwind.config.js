/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002060", // Azul Marinho
        secondary: "#F0F8FF", // Azul Claro (quase branco)
        accent: "#00B0F0", // Azul Céu
        background: "#FFFFFF", // Branco
        foreground: "#333333", // Cinza Escuro (para textos)
        card: "#FFFFFF", // Branco (para cards)
        'card-foreground': "#333333", // Cinza Escuro (para textos em cards)
      },
    },
  },
  plugins: [],
};


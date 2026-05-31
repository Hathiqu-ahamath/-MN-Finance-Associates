/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Deep Corporate Navy
        secondary: "#1E40AF", // Professional Blue
        accent: "#CA8A04", // Premium Accessible Gold
        background: "#FFFFFF",
        light: "#F8FAFC",
        textPrimary: "#0F172A",
        textSecondary: "#64748B",
        success: "#10B981",
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        logo: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-gradient":
          "linear-gradient(to top, #1a1733 0%, #211C45 25%, #211C45 85%, #1a1733 100%)",
        "overlay-1":
          "linear-gradient(to bottom, #160F2400 0%, #160F2460 34%, #160F2490 100%)",
        "overlay-2": "linear-gradient(to bottom, #160F2410 50%, #160F24 95%)",
        mask: "url('assets/images/mask.webp'), linear-gradient(to top, #1a1733 0%, #211C45 25%, #211C45 85%, #1a1733 100%)",
        programmer: "url('assets/images/pc.gif')",
      },
      backgroundColor: {
        main: "#FFFFFF10",
        stack: "#BAB9C1",
        caret: "#A19FAD",
        "caret-arrow": "#06043D64",
        skills: {
          container: "#160F24",
          outline: "#A89191",
          "pills-container": "#322B4F",
          pill: "#FFFFFF15",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        Darker: ['"Darker Grotesque"', "sans-serif"],
        Jura: ['"Jura"', "sans-serif"],
        Jaro: ['"Jaro"', "sans-serif"],
      },
      colors: {
        header: {
          main: "#FFFFFF10",
          text: "#FFFFFF70",
          icon: "#FFFFFF60",
        },
        skillsOutline: "#A89191",
        main: {
          100: "#1a1733",
          200: "#211C45",
        },
      },
      screens: {
        // Breakpoints personalizados
        xsm: "360px", // Extra small screens
        xs: "425px", // Extra small screens
        // Breakpoints predeterminados de Tailwind
        sm: "500px", // Small screens
        md: "720px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra large screens
        '2xl': "1500px", // Extra large screens
      },
    },
  },
  plugins: [],
};

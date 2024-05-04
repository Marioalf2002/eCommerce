import { withUt } from "uploadthing/tw";

export default withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#c82f09",
        topHeadingPrimary: "#010f1c",
        topHeadingSecondary: "#021d35",
        orange: "#f01212",
        hover: "#c82f09",
      },

      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
});

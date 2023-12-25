/** @type {import('tailwindcss').Config} */
module.exports = {
   
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
          fontFamily: {
        'geist': ['Geist', 'sans-serif'] // Add other fallback fonts if necessary
      },
         boxShadow: {
            custom: "0px 4px 4px 0px rgba(85, 178, 91, 0.10)",
         },
         screens: {
            sm: "500px",
         },
         spacing: {
            30: "30px",
            20: "20px",
            75: "75px",
            35: "35px",
            42: "42px",
            50: "50px",
            200: "185px",
            100: "100px",
            120: "120px",
            125: "125px",
            130: "130px",
            395: "395px",
         },
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
      },
   },

   plugins: [],
};

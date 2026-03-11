// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/**/*.{html,js,ts,jsx,tsx,mdx}',
//     './node_modules/flowbite/**/*.js',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/**/*.{html,js,ts,jsx,tsx,mdx} '
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       colors: {
//         'accent-1': '#333',
//         'theme-blue': '#004a9f',
//         'theme-green': '#131A22',
//       },
//       backgroundColor: ['checked'],
//       borderColor: ['checked'],
//     },
//   },
//   // plugins: [require('@tailwindcss/forms')],
// }


export default {
  content: [
       './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{html,js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{html,js,ts,jsx,tsx,mdx} '
  ],
  theme: {
    extend: {
        fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'], // Use roboto as default sans
        heading: ['var(--font-anton)', 'sans-serif'], // Custom heading class
      },
    },
    
  },
  plugins: [], // Use the imported forms plugin
};
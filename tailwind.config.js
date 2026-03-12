/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
		  colors: {
			main: '#0d357a',
			light: '#656262',
			lightSky: '#F7FBFF',
			dark: '#001E3A',
			white: '#ffffff',  // Standard white color
			black: '#000000',  // Standard black color
			blue:'#0089FE'
		  },
		//   fontFamily: {
		// 	roboto: ['Roboto', 'sans-serif'],
		// 	poppins: ['Poppins', 'sans-serif'],
		// 	special: ['Readex Pro', 'sans-serif'],
		// 	gurry: ["Sour Gummy", '0sans-serif'],
		// 	myfont: ['Montserrat', 'sans-serif']
		//   },
	
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

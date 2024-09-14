import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes: {
        'float-1': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10%, -15%)' },
          '50%': { transform: 'translate(20%, 0)' },
          '75%': { transform: 'translate(10%, 15%)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-15%, 10%)' },
          '50%': { transform: 'translate(0, 20%)' },
          '75%': { transform: 'translate(15%, 10%)' },
        },
        'float-3': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(15%, 15%)' },
          '50%': { transform: 'translate(0, 30%)' },
          '75%': { transform: 'translate(-15%, 15%)' },
        },
      },
      animation: {
        'float-1': 'float-1 20s ease-in-out infinite',
        'float-2': 'float-2 25s ease-in-out infinite',
        'float-3': 'float-3 30s ease-in-out infinite',
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

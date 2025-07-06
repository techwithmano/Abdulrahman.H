
import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// AI Sci-Fi Theme Colors
				'cyber-blue': '#00D4FF',
				'neon-purple': '#9D4EDD',
				'electric-green': '#39FF14',
				'plasma-pink': '#FF006E',
				'neural-orange': '#FF8500'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'neural-pulse': {
					'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' }
				},
				'cyber-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.8)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100vh)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'hologram': {
					'0%, 100%': { opacity: '0.8', transform: 'translateZ(0)' },
					'50%': { opacity: '1', transform: 'translateZ(10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neural-pulse': 'neural-pulse 2s ease-in-out infinite',
				'cyber-glow': 'cyber-glow 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 2s linear infinite',
				'hologram': 'hologram 4s ease-in-out infinite'
			},
			backgroundImage: {
				'cyber-gradient': 'linear-gradient(135deg, #00D4FF 0%, #9D4EDD 50%, #FF006E 100%)',
				'neural-mesh': 'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(157, 78, 221, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 0, 110, 0.2) 0%, transparent 50%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

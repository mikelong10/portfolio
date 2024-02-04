import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: [{ pattern: /^animate-shoot-out-/ }, { pattern: /^bg-/ }],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "480px",
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "480px",
        "2xl": "1400px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        noise: "url('/noise.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "out-circ": "cubic-bezier(0, 0.55, 0.45, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "blob-1": {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "10%": {
            transform: "translate(-32px, -16px) scale(1.1)",
          },
          "20%": {
            transform: "translate(-64px, -32px) scale(1)",
          },
          "30%": {
            transform: "translate(-32px, -64px) scale(0.9)",
          },
          "40%": {
            transform: "translate(0px, -96px) scale(1)",
          },
          "50%": {
            transform: "translate(32px, -64px) scale(1.1)",
          },
          "60%": {
            transform: "translate(64px, -32px) scale(1)",
          },
          "70%": {
            transform: "translate(96px, 0px) scale(0.9)",
          },
          "80%": {
            transform: "translate(64px, 32px) scale(1)",
          },
          "90%": {
            transform: "translate(32px, 64px) scale(1.1)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "blob-2": {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "10%": {
            transform: "translate(32px, 16px) scale(0.9)",
          },
          "20%": {
            transform: "translate(64px, 32px) scale(1)",
          },
          "30%": {
            transform: "translate(32px, 64px) scale(1.1)",
          },
          "40%": {
            transform: "translate(0px, 96px) scale(1)",
          },
          "50%": {
            transform: "translate(-32px, 64px) scale(0.9)",
          },
          "60%": {
            transform: "translate(-64px, 32px) scale(1)",
          },
          "70%": {
            transform: "translate(-96px, 0px) scale(1.1)",
          },
          "80%": {
            transform: "translate(-64px, -32px) scale(1)",
          },
          "90%": {
            transform: "translate(-32px, -64px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "blob-3": {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "10%": {
            transform: "translate(-16px, -32px) scale(1.1)",
          },
          "20%": {
            transform: "translate(-32px, -64px) scale(1)",
          },
          "30%": {
            transform: "translate(-64px, -32px) scale(0.9)",
          },
          "40%": {
            transform: "translate(-96px, 0px) scale(1)",
          },
          "50%": {
            transform: "translate(-64px, 32px) scale(1.1)",
          },
          "60%": {
            transform: "translate(-32px, 64px) scale(1)",
          },
          "70%": {
            transform: "translate(0px, 96px) scale(0.9)",
          },
          "80%": {
            transform: "translate(32px, 64px) scale(1)",
          },
          "90%": {
            transform: "translate(64px, 32px) scale(1.1)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "blob-4": {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "10%": {
            transform: "translate(16px, 32px) scale(0.9)",
          },
          "20%": {
            transform: "translate(32px, 64px) scale(1)",
          },
          "30%": {
            transform: "translate(64px, 32px) scale(1.1)",
          },
          "40%": {
            transform: "translate(96px, 0px) scale(1)",
          },
          "50%": {
            transform: "translate(64px, -32px) scale(0.9)",
          },
          "60%": {
            transform: "translate(32px, -64px) scale(1)",
          },
          "70%": {
            transform: "translate(0px, -96px) scale(1.1)",
          },
          "80%": {
            transform: "translate(-32px, -64px) scale(1)",
          },
          "90%": {
            transform: "translate(-64px, -32px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "shoot-out-0": {
          "0%": { transform: "translate(0px, 0px)", opacity: "0" },
          "40%": { transform: "translate(0px, 0px)", opacity: "1" },
          "50%": { opacity: "1" },
          "60%": { transform: "translate(200px, 0px)", opacity: "0" },
          "100%": { transform: "translate(200px, 0px)", opacity: "0" },
        },
        "shoot-out-30": {
          "0%": { transform: "translate(0px, 0px)", opacity: "0" },
          "65%": { transform: "translate(0px, 0px)", opacity: "1" },
          "75%": { opacity: "1" },
          "85%": { transform: "translate(173.2px, 100px)", opacity: "0" },
          "100%": { transform: "translate(173.2px, 100px)", opacity: "0" },
        },
        "shoot-out-60": {
          "0%": { transform: "translate(0px, 0px)", opacity: "0" },
          "1%": { transform: "translate(0px, 0px)", opacity: "1" },
          "10%": { opacity: "1" },
          "20%": { transform: "translate(100px, 173.2px)", opacity: "0" },
          "100%": { transform: "translate(100px, 173.2px)", opacity: "0" },
        },
        "shoot-out-90": {
          "0%": { transform: "translate(0px, 0px)", opacity: "0" },
          "40%": { transform: "translate(0px, 0px)", opacity: "1" },
          "50%": { opacity: "1" },
          "60%": { transform: "translate(0px, 200px)", opacity: "0" },
          "100%": { transform: "translate(0px, 200px)", opacity: "0" },
        },
        "shoot-out-120": {
          "0%": { transform: "translate(0px, 0px)", opacity: "0" },
          "80%": { transform: "translate(0px, 0px)", opacity: "1" },
          "90%": { opacity: "1" },
          "99%": { transform: "translate(-100px, 173.2px)", opacity: "0" },
          "100%": { transform: "translate(-100px, 173.2px)", opacity: "0" },
        },
        "shoot-out-150": {
          "0%": { transform: "translate(0px, 0px)", opacity: "0" },
          "75%": { transform: "translate(0px, 0px)", opacity: "1" },
          "85%": { opacity: "1" },
          "95%": { transform: "translate(-173.2px, 100px)", opacity: "0" },
          "100%": { transform: "translate(-173.2px, 100px)", opacity: "0" },
        },
        "shoot-out-180": {
          "0%": { transform: "translate(0px, 0px)", opacity: "0" },
          "25%": { transform: "translate(0px, 0px)", opacity: "1" },
          "35%": { opacity: "1" },
          "45%": { transform: "translate(-200px, 0px)", opacity: "0" },
          "100%": { transform: "translate(-200px, 0px)", opacity: "0" },
        },
        "shoot-out-210": {
          "0%": { transform: "translate(0px, 0px)", opacity: "0" },
          "45%": { transform: "translate(0px, 0px)", opacity: "1" },
          "55%": { opacity: "1" },
          "65%": { transform: "translate(-173.2px, -100px)", opacity: "0" },
          "100%": { transform: "translate(-173.2px, -100px)", opacity: "0" },
        },
        "shoot-out-240": {
          "0%": { transform: "translate(0px, 0px)", opacity: "0" },
          "20%": { transform: "translate(0px, 0px)", opacity: "1" },
          "30%": { opacity: "1" },
          "40%": { transform: "translate(-100px, -173.2px)", opacity: "0" },
          "100%": { transform: "translate(-100px, -173.2px)", opacity: "0" },
        },
        "shoot-out-270": {
          "0%": { transform: "translate(0px, 0px)", opacity: "0" },
          "5%": { transform: "translate(0px, 0px)", opacity: "1" },
          "15%": { opacity: "1" },
          "25%": { transform: "translate(0px, -200px)", opacity: "0" },
          "100%": { transform: "translate(0px, -200px)", opacity: "0" },
        },
        "shoot-out-300": {
          "0%": { transform: "translate(0px, 0px)", opacity: "0" },
          "10%": { transform: "translate(0px, 0px)", opacity: "1" },
          "20%": { opacity: "1" },
          "30%": { transform: "translate(100px, -173.2px)", opacity: "0" },
          "100%": { transform: "translate(100px, -173.2px)", opacity: "0" },
        },
        "shoot-out-330": {
          "0%": { transform: "translate(0px, 0px)", opacity: "0" },
          "60%": { transform: "translate(0px, 0px)", opacity: "1" },
          "70%": { opacity: "1" },
          "80%": { transform: "translate(173.2px, -100px)", opacity: "0" },
          "100%": { transform: "translate(173.2px, -100px)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blob-1": "blob-1 10s infinite linear",
        "blob-2": "blob-2 10s infinite linear",
        "blob-3": "blob-3 10s infinite linear",
        "blob-4": "blob-4 10s infinite linear",
        "shoot-out-0": "shoot-out-0 16s infinite",
        "shoot-out-30": "shoot-out-30 16s infinite",
        "shoot-out-60": "shoot-out-60 16s infinite",
        "shoot-out-90": "shoot-out-90 16s infinite",
        "shoot-out-120": "shoot-out-120 16s infinite",
        "shoot-out-150": "shoot-out-150 16s infinite",
        "shoot-out-180": "shoot-out-180 16s infinite",
        "shoot-out-210": "shoot-out-210 16s infinite",
        "shoot-out-240": "shoot-out-240 16s infinite",
        "shoot-out-270": "shoot-out-270 16s infinite",
        "shoot-out-300": "shoot-out-300 16s infinite",
        "shoot-out-330": "shoot-out-330 16s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

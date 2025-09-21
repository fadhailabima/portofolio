const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        md: "3rem",
        lg: "6.2rem"
      }
    },
    extend: {
      colors: {
        primary: "#9CA3AF",
        secondary: "#E5E7EB",
        accent: "#83DBFF",
        base_col: "#111827",
        base_col_darker: "#151E31",
        // New gradient colors
        gradient: {
          from: "#83DBFF",
          via: "#6366F1",
          to: "#E5E7EB"
        },
        glow: {
          blue: "rgba(131, 219, 255, 0.3)",
          purple: "rgba(99, 102, 241, 0.3)"
        }
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-roboto-mono)", ...defaultTheme.fontFamily.mono]
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        gradient: "gradient 15s ease infinite",
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-20px)"
          }
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(131, 219, 255, 0.3)"
          },
          "50%": {
            boxShadow: "0 0 40px rgba(131, 219, 255, 0.6)"
          }
        },
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          },
          "100%": {
            backgroundPosition: "0% 50%"
          }
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        glass: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)"
      },
      backdropBlur: {
        xs: "2px"
      },
      boxShadow: {
        glow: "0 0 20px rgba(131, 219, 255, 0.3)",
        "glow-lg": "0 0 40px rgba(131, 219, 255, 0.4)",
        "inner-glow": "inset 0 0 20px rgba(131, 219, 255, 0.1)"
      },
      scale: {
        102: "1.02",
        103: "1.03"
      }
    }
  },
  plugins: []
};

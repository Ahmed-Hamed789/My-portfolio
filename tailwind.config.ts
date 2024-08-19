import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-slate-gray': '#e5e7eb',
        'gray': '#9ca3af',
        'white': '#fff',
        'blue': '#3b82f6',
        'teal': '#2dd4bf',
        'semi-transparent-blue': 'rgba(59,130,246,0.5)',
        'very-light-slate-blue': 'rgba(15,23,42,0.1)',
        'medium-slate-blue': 'rgba(15,23,42,0.75)',
        'very-light-teal': 'rgba(45,212,191,0.1)',
        'dark-charcoal': 'rgba(24,24,27,0.3)',
        'slate': 'rgb(71,85,105)',
        'dark-slate-blue': 'rgb(15,23,42)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;

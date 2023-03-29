import type { Config } from "tailwindcss";
import Typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {},
  plugins: [Typography],
} satisfies Config;

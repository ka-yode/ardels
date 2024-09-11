// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";
import { config as uiConfig } from "@repo/ui/tsConfig";

const config: Pick<Config, "content" | "presets" | "theme"> = {
  content: [
    ...uiConfig.content,
    "../../packages/ui/**/*.{ts,tsx}",
    "./src/app/**/*.tsx",
    "./src/**/*.tsx",
    "../../packages/ui/**/*.{ts, tsx}",
  ],
  presets: [sharedConfig],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //     colors: {
  //       border: "hsl(var(--border))",
  //       input: "hsl(var(--input))",
  //       ring: "hsl(var(--ring))",
  //       background: "hsl(var(--background))",
  //       foreground: "hsl(var(--foreground))",
  //       action: "hsl(var(--action))",
  //       primary: {
  //         DEFAULT: "hsl(var(--primary))",
  //         foreground: "hsl(var(--primary-foreground))",
  //       },
  //       secondary: {
  //         DEFAULT: "hsl(var(--secondary))",
  //         foreground: "hsl(var(--secondary-foreground))",
  //       },
  //       destructive: {
  //         DEFAULT: "hsl(var(--destructive))",
  //         foreground: "hsl(var(--destructive-foreground))",
  //       },
  //       success: {
  //         DEFAULT: "hsl(var(--success))",
  //       },
  //       muted: {
  //         DEFAULT: "hsl(var(--muted))",
  //         foreground: "hsl(var(--muted-foreground))",
  //       },
  //       warning: {
  //         DEFAULT: "hsl(var(--warning))",
  //         foreground: "hsl(var(--warning-foreground))",
  //       },
  //       accent: {
  //         DEFAULT: "hsl(var(--accent))",
  //         foreground: "hsl(var(--accent-foreground))",
  //       },
  //       popover: {
  //         DEFAULT: "hsl(var(--popover))",
  //         foreground: "hsl(var(--popover-foreground))",
  //       },
  //       card: {
  //         DEFAULT: "hsl(var(--card))",
  //         foreground: "hsl(var(--card-foreground))",
  //       },
  //     },
  //     borderRadius: {
  //       lg: `var(--radius)`,
  //       md: `calc(var(--radius) - 2px)`,
  //       sm: "calc(var(--radius) - 4px)",
  //     },
  //     keyframes: {
  //       "accordion-down": {
  //         from: { height: "0" },
  //         to: { height: "var(--radix-accordion-content-height)" },
  //       },
  //       "accordion-up": {
  //         from: { height: "var(--radix-accordion-content-height)" },
  //         to: { height: "0" },
  //       },
  //       "caret-blink": {
  //         "0%,70%,100%": { opacity: "1" },
  //         "20%,50%": { opacity: "0" },
  //       },
  //     },
  //     animation: {
  //       "accordion-down": "accordion-down 0.2s ease-out",
  //       "accordion-up": "accordion-up 0.2s ease-out",
  //       "caret-blink": "caret-blink 1.25s ease-out infinite",
  //     },
  //   },
  // },
};

export default config;

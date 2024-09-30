// tailwind config is required for editor support

import type { Config } from "tailwindcss";

import { config as uiConfig } from "@repo/ui/tsConfig";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    ...uiConfig.content,
    "./src/app/**/*.tsx",
    "../../packages/ui/**/*.{ts,tsx}",
    "./src/**/*.tsx",
    "../../packages/ui/**/*.{ts, tsx}",
  ],
  presets: [sharedConfig],
};

export default config;

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

export const config: Pick<Config, "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
};

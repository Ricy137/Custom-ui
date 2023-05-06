import { defineConfig, presetWind, presetIcons } from "unocss";

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      prefix: "i-",
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});

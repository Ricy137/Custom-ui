import { defineConfig, presetWind, presetIcons, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetWind(),
    presetUno(),
    presetIcons({
      prefix: "i-",
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
